import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  Clock, GraduationCap, Activity, ShieldAlert, 
  FolderArchive, Eye, Terminal, Mail, Code2, 
  Lock, Cpu, FileCode, ImageIcon, CheckCircle,
  Layers, Monitor, HardDrive, CpuIcon
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail8() {
  const [activeProofTab, setActiveProofTab] = useState<'ansible' | 'scripts' | 'screenshots' | 'agdlp'>('ansible');

  // Livrables du projet
  const deliverables = [
    {
      title: "1. Scripts de montage",
      icon: Code2,
      color: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
      files: [
        { name: "montage_lecteurs.ps1", path: "/docs/Projet8/Rhouma_Walid_1_scripts_112024/montage_lecteurs.ps1" },
        { name: "mount_cifs.sh", path: "/docs/Projet8/Rhouma_Walid_1_scripts_112024/mount_cifs.sh" },
        { name: "script strat2 avec archivage diff.txt", path: "/docs/Projet8/Rhouma_Walid_1_scripts_112024/script%20strat2%20avec%20archivage%20diff.txt" }
      ]
    },
    {
      title: "2. Captures montages",
      icon: ImageIcon,
      color: "text-emerald-400 border-emerald-800/60 bg-emerald-950/40",
      files: [
        { name: "montage_lecteurs_ubuntu.pdf", path: "/docs/Projet8/Rhouma_Walid_2_capture_ecran_112024/montage_lecteurs_ubuntu.pdf" },
        { name: "montage_lecteurs_ubuntu2.pdf", path: "/docs/Projet8/Rhouma_Walid_2_capture_ecran_112024/montage_lecteurs_ubuntu2.pdf" },
        { name: "montage_lecteurs_windows.pdf", path: "/docs/Projet8/Rhouma_Walid_2_capture_ecran_112024/montage_lecteurs_windows.pdf" }
      ]
    },
    {
      title: "3. Exports AD & GLPI",
      icon: FileText,
      color: "text-amber-400 border-amber-800/60 bg-amber-950/40",
      files: [
        { name: "Export périphériques.csv", path: "/docs/Projet8/Rhouma_Walid_3_exports_112024/Export%20p%C3%A9riph%C3%A9riques.csv" },
        { name: "Exports users et groupes (glpi).csv", path: "/docs/Projet8/Rhouma_Walid_3_exports_112024/Exports%20users%20et%20groupes%20(glpi).csv" },
        { name: "Exports users et groupes.csv", path: "/docs/Projet8/Rhouma_Walid_3_exports_112024/Exports%20users%20et%20groupes.csv" }
      ]
    },
    {
      title: "4. Rapports Ansible",
      icon: FileCode,
      color: "text-purple-400 border-purple-800/60 bg-purple-950/40",
      files: [
        { name: "installation colour contrast analyser.pdf", path: "/docs/Projet8/Rhouma_Walid_4_rapports_ansible_112024/installation%20colour%20contrast%20analyser.pdf" },
        { name: "installation-kontrast.pdf", path: "/docs/Projet8/Rhouma_Walid_4_rapports_ansible_112024/installation-kontrast.pdf" },
        { name: "mise-à-jour-ubuntu.pdf", path: "/docs/Projet8/Rhouma_Walid_4_rapports_ansible_112024/mise-%C3%A0-jour-ubuntu.pdf" },
        { name: "mise-à-jour-windows.pdf", path: "/docs/Projet8/Rhouma_Walid_4_rapports_ansible_112024/mise-%C3%A0-jour-windows.pdf" }
      ]
    },
    {
      title: "5. Référentiel du parc",
      icon: Layers,
      color: "text-blue-400 border-blue-800/60 bg-blue-950/40",
      files: [
        { name: "Référentiel parc barzini.xlsx", path: "/docs/Projet8/Rhouma_Walid_5_r%C3%A9f%C3%A9rentiel_112024/R%C3%A9f%C3%A9rentiel%20parc%20barzini.xlsx" }
      ]
    }
  ];

  // Logiciels & Logos
  const tools = [
    { 
      name: "GLPI", 
      desc: "Gestion d'inventaire cloud et suivi du parc matériel/logiciel",
      icon: "https://upload.wikimedia.org/wikipedia/commons/8/8e/GLPI_logo.svg",
      badge: "Inventaire & ITSM"
    },
    { 
      name: "Ansible", 
      desc: "Automation et déploiement centralisé des maj et applications",
      icon: "https://cdn.simpleicons.org/ansible/EE0000",
      badge: "Gestion de config"
    },
    { 
      name: "Active Directory", 
      desc: "Gestion unifiée de l'annuaire, des rôles et de la politique AGDLP",
      isAdSvg: true,
      badge: "Annuaire & Droits"
    },
    { 
      name: "Ubuntu LTS", 
      desc: "Postes de travail Linux pour les développeurs et graphistes",
      icon: "https://cdn.simpleicons.org/ubuntu/E95420",
      badge: "OS Client"
    },
    { 
      name: "PowerShell & Bash", 
      desc: "Automatisations multiplateformes des montages de partages",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
      badge: "Scripting"
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

        {/* En-tête */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyan-950/60 text-cyan-400 border border-cyan-800/80">
              Systèmes & Réseaux
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Majeur Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 60h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Gérez le parc informatique d'une PME
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Projet pilier d'administration d'infrastructure hybride pour le studio <strong>Barzini</strong> : mise en œuvre intégrale de l'annuaire Active Directory en architecture <strong>AGDLP</strong>, automatisation par <strong>Ansible</strong> et scripts <strong>PowerShell/Bash</strong>, inventaire centralisé avec <strong>GLPI</strong> et gestion prédictive des obsolescences matérielles.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Architecture AGDLP</h3>
            <p className="text-xs text-slate-400">Groupes Globaux & Domaine Local stricts</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Automation Ansible</h3>
            <p className="text-xs text-slate-400">Playbooks maj systems & apps</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">GLPI & Inventaire</h3>
            <p className="text-xs text-slate-400">Remontée agents VM Windows / Linux</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">100% Conforme</h3>
            <p className="text-xs text-slate-400">Évaluation validée sans réserve</p>
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne Gauche (Contenu principal) */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* 1. Contexte & Scénario */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Contexte et Périmètre de la Mission (Studio Barzini)
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Le studio de jeux vidéo <strong>Barzini</strong> nécessitait une refonte complète de la gestion de son infrastructure hybride (Windows Server, clients Windows 10/11 et Linux Ubuntu LTS) pour accueillir 8 nouveaux collaborateurs et préparer le développement d'un jeu 4K Ray Tracing.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 text-xs text-slate-400 font-mono">
                  <span className="flex items-center gap-1.5 text-cyan-400">
                    <Mail className="w-3.5 h-3.5" /> De : Basile (Administrateur Systèmes Senior)
                  </span>
                  <span>Objet : Mission d'administration</span>
                </div>
                <p className="text-xs text-slate-300 italic leading-relaxed">
                  « Respecte la politique de sécurité et l’AGDLP. Monte une plateforme de test avec des VM Linux/Windows. Utilise GLPI pour le parc et Ansible pour les déploiements et mises à jour (dont les outils d'accessibilité Kontrast et Colour Contrast Analyzer). »
                </p>
              </div>
            </div>

            {/* 2. ACTIONS TECHNIQUES & RÉALISATIONS (REDESIGN CONFORME AUX AUTRES PROJETS) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-3">
                <span className="p-1 rounded-full bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <CheckCircle className="w-5 h-5" />
                </span>
                Actions Techniques & Réalisations
              </h2>

              <div className="space-y-4">
                
                {/* Action 1 */}
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      Implémentation de l'Annuaire Active Directory & Architecture AGDLP :
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Organisation structurée des Unités Organisationnelles (OU), gestion des utilisateurs et mise en place rigoureuse des groupes Globaux (<code className="text-amber-300">G_</code>) imbriqués dans les groupes Domaine Local (<code className="text-emerald-400">DL_</code>) pour un contrôle d'accès strict aux partages réseau NTFS.
                    </p>
                  </div>
                </div>

                {/* Action 2 */}
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      Scripting & Automatisations Multi-Plateformes :
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Développement du script PowerShell (<code className="text-slate-200">montage_lecteurs.ps1</code>) et du script Bash/CIFS (<code className="text-slate-200">mount_cifs.sh</code>) sécurisé par authentification Kerberos (<code className="text-slate-200">sec=krb5</code>) pour l'attribution automatique des lecteurs réseau au démarrage.
                    </p>
                  </div>
                </div>

                {/* Action 3 */}
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      Industrialisation & Automation par Playbooks Ansible :
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Création et exécution de playbooks Ansible pour l'automatisation des mises à jour système (Windows Update & Apt Ubuntu) et le déploiement à distance des logiciels d'accessibilité (<em>Kontrast</em> sur Linux et <em>Colour Contrast Analyzer</em> via Chocolatey sur Windows).
                    </p>
                  </div>
                </div>

                {/* Action 4 */}
                <div className="p-5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-start gap-4">
                  <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 text-cyan-400 shrink-0 mt-0.5">
                    <CheckCircle className="w-4 h-4" />
                  </div>
                  <div className="space-y-1">
                    <h3 className="text-sm font-bold text-white">
                      Inventaire Centralisé GLPI & Plan de Renouvellement du Parc :
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Déploiement des agents GLPI sur les VM Windows et Linux pour la remontée automatisée de l'inventaire matériel et logiciel, réalisation de la matrice de vétusté et planification du budget de renouvellement pour les stations de travail 4K.
                    </p>
                  </div>
                </div>

              </div>
            </div>

            {/* 3. PREUVES D'IMPLÉMENTATIONS TECHNIQUES (TEXTES CORRIGÉS DE TOUTE CITATION) */}
            <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-8 shadow-xl shadow-cyan-950/20">
              
              {/* En-tête de section */}
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div>
                  <div className="flex items-center gap-2">
                    <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                      <Terminal className="w-6 h-6" />
                    </span>
                    <div>
                      <h2 className="text-2xl font-bold text-white tracking-tight">
                        Preuves d'Implémentations Techniques
                      </h2>
                      <p className="text-xs text-slate-400 mt-0.5">
                        Console d'exécution, scripts d'automatisation et maquette d'architecture
                      </p>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-2">
                  <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                    <CheckCircle className="w-3.5 h-3.5" />
                    Tests 100% Passés
                  </span>
                </div>
              </div>

              {/* KPI Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 font-mono text-xs">
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase block">Target Hosts</span>
                  <span className="text-cyan-400 font-bold text-sm">Win10 & Ubuntu</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase block">Auth Protocol</span>
                  <span className="text-emerald-400 font-bold text-sm">Kerberos sec=krb5</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase block">Pkg Managers</span>
                  <span className="text-amber-400 font-bold text-sm">Apt & Chocolatey</span>
                </div>
                <div className="p-3 rounded-xl bg-slate-950/80 border border-slate-800 text-center space-y-1">
                  <span className="text-slate-400 text-[10px] uppercase block">Security Standard</span>
                  <span className="text-purple-400 font-bold text-sm">AGDLP & NTFS</span>
                </div>
              </div>

              {/* Barre d'onglets */}
              <div className="flex border-b border-slate-800 gap-2 overflow-x-auto text-xs font-mono pb-1">
                <button 
                  onClick={() => setActiveProofTab('ansible')}
                  className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 font-semibold ${
                    activeProofTab === 'ansible' 
                      ? 'bg-cyan-950/80 text-cyan-400 border-t border-x border-cyan-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <FileCode className="w-3.5 h-3.5" />
                  Logs Ansible Execution
                </button>
                <button 
                  onClick={() => setActiveProofTab('agdlp')}
                  className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 font-semibold ${
                    activeProofTab === 'agdlp' 
                      ? 'bg-cyan-950/80 text-cyan-400 border-t border-x border-cyan-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <Lock className="w-3.5 h-3.5" />
                  Modélisation AGDLP
                </button>
                <button 
                  onClick={() => setActiveProofTab('scripts')}
                  className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 font-semibold ${
                    activeProofTab === 'scripts' 
                      ? 'bg-cyan-950/80 text-cyan-400 border-t border-x border-cyan-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <Code2 className="w-3.5 h-3.5" />
                  Scripts (PS1 / Bash)
                </button>
                <button 
                  onClick={() => setActiveProofTab('screenshots')}
                  className={`px-4 py-2 rounded-t-lg transition-all flex items-center gap-2 font-semibold ${
                    activeProofTab === 'screenshots' 
                      ? 'bg-cyan-950/80 text-cyan-400 border-t border-x border-cyan-800' 
                      : 'text-slate-400 hover:text-slate-200 hover:bg-slate-900/50'
                  }`}
                >
                  <ImageIcon className="w-3.5 h-3.5" />
                  Aperçu des Montages
                </button>
              </div>

              {/* CONTENU ONGLET 1: LOGS ANSIBLE */}
              {activeProofTab === 'ansible' && (
                <div className="space-y-4">
                  <div className="rounded-xl bg-slate-950 border border-slate-800 overflow-hidden shadow-2xl">
                    <div className="bg-slate-900 px-4 py-2 border-b border-slate-800 flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <span className="w-3 h-3 rounded-full bg-red-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-yellow-500/80 inline-block"></span>
                        <span className="w-3 h-3 rounded-full bg-green-500/80 inline-block"></span>
                        <span className="text-xs font-mono text-slate-400 ml-2">walid@serveur-ubuntu:~/ansible_project/playbooks</span>
                      </div>
                      <span className="text-[10px] font-mono text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800">
                        ANSIBLE-PLAYBOOK SUCCESS
                      </span>
                    </div>

                    <div className="p-4 font-mono text-[11px] leading-relaxed space-y-4 text-slate-300 overflow-x-auto">
                      <div>
                        <p className="text-cyan-400 font-bold">$ ansible-playbook -i inventory/hosts playbooks/install_color_contrast_analyser.yml</p>
                        <p className="text-slate-400">PLAY [windows] ********************************************************************</p>
                        <p className="text-slate-300">TASK [Gathering Facts] ok: [192.168.0.40]</p>
                        <p className="text-amber-300">TASK [Ensure Chocolatey is installed on Windows] changed: [192.168.0.40]</p>
                        <p className="text-amber-300">TASK [Install Colour Contrast Analyser via Chocolatey] changed: [192.168.0.40]</p>
                        <p className="text-emerald-400 font-bold mt-1">PLAY RECAP: 192.168.0.40 : ok=3 changed=2 unreachable=0 failed=0</p>
                      </div>

                      <div className="pt-3 border-t border-slate-900">
                        <p className="text-purple-400 font-bold">$ ansible-playbook -i inventory/hosts playbooks/install_kontrast.yml</p>
                        <p className="text-slate-400">PLAY [Install Kontrast on Ubuntu] *************************************************</p>
                        <p className="text-slate-300">TASK [Gathering Facts] ok: [192.168.0.20]</p>
                        <p className="text-amber-300">TASK [Ensure Kontrast is installed] changed: [192.168.0.20]</p>
                        <p className="text-emerald-400 font-bold mt-1">PLAY RECAP: 192.168.0.20 : ok=2 changed=1 unreachable=0 failed=0</p>
                      </div>

                      <div className="pt-3 border-t border-slate-900">
                        <p className="text-cyan-400 font-bold">$ ansible-playbook -i inventory/hosts playbooks/maj_ubuntu.yml</p>
                        <p className="text-slate-300">TASK [Mettre à jour tous les paquets] changed: [192.168.0.20]</p>
                        <p className="text-slate-300">TASK [Nettoyer les paquets inutiles] changed: [192.168.0.20]</p>
                        <p className="text-emerald-400 font-bold mt-1">PLAY RECAP: 192.168.0.20 : ok=4 changed=2 unreachable=0 failed=0</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTENU ONGLET 2: AGDLP MODELISATION */}
              {activeProofTab === 'agdlp' && (
                <div className="space-y-4">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <h3 className="text-sm font-bold text-white flex items-center gap-2">
                      <Lock className="w-4 h-4 text-cyan-400" />
                      Flux d'Imbrication des Droits Active Directory (AGDLP)
                    </h3>
                    
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-3 text-xs font-mono">
                      <div className="p-3 rounded-lg bg-slate-900 border border-cyan-800/60 space-y-1">
                        <span className="text-cyan-400 font-bold block text-[11px]">[A] Accounts</span>
                        <p className="text-slate-300 text-[11px]">walid.rhouma</p>
                        <p className="text-slate-300 text-[11px]">comptes utilisateurs</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-amber-800/60 space-y-1">
                        <span className="text-amber-400 font-bold block text-[11px]">[G] Global Groups</span>
                        <p className="text-slate-300 text-[11px]">G_Developpeurs</p>
                        <p className="text-slate-300 text-[11px]">G_Graphistes</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-emerald-800/60 space-y-1">
                        <span className="text-emerald-400 font-bold block text-[11px]">[DL] Domain Local</span>
                        <p className="text-slate-300 text-[11px]">DL_Partage_Service_RW</p>
                        <p className="text-slate-300 text-[11px]">DL_Partage_User_RW</p>
                      </div>

                      <div className="p-3 rounded-lg bg-slate-900 border border-purple-800/60 space-y-1">
                        <span className="text-purple-400 font-bold block text-[11px]">[P] Permissions</span>
                        <p className="text-slate-300 text-[11px]">Partage SMB & NTFS</p>
                        <p className="text-slate-300 text-[11px]">Control Modification</p>
                      </div>
                    </div>

                    <div className="p-3 rounded-lg bg-slate-900/60 border border-slate-800 text-xs text-slate-300 space-y-1">
                      <span className="font-bold text-cyan-400">Règle appliquée :</span>
                      <p>Les utilisateurs [A] appartiennent aux Groupes Globaux [G], qui sont membres des Groupes Domaine Local [DL], auxquels sont assignées les Permissions NTFS [P].</p>
                    </div>
                  </div>
                </div>
              )}

              {/* CONTENU ONGLET 3: SCRIPTS */}
              {activeProofTab === 'scripts' && (
                <div className="space-y-4">
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-xs font-mono">
                    
                    {/* Script Bash */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-emerald-400 font-bold border-b border-slate-800 pb-2">
                        <span>mount_cifs.sh (Linux Ubuntu)</span>
                        <span className="text-[10px] text-slate-500">Kerberos sec=krb5</span>
                      </div>
                      <pre className="text-slate-300 text-[11px] overflow-x-auto p-2 bg-slate-900/60 rounded">
{`MOUNT_POINT_SERVICE="/home/\${USER}/Partage_service"
CIFS_SHARE_SERVICE="//Serveur-AD/Partage_service"

# Démontage si déjà présent
if mountpoint -q "$MOUNT_POINT_SERVICE"; then
    sudo umount "$MOUNT_POINT_SERVICE"
fi

# Montage sécurisé CIFS + Kerberos
sudo mount.cifs "$CIFS_SHARE_SERVICE" "$MOUNT_POINT_SERVICE" \\
  -o sec=krb5,uid=$(id -u),gid=$(id -g),file_mode=0600,dir_mode=0700`}
                      </pre>
                    </div>

                    {/* Script PowerShell */}
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-2">
                      <div className="flex items-center justify-between text-cyan-400 font-bold border-b border-slate-800 pb-2">
                        <span>montage_lecteurs.ps1 (Windows)</span>
                        <span className="text-[10px] text-slate-500">PowerShell / Net Use</span>
                      </div>
                      <pre className="text-slate-300 text-[11px] overflow-x-auto p-2 bg-slate-900/60 rounded">
{`$PartageService = "\\\\192.168.0.21\\Partage_service"
$PartageUser = "\\\\192.168.0.21\\Partage_user\\$username"

# Montage des lecteurs réseau persistent
try {
    net use S: $PartageService /persistent:yes
    net use U: $PartageUser /persistent:yes
    Write-Host "Montage réseau réussi."
} catch {
    Write-Host "Erreur lors du montage."
}`}
                      </pre>
                    </div>

                  </div>
                </div>
              )}

              {/* CONTENU ONGLET 4: SCREENSHOTS & RAPPORTS */}
              {activeProofTab === 'screenshots' && (
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-xs">
                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-cyan-400 font-bold">
                        <Monitor className="w-4 h-4" />
                        <span>Montage Windows</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Confirmation du montage automatique des lecteurs <strong>S:</strong> (Partage Service) et <strong>U:</strong> (User).
                      </p>
                    </div>
                    <a 
                      href="/docs/Projet8/Rhouma_Walid_2_capture_ecran_112024/montage_lecteurs_windows.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-cyan-400 font-mono text-[11px] border border-slate-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Voir la Capture PDF
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-emerald-400 font-bold">
                        <HardDrive className="w-4 h-4" />
                        <span>Montage Ubuntu CIFS</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Vérification via <code className="text-slate-200">df -h</code> dans le terminal client Ubuntu VirtualBox.
                      </p>
                    </div>
                    <a 
                      href="/docs/Projet8/Rhouma_Walid_2_capture_ecran_112024/montage_lecteurs_ubuntu2.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-emerald-400 font-mono text-[11px] border border-slate-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Voir le Terminal PDF
                    </a>
                  </div>

                  <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-3 flex flex-col justify-between">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2 text-purple-400 font-bold">
                        <CpuIcon className="w-4 h-4" />
                        <span>Rapports Ansible</span>
                      </div>
                      <p className="text-slate-400 text-[11px]">
                        Rapports de déploiement Ansible pour Kontrast et Colour Contrast Analyser.
                      </p>
                    </div>
                    <a 
                      href="/docs/Projet8/Rhouma_Walid_4_rapports_ansible_112024/installation-kontrast.pdf" 
                      target="_blank" 
                      rel="noreferrer" 
                      className="inline-flex items-center justify-center gap-1.5 w-full py-2 rounded-lg bg-slate-900 hover:bg-slate-800 text-purple-400 font-mono text-[11px] border border-slate-800 transition-colors"
                    >
                      <Eye className="w-3.5 h-3.5" /> Rapport Kontrast PDF
                    </a>
                  </div>
                </div>
              )}

            </div>

            {/* Évaluation Officielle du Jury */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Évaluation Officielle du Jury</h3>
                  <p className="text-xs text-emerald-400 font-medium">Soutenance Validée — Anthony Borg</p>
                </div>
              </div>

              <div className="p-4 rounded-xl bg-slate-950/80 border border-slate-800 text-xs text-slate-300 space-y-2">
                <p className="italic leading-relaxed">
                  « Une bonne soutenance. Walid a présenté l'ensemble des points abordés dans ce projet... Il a d'abord rappelé le contexte puis présenté son serveur Windows en détaillant l'organisation de son AD et les permissions sur les partages. Walid a ensuite présenté son serveur GLPI ainsi qu'Ansible pour le déploiement des scripts et mises à jour... Le chiffrement est également en place côté Windows (BitLocker) et Linux. Walid a réalisé les modifications demandées sur les GDL et a pu me démontrer le respect strict des bonnes pratiques AGDLP lors d'un second échange. Bravo pour ce travail réalisé avec sérieux ! »
                </p>
              </div>
            </div>

          </div>

          {/* Colonne Droite (Livrables Colorés + Environnement) */}
          <div className="space-y-6">
            
            {/* 1. SECTION LIVRABLES DU PROJET */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Livrables du Projet</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  /docs/Projet8
                </span>
              </div>

              <div className="space-y-3">
                {deliverables.map((group, idx) => {
                  const IconComponent = group.icon;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-slate-950/70 border border-slate-800/80 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg border text-xs ${group.color}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </span>
                        <h4 className="text-xs font-bold text-white">{group.title}</h4>
                      </div>

                      <div className="space-y-1 pl-1">
                        {group.files.map((file, fIdx) => (
                          <div key={fIdx} className="flex items-center justify-between text-[11px] bg-slate-900/90 hover:bg-slate-900 p-1.5 rounded border border-slate-800/60 transition-colors">
                            <span className="font-mono text-slate-300 truncate max-w-[140px]" title={file.name}>
                              {file.name}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <a 
                                href={file.path} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-slate-400 hover:text-cyan-400 transition-colors p-0.5"
                                title="Visualiser"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </a>
                              <a 
                                href={file.path} 
                                download 
                                className="text-slate-400 hover:text-cyan-400 transition-colors p-0.5"
                                title="Télécharger"
                              >
                                <Download className="w-3.5 h-3.5" />
                              </a>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 2. ENVIRONNEMENT & OUTILS */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement & Outils
              </h3>
              
              <div className="space-y-3">
                {tools.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 p-1.5 rounded-lg bg-slate-900 border border-slate-800 shrink-0 flex items-center justify-center">
                        {item.isAdSvg ? (
                          <svg className="w-6 h-6 text-cyan-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm-7 3c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6zm7 13H5v-.78c0-2.33 4.67-3.5 7-3.5s7 1.17 7 3.5v.78z"/>
                          </svg>
                        ) : (
                          <img 
                            src={item.icon} 
                            alt={item.name} 
                            className="w-full h-full object-contain filter drop-shadow"
                          />
                        )}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white font-mono">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                ))}
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
              "Configurer les comptes utilisateurs et les droits associés (Active Directory & règle AGDLP)",
              "Déployer des mises à jour dans un environnement hybride (Ansible, Windows & Linux Ubuntu)",
              "Gérer le stock d'un parc informatique (Inventaire GLPI & plan de renouvellement GPU 4K)"
            ].map((competence, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
                <CheckCircle className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{competence}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}