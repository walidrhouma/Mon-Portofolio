#!/bin/bash

# === Variables ===
SERVEUR_STOCKAGE="192.168.0.100"          # Adresse IP du serveur de stockage
CHEMIN_CLE="/home/walid/.ssh/id_rsa"      # Chemin de la clé SSH pour se connecter au serveur
DESTINATION_RESTAURATION="/home/walid/RESTAU_INCREMENTALES"    # Dossier où les fichiers seront restaurés
FICHIER_LOG="/home/walid/LOG/restauration.log"   # Fichier de log

# === Journalisation ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Début du script de restauration." >> $FICHIER_LOG

# Menu pour lister les répertoires
echo "Quel répertoire souhaitez-vous restaurer ?"
echo "1. FICHIERS"
echo "2. MAILS"
echo "3. RH"
echo "4. SITE"
echo "5. TICKETS"
echo "6. Quitter"

read -p "Entrez votre choix (1-6) : " choix

case $choix in
    1)
        # Lister le répertoire FICHIERS
        REPERTOIRE="/home/sauvegarde/FICHIERS"
        ;;
    2)
        # Lister le répertoire MAILS
        REPERTOIRE="/home/sauvegarde/MAILS"
        ;;
    3)
        # Lister le répertoire RH
        REPERTOIRE="/home/sauvegarde/RH"
        ;;
    4)
        # Lister le répertoire SITE
        REPERTOIRE="/home/sauvegarde/SITE"
        ;;
    5)
        # Lister le répertoire TICKETS
        REPERTOIRE="/home/sauvegarde/TICKETS"
        ;;
    6)
        # Quitter
        echo "Au revoir !"
        exit 0
        ;;
    *)
        # Choix invalide
        echo "Choix invalide. Veuillez entrer un nombre entre 1 et 6."
        exit 1
        ;;
esac

# Choix entre sauvegarde complète ou incrémentale
echo "Souhaitez-vous restaurer une sauvegarde :"
echo "1. Complète"
echo "2. Incrémentale"
read -p "Entrez votre choix (1-2) : " choix_sauvegarde

if [ "$choix_sauvegarde" == "1" ]; then
    SAUVEGARDE="COMPLETES"
elif [ "$choix_sauvegarde" == "2" ]; then
    SAUVEGARDE="INCREMENTALES"
else
    echo "Choix invalide. Veuillez entrer 1 ou 2."
    exit 1
fi

# Connexion SSH et récupération des sauvegardes disponibles
echo "Connexion au serveur de stockage pour lister les sauvegardes disponibles..."
SAUVEGARDES=$(ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "tree -f $REPERTOIRE/$SAUVEGARDE")

if [ -z "$SAUVEGARDES" ]; then
    echo "Erreur : Impossible de récupérer les sauvegardes sur le serveur de stockage."
    echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la récupération des sauvegardes." >> $FICHIER_LOG
    exit 1
fi

# Affichage des sauvegardes disponibles
echo "Voici les sauvegardes disponibles dans le répertoire sélectionné :"
echo "$SAUVEGARDES"

# Demander la version à restaurer
echo "Quelle version souhaitez-vous restaurer ? (ex : 26-12-2024)"
read -p "Entrez la date de version (JJ-MM-AAAA) : " VERSION

# Vérification que le chemin existe pour cette version
CHEMIN_VERSION="$REPERTOIRE/$SAUVEGARDE/$VERSION"
echo "Vous avez sélectionné la version $VERSION."

# Menu interactif pour choisir entre restaurer un fichier spécifique ou tous les fichiers
echo "Que souhaitez-vous faire avec la version $VERSION ?"
echo "1. Restaurer un fichier spécifique"
echo "2. Restaurer tous les fichiers de cette version"
echo "3. Quitter"
read -p "Entrez votre choix (1-3) : " choix

case $choix in
    1)
        # Restaurer un fichier spécifique
        echo "Entrez le chemin complet du fichier à restaurer (ex : /home/sauvegarde/TICKETS/INCREMENTALES/26-12-2024/ticket1.txt) :"
        read CHEMIN_RESTAURATION

        # Vérification du chemin
        if ! ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "[ -e $CHEMIN_RESTAURATION ]"; then
            echo "Erreur : Le chemin spécifié n'existe pas sur le serveur de stockage."
            echo "$(date +"%d-%m-%Y %H:%M:%S") : Chemin invalide : $CHEMIN_RESTAURATION" >> $FICHIER_LOG
            exit 1
        fi

        # Création du répertoire de destination si nécessaire
        mkdir -p $DESTINATION_RESTAURATION

        # Restauration du fichier
        echo "Démarrage de la restauration du fichier $CHEMIN_RESTAURATION..."
        rsync -avz --progress -e "ssh -i $CHEMIN_CLE" sauvegarde@$SERVEUR_STOCKAGE:$CHEMIN_RESTAURATION $DESTINATION_RESTAURATION >> $FICHIER_LOG

        if [ $? -eq 0 ]; then
            echo "Restauration du fichier '$CHEMIN_RESTAURATION' réussie."
            echo "$(date +"%d-%m-%Y %H:%M:%S") : Restauration réussie : $CHEMIN_RESTAURATION vers $DESTINATION_RESTAURATION" >> $FICHIER_LOG
        else
            echo "Erreur lors de la restauration du fichier."
            echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la restauration du fichier : $CHEMIN_RESTAURATION" >> $FICHIER_LOG
            exit 1
        fi
        ;;
    2)
        # Restaurer tous les fichiers
        echo "Voulez-vous restaurer tous les fichiers de la version $VERSION ? (oui/non)"
        read reponse

        if [ "$reponse" == "oui" ]; then
            # Vérification de l'existence du répertoire version
            if ! ssh -i $CHEMIN_CLE sauvegarde@$SERVEUR_STOCKAGE "[ -d $CHEMIN_VERSION ]"; then
                echo "Erreur : Le répertoire de la version $VERSION n'existe pas."
                echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur, répertoire de version inexistant : $CHEMIN_VERSION" >> $FICHIER_LOG
                exit 1
            fi

            # Création du répertoire de destination si nécessaire
            mkdir -p $DESTINATION_RESTAURATION

            # Restauration de tous les fichiers de la version
            echo "Démarrage de la restauration de tous les fichiers de la version $VERSION..."
            rsync -avz --progress -e "ssh -i $CHEMIN_CLE" sauvegarde@$SERVEUR_STOCKAGE:$CHEMIN_VERSION/* $DESTINATION_RESTAURATION >> $FICHIER_LOG

            if [ $? -eq 0 ]; then
                echo "Restauration de tous les fichiers de la version $VERSION réussie."
                echo "$(date +"%d-%m-%Y %H:%M:%S") : Restauration réussie de tous les fichiers de la version $VERSION vers $DESTINATION_RESTAURATION" >> $FICHIER_LOG
            else
                echo "Erreur lors de la restauration de tous les fichiers."
                echo "$(date +"%d-%m-%Y %H:%M:%S") : Erreur lors de la restauration de tous les fichiers de la version $VERSION" >> $FICHIER_LOG
                exit 1
            fi
        else
            echo "Restauration annulée."
        fi
        ;;
    3)
        # Quitter
        echo "Au revoir !"
        exit 0
        ;;
    *)
        # Choix invalide
        echo "Choix invalide. Veuillez entrer un nombre entre 1 et 3."
        ;;
esac

# === Fin du script ===
echo "$(date +"%d-%m-%Y %H:%M:%S") : Fin du script de restauration." >> $FICHIER_LOG
echo "-----------------------" >> $FICHIER_LOG
