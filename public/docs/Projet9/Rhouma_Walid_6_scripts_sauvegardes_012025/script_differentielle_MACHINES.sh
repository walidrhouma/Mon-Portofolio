#!/bin/bash

# === Variables ===
DATE_ACTUELLE=$(date +"%d-%m-%Y")
JOUR_SEMAINE=$(date +%u) # 1 = Lundi, 7 = Dimanche
FICHIER_LOG="/home/walid/LOG/sauvegarde_MACHINES.log"
REPERTOIRE_SOURCE="/home/walid/MACHINES"
SERVEUR_STOCKAGE="192.168.0.100"
DESTINATION_BASE="/home/sauvegarde/MACHINES"
CHEMIN_CLE="/home/walid/.ssh/id_rsa"

# Répertoires pour sauvegardes
REPERTOIRE_COMPLET="$DESTINATION_BASE/COMPLETES"
REPERTOIRE_DIFF="$DESTINATION_BASE/DIFFERENTIELLES"

# === Journalisation ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Début du script de sauvegarde." >> $FICHIER_LOG

# Création des répertoires nécessaires sur le serveur de stockage
echo "$(date +"%d-%m-%Y %H:%M:%S") : Création des répertoires nécessaires sur le serveur de stockage." >> $FICHIER_LOG
ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "
    mkdir -p $REPERTOIRE_COMPLET
    mkdir -p $REPERTOIRE_DIFF
" >> $FICHIER_LOG

# Vérification de la présence d'une sauvegarde complète
SAUVEGARDE_COMPLETE_EXISTE=$(ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "ls -A $REPERTOIRE_COMPLET")

# === Sauvegarde Complète ===
if [ $JOUR_SEMAINE -eq 7 ] || [ -z "$SAUVEGARDE_COMPLETE_EXISTE" ]; then
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Démarrage de la sauvegarde complète." >> $FICHIER_LOG

    ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "rm -rf $REPERTOIRE_COMPLET/*" >> $FICHIER_LOG

    NOM_SAUVEGARDE_COMPL="$REPERTOIRE_COMPLET/$DATE_ACTUELLE"
    rsync -avz --delete --partial --progress \
        -e "ssh -i $CHEMIN_CLE" \
        $REPERTOIRE_SOURCE/ sauvegarde@$SERVEUR_STOCKAGE:$NOM_SAUVEGARDE_COMPL >> $FICHIER_LOG

if [ $? -eq 0 ]; then
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Sauvegarde complète terminée avec succès." >> $FICHIER_LOG
    else
        echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la sauvegarde complète." >> $FICHIER_LOG
        exit 1
    fi

    ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "rm -rf $REPERTOIRE_DIFF/*" >> $FICHIER_LOG
else
    # === Sauvegarde Différentielle ===
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Démarrage de la sauvegarde différentielle." >> $FICHIER_LOG

    DERNIERE_SAUVEGARDE_COMPL=$(ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "ls -td $REPERTOIRE_COMPLET/* | head -n 1" | tr -d '\n')
    NOM_SAUVEGARDE_DIFF="$REPERTOIRE_DIFF/$DATE_ACTUELLE"

    rsync -avz --partial --progress \
        --link-dest=$DERNIERE_SAUVEGARDE_COMPL \
        -e "ssh -i $CHEMIN_CLE" \
        $REPERTOIRE_SOURCE/ sauvegarde@$SERVEUR_STOCKAGE:$NOM_SAUVEGARDE_DIFF >> $FICHIER_LOG

    if [ $? -eq 0 ]; then
        echo "$(date +"%d-%m-%Y %H:%M:%S") : Sauvegarde différentielle terminée avec succès." >> $FICHIER_LOG
    else
        echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la sauvegarde différentielle." >> $FICHIER_LOG
        exit 1
    fi
fi

echo "$(date +"%d-%m-%Y %H:%M:%S") : Fin du script de sauvegarde." >> $FICHIER_LOG
echo "-----------------------" >> $FICHIER_LOG
