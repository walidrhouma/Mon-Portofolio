<#  Description :
  Ce script permet de copier les données stockées sur le lecteur D:\ vers Google Drive.
  Les données contenus dans le dossier D:\TEST_DRIVE seront copié dans le dossier G:\Mon Drive\TEST

 - Version : 1.0
 - Auteur : Walid Rhouma
 - Date de création : 28/06/2024
#>


# Déclaration des chemins source et destination
$sourcePath = "D:\TEST_DRIVE"
$destinationPath = "G:\Mon Drive\TEST"

# Vérification si le chemin source existe
if (Test-Path $sourcePath -PathType Container) {
	# Vérification si le chemin de destination existe
	if (Test-Path $destinationPath -PathType Container) {
		# Copie récursive des fichiers et dossiers depuis la source vers la destination
		try {
		    Write-Output "Début de la copie des données..."
		    Copy-Item -Path $sourcePath -Destination $destinationPath -Recurse -Force
		    Write-Output "Copie terminée avec succès."
		} catch {
		    Write-Error "Erreur lors de la copie : $_"
		}
	} else {
	    Write-Error "Le chemin de destination $destinationPath n'existe pas."
	}
  } else {
      Write-Error "Le chemin source $sourcePath n'existe pas."
  }