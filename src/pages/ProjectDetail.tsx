import { useState } from 'react';
import { Link } from 'react-router-dom';
import { 
  ArrowLeft, 
  Clock, 
  Server, 
  ShieldCheck, 
  FileText, 
  GraduationCap,
  ExternalLink,
  Laptop,
  Network,
  Download,
  Eye,
  Workflow,
  X,
  Terminal,
  Copy,
  Check
} from 'lucide-react';

export default function ProjectDetail() {
  const [showDocModal, setShowDocModal] = useState(false);
  const [copiedIndex, setCopiedIndex] = useState<number | null>(null);

  const livrables = [
    {
      title: "Dump Base MySQL GLPI",
      desc: "Sauvegarde complète intégrant la totalité des tickets saisis et résolus.",
      file: "/docs/Projet1/glpi-dump.sql",
      format: "SQL"
    },
    {
      title: "Mail Médiation & Escalade",
      desc: "Communication professionnelle pour la gestion de conflit (Ticket N13).",
      file: "/docs/Projet1/Mail_mediation_Ticket_N13.pdf",
      format: "PDF"
    },
    {
      title: "Prise de contact VPN Ocito",
      desc: "Demande technique et suivi auprès du partenaire externe (Ticket N17).",
      file: "/docs/Projet1/Contact_Ocito_Ticket_N17.pdf",
      format: "PDF"
    },
    {
      title: "Demande Achat Équipement",
      desc: "Bon de commande disques durs adressé au service Achats (Ticket N19).",
      file: "/docs/Projet1/Commande_disques_durs_Ticket_N19.pdf",
      format: "PDF"
    },
    {
      title: "Réponse personnalisée Steeve",
      desc: "Solution et escalade hiérarchique transmises au N+1 (Ticket N22).",
      file: "/docs/Projet1/Réponse_à_Steeve_Ticket_N22.pdf",
      format: "PDF"
    },
    {
      title: "Logigramme de Processus ITIL",
      desc: "Schéma complet du cycle de vie des tickets pour les techniciens N1.",
      file: "/docs/Projet1/Rhouma_Walid_4_Logigramme_022024.pdf",
      format: "PDF"
    }
  ];

  const stackWithLogos = [
    { 
      name: 'Debian Linux', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg' 
    },
    { 
      name: 'MySQL / MariaDB', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mysql/mysql-original.svg' 
    },
    { 
      name: 'GLPI / Helpdesk', 
      customIcon: (
        <svg className="w-5 h-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <rect width="24" height="24" rx="5" fill="#2E7D32"/>
          <path d="M6 7H14V9H8V15H14V17H6V7Z" fill="white"/>
          <path d="M16 13H18V17H16V13Z" fill="#A5D6A7"/>
        </svg>
      )
    },
    { 
      name: 'Windows 10/11', 
      icon: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg' 
    },
    { 
      name: 'Draw.io / Diagrams', 
      icon: 'https://raw.githubusercontent.com/jgraph/drawio/master/src/main/webapp/images/drawlogo.svg' 
    },
    { 
      name: 'ITIL v4', 
      customIcon: (
        <span className="w-5 h-5 rounded bg-cyber-blue/20 text-cyber-blue text-[10px] font-extrabold flex items-center justify-center font-mono border border-cyber-blue/30">
          IT
        </span>
      )
    }
  ];

  const installSteps = [
    {
      title: "1. Mise à jour du système & Prérequis",
      cmd: "apt update && apt upgrade -y\napt install -y apache2 mariadb-server php php-mysql php-curl php-gd php-mbstring php-xml php-intl php-zip php-bz2 php-ldap php-imap wget tar"
    },
    {
      title: "2. Configuration de la Base de Données MariaDB",
      cmd: "mysql -u root -p\nCREATE DATABASE glpidb CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;\nCREATE USER 'glpi_user'@'localhost' IDENTIFIED BY 'votre_mot_de_passe_securise';\nGRANT ALL PRIVILEGES ON glpidb.* TO 'glpi_user'@'localhost';\nFLUSH PRIVILEGES;\nEXIT;"
    },
    {
      title: "3. Téléchargement et Installation de GLPI",
      cmd: "cd /tmp\nwget https://github.com/glpi-project/glpi/releases/download/10.0.12/glpi-10.0.12.tgz\ntar -xvf glpi-10.0.12.tgz -C /var/www/html/\nchown -R www-data:www-data /var/www/html/glpi\nchmod -R 755 /var/www/html/glpi"
    },
    {
      title: "4. Configuration de VirtualHost Apache",
      cmd: "nano /etc/apache2/sites-available/glpi.conf\n# DocumentRoot /var/www/html/glpi/public\na2ensite glpi.conf\na2enmod rewrite\nsystemctl restart apache2"
    }
  ];

  const handleCopy = (text: string, index: number) => {
    navigator.clipboard.writeText(text);
    setCopiedIndex(index);
    setTimeout(() => setCopiedIndex(null), 2000);
  };

  return (
    <div className="container-page py-10 space-y-10">
      {/* Bouton retour */}
      <Link 
        to="/projets" 
        className="inline-flex items-center gap-2 text-sm text-slate-400 hover:text-cyber-blue transition-colors"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour à la liste des projets
      </Link>

      {/* Header Projet */}
      <div className="space-y-4">
        <div className="flex flex-wrap items-center gap-3">
          <span className="px-3 py-1 rounded-full bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-xs font-semibold">
            Systèmes &amp; Réseaux
          </span>
          <span className="px-3 py-1 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald text-xs font-semibold flex items-center gap-1.5">
            <GraduationCap className="w-3.5 h-3.5" />
            Projet Validé — OpenClassrooms
          </span>
          <span className="flex items-center gap-1.5 text-xs text-slate-400 font-mono">
            <Clock className="w-3.5 h-3.5 text-cyber-blue" />
            Volume : 50h
          </span>
        </div>

        <h1 className="text-3xl sm:text-4xl font-extrabold text-white">
          Gérez les demandes au quotidien (GLPI &amp; Helpdesk ITIL)
        </h1>
        <p className="text-base sm:text-lg text-slate-300 max-w-4xl leading-relaxed">
          Reconstruction d'un serveur de ticketing GLPI sous Debian suite à une panne critique, traitement et priorisation des demandes d'assistance N2 pour l'entreprise e-commerce OpenShowroom, et mise en place d'un logigramme ITIL v4.
        </p>
      </div>

      {/* Synthèse du projet */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        <div className="p-5 rounded-2xl bg-base-800/80 border border-white/5">
          <div className="text-xl font-bold text-cyber-blue">OpenShowroom</div>
          <div className="text-xs text-slate-400 mt-1">Contexte e-commerce</div>
        </div>
        <div className="p-5 rounded-2xl bg-base-800/80 border border-white/5">
          <div className="text-xl font-bold text-cyber-emerald">Debian &amp; GLPI</div>
          <div className="text-xs text-slate-400 mt-1">Serveur &amp; Dump MySQL</div>
        </div>
        <div className="p-5 rounded-2xl bg-base-800/80 border border-white/5">
          <div className="text-xl font-bold text-white">Documents PDF</div>
          <div className="text-xs text-slate-400 mt-1">Base de connaissances</div>
        </div>
        <div className="p-5 rounded-2xl bg-base-800/80 border border-white/5">
          <div className="text-xl font-bold text-gradient">100% Validé</div>
          <div className="text-xs text-slate-400 mt-1">Soutenance Février 2024</div>
        </div>
      </div>

      {/* Grille principale */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
        <div className="lg:col-span-8 space-y-8">
          
          {/* Contexte de la Mission */}
          <div className="p-6 sm:p-8 rounded-3xl bg-base-800/40 border border-white/5 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Server className="w-5 h-5 text-cyber-blue" />
              Mise en Situation : Mission chez OpenShowroom
            </h2>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              Administrateur Systèmes &amp; Réseaux au sein du pôle Infrastructure N2 d'OpenShowroom, la mission faisait suite à une panne matérielle du serveur GLPI principal ayant provoqué la perte de la base de données sans sauvegarde disponible.
            </p>
            <p className="text-sm sm:text-base text-slate-300 leading-relaxed">
              L'objectif était de réinstaller intégralement l'environnement GLPI sous Debian, saisir les tickets accumulés pendant la panne, traiter et prioriser les incidents N2 par ordre d'urgence, et rédiger la documentation professionnelle associée.
            </p>
          </div>

          {/* Aperçus Visuels Interactifs */}
          <div className="p-6 sm:p-8 rounded-3xl bg-base-800/40 border border-white/5 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Workflow className="w-5 h-5 text-cyber-blue" />
              Documents &amp; Schémas de Référence
            </h2>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <a 
                href="/docs/Projet1/Rhouma_Walid_4_Logigramme_022024.pdf" 
                target="_blank" 
                rel="noopener noreferrer"
                className="group relative rounded-2xl overflow-hidden border border-white/10 bg-base-900/60 p-4 transition-all hover:border-cyber-blue/60 hover:shadow-lg hover:shadow-cyber-blue/5 block"
              >
                <div className="h-44 rounded-xl bg-gradient-to-br from-slate-900 to-base-800 flex flex-col items-center justify-center p-4 border border-white/5 group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-blue/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <FileText className="w-12 h-12 text-cyber-blue/70 mb-2 group-hover:text-cyber-blue transition-colors" />
                  <span className="text-xs font-semibold text-slate-200 text-center">Logigramme Processus ITIL v4</span>
                  <span className="text-[10px] text-slate-400 mt-1 font-mono">Consulter le PDF</span>
                  
                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-cyber-blue text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300 group-hover:text-cyber-blue transition-colors">
                    Schéma d'escalade N1/N2
                  </span>
                  <span className="text-slate-500 font-mono text-[11px]">PDF</span>
                </div>
              </a>

              <button 
                onClick={() => setShowDocModal(true)}
                className="group relative text-left rounded-2xl overflow-hidden border border-white/10 bg-base-900/60 p-4 transition-all hover:border-cyber-emerald/60 hover:shadow-lg hover:shadow-cyber-emerald/5 block w-full"
              >
                <div className="h-44 rounded-xl bg-gradient-to-br from-slate-900 to-base-800 flex flex-col items-center justify-center p-4 border border-white/5 group-hover:scale-[1.02] transition-transform duration-300 relative overflow-hidden">
                  <div className="absolute inset-0 bg-cyber-emerald/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                  <Terminal className="w-12 h-12 text-cyber-emerald/70 mb-2 group-hover:text-cyber-emerald transition-colors" />
                  <span className="text-xs font-semibold text-slate-200 text-center">Procédure d'Installation GLPI</span>
                  <span className="text-[10px] text-slate-400 mt-1 font-mono">Voir le guide technique Linux</span>

                  <div className="absolute bottom-3 right-3 p-1.5 rounded-lg bg-cyber-emerald text-white opacity-0 group-hover:opacity-100 transition-opacity shadow-md">
                    <Eye className="w-4 h-4" />
                  </div>
                </div>
                <div className="mt-3 flex items-center justify-between text-xs">
                  <span className="font-medium text-slate-300 group-hover:text-cyber-emerald transition-colors">
                    Guide Déploiement Debian / LAMP
                  </span>
                  <span className="text-cyber-emerald font-mono text-[11px]">Interactive</span>
                </div>
              </button>
            </div>
          </div>

          {/* Actions réalisées */}
          <div className="p-6 sm:p-8 rounded-3xl bg-base-800/40 border border-white/5 space-y-6">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <ShieldCheck className="w-5 h-5 text-cyber-blue" />
              Actions Techniques &amp; Support Réalisés
            </h2>
            <ul className="space-y-4 text-sm text-slate-300">
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Déploiement du serveur GLPI sous Debian :</strong>
                  <p className="text-slate-400 mt-0.5">Installation de la pile LAMP, configuration de GLPI et génération d'un export propre au format dump MySQL incluant la totalité des demandes traitées.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Saisie, qualification et priorisation N2 :</strong>
                  <p className="text-slate-400 mt-0.5">Intégration des tickets issus du suivi d'urgence et des messages vocaux de l'équipe, attribution des tickets N1 aux techniciens et traitement méthodique des demandes N2 selon la matrice d'urgence/impact.</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Rédaction de la documentation d'accompagnement (PDF) :</strong>
                  <p className="text-slate-400 mt-0.5">Communication écrite professionnelle reliée à la base de connaissances GLPI (médiation/escalade hiérarchique, prise de contact VPN Ocito, demande d'achat matériel, réponse utilisateur).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Présentation de l'Agent GLPI :</strong>
                  <p className="text-slate-400 mt-0.5">Étude comparative et support de présentation démontrant la valeur ajoutée de l'agent GLPI pour l'inventaire automatique des postes clients (remontée d'actifs sous Windows 10/11).</p>
                </div>
              </li>
              <li className="flex items-start gap-3">
                <Check className="w-5 h-5 text-cyber-emerald shrink-0 mt-0.5" />
                <div>
                  <strong className="text-white">Logigramme de formation Support N1 (ITIL v4) :</strong>
                  <p className="text-slate-400 mt-0.5">Modélisation visuelle du cycle de vie des tickets (création, qualification, escalade vers N2, résolution, clôture) réalisée sous Draw.io pour la montée en compétences des techniciens.</p>
                </div>
              </li>
            </ul>
          </div>

          {/* Évaluation du Jury (Harmonisée avec le design system) */}
          <div className="p-6 sm:p-8 rounded-3xl bg-base-800/40 border border-cyber-emerald/30 space-y-6">
            <div className="flex items-center gap-4">
              <div className="p-3 rounded-2xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald">
                <ShieldCheck className="w-6 h-6" />
              </div>
              <div>
                <h2 className="text-xl font-bold text-white tracking-wide">
                  Évaluation du Jury
                </h2>
                <p className="text-xs font-semibold text-cyber-emerald">
                  Soutenance orale de projet
                </p>
              </div>
            </div>

            <div className="space-y-2">
              <h3 className="text-sm font-bold text-cyber-emerald">
                Compétences évaluées :
              </h3>
              <ul className="space-y-1.5 text-xs sm:text-sm text-slate-200 font-medium">
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyber-emerald shrink-0" />
                  <span>1. Installer les composantes d'un SI : <strong className="text-white">Validé</strong></span>
                </li>
                <li className="flex items-center gap-2">
                  <Check className="w-4 h-4 text-cyber-emerald shrink-0" />
                  <span>2. Modéliser un système d'information : <strong className="text-white">Validé</strong></span>
                </li>
              </ul>
            </div>

            <div className="p-4 rounded-2xl bg-base-900/60 border border-white/5 space-y-1.5">
              <h3 className="text-xs font-bold text-cyber-emerald uppercase tracking-wider">
                Livrables :
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-slate-100">Points forts :</strong> les livrables sont conformes aux attentes. L'étudiant a effectué le travail demandé.
              </p>
            </div>

            <div className="p-4 rounded-2xl bg-base-900/60 border border-white/5 space-y-1.5">
              <h3 className="text-xs font-bold text-cyber-emerald uppercase tracking-wider">
                Soutenance :
              </h3>
              <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
                <strong className="text-slate-100">Remarques :</strong> l'étudiant a bien présenté son travail. Il maîtrise le sujet.
              </p>
            </div>
          </div>

          {/* Compétences RNCP Validées */}
          <div className="p-6 sm:p-8 rounded-3xl bg-base-800/40 border border-white/5 space-y-4">
            <h2 className="text-xl font-bold text-white flex items-center gap-2">
              <Laptop className="w-5 h-5 text-cyber-emerald" />
              Compétences RNCP Associées
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm text-slate-300">
              <div className="p-3 rounded-xl bg-base-700/50 border border-white/5">
                ✓ Assurer le support utilisateur de niveau 2 avec courtoisie
              </div>
              <div className="p-3 rounded-xl bg-base-700/50 border border-white/5">
                ✓ Réaliser des interventions techniques sur le SI (Debian / GLPI)
              </div>
              <div className="p-3 rounded-xl bg-base-700/50 border border-white/5">
                ✓ Modéliser un processus Helpdesk conforme au référentiel ITIL
              </div>
              <div className="p-3 rounded-xl bg-base-700/50 border border-white/5">
                ✓ Élaborer et documenter la mise en place d'agents d'inventaire
              </div>
            </div>
          </div>

        </div>

        {/* Sidebar : Technologies & Livrables */}
        <div className="lg:col-span-4 space-y-6">
          
          {/* Stack Technique */}
          <div className="p-6 rounded-2xl bg-base-800/50 border border-white/5 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <Network className="w-4 h-4 text-cyber-blue" />
              Environnement &amp; Outils
            </h3>
            <div className="flex flex-col gap-2.5">
              {stackWithLogos.map((tech) => (
                <div 
                  key={tech.name} 
                  className="flex items-center gap-3 p-2.5 rounded-xl bg-base-700/60 border border-white/5 hover:border-white/10 transition-colors"
                >
                  {tech.icon ? (
                    <img src={tech.icon} alt={tech.name} className="w-5 h-5 object-contain" />
                  ) : (
                    tech.customIcon
                  )}
                  <span className="text-xs font-semibold text-slate-200 font-mono">
                    {tech.name}
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Livrables Officiels du Projet */}
          <div className="p-6 rounded-2xl bg-base-800/50 border border-white/5 space-y-4">
            <h3 className="text-base font-bold text-white flex items-center gap-2">
              <FileText className="w-4 h-4 text-cyber-emerald" />
              Livrables Présentés au Jury
            </h3>
            <div className="space-y-3 text-xs">
              {livrables.map((item, idx) => (
                <a
                  key={idx}
                  href={item.file}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block p-3 rounded-xl bg-base-700/60 border border-white/5 hover:border-cyber-blue/40 hover:bg-base-700 transition-all cursor-pointer"
                >
                  <div className="flex items-center justify-between">
                    <span className="font-semibold text-white group-hover:text-cyber-blue transition-colors">
                      {item.title}
                    </span>
                    <span className="inline-flex items-center gap-1 text-[10px] font-mono px-2 py-0.5 rounded bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                      <Download className="w-3 h-3" />
                      {item.format}
                    </span>
                  </div>
                  <div className="text-slate-400 mt-1 text-[11px] leading-relaxed">
                    {item.desc}
                  </div>
                </a>
              ))}
            </div>
          </div>

          {/* Call to Action Contact */}
          <div className="p-6 rounded-2xl bg-cyber-blue/10 border border-cyber-blue/20 text-center space-y-3">
            <h3 className="text-base font-bold text-white">En savoir plus sur ce projet ?</h3>
            <p className="text-xs text-slate-300">
              Je peux vous présenter le logigramme ITIL ou détailler le travail d'administration du serveur GLPI réalisé lors de la soutenance.
            </p>
            <Link
              to="/contact"
              className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyber-blue text-white text-xs font-semibold hover:bg-cyber-blue/90 transition-all shadow-md hover:shadow-cyber-blue/20"
            >
              Me contacter
              <ExternalLink className="w-3.5 h-3.5" />
            </Link>
          </div>

        </div>
      </div>

      {/* Fenêtre Modale : Procédure d'installation Debian / GLPI */}
      {showDocModal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm animate-fade-in">
          <div className="bg-base-900 border border-white/10 rounded-3xl max-w-2xl w-full max-h-[85vh] overflow-y-auto p-6 space-y-6 shadow-2xl relative">
            
            <div className="flex items-center justify-between border-b border-white/10 pb-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/20">
                  <Terminal className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-lg font-bold text-white">Procédure d'Installation GLPI sous Debian</h3>
                  <p className="text-xs text-slate-400 font-mono">Guide technique de déploiement Linux (LAMP Stack)</p>
                </div>
              </div>
              <button 
                onClick={() => setShowDocModal(false)}
                className="p-2 rounded-xl bg-base-800 text-slate-400 hover:text-white hover:bg-base-700 transition-colors"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <div className="space-y-4 text-xs">
              {installSteps.map((step, idx) => (
                <div key={idx} className="space-y-2">
                  <div className="font-semibold text-slate-200">{step.title}</div>
                  <div className="relative group bg-slate-950 p-3 rounded-xl border border-white/5 font-mono text-slate-300 text-[11px] overflow-x-auto">
                    <pre>{step.cmd}</pre>
                    <button 
                      onClick={() => handleCopy(step.cmd, idx)}
                      className="absolute top-2 right-2 p-1.5 rounded-lg bg-base-800 text-slate-400 hover:text-white transition-colors"
                      title="Copier les commandes"
                    >
                      {copiedIndex === idx ? <Check className="w-3.5 h-3.5 text-cyber-emerald" /> : <Copy className="w-3.5 h-3.5" />}
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="border-t border-white/10 pt-4 flex justify-end">
              <button
                onClick={() => setShowDocModal(false)}
                className="px-4 py-2 rounded-xl bg-cyber-blue text-white text-xs font-semibold hover:bg-cyber-blue/90 transition-all"
              >
                Fermer la documentation
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}