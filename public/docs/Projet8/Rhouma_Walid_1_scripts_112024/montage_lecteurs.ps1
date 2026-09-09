<#
.SYNOPSIS
    Script PowerShell pour monter des lecteurs réseau à partir de partages AD.

.DESCRIPTION
    Ce script se connecte aux partages réseau spécifiés pour le service et l'utilisateur en utilisant
    la commande net use. Il déconnecte d'abord les lecteurs réseau s'ils sont déjà montés, puis
    il monte les lecteurs en vérifiant le succès de chaque opération à l'aide de blocs try/catch.

.PARAMETRE PartageService
    Chemin UNC du partage de service.

.PARAMETRE PartageUser
    Chemin UNC du partage utilisateur basé sur le nom d'utilisateur.

.PARAMETRE LettreService
    Lettre du lecteur pour le partage de service.

.PARAMETRE LettreUser
    Lettre du lecteur pour le partage utilisateur.

.NOTES
    Auteur: Walid Rhouma
    Date de création: 20/10/2024
    Version: 1.0
#>

# Modifier la stratégie d'exécution pour permettre l'exécution du script uniquement pour cette session
Set-ExecutionPolicy Bypass -Scope Process -Force

# Déclaration des variables pour les chemins des partages réseau
$PartageService = "\\192.168.0.21\Partage_service"

# Récupérer le nom d'utilisateur courant
$username = $env:USERNAME

# Chemin du partage utilisateur basé sur le nom d'utilisateur
$PartageUser = "\\192.168.0.21\Partage_user\$username"

# Lettre des lecteurs réseau
$LettreService = "S:"
$LettreUser = "U:"

# Déconnexion du lecteur réseau de service
try {
    net use $LettreService /delete /yes
    Write-Host "Le lecteur $LettreService a été déconnecté avec succès (s'il était monté)."
} catch {
    Write-Host "Erreur lors de la déconnexion du lecteur $LettreService : $_"
}

# Déconnexion du lecteur réseau utilisateur
try {
    net use $LettreUser /delete /yes
    Write-Host "Le lecteur $LettreUser a été déconnecté avec succès (s'il était monté)."
} catch {
    Write-Host "Erreur lors de la déconnexion du lecteur $LettreUser : $_"
}

# Montage du lecteur réseau de service
try {
    net use $LettreService $PartageService /persistent:yes
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Le lecteur réseau $LettreService a été monté avec succès."
    } else {
        Write-Host "Erreur lors du montage du lecteur $LettreService."
    }
} catch {
    Write-Host "Erreur lors du montage du lecteur $LettreService : $_"
}

# Montage du lecteur réseau utilisateur
try {
    net use $LettreUser $PartageUser /persistent:yes
    if ($LASTEXITCODE -eq 0) {
        Write-Host "Le lecteur réseau $LettreUser a été monté avec succès."
    } else {
        Write-Host "Erreur lors du montage du lecteur $LettreUser."
    }
} catch {
    Write-Host "Erreur lors du montage du lecteur $LettreUser : $_"
}

# Vérification de la connexion des lecteurs
Write-Host "Liste des lecteurs montés :"
net use
