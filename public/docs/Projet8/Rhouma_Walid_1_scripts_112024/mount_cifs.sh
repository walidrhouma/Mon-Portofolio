#!/bin/bash
# ============================================================================================
# Script de Montage CIFS avec authentification Kerberos
# ============================================================================================
# Auteur       : Walid Rhouma
# Date         : 17/10/2024
# Description  : Ce script monte deux partages CIFS avec une authentification Kerberos (sec=krb5)
#                sur un serveur Active Directory, un pour le service et un pour l'utilisateur.
#                Il vérifie la présence des points de montage et démonte toute ancienne monture
#                avant d'effectuer le montage pour éviter les conflits. Les journaux sont écrits
#                dans /var/log/mount_shared_folder.log.
#
# Variables :
#   - MOUNT_POINT_SERVICE : Répertoire de montage pour le partage de service.
#   - MOUNT_POINT_USER    : Répertoire de montage pour le partage utilisateur (dépend du nom d'utilisateur).
#   - CIFS_SHARE_SERVICE  : Chemin du partage CIFS pour le service.
#   - CIFS_SHARE_USER     : Chemin du partage CIFS pour l'utilisateur connecté.
#
# Prérequis    : L'utilisateur doit avoir les permissions sudo pour monter les partages CIFS.
# Usage        : Exécuter ce script sans arguments.
#
# ============================================================================================
# Modifications :
# - [Date] : [Description de la modification]
#
# ============================================================================================
# Retour :
#   - Journalisation du succès ou de l’échec de chaque montage dans /var/log/mount_shared_folder.log.
# ============================================================================================

# Chemin du point de montage dans le répertoire personnel de l'utilisateur
MOUNT_POINT_SERVICE="/home/${USER}/Partage_service"
MOUNT_POINT_USER="/home/${USER}/Partage_user/$USER"

# Chemin du partage CIFS
CIFS_SHARE_SERVICE="//Serveur-AD/Partage_service"
USER=$(whoami | cut -d '@' -f 1)  # Récupérer le nom d'utilisateur sans le domaine
CIFS_SHARE_USER="//Serveur-AD/Partage_user/$USER"

# Créez le répertoire de montage s'il n'existe pas
if [ ! -d "$MOUNT_POINT_SERVICE" ]; then
    mkdir -p "$MOUNT_POINT_SERVICE"
fi

if [ ! -d "$MOUNT_POINT_USER" ]; then
    mkdir -p "$MOUNT_POINT_USER"
fi

# Démontage de toute ancienne monture pour éviter les conflits, si le point de montage existe il est alors démonté
if mountpoint -q "$MOUNT_POINT_SERVICE"; then
    sudo umount "$MOUNT_POINT_SERVICE"
fi

if mountpoint -q "$MOUNT_POINT_USER"; then
    sudo umount "$MOUNT_POINT_USER"
fi

# Montage du partage CIFS
if sudo mount.cifs "$CIFS_SHARE_SERVICE" "$MOUNT_POINT_SERVICE" -o sec=krb5,uid=$(id -u),gid=$(id -g),file_mode=0600,dir_mode=0700; then
    echo "Montage réussi pour le partage de service." >> /var/log/mount_shared_folder.log
else
    echo "Échec du montage pour le partage de service." >> /var/log/mount_shared_folder.log
fi

if sudo mount.cifs "$CIFS_SHARE_USER" "$MOUNT_POINT_USER" -o sec=krb5,uid=$(id -u),gid=$(id -g),file_mode=0600,dir_mode=0700; then
    echo "Montage réussi pour le partage de l'utilisateur." >> /var/log/mount_shared_folder.log
else
    echo "Échec du montage pour le partage de l'utilisateur." >> /var/log/mount_shared_folder.log
fi