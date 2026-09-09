import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  Clock, GraduationCap, Activity, FolderArchive, 
  Eye, Terminal, Code2, FileCode, CheckCircle,
  Database, RefreshCw, Calendar, HardDrive, Award,
  Network, GitBranch, ShieldCheck, Image as ImageIcon, ShieldAlert, CheckCircle2
} from 'lucide-react';
import { Link } from 'react-router-dom';
import { ProjectFooterNav, CompetencesValidees, EvaluationJury } from '@/components/project/ProjectPageKit';

export default function ProjectDetail9() {
  const [activeProofTab, setActiveProofTab] = useState<'architecture' | 'incremental' | 'differential' | 'logs' | 'scripts' | 'crontab' | 'restore'>('architecture');

  // Helper pour encoder proprement les chemins d'accès aux images avec espaces et accents
  const getImagePath = (fileName: string) => `/docs/Projet9/captures/${encodeURIComponent(fileName)}`;

  // Liste des onglets de la section Preuves
  const proofTabs = [
    { id: 'architecture', label: 'Flux SSH', icon: Network },
    { id: 'incremental', label: 'Incrémentale', icon: GitBranch },
    { id: 'differential', label: 'Différentielle', icon: HardDrive },
    { id: 'logs', label: 'Logs Rsync', icon: FileText },
    { id: 'scripts', label: 'Scripts', icon: Code2 },
    { id: 'crontab', label: 'Crontab', icon: Calendar },
    { id: 'restore', label: 'Restauration', icon: RefreshCw },
  ] as const;

  // Actions Techniques & Réalisations (adaptées au Projet 9)
  const technicalActions = [
    {
      title: "Architecture de Transfert & Sécurisation SSH :",
      description: "Établissement de liaisons chiffrées sans mot de passe via l'échange de paires de clés SSH (`ed25519` / `rsa`). Restauration et transferts isolés entre les serveurs sources et la machine cible de sauvegarde."
    },
    {
      title: "Stratégie de Sauvegarde Incrémentale des Données Métiers :",
      description: "Développement des scripts Bash (`script_incremental_FICHIERS.sh`, `script_incremental_MAILS.sh`, etc.) s'appuyant sur Rsync et l'option `--link-dest` pour optimiser l'espace disque tout en conservant un historique complet par liens durs."
    },
    {
      title: "Sauvegarde Différentielle Hebdomadaire des Machines :",
      description: "Mise en place d'une sauvegarde différentielle dédiée aux volumes machines (`script_differentielle_MACHINES.sh`), permettant de stocker les deltas de modifications par rapport à la dernière image complète."
    },
    {
      title: "Planification Automatisée Crontab & Procédures de Restauration :",
      description: "Configuration du planificateur Linux (`crontab.txt`) pour l'exécution nocturne automatique, et développement de scripts interactifs (`script_restauration_incremental.sh` / `script_restauration_differentielle.sh`) pour garantir un RTO minimal."
    }
  ];

  // Livrables du Projet 9
  const deliverables = [
    {
      title: "1. Support de présentation",
      icon: FileText,
      color: "text-cyber-blue border-cyber-blue/30 bg-cyber-blue/10",
      files: [
        { name: "Présentation P10.pptx", path: "/docs/Projet9/Rhouma_Walid_1_support-presentation_012025/Pr%C3%A9sentation%20P10.pptx" }
      ]
    },
    {
      title: "2. Sauvegardes incrémentales",
      icon: Database,
      color: "text-cyber-emerald border-cyber-emerald/30 bg-cyber-emerald/10",
      files: [
        { name: "sauvegardes_FICHIERS.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_FICHIERS.log" },
        { name: "sauvegarde_global.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_global.log" },
        { name: "sauvegarde_MAILS.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_MAILS.log" },
        { name: "sauvegarde_RH.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_RH.log" },
        { name: "sauvegarde_SITE.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_SITE.log" },
        { name: "sauvegarde_TICKETS.log", path: "/docs/Projet9/Rhouma_Walid_2_rsync_sauvegardes_incrementales_012025/sauvegarde_TICKETS.log" }
      ]
    },
    {
      title: "3. Restaurations incrémentales",
      icon: RefreshCw,
      color: "text-amber-400 border-amber-500/30 bg-amber-500/10",
      files: [
        { name: "restauration_incrementale.log", path: "/docs/Projet9/Rhouma_Walid_3_rsync_restaurations_incrementales_012025/restauration_incrementale.log" }
      ]
    },
    {
      title: "4. Sauvegardes différentielles",
      icon: HardDrive,
      color: "text-purple-400 border-purple-800/60 bg-purple-950/40",
      files: [
        { name: "sauvegarde_MACHINES.log", path: "/docs/Projet9/Rhouma_Walid_4_rsync_sauvegardes_differentielles_012025/sauvegarde_MACHINES.log" }
      ]
    },
    {
      title: "5. Restaurations différentielles",
      icon: RefreshCw,
      color: "text-rose-400 border-rose-800/60 bg-rose-950/40",
      files: [
        { name: "restauration_differentielle.log", path: "/docs/Projet9/Rhouma_Walid_5_rsync_restaurations_differentielles_012025/restauration_differentielle.log" }
      ]
    },
    {
      title: "6. Scripts de sauvegardes",
      icon: Code2,
      color: "text-blue-400 border-blue-800/60 bg-blue-950/40",
      files: [
        { name: "script_differentielle_MACHINES.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_differentielle_MACHINES.sh" },
        { name: "script_incremental_FICHIERS.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_incremental_FICHIERS.sh" },
        { name: "script_incremental_MAILS.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_incremental_MAILS.sh" },
        { name: "script_incremental_RH.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_incremental_RH.sh" },
        { name: "script_incremental_SITE.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_incremental_SITE.sh" },
        { name: "script_incremental_TICKETS.sh", path: "/docs/Projet9/Rhouma_Walid_6_scripts_sauvegardes_012025/script_incremental_TICKETS.sh" }
      ]
    },
    {
      title: "7. Scripts de restaurations",
      icon: FileCode,
      color: "text-indigo-400 border-indigo-500/30 bg-indigo-500/10",
      files: [
        { name: "script_restauration_differentielle.sh", path: "/docs/Projet9/Rhouma_Walid_7_scripts_restaurations_012025/script_restauration_differentielle.sh" },
        { name: "script_restauration_incremental.sh", path: "/docs/Projet9/Rhouma_Walid_7_scripts_restaurations_012025/script_restauration_incrementale.sh" }
      ]
    },
    {
      title: "8. Configuration Planificateur",
      icon: Calendar,
      color: "text-teal-400 border-teal-800/60 bg-teal-950/40",
      files: [
        { name: "crontab.txt", path: "/docs/Projet9/Rhouma_Walid_8_configuration_planificateur_de_taches_012025/crontab.txt" }
      ]
    }
  ];

  // Logiciels & Logos
  const tools = [
    { 
      name: "Rsync", 
      desc: "Synchronisation et sauvegarde incrémentale/différentielle haut débit",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg",
      badge: "Moteur Backup"
    },
    { 
      name: "Bash & Cron", 
      desc: "Scripting Shell et planification automatisée des tâches (Crontab)",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/bash/bash-original.svg",
      badge: "Automation"
    },
    { 
      name: "Debian / Ubuntu", 
      desc: "Serveurs de stockage cible et nœuds de sauvegarde Linux",
      icon: "https://cdn.simpleicons.org/ubuntu/E95420",
      badge: "OS Server"
    },
    { 
      name: "SSH / OpenSSH", 
      desc: "Transferts sécurisés et chiffrés à travers le réseau par paires de clés",
      icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/ssh/ssh-original.svg",
      badge: "Chiffrement"
    }
  ];

  return (
    <div className="min-h-screen bg-base-900 text-slate-200">
      <div className="container-page py-12 lg:py-16 space-y-12">
        
        {/* Navigation retour */}
        <Link 
          to="/projets" 
          className="inline-flex items-center gap-2 text-sm text-cyber-blue hover:text-cyber-blue transition-colors"
        >
          <ArrowLeft className="w-4 h-4" />
          Retour aux projets
        </Link>

        {/* En-tête */}
        <div className="space-y-4">
          <div className="flex flex-wrap items-center gap-3">
            <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30">
              Systèmes & Sauvegarde
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30">
              <GraduationCap className="w-3.5 h-3.5 text-cyber-emerald" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyber-blue" />
              Volume : 40h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mise en place d'une politique de sauvegarde et de restauration (Mairie de Mareuil-sur-Oise)
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Conception et automatisation complète de la stratégie de plan de continuité d'activité (PCA) : écriture de scripts <strong>Bash</strong> modularisés couplés à <strong>Rsync</strong> sécurisés sur <strong>SSH</strong>, automatisés par <strong>Crontab</strong> avec procédures interactives de restauration validées.
          </p>
        </div>

        {/* Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-base-700/60 border border-white/5 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyber-blue">Rsync & SSH</h3>
            <p className="text-xs text-slate-400">Tunnel chiffré par paires de clés</p>
          </div>
          <div className="p-5 rounded-2xl bg-base-700/60 border border-white/5 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyber-emerald">Incrémental & Diff.</h3>
            <p className="text-xs text-slate-400">Stratégie optimisée selon les données</p>
          </div>
          <div className="p-5 rounded-2xl bg-base-700/60 border border-white/5 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyber-blue">Automatisation Cron</h3>
            <p className="text-xs text-slate-400">Planification des tâches système</p>
          </div>
          <div className="p-5 rounded-2xl bg-base-700/60 border border-white/5 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyber-emerald">Logs & Restauration</h3>
            <p className="text-xs text-slate-400">Restauration ciblée et complète</p>
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne Gauche */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contexte */}
            <div className="bg-base-700/60 border border-white/5 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyber-blue" />
                Contexte et Enjeux Métiers
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Pour le compte de la <strong>Mairie de Mareuil-sur-Oise</strong>, l'enjeu principal était de sécuriser l'ensemble des données critiques (services RH, messagerie, tickets incidents, portail web et VM d'infrastructure) contre la perte de données, les pannes logicielles ou les erreurs humaines. L'objectif consistait à mettre en place une solution robuste, légère, sans surcoût logiciel, basée sur les outils natifs Linux.
              </p>
            </div>

            {/* Actions Techniques & Réalisations (Nouveau bloc placé juste en-dessous du contexte) */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/20">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h2 className="text-2xl font-bold text-white tracking-tight">
                  Actions Techniques & Réalisations
                </h2>
              </div>

              <div className="space-y-3">
                {technicalActions.map((action, idx) => (
                  <div 
                    key={idx} 
                    className="bg-base-800/90 border border-white/5 rounded-xl p-5 flex items-start gap-4 transition-all hover:border-white/10"
                  >
                    <div className="p-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue shrink-0 mt-0.5">
                      <CheckCircle2 className="w-5 h-5" />
                    </div>
                    <div className="space-y-1">
                      <h3 className="text-sm font-bold text-white leading-snug">
                        {action.title}
                      </h3>
                      <p className="text-xs md:text-sm text-slate-300 leading-relaxed">
                        {action.description}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Preuves d'Implémentations Techniques */}
            <div className="bg-base-700/80 border border-cyber-blue/30 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-8 shadow-xl shadow-glow">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-white/5 pb-5">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30">
                    <Terminal className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Preuves d'Implémentations Techniques
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Architecture, schémas fonctionnels, scripts Bash, logs et captures d'écran
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Sauvegardes Validées
                </span>
              </div>

              {/* Menu d'onglets clarifié et interactif */}
              <div className="bg-base-900/90 p-2 rounded-xl border border-white/5 shadow-inner">
                <p className="text-[11px] font-mono text-cyber-blue/80 mb-2 px-1 uppercase tracking-wider font-semibold">
                  Sélecteur de preuve :
                </p>
                <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-thin">
                  {proofTabs.map((tab) => {
                    const Icon = tab.icon;
                    const isActive = activeProofTab === tab.id;
                    return (
                      <button
                        key={tab.id}
                        onClick={() => setActiveProofTab(tab.id)}
                        className={`flex items-center gap-2 px-3.5 py-2 rounded-lg text-xs font-mono font-bold transition-all duration-200 cursor-pointer whitespace-nowrap shrink-0 border ${
                          isActive
                            ? 'bg-cyber-blue text-white border-cyber-blue shadow-md shadow-glow scale-[1.02]'
                            : 'bg-base-700/90 text-slate-300 border-white/10 hover:bg-base-700 hover:text-white hover:border-cyber-blue/50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-white' : 'text-cyber-blue'}`} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Onglet 1: Flux SSH */}
              {activeProofTab === 'architecture' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <h3 className="text-xs font-bold text-cyber-blue flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Capture — Flux rsync couplés à SSH
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Flux rsync couplés à SSH.png</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/5 bg-base-700/50 p-2">
                      <img 
                        src={getImagePath("Flux rsync couplés à SSH.png")} 
                        alt="Flux rsync couplés à SSH"
                        className="w-full object-contain rounded-md max-h-[450px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 2: Sauvegarde Incrémentale */}
              {activeProofTab === 'incremental' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <h3 className="text-xs font-bold text-cyber-emerald flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Sauvegarde incrémentale du mardi
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Sauvegarde incrémentale du mardi.png</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/5 bg-base-700/50 p-2">
                      <img 
                        src={getImagePath("Sauvegarde incrémentale du mardi.png")} 
                        alt="Sauvegarde incrémentale du mardi"
                        className="w-full object-contain rounded-md max-h-[400px]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <h3 className="text-xs font-bold text-cyber-emerald flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Sauvegarde incrémentale sur une semaine
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Sauvegarde incrémentale sur une semaine.png</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/5 bg-base-700/50 p-2">
                      <img 
                        src={getImagePath("Sauvegarde incrémentale sur une semaine.png")} 
                        alt="Sauvegarde incrémentale sur une semaine"
                        className="w-full object-contain rounded-md max-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 3: Sauvegarde Différentielle */}
              {activeProofTab === 'differential' && (
                <div className="space-y-6">
                  <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <h3 className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Sauvegarde différentielle du mardi
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Sauvegarde différentielle du mardi.png</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/5 bg-base-700/50 p-2">
                      <img 
                        src={getImagePath("Sauvegarde différentielle du mardi.png")} 
                        alt="Sauvegarde différentielle du mardi"
                        className="w-full object-contain rounded-md max-h-[400px]"
                      />
                    </div>
                  </div>

                  <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <div className="flex items-center justify-between border-b border-white/5 pb-2">
                      <h3 className="text-xs font-bold text-purple-400 flex items-center gap-1.5">
                        <ImageIcon className="w-4 h-4" />
                        Sauvegarde différentielle sur une semaine
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Sauvegarde différentielle sur une semaine.png</span>
                    </div>

                    <div className="rounded-lg overflow-hidden border border-white/5 bg-base-700/50 p-2">
                      <img 
                        src={getImagePath("Sauvegarde différentielle sur une semaine.png")} 
                        alt="Sauvegarde différentielle sur une semaine"
                        className="w-full object-contain rounded-md max-h-[400px]"
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 4: Logs */}
              {activeProofTab === 'logs' && (
                <div className="rounded-xl bg-base-900 border border-white/5 overflow-hidden shadow-2xl">
                  <div className="bg-base-700 px-4 py-2.5 border-b border-white/5 flex items-center justify-between">
                    <span className="text-xs font-mono text-cyber-blue font-semibold">
                      Extrait de Journal Rsync (/var/log/sauvegarde_MAILS.log)
                    </span>
                  </div>

                  <div className="p-4 font-mono text-[11px] leading-relaxed space-y-2 text-slate-300 overflow-x-auto bg-base-900">
                    <p className="text-slate-400">Jour 1 · 06:48:45 : Sauvegarde complète du répertoire FICHIERS</p>
                    <p className="text-slate-500">sending incremental file list</p>
                    <p className="text-slate-400">created directory /home/sauvegarde/MAILS/COMPLETES/J1</p>
                    <p className="text-slate-300">MAILS/Joseph/email.txt</p>
                    <p className="text-slate-300">MAILS/Marie/email.txt</p>
                    <p className="text-slate-300">MAILS/Michel/email.txt</p>
                    <p className="text-slate-300">MAILS/Sonia/email.txt</p>
                    <p className="text-amber-300">sent 553 bytes received 182 bytes 1.470,00 bytes/sec</p>
                    <p className="text-cyber-emerald font-bold">Jour 1 · 06:48:46 : Sauvegarde terminée.</p>
                    <hr className="border-white/5 my-2" />
                    <p className="text-cyber-blue">Jour 4 · 18:53:48 : Début du script de sauvegarde.</p>
                    <p className="text-amber-400">Jour 4 · 18:53:50 : Aucune sauvegarde trouvée pour la veille (Jour 3).</p>
                    <p className="text-cyber-blue">Jour 4 · 18:53:50 : Sauvegarde complète en cours.</p>
                    <p className="text-slate-400">created directory /home/sauvegarde/MAILS/COMPLETES/J4</p>
                    <p className="text-cyber-emerald">Jour 4 · 18:53:51 : Fin du script de sauvegarde.</p>
                    <hr className="border-white/5 my-2" />
                    <p className="text-cyber-blue">Jour 5 · 05:16:44 : Début du script de sauvegarde.</p>
                    <p className="text-slate-300">Jour 5 · 05:16:46 : Dernière sauvegarde trouvée : /home/sauvegarde/MAILS/COMPLETES/J4</p>
                    <p className="text-cyber-emerald font-bold">Jour 5 · 05:16:46 : Sauvegarde incrémentale basée sur /home/sauvegarde/MAILS/COMPLETES/J4.</p>
                    <p className="text-slate-400">created directory /home/sauvegarde/MAILS/INCREMENTALES/J5</p>
                    <p className="text-slate-300">MAILS/Joseph/email2.txt</p>
                    <p className="text-amber-300">sent 405 bytes received 117 bytes 1.044,00 bytes/sec</p>
                  </div>
                </div>
              )}

              {/* Onglet 5: Scripts */}
              {activeProofTab === 'scripts' && (
                <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-cyber-blue font-bold border-b border-white/5 pb-2">
                    <span>script_incremental_FICHIERS.sh</span>
                    <span className="text-[10px] text-slate-500">Bash / Rsync</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto p-2 bg-base-700/60 rounded">
{`#!/bin/bash
SOURCE="/var/www/data/fichiers/"
DEST_BASE="/home/sauvegarde/FICHIERS"
TIMESTAMP=$(date +%Y-%m-%d)
LATEST_LINK="$DEST_BASE/LATEST"
BACKUP_DIR="$DEST_BASE/INCREMENTALES/$TIMESTAMP"
LOG_FILE="/var/log/sauvegarde_FICHIERS.log"

echo "$(date '+%Y-%m-%d %H:%M:%S') : Début du script de sauvegarde." >> $LOG_FILE

if [ -d "$LATEST_LINK" ]; then
  echo "$(date '+%Y-%m-%d %H:%M:%S') : Sauvegarde incrémentale basée sur $LATEST_LINK" >> $LOG_FILE
  rsync -av --link-dest="$LATEST_LINK" "$SOURCE" "$BACKUP_DIR" >> $LOG_FILE 2>&1
else
  echo "$(date '+%Y-%m-%d %H:%M:%S') : Aucune sauvegarde précédente. Sauvegarde complète en cours." >> $LOG_FILE
  BACKUP_DIR="$DEST_BASE/COMPLETES/$TIMESTAMP"
  rsync -av "$SOURCE" "$BACKUP_DIR" >> $LOG_FILE 2>&1
fi

rm -f "$LATEST_LINK"
ln -s "$BACKUP_DIR" "$LATEST_LINK"

echo "$(date '+%Y-%m-%d %H:%M:%S') : Fin du script de sauvegarde." >> $LOG_FILE`}
                  </pre>
                </div>
              )}

              {/* Onglet 6: Crontab */}
              {activeProofTab === 'crontab' && (
                <div className="p-4 rounded-xl bg-base-900 border border-white/5 space-y-2 font-mono text-xs">
                  <div className="flex items-center justify-between text-amber-400 font-bold border-b border-white/5 pb-2">
                    <span>crontab.txt</span>
                    <span className="text-[10px] text-slate-500">Planificateur de tâches Linux</span>
                  </div>
                  <pre className="text-slate-300 text-[11px] overflow-x-auto p-2 bg-base-700/60 rounded">
{`# Planification des sauvegardes automatiques - Mairie de Mareuil-sur-Oise
# m h  dom mon dow   command

# Sauvegardes incrémentales quotidiennes des données applicatives
0 22 * * * /home/walid/SCRIPTS/script_incremental_FICHIERS.sh
15 22 * * * /home/walid/SCRIPTS/script_incremental_MAILS.sh
30 22 * * * /home/walid/SCRIPTS/script_incremental_RH.sh
45 22 * * * /home/walid/SCRIPTS/script_incremental_SITE.sh
0 23 * * * /home/walid/SCRIPTS/script_incremental_TICKETS.sh

# Sauvegarde différentielle hebdomadaire des VM machines (Chaque dimanche à 02h00)
0 2 * * 0 /home/walid/SCRIPTS/script_differentielle_MACHINES.sh`}
                  </pre>
                </div>
              )}

              {/* Onglet 7: Procédures Restauration */}
              {activeProofTab === 'restore' && (
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Procédure Restauration Stratégie 1 (Incrémentale)
                    </h3>

                    <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 pl-2">
                      <li>
                        <span className="font-semibold text-white">Lancer le script depuis la VM Simulation :</span>
                        <code className="block mt-1 text-cyber-blue bg-base-700 p-1.5 rounded font-mono">
                          bash ~/SCRIPTS/script_restauration_incremental.sh
                        </code>
                      </li>
                      <li><span className="font-semibold text-white">Choisir le répertoire à restaurer :</span> FICHIERS / MAILS / RH / SITE / TICKETS</li>
                      <li><span className="font-semibold text-white">Sélectionner le type de sauvegarde :</span> COMPLETES ou INCREMENTALES</li>
                      <li><span className="font-semibold text-white">Options de restauration :</span> Fichier spécifique ou l'ensemble du répertoire</li>
                      <li>
                        <span className="font-semibold text-white">Vérification de la restauration :</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Les fichiers restaurés sont immédiatement rendus disponibles dans le répertoire <code className="text-cyber-emerald">/home/walid/RESTAU_INCREMENTALES</code>.
                        </p>
                      </li>
                    </ol>
                  </div>

                  <div className="p-5 rounded-xl bg-base-900 border border-white/5 space-y-3">
                    <h3 className="text-sm font-bold text-rose-400 flex items-center gap-2">
                      <RefreshCw className="w-4 h-4" />
                      Procédure Restauration Stratégie 2 (Différentielle)
                    </h3>

                    <ol className="list-decimal list-inside text-xs text-slate-300 space-y-2 pl-2">
                      <li>
                        <span className="font-semibold text-white">Exécuter le script dédié :</span>
                        <code className="block mt-1 text-cyber-blue bg-base-700 p-1.5 rounded font-mono">
                          bash ~/SCRIPTS/script_restauration_differentielle.sh
                        </code>
                      </li>
                      <li><span className="font-semibold text-white">Lister les sauvegardes disponibles :</span> Affichage interactif sous forme d'arborescence.</li>
                      <li><span className="font-semibold text-white">Définir la cible :</span> Saisir le chemin complet du fichier ou dossier machine à restaurer.</li>
                      <li>
                        <span className="font-semibold text-white">Contrôle de l'état :</span>
                        <p className="text-[11px] text-slate-400 mt-0.5">
                          Restauration dans <code className="text-cyber-emerald">/home/walid/RESTAU_DIFF</code> avec journalisation de l'événement (Succès ou Échec).
                        </p>
                      </li>
                    </ol>
                  </div>
                </div>
              )}

            </div>

            {/* Évaluation du Jury */}
            <div className="bg-base-800 border border-white/5 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-2xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald flex items-center justify-center">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-xl font-bold text-white tracking-tight">Évaluation du Jury</h2>
                  <p className="text-xs text-cyber-emerald font-medium">Soutenance de validation</p>
                </div>
              </div>

              <div className="bg-base-900 border border-white/5 rounded-xl p-5 space-y-4">
                
                <div className="flex items-center justify-between border-b border-white/5 pb-3">
                  <span className="text-sm font-semibold text-white">
                    Évaluateur : <span className="font-normal text-slate-200">Julien Drouvroy</span>
                  </span>
                  <span className="text-xs font-semibold text-cyber-emerald">
                    Projet Validé
                  </span>
                </div>

                <p className="text-xs md:text-sm italic text-slate-300 leading-relaxed">
                  « Très bonne soutenance, l'étudiant est en mesure de présenter son projet de manière professionnelle en respectant le timing. La stratégie de sauvegarde Rsync/SSH ainsi que les scripts d'automatisation et de restauration sont correctement mis en place. Les réponses aux questions sont précises et reflètent une bonne maîtrise. Bonne continuation pour la suite. »
                </p>

              </div>
            </div>

          </div>

          {/* Colonne Droite (Livrables & Outils) */}
          <div className="space-y-6">
            
            {/* Livrables */}
            <div className="bg-base-700/60 border border-white/5 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-white/5 pb-3">
                <div className="flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyber-blue" />
                  <h3 className="text-lg font-bold text-white">Livrables du Projet</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-base-900 text-slate-400 border border-white/5">
                  /docs/Projet9
                </span>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
                {deliverables.map((group, idx) => {
                  const IconComponent = group.icon;
                  return (
                    <div key={idx} className="p-3 rounded-xl bg-base-900/70 border border-white/5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className={`p-1.5 rounded-lg border text-xs ${group.color}`}>
                          <IconComponent className="w-3.5 h-3.5" />
                        </span>
                        <h4 className="text-xs font-bold text-white">{group.title}</h4>
                      </div>

                      <div className="space-y-1 pl-1">
                        {group.files.map((file, fIdx) => (
                          <div key={fIdx} className="flex items-center justify-between text-[11px] bg-base-700/90 hover:bg-base-700 p-1.5 rounded border border-white/5 transition-colors">
                            <span className="font-mono text-slate-300 truncate max-w-[140px]" title={file.name}>
                              {file.name}
                            </span>
                            <div className="flex items-center gap-1.5 shrink-0">
                              <a 
                                href={file.path} 
                                target="_blank" 
                                rel="noreferrer" 
                                className="text-slate-400 hover:text-cyber-blue transition-colors p-0.5"
                                title="Visualiser"
                              >
                                <Eye className="w-3.5 h-3.5" />
                              </a>
                              <a 
                                href={file.path} 
                                download 
                                className="text-slate-400 hover:text-cyber-blue transition-colors p-0.5"
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

            {/* Outils */}
            <div className="bg-base-700/60 border border-white/5 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyber-blue" />
                Environnement & Outils
              </h3>
              
              <div className="space-y-3">
                {tools.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-base-900/50 border border-white/5 flex items-center justify-between hover:border-white/10 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 p-1.5 rounded-lg bg-base-700 border border-white/5 shrink-0 flex items-center justify-center">
                        <img 
                          src={item.icon} 
                          alt={item.name} 
                          className="w-full h-full object-contain filter drop-shadow"
                        />
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white font-mono">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-base-700 text-slate-400 border border-white/5 shrink-0">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

          </div>

        </div>

        <CompetencesValidees
          items={[
            "Mettre en place une politique de sauvegarde incrémentale et différentielle avec Rsync/SSH",
            "Automatiser des sauvegardes et restaurations via des scripts Shell planifiés (crontab)",
            "Restaurer un système ou des données à partir d'une sauvegarde incrémentale ou différentielle",
            "Documenter une politique de sauvegarde et en présenter les choix techniques en soutenance",
          ]}
        />

      </div>

      <EvaluationJury
        evaluator={"Jury OpenClassrooms"}
        summary={"Soutenance orale de projet — politique de sauvegarde et restauration."}
        quote={"La politique de sauvegarde est coherente et le script Shell fonctionne correctement selon le cycle complet/incrementale/differentielle. Les competences ont ete validees lors de la soutenance."}
      />
      <ProjectFooterNav current={9} />
    </div>
  );
}