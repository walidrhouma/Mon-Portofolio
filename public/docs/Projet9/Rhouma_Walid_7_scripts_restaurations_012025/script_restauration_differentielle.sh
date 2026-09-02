#!/bin/bash

# === Variables ===
SERVEUR_STOCKAGE="192.168.0.100"
CHEMIN_CLE="/home/walid/.ssh/id_rsa"
REPERTOIRE_COMPLET="~/MACHINES/COMPLETES"
REPERTOIRE_DIFF="~/MACHINES/DIFFERENTIELLES"
DESTINATION_RESTAURATION="/home/walid/RESTAU_DIFF"
FICHIER_LOG="/home/walid/LOG/restauration_MACHINES.log"

# === Journalisation ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Début du script de restauration." >> $FICHIER_LOG

# Connexion au serveur pour lister les sauvegardes disponibles
echo "Connexion au serveur de stockage pour récupérer la liste des sauvegardes..."
SAUVEGARDES=$(ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "tree -f $REPERTOIRE_COMPLET $REPERTOIRE_DIFF")

if [ -z "$SAUVEGARDES" ]; then
    echo "Erreur : Impossible de récupérer les sauvegardes sur le serveur de stockage."
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la récupération des sauvegardes." >> $FICHIER_LOG
    exit 1
fi

# Affichage de l'arborescence des sauvegardes
echo "Voici les sauvegardes disponibles :"
echo "$SAUVEGARDES"

# Demande à l'utilisateur de choisir un fichier ou dossier à restaurer
echo "Entrez le chemin complet du fichier ou dossier à restaurer (par exemple : ~/MACHINES/DIFFERENTIELLES/28-12-2024/vm-1Go_modifie) :"
read CHEMIN_RESTAURATION

# Vérification du chemin
if ! ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "[ -e $CHEMIN_RESTAURATION ]"; then
    echo "Erreur : Le chemin spécifié n'existe pas sur le serveur de stockage."
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Chemin invalide : $CHEMIN_RESTAURATION" >> $FICHIER_LOG
    exit 1
fi

# Création du répertoire de destination si nécessaire
mkdir -p $DESTINATION_RESTAURATION

# Restauration des fichiers
echo "Démarrage de la restauration..."
rsync -avz --progress --partial -e "ssh -i $CHEMIN_CLE" sauvegarde@$SERVEUR_STOCKAGE:$CHEMIN_RESTAURATION $DESTINATION_RESTAURATION >> $FICHIER_LOG

if [ $? -eq 0 ]; then
    echo "Restauration terminée avec succès."
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Restauration réussie : $CHEMIN_RESTAURATION vers $DESTINATION_RESTAURATION" >> $FICHIER_LOG
else
    echo "Erreur lors de la restauration."
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la restauration : $CHEMIN_RESTAURATION" >> $FICHIER_LOG
    exit 1
fi

# === Fin du script ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Fin du script de restauration." >> $FICHIER_LOG
echo "-----------------------" >> $FICHIER_LOG
