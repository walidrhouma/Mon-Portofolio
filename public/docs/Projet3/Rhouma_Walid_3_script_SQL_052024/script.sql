CREATE DATABASE beesafe;  -- Création de la base de données 'beesafe'

CREATE USER 'beesafeuser'@'192.168.0.20' IDENTIFIED BY 'password'; -- Création du compte d'expoitation 'beesafeuser'
GRANT SELECT, INSERT, UPDATE, DELETE ON beesafe.* TO 'beesafeuser'@'192.168.0.20'; --  Mise ne place des accès CRUD au compte 'beesafeuser' sur la bdd 'beesafe'

FLUSH PRIVILEGES;  -- Mise à jour des privilèges d'accès de l'utilisateur

USE beesafe; -- Utilisation de la base données 'beesafe' nouvellement créé

CREATE TABLE IF NOT EXISTS pages (
  id INT(4) UNSIGNED NOT NULL AUTO_INCREMENT PRIMARY KEY,
  title VARCHAR(30),
  content TEXT,
  INDEX(title)
) engine=InnoDB; -- Création de la table 'pages'

INSERT IGNORE INTO pages VALUES (1, 'Bienvenue', 'Bienvenue sur la nouvelle page de votre nouveau site web institutionnel'); --  Insertion des données 