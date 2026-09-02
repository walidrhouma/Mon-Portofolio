import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  CheckCircle2, Clock, Check, GraduationCap,
  Activity, ShieldAlert, FolderArchive, Eye,
  Terminal, Image as ImageIcon, ExternalLink, LineChart,
  Mail
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail7() {
  const [activeTab, setActiveTab] = useState('cli');

  // Chemins d'accès et contenus structurés pour chaque onglet de preuves techniques
  const galleryTabs = {
    nagios: [
      {
        title: "Tableau de Bord Nagios (12 Services OK)",
        src: encodeURI("/docs/Projet7/Rhouma_Walid_1_config_nagios_092024.png"),
        desc: "Supervision active des 2 hôtes (nagios-server 192.168.1.15 et wordpress-server 192.168.1.13) et leurs services."
      }
    ]
  };

  // Tableau des 7 sondes issu du document Rhouma_Walid_3_indicateurs_092024.pdf
  const monitoringMatrix = [
    { 
      metric: "check_cpu_usage", 
      tool: "/usr/local/nagios/libexec/check_cpu_usage.sh", 
      warning: "warning_1mn=70 / 5mn=60 / 15mn=50", 
      critical: "critical_1mn=90 / 5mn=80 / 15mn=70", 
      detail: "Surveillance de la charge du processeur." 
    },
    { 
      metric: "check_disk", 
      tool: "/usr/local/nagios/libexec/check_disk", 
      warning: "-w 70 (70% d'utilisation)", 
      critical: "-c 80 (80% d'utilisation)", 
      detail: "Surveillance de l'espace disque disponible." 
    },
    { 
      metric: "check_mysql_health", 
      tool: "/usr/local/nagios/libexec/check_mysql_health -H $HOSTADDRESS$ --username=wpuser --password=password --mode=connection-time", 
      warning: "Aucun", 
      critical: "--critical=2", 
      detail: "Alerte si la base de données MySQL ne tourne pas." 
    },
    { 
      metric: "check_ram", 
      tool: "/usr/local/nagios/libexec/check_mem.pl", 
      warning: "-w 70 (70% d'utilisation)", 
      critical: "-c 85 (85% d'utilisation)", 
      detail: "Surveillance de l'utilisation de la mémoire RAM." 
    },
    { 
      metric: "check_sessions", 
      tool: "/usr/local/nagios/libexec/check_users", 
      warning: "-w 1 (1 session active)", 
      critical: "-c 1 (1 session active)", 
      detail: "Surveillance du nombre de sessions utilisateurs actives." 
    },
    { 
      metric: "check_http", 
      tool: "/usr/local/nagios/libexec/check_http -H $HOSTADDRESS$ -u / -S --ssl --auth=nagiosadmin:pass --onredirect=critical --timeout=10 --verify-host", 
      warning: "Aucun", 
      critical: "Alerte si Apache ne répond pas ou URL inaccessible", 
      detail: "Surveillance de la disponibilité du serveur web." 
    },
    { 
      metric: "check_file_exists", 
      tool: "/usr/local/nagios/libexec/check_file_exists /var/www/html/index.php", 
      warning: "Aucun", 
      critical: "Alerte si index.php est absent", 
      detail: "Vérification de la présence du fichier index.php." 
    }
  ];

  // Stack technique
  const tools = [
    { 
      name: "Nagios Core", 
      desc: "Supervision globale de 2 hôtes et gestion des 7 sondes",
      type: "img",
      icon: "https://cdn.simpleicons.org/nagios/111111",
      badge: "Superviseur"
    },
    { 
      name: "RSyslog", 
      desc: "Centralisation des logs du serveur Web vers le serveur Nagios",
      type: "img",
      icon: "https://cdn.simpleicons.org/linux/FCC624",
      badge: "Logs centralisés"
    },
    { 
      name: "MariaDB & WordPress", 
      desc: "Plateforme applicative surveillée (Site Web MediaSanté)",
      type: "img",
      icon: "https://cdn.simpleicons.org/mariadb/003545",
      badge: "Application & BDD"
    },
    { 
      name: "VirtualBox", 
      desc: "Environnement d'exécution virtualisé multi-machines",
      type: "img",
      icon: "https://cdn.simpleicons.org/virtualbox/183A61",
      badge: "Infrastructure"
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 p-6 md:p-12">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* Navigation retour */}
        <Link 
          to="/projets" 
          className="inline-flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        {/* En-tête du projet */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/80">
              Systèmes & Réseaux
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 70h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Supervisez le SI d'une entreprise
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Mise en place d'une infrastructure de supervision réactive pour l'entreprise <strong>MediaSanté</strong>. Déploiement de Nagios Core pour surveiller 2 hôtes virtuels via 7 sondes spécifiques (RAM, CPU, Disque, HTTP, MariaDB, Page Web, Utilisateurs), configuration de RSyslog pour la centralisation des logs, et rédaction de la documentation opérationnelle de remédiation aux incidents.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">7 Sondes Nagios</h3>
            <p className="text-xs text-slate-400">RAM, CPU, Disque, Web, BDD...</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">RSyslog Centralisé</h3>
            <p className="text-xs text-slate-400">Serveur Web ➔ Serveur Nagios</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Doc & Remédiation</h3>
            <p className="text-xs text-slate-400">Commandes Linux & fiches réflexes</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Projet Validé</h3>
            <p className="text-xs text-slate-400">Évaluateur : Julien Drouvroy</p>
          </div>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Contexte & Brief Client */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Contexte et Périmètre de la Mission (MediaSanté)
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                L'entreprise <strong>MediaSanté</strong>, spécialisée dans la mise à disposition de données de santé, enregistrait des ralentissements récurrents sur son site web. Mandaté en freelance par la directrice Megan Nielsen, l'objectif principal était d'installer un système de supervision complet capable de prévenir les pannes, de centraliser les journaux système et d'encadrer l'intervention technique grâce à une documentation claire.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-3">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Mail className="w-3.5 h-3.5" /> De : Megan Nielsen (Directrice MediaSanté)
                  </span>
                  <span>Objet : Supervision site web</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  « Nous avons reçu ton devis suite à notre besoin d'évaluation de la vitesse de chargement de notre site web et je t'informe que nous venons de le valider... N'oublie pas de fournir le tableau des indicateurs avec leurs paramètres d'alerte ainsi que la documentation décrivant les commandes Linux à exécuter en cas d'incident. »
                </p>
              </div>
            </div>

            {/* 2. Actions Techniques & Réalisations */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Actions Techniques & Réalisations
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Déploiement de Nagios Core multi-hôtes :",
                    desc: "Configuration de la supervision pour 2 machines distinctes (nagios-server 192.168.1.15 et wordpress-server 192.168.1.13)."
                  },
                  {
                    title: "Paramétrage des 7 sondes de supervision :",
                    desc: "Configuration précise des seuils Warning et Critical pour check_cpu_usage, check_disk, check_mysql_health, check_ram, check_sessions, check_http et check_file_exists."
                  },
                  {
                    title: "Centralisation des logs avec RSyslog :",
                    desc: "Mise en place de la collecte distante des journaux d'événements Apache (local6/local7) du serveur Web vers /var/log/clients/ sur le serveur Nagios."
                  },
                  {
                    title: "Tests de fonctionnement et simulation d'anomalies :",
                    desc: "Validation sur le terrain via stress --vm, stress --cpu, dd, pkill, modification temporaire des seuils/fichiers et requêtes d'arrêts de services."
                  },
                  {
                    title: "Rédaction de la documentation d'exploitation :",
                    desc: "Élaboration des fiches réflexes d'incident détaillant les objectifs de chaque sonde et les commandes Linux de remédiation associées."
                  }
                ].map((action, idx) => (
                  <div key={idx} className="flex items-start gap-3.5 p-3.5 rounded-xl bg-slate-950/40 border border-slate-800/80">
                    <div className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 mt-0.5 shrink-0">
                      <Check className="w-4 h-4" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-semibold text-white">{action.title}</h3>
                      <p className="text-xs text-slate-300 leading-relaxed">{action.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* 3. Preuves d'Implémentation Technique */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white">Preuves d'Implémentation Technique</h2>
                    <p className="text-xs text-slate-400">Captures du tableau de bord Nagios, des flux RSyslog et déroulé complet des tests CLI</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                  <button 
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'cli' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Tests Sondes CLI
                  </button>
                  <button 
                    onClick={() => setActiveTab('nagios')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'nagios' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    Nagios (2 Hôtes)
                  </button>
                  <button 
                    onClick={() => setActiveTab('logs')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'logs' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 font-semibold' : 'text-slate-400 hover:text-white'}`}
                  >
                    RSyslog Config
                  </button>
                </div>
              </div>

              {/* Contenu dynamique selon l'onglet actif */}
              {activeTab === 'cli' && (
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-cyan-400 font-mono border-b border-slate-800 pb-2">
                    <span className="flex items-center gap-2">
                      <Terminal className="w-4 h-4 text-slate-400" /> Cahier de Recette : Tests de Fonctionnement des 7 Sondes
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Commandes Linux intégrales</span>
                  </div>

                  <div className="bg-slate-950 rounded-lg p-4 font-mono text-xs border border-slate-800 text-slate-300 space-y-5 max-h-[480px] overflow-y-auto">
                    
                    {/* Sonde 1 */}
                    <div className="space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°1 : Check_RAM</p>
                      <p className="text-slate-400 text-[11px]"># Affichage de la mémoire, simulation de charge et fermeture forcée</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ free -h <span className="text-slate-400">// Affiche mémoire totale, utilisée, libre, disponible</span></p>
                        <p>➢ stress --vm 1 --vm-bytes 2048M --timeout 60s <span className="text-slate-400">// Simule une charge de 2048M pendant 60s</span></p>
                        <p>➢ ssh root@192.168.1.13 ps aux --sort=-%mem | head <span className="text-slate-400">// Affiche les processus gourmands</span></p>
                        <p>➢ ssh root@192.168.1.13 pkill -f stress <span className="text-slate-400">// Force la fermeture des processus</span></p>
                      </div>
                    </div>

                    {/* Sonde 2 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°2 : Check_CPU</p>
                      <p className="text-slate-400 text-[11px]"># Abaissement temporaire des seuils dans le script, stress CPU et vérification</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ nano /usr/local/nagios/libexec/check_cpu_usage.sh</p>
                        <p className="text-slate-400 pl-4">critical_1m=90 =&gt; 1 | critical_5m=80 =&gt; 1 | critical_15m=70 =&gt; 1</p>
                        <p className="text-slate-400 pl-4">warning_1m=70 =&gt; 0 | warning_5m=60 =&gt; 0 | warning_15m=50 =&gt; 0</p>
                        <p>➢ systemctl restart nagios <span className="text-slate-400">// Redémarre le service Nagios</span></p>
                        <p>➢ stress --cpu 4 --timeout 60s <span className="text-slate-400">// Simule 4 processus stress CPU pendant 60s</span></p>
                        <p>➢ ssh root@192.168.1.13 "top -b -n 1 | head -n 20" <span className="text-slate-400">// Vérifie l'utilisation processeur en temps réel</span></p>
                        <p>➢ ssh root@192.168.1.13 pkill -f stress <span className="text-slate-400">// Termine les processus de stress</span></p>
                      </div>
                    </div>

                    {/* Sonde 3 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°3 : Check_Disk</p>
                      <p className="text-slate-400 text-[11px]"># Remplissage fictif de l'espace disque et nettoyage</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ df -h <span className="text-slate-400">// Affiche l'espace disque disponible</span></p>
                        <p>➢ dd if=/dev/zero of=/tmp/testfile bs=250M count=100 <span className="text-slate-400">// Crée un gros fichier de test dans /tmp</span></p>
                        <p>➢ ssh root@192.168.1.13 find / -type f -size +1G 2&gt;/dev/null <span className="text-slate-400">// Trouve les fichiers &gt; 1Go</span></p>
                        <p>➢ ssh root@192.168.1.13 ls -l /tmp/testfile <span className="text-slate-400">// Détails du fichier créé</span></p>
                        <p>➢ ssh root@192.168.1.13 rm /tmp/testfile <span className="text-slate-400">// Supprime le fichier pour rétablir l'espace</span></p>
                      </div>
                    </div>

                    {/* Sonde 4 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°4 : Check_sessions</p>
                      <p className="text-slate-400 text-[11px]"># Audit des connexions actives, alerte aux utilisateurs et fermeture</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ ssh root@192.168.1.13 last <span className="text-slate-400">// Liste l'historique des connexions/déconnexions</span></p>
                        <p>➢ ssh root@192.168.1.13 who <span className="text-slate-400">// Affiche les utilisateurs actuellement connectés</span></p>
                        <p>➢ ssh root@192.168.1.13 'wall "Attention &lt;Utilisateur&gt;, vous allez être déconnecté. Merci de sauvegarder votre travail."'</p>
                        <p>➢ ssh root@192.168.1.13 pkill -KILL -u &lt;username&gt; <span className="text-slate-400">// Force la fermeture d'une session</span></p>
                      </div>
                    </div>

                    {/* Sonde 5 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°5 : Check_HTTP</p>
                      <p className="text-slate-400 text-[11px]"># Coupure du serveur web Apache, consultation des logs et redémarrage</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ ssh root@192.168.1.13 systemctl status apache2 <span className="text-slate-400">// Vérifie le statut d'Apache</span></p>
                        <p>➢ ssh root@192.168.1.13 systemctl stop apache2 <span className="text-slate-400">// Simule la panne du serveur web</span></p>
                        <p>➢ tail /var/log/clients/192.168.1.13/apache_wordpress.log <span className="text-slate-400">// Vérification des logs distants</span></p>
                        <p>➢ ssh root@192.168.1.13 systemctl restart apache2 <span className="text-slate-400">// Relance le service Apache</span></p>
                      </div>
                    </div>

                    {/* Sonde 6 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°6 : Check_MySQL Health</p>
                      <p className="text-slate-400 text-[11px]"># Test d'arrêt du moteur de base de données MariaDB</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ ssh root@192.168.1.13 systemctl status mariadb <span className="text-slate-400">// Statut du service MariaDB</span></p>
                        <p>➢ ssh root@192.168.1.13 systemctl stop mariadb <span className="text-slate-400">// Rend la base inaccessible</span></p>
                        <p>➢ ssh root@192.168.1.13 systemctl restart mariadb <span className="text-slate-400">// Redémarre la BDD</span></p>
                      </div>
                    </div>

                    {/* Sonde 7 */}
                    <div className="border-t border-slate-800/80 pt-3 space-y-1.5">
                      <p className="text-amber-400 font-semibold text-[13px]">Sonde n°7 : Check_File Exists</p>
                      <p className="text-slate-400 text-[11px]"># Simulation d'effacement/renommage de la page critique index.php</p>
                      <div className="pl-3 border-l-2 border-cyan-500/40 space-y-1 text-cyan-300">
                        <p>➢ ls -l /var/www/html/index.php <span className="text-slate-400">// Vérifie la présence de index.php</span></p>
                        <p>➢ mv /var/www/html/index.php /var/www/html/index.php.bak <span className="text-slate-400">// Masque le fichier (déclenche Critical)</span></p>
                        <p>➢ mv /var/www/html/index.php.bak /var/www/html/index.php <span className="text-slate-400">// Restaure la page d'accueil</span></p>
                      </div>
                    </div>

                  </div>

                  <p className="text-xs text-slate-400">
                    Protocole officiel de recette exécuté pour valider le déclenchement effectif des alertes Nagios lors de situations d'anomalies réelles.
                  </p>
                </div>
              )}

              {activeTab === 'nagios' && (
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {galleryTabs.nagios.map((img, idx) => (
                    <div key={idx} className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3 md:col-span-2">
                      <div className="flex items-center justify-between text-xs font-bold text-cyan-400 font-mono">
                        <span className="flex items-center gap-2">
                          <Terminal className="w-4 h-4 text-slate-400" /> {img.title}
                        </span>
                        <a 
                          href={img.src} 
                          target="_blank" 
                          rel="noreferrer" 
                          className="text-slate-400 hover:text-cyan-400 transition-colors"
                          title="Ouvrir en plein écran"
                        >
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>
                      <div className="rounded-lg overflow-hidden border border-slate-800 bg-slate-950 p-1 flex items-center justify-center min-h-[200px]">
                        <img 
                          src={img.src} 
                          alt={img.title} 
                          className="w-full h-auto max-h-[400px] object-contain hover:scale-102 transition-transform duration-300"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.onerror = null;
                            target.src = "https://via.placeholder.com/600x350/020617/38bdf8?text=Capture+Supervision+MediaSante";
                          }}
                        />
                      </div>
                      <p className="text-xs text-slate-400">{img.desc}</p>
                    </div>
                  ))}
                </div>
              )}

              {activeTab === 'logs' && (
                <div className="p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-4">
                  <div className="flex items-center justify-between text-xs font-bold text-emerald-400 font-mono">
                    <span className="flex items-center gap-2">
                      <FileText className="w-4 h-4 text-emerald-400" /> Centralisation des journaux Apache via RSyslog
                    </span>
                    <span className="text-[10px] text-slate-500 font-normal">Port UDP/TCP 514</span>
                  </div>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
                    {/* Émetteur : Client WordPress */}
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2">
                      <div className="text-slate-400 text-[11px] font-bold border-b border-slate-800 pb-1 flex justify-between">
                        <span>/etc/rsyslog.d/apache.conf (Client)</span>
                        <span className="text-emerald-400">192.168.1.13</span>
                      </div>
                      <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px]">
{`# Redirection logs d'accès Apache
local6.* @192.168.1.15:514

# Redirection logs d'erreur Apache
local7.* @192.168.1.15:514`}
                      </pre>
                    </div>

                    {/* Récepteur : Serveur Nagios */}
                    <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 space-y-2">
                      <div className="text-slate-400 text-[11px] font-bold border-b border-slate-800 pb-1 flex justify-between">
                        <span>/etc/rsyslog.d/remote-apache.conf (Serveur)</span>
                        <span className="text-cyan-400">192.168.1.15</span>
                      </div>
                      <pre className="text-slate-300 leading-relaxed overflow-x-auto text-[11px]">
{`$template ApacheAccess,"/var/log/clients/%fromhost%/apache_access.log"
$template ApacheError,"/var/log/clients/%fromhost%/apache_error.log"

local6.* ?ApacheAccess
local7.* ?ApacheError

if $fromhost-ip == '192.168.1.13' then /var/log/clients/192.168.1.13/apache_wordpress.log
& ~`}
                      </pre>
                    </div>
                  </div>

                  <div className="bg-slate-950 border border-slate-800 rounded-lg p-3 font-mono text-[11px] space-y-1">
                    <p className="text-slate-400 font-bold"># Activation des modules de réception UDP/TCP dans /etc/rsyslog.conf</p>
                    <p className="text-slate-300">module(load="imudp")</p>
                    <p className="text-slate-300">input(type="imudp" port="514")</p>
                  </div>

                  <p className="text-xs text-slate-400">
                    Collecte centralisée en temps réel des journaux d'erreurs et d’accès Web issus du serveur WordPress vers le serveur Nagios dédié.
                  </p>
                </div>
              )}
            </div>

            {/* 4. Matrice Officielle des 7 Sondes et Seuils d'Alerte */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <LineChart className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Matrice Officielle des 7 Sondes & Seuils D'Alerte</h2>
                  <p className="text-xs text-slate-400">Paramétrage extrait de Rhouma_Walid_3_indicateurs_092024.pdf</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">Sonde</th>
                      <th className="py-3 px-4">Commande / Script</th>
                      <th className="py-3 px-4 text-amber-400">Warning</th>
                      <th className="py-3 px-4 text-rose-400">Critical</th>
                      <th className="py-3 px-4">Description</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {monitoringMatrix.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400 font-mono">{row.metric}</td>
                        <td className="py-3 px-4 font-mono text-slate-300 break-all">{row.tool}</td>
                        <td className="py-3 px-4 font-mono text-amber-400">{row.warning}</td>
                        <td className="py-3 px-4 font-mono text-rose-400">{row.critical}</td>
                        <td className="py-3 px-4 text-slate-300">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Colonne de droite */}
          <div className="space-y-6">
            
            {/* Livrables Officiels du Projet */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  Livrables du Projet
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  /docs/Projet7
                </span>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* Livrable 1 : Config Nagios (PNG) */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <ImageIcon className="w-4 h-4" />
                    1. Configuration Nagios (PNG)
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_1_config_nagios_092024.png">
                        Rhouma_Walid_1_config_nagios_092024.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet7/Rhouma_Walid_1_config_nagios_092024.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet7/Rhouma_Walid_1_config_nagios_092024.png" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livrable 2 : Config RSyslog */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    2. Configuration RSyslog
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_2_config_Rsyslog">
                        Rhouma_Walid_2_config_Rsyslog
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet7/Rhouma_Walid_2_config_Rsyslog" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet7/Rhouma_Walid_2_config_Rsyslog" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livrable 3 : Tableau des indicateurs (PDF) */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    3. Tableau des Indicateurs (PDF)
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_3_indicateurs_092024.pdf">
                        Rhouma_Walid_3_indicateurs_092024.pdf
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet7/Rhouma_Walid_3_indicateurs_092024.pdf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet7/Rhouma_Walid_3_indicateurs_092024.pdf" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livrable 4 : Documentation supervision (PDF) */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    4. Documentation Supervision (PDF)
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_4_documentation_092024.pdf">
                        Rhouma_Walid_4_documentation_092024.pdf
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet7/Rhouma_Walid_4_documentation_092024.pdf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet7/Rhouma_Walid_4_documentation_092024.pdf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Document complémentaire : Test fonctionnement sondes */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    5. Test Fonctionnement Sondes (PDF)
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="TEST FONCTIONNEMENT DES SONDES.pdf">
                        TEST FONCTIONNEMENT DES SONDES.pdf
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet7/TEST%20FONCTIONNEMENT%20DES%20SONDES.pdf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-purple-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet7/TEST%20FONCTIONNEMENT%20DES%20SONDES.pdf" download className="text-slate-400 hover:text-purple-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Environnement & Outils */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement & Outils
              </h3>
              
              <div className="space-y-3">
                {tools.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center">
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="w-full h-full object-contain filter drop-shadow"
                          onError={(e) => {
                            const target = e.target as HTMLImageElement;
                            target.style.display = 'none';
                          }}
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white font-mono">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Évaluation Officielle du Jury */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Évaluation du Jury</h3>
                  <p className="text-xs text-emerald-400 font-medium">Soutenance de validation</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <div className="flex items-center justify-between text-[11px]">
                    <span className="font-semibold text-white">Évaluateur : Julien Drouvroy</span>
                    <span className="text-emerald-400 font-medium">Projet Validé</span>
                  </div>
                  <p className="text-[11px] text-slate-300 leading-relaxed italic border-t border-slate-800/80 pt-1.5 mt-1.5">
                    « Très bonne soutenance, l'étudiant est en mesure de présenter son projet de manière professionnelle en respectant le timing. L'ensemble des sondes ont été mises en place ainsi que le rsyslog et la documentation associée. Les réponses aux questions sont correctes. Attention au timing qui aurait pou être dépassé. Bonne continuation pour la suite. »
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section Compétences RNCP Validées */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Compétences RNCP Validées lors de la Soutenance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            {[
              "Mettre en place un outil de supervision du SI (Nagios 2 hôtes & RSyslog)",
              "Superviser les équipements du SI (RAM, CPU, Disque, HTTP, BDD, URL, Users)",
              "Exploiter et documenter les données de supervision (Fiches d'incidents & commandes Linux)"
            ].map((competence, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{competence}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}