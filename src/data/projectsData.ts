export interface Project {
  id: string;
  projectNumber: number;
  title: string;
  durationHours: number;
  description: string;
  skills: string[];
  tools: string[];
  category: 'Support & Gestion' | 'Réseaux' | 'Systèmes' | 'Supervision & Sauvegarde' | 'Sécurité & Audit' | 'Cloud';
  context?: string;
  realizations?: string[];
  deliverables?: { name: string; type: string; link?: string }[];
  metrics?: { label: string; value: string }[];
}

export const projectCategories = [
  'Tous',
  'Support & Gestion',
  'Réseaux',
  'Systèmes',
  'Supervision & Sauvegarde',
  'Sécurité & Audit',
  'Cloud'
] as const;

export const projectsData: Project[] = [
  {
    id: "p1",
    projectNumber: 1,
    title: "Gérez les demandes au quotidien & Administration du parc (GLPI)",
    durationHours: 50,
    description: "Déploiement d'une solution ITSM basée sur GLPI et MariaDB pour automatiser l'inventaire du parc et structurer le support selon les normes ITIL.",
    context: "L'organisation manquait de visibilité sur son parc informatique et gérait le support de manière décentralisée. L'objectif était d'implémenter GLPI adossé à MariaDB afin de centraliser les actifs, automatiser la remontée des données machines et rationaliser la gestion des tickets d'incidents.",
    realizations: [
      "Modélisation, déploiement et sécurisation de la base de données relationnelle MariaDB (gestion des index, tables système, sauvegardes).",
      "Installation et déploiement automatisé des agents GLPI sur l'ensemble des équipements (ordinateurs, VM, réseaux).",
      "Mise en place de règles de sécurité : filtrage des doublons, contrôles d'adresses MAC et gestion des blacklists.",
      "Configuration du Helpdesk ITIL : workflows de tickets d'incidents, gestion des changements et suivi des coûts/budgets engagés.",
      "Interconnexion avec l'annuaire d'entreprise via LDAP et configuration d'accès API REST/RESTful."
    ],
    deliverables: [
      { name: "Logigramme du workflow de traitement des tickets (ITIL)", type: "Schéma / Diagramme" },
      { name: "Schéma d'architecture réseau & serveur ITSM (GLPI / MariaDB)", type: "Schéma technique" },
      { name: "Dump de la base de données MariaDB préconfigurée", type: "Fichier SQL / Backup" },
      { name: "Guide de procédures d'escalade et gestion des incidents", type: "Documentation PDF" },
      { name: "Matrice de filtrage des agents & règles de sécurité", type: "Document technique" }
    ],
    metrics: [
      { label: "Équipements inventoriés", value: "250+" },
      { label: "Conformité antivirus", value: "98%" },
      { label: "Workflows ITIL", value: "15" }
    ],
    skills: [
      "Assurer le support utilisateur et appliquer la démarche ITIL",
      "Administrer une base de données MariaDB dédiée à la gestion de parc",
      "Déployer des agents d'inventaire automatique et configurer le filtrage",
      "Interconnecter l'annuaire d'entreprise (LDAP) et sécuriser les API REST"
    ],
    tools: ["GLPI", "MariaDB", "ITIL", "LDAP", "API REST", "GLPI Agent"],
    category: "Support & Gestion"
  },
  {
    id: "2",
    projectNumber: 2,
    title: "Mettez en place et documentez le réseau local d'une startup",
    durationHours: 90,
    description: "Création et sécurisation d'un réseau LAN IPv4 avec répartition des switchs par salle.",
    skills: [
      "Concevoir la cartographie d'un réseau",
      "Construire un réseau TCP-IP",
      "Formaliser les procédures via une documentation technique"
    ],
    tools: ["Cisco Packet Tracer", "IPv4", "DHCP", "DNS"],
    category: "Réseaux"
  },
  {
    id: "3",
    projectNumber: 3,
    title: "Déployez une architecture n-tiers pour une PME",
    durationHours: 70,
    description: "Mise en place d'une architecture 3-tiers (Web, SQL, DNS) pour une startup.",
    skills: [
      "Installer les composantes d'un SI",
      "Modéliser un système d'information"
    ],
    tools: ["Linux", "MySQL / SQL", "DNS", "VirtualBox"],
    category: "Systèmes"
  },
  {
    id: "4",
    projectNumber: 4,
    title: "Mettez en place des services web sécurisés",
    durationHours: 60,
    description: "Conception et déploiement d'une infrastructure sécurisée pour un site extranet.",
    skills: [
      "Installer un service FTP sécurisé",
      "Installer un service HTTPD sécurisé",
      "Protéger les services web d’un serveur"
    ],
    tools: ["SFTP", "HTTPD / Nginx / Apache", "TLS", "Firewall / Fail2ban"],
    category: "Sécurité & Audit"
  },
  {
    id: "5",
    projectNumber: 5,
    title: "Raccordez une entité et ses postes de travail au SI de votre entreprise",
    durationHours: 90,
    description: "Intégration et gestion des postes de travail d'un nouveau site distant au SI.",
    skills: [
      "Configurer le VPN",
      "Installer et administrer un annuaire d'entreprise",
      "Automatiser des tâches d'administration",
      "Installer un système d'exploitation en version serveur"
    ],
    tools: ["Windows Server", "Active Directory", "VPN", "PowerShell"],
    category: "Systèmes"
  },
  {
    id: "6",
    projectNumber: 6,
    title: "Configurez des services réseaux et des équipements d'interconnexion",
    durationHours: 80,
    description: "Déploiement d'un réseau de grand bâtiment avec adressage dual-stack IPv4/IPv6 et VLANs.",
    skills: [
      "Configurer des services réseaux",
      "Mettre en place un réseau local virtuel (VLAN)",
      "Optimiser des performances réseau",
      "Configurer des équipements d'interconnexion"
    ],
    tools: ["Cisco Switch/Router", "IPv4 / IPv6", "VLAN", "Routage"],
    category: "Réseaux"
  },
  {
    id: "7",
    projectNumber: 7,
    title: "Supervisez le SI d'une entreprise",
    durationHours: 70,
    description: "Mise en place de sondes pour surveiller la santé et la charge des serveurs web.",
    skills: [
      "Exploiter les données de supervision",
      "Mettre en place un outil de supervision du SI",
      "Superviser les équipements du SI"
    ],
    tools: ["Nagios", "Sondes de supervision", "Monitoring SI"],
    category: "Supervision & Sauvegarde"
  },
  {
    id: "8",
    projectNumber: 8,
    title: "Gérez le parc informatique d'une PME",
    durationHours: 60,
    description: "Gestion unifiée du parc et déploiement de stratégies d'automatisation.",
    skills: [
      "Configurer les comptes utilisateurs et les droits associés",
      "Déployer des mises à jour dans un environnement hybride",
      "Gérer le stock d'un parc informatique"
    ],
    tools: ["Ansible", "PowerShell", "MDM / Gestion hybride"],
    category: "Support & Gestion"
  },
  {
    id: "9",
    projectNumber: 9,
    title: "Mettez en place une nouvelle solution de sauvegarde",
    durationHours: 50,
    description: "Étude, mise en place et tests de restauration avec la solution RESTIC.",
    skills: [
      "Installer une solution de sauvegarde efficace",
      "Rédiger un rapport d'intervention et de traitement d'incident",
      "Restaurer une sauvegarde"
    ],
    tools: ["Restic", "rsync", "Plan de sauvegarde"],
    category: "Supervision & Sauvegarde"
  },
  {
    id: "10",
    projectNumber: 10,
    title: "Sécurisez le réseau d'une grande entreprise",
    durationHours: 60,
    description: "Durcissement d'infrastructure selon les recommandations ANSSI.",
    skills: [
      "Planifier un projet de sécurisation d'infrastructure",
      "Garantir le respect des règles de sécurité du SI"
    ],
    tools: ["Recommandations ANSSI", "Firewall", "Protocoles sécurisés"],
    category: "Sécurité & Audit"
  },
  {
    id: "11",
    projectNumber: 11,
    title: "Évaluez et améliorez le niveau de sécurité d'un domaine Windows et Active Directory",
    durationHours: 70,
    description: "Audit de sécurité, pentest applicatif et plan de préconisations pour un domaine AD.",
    skills: [
      "Identifier des vulnérabilités dans un système d'information",
      "Fournir un plan d'action de préconisations"
    ],
    tools: ["Active Directory Hardening", "Audit AD", "Pentest Web"],
    category: "Sécurité & Audit"
  },
  {
    id: "12",
    projectNumber: 12,
    title: "Gérez une migration vers le cloud",
    durationHours: 44,
    description: "Veille technologique et orchestration de la migration d'une application vers AWS.",
    skills: [
      "Piloter un projet d'amélioration du SI",
      "Assurer une veille technologique sur les différents aspects de l'infrastructure"
    ],
    tools: ["AWS (EC2, S3, RDS)", "Cloud Infrastructure", "Veille Tech"],
    category: "Cloud"
  }
];

export const projects = projectsData;

export const getFeaturedProjects = (): Project[] => {
  return projectsData.slice(0, 3);
};

export const getProjectById = (id: string): Project | undefined => {
  return projectsData.find((project) => project.id === id);
};