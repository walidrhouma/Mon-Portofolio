#!/bin/bash

# === Variables ===
JOUR_SEMAINE=$(date +%u)
DATE=$(date +"%d-%m-%Y")
DATE_VEILLE=$(date -d "yesterday" +"%d-%m-%Y")
LOG_FILE="/home/walid/LOG/sauvegarde_TICKETS.log"
REPERTOIRE_SOURCE="/home/walid/TICKETS"
SERVEUR_STOCKAGE="192.168.0.100"
REPERTOIRE_DEST="/home/sauvegarde/TICKETS"
KEY_PATH="/home/walid/.ssh/id_rsa"

# === Journalisation ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Début du script de sauvegarde." >> $LOG_FILE

# Création des répertoires nécessaires sur le serveur
ssh -i $KEY_PATH sauvegarde@$SERVEUR_STOCKAGE "mkdir -p $REPERTOIRE_DEST/COMPLETES $REPERTOIRE_DEST/INCREMENTALES $REPERTOIRE_DEST/ARCHIVES" >> $LOG_FILE

# Vérification de l'existence d'une sauvegarde pour la veille
DERNIERE_SAUVEGARDE=$(ssh -i $KEY_PATH sauvegarde@$SERVEUR_STOCKAGE "
    find $REPERTOIRE_DEST/COMPLETES -type d -name '$DATE_VEILLE' -print -quit
    find $REPERTOIRE_DEST/INCREMENTALES -type d -name '$DATE_VEILLE' -print -quit
")

if [ -z "$DERNIERE_SAUVEGARDE" ]; then
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Aucune sauvegarde trouvée pour la veille ($DATE_VEILLE)." >> $LOG_FILE
else
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Dernière sauvegarde trouvée : $DERNIERE_SAUVEGARDE" >> $LOG_FILE
fi

# Sauvegarde complète (si aucune sauvegarde ou dimanche)
if [ -z "$DERNIERE_SAUVEGARDE" ] || [ $JOUR_SEMAINE -eq 7 ]; then
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Sauvegarde complète en cours." >> $LOG_FILE
    rsync -avz --delete -e "ssh -i $KEY_PATH" $REPERTOIRE_SOURCE sauvegarde@$SERVEUR_STOCKAGE:$REPERTOIRE_DEST/COMPLETES/$DATE >> $LOG_FILE
    if [ $? -ne 0 ]; then
        echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la sauvegarde complète." >> $LOG_FILE
        exit 1
    fi
else
    # Sauvegarde incrémentale basée sur la sauvegarde de la veille
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Sauvegarde incrémentale basée sur $DERNIERE_SAUVEGARDE." >> $LOG_FILE
    rsync -avz --delete --link-dest=$DERNIERE_SAUVEGARDE -e "ssh -i $KEY_PATH" $REPERTOIRE_SOURCE sauvegarde@$SERVEUR_STOCKAGE:$REPERTOIRE_DEST/INCREMENTALES/$DATE >> $LOG_FILE
    if [ $? -ne 0 ]; then
        echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la sauvegarde incrémentale." >> $LOG_FILE
        exit 1
    fi
fi

# Gestion des anciennes sauvegardes (conserver N et N-1)
ssh -i $KEY_PATH sauvegarde@$SERVEUR_STOCKAGE "
    # Déplacer les sauvegardes anciennes (au-delà des 2 plus récentes) dans ARCHIVES
    # Sauvegardes complètes
    cd $REPERTOIRE_DEST/COMPLETES && ls -1tr | head -n -2 | xargs -I {} mv {} $REPERTOIRE_DEST/ARCHIVES
    # Sauvegardes incrémentales
    cd $REPERTOIRE_DEST/INCREMENTALES && ls -1tr | head -n -2 | xargs -I {} mv {} $REPERTOIRE_DEST/ARCHIVES

    # Supprimer les archives de plus de 15 jours
    find $REPERTOIRE_DEST/ARCHIVES -type d -mtime +15 -exec rm -rf {} +
" >> $LOG_FILE

# Fin du script
echo "$(date +"%d-%m-%Y %H:%M:%S") : Fin du script de sauvegarde." >> $LOG_FILE
echo "-----------------------" >> $LOG_FILE
