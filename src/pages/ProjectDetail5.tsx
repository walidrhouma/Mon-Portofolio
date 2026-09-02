import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  CheckCircle2, Clock, Check, GraduationCap,
  Lock, Terminal, ShieldAlert, Cpu, FolderArchive, FileCode, Key, Eye, File, Users, Cloud
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail5() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const servicesConfig = [
    { service: "Active Directory DS", port: "53 / 88 / 389 / 636", access: "Lan Interne", detail: "Annuaire centralisé, gestion des utilisateurs & GPO" },
    { service: "RODC (Nantes)", port: "389 / 636 (Lect)", access: "Site Distant", detail: "Contrôleur de domaine en lecture seule pour agence" },
    { service: "OpenVPN / pfSense", port: "1194 UDP", access: "WAN / VPN", detail: "Liaison chiffrée sécurisée inter-sites (Paris-Nantes)" },
    { service: "GPO & Scripts", port: "SMB 445 / SYSVOL", access: "Lan Interne", detail: "Application des règles de sécurité et de mappage" },
    { service: "PowerShell Backup", port: "HTTPS 443", access: "Cloud Google", detail: "Sauvegarde automatisée du volume D: vers Google Drive" },
    { service: "Hyperviseur (VirtualBox)", port: "Internal Net", access: "Maquette", detail: "Simulation complète du réseau hybride multi-sites" }
  ];

  const tools = [
    { 
      name: "Windows Server 2019", 
      desc: "OS Serveur, AD DS & Services de domaine",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg",
      badge: "OS / ADDS"
    },
    { 
      name: "Active Directory", 
      desc: "Gestion des UO, Utilisateurs et GPO",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/azure/azure-original.svg",
      badge: "Annuaire"
    },
    { 
      name: "pfSense / OpenVPN", 
      desc: "Pare-feu & VPN Site-à-Site",
      logo: "https://upload.wikimedia.org/wikipedia/commons/0/07/OpenVPN_logo.svg",
      badge: "Sécurité"
    },
    { 
      name: "PowerShell", 
      desc: "Automatisation et scripts de sauvegarde",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/powershell/powershell-original.svg",
      badge: "Scripting"
    },
    { 
      name: "Google Drive API", 
      desc: "Espace de stockage cloud distant",
      logo: "https://upload.wikimedia.org/wikipedia/commons/1/12/Google_Drive_icon_%282020%29.svg",
      badge: "Cloud"
    },
    { 
      name: "Oracle VirtualBox", 
      desc: "Hyperviseur pour maquette multi-sites",
      logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Virtualbox_logo.png",
      badge: "Virtualisation"
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
              Systèmes & Infrastructures Hybrides
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 60h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
           Raccordez une entité et ses postes de travail au SI de votre entreprise
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Mise en place complète de l'infrastructure informatique d'une entreprise multi-sites. Déploiement du domaine Active Directory principal, structuration des Unités d'Organisation, configuration d'un contrôleur de domaine en lecture seule (RODC) distant, stratégies de groupe (GPO), tunnel VPN pfSense et automatisation des sauvegardes vers Google Drive via PowerShell.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Windows Server 2019</h3>
            <p className="text-xs text-slate-400">AD DS & Contrôleur de Domaine</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">RODC & pfSense</h3>
            <p className="text-xs text-slate-400">Site Distant (Nantes)</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">PowerShell & Cloud</h3>
            <p className="text-xs text-slate-400">Sauvegarde Google Drive</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Soutenance officielle</p>
          </div>
        </div>

        {/* Grille principale : Contenu & Livrables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Actions & Matrice des Services */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section Contexte & Objectifs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Contexte et Périmètre de la Mission
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Dans le cadre du développement de l'entreprise, la mission demandait la conception et la simulation d'une infrastructure réseau distribuée entre un siège social (Paris) et une agence régionale (Nantes). L'objectif prioritaire était d'assurer l'authentification centralisée, la gestion granulaire des droits via les GPO, ainsi que la continuité d'activité par des sauvegardes déportées sur le Cloud.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
                <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Analyses Techniques & Choix d'Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">RODC vs DC Classique :</span>
                    Déploiement d'un contrôleur de domaine en lecture seule sur le site distant pour éviter tout risque de compromission de la base NTDS globale en cas de faille physique ou réseau à Nantes.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">Sauvegarde Hybride Cloud :</span>
                    Utilisation de scripts PowerShell combinés aux API REST Google Drive pour automatiser la redondance hors-site sans surcoût matériel.
                  </div>
                </div>
              </div>
            </div>

            {/* Section Actions Techniques & Réalisations */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Actions Techniques & Réalisations
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Installation de Windows Server 2019 & Maquette VirtualBox :",
                    desc: "Création de l'environnement virtuel avec plan d'adressage IP dédié pour les réseaux de Paris (Siège) et Nantes (Agence)."
                  },
                  {
                    title: "Déploiement Active Directory Domain Services (AD DS) :",
                    desc: "Configuration du domaine principal, création de l'arborescence des UO (Direction, IT, RH, Ventes) et provisioning des comptes utilisateurs."
                  },
                  {
                    title: "Stratégies de Groupe (GPO) & Hardening Sécurité :",
                    desc: "Mise en place des stratégies de mot de passe, restriction du panneau de configuration, déploiement automatisé de lecteurs réseaux et de scripts d'ouverture de session."
                  },
                  {
                    title: "Mise en place du Contrôleur RODC & VPN Inter-Sites pfSense :",
                    desc: "Configuration d'un RODC à Nantes connecté via un tunnel VPN pfSense sécurisé assurant la réplication unidirectionnelle des données d'annuaire."
                  },
                  {
                    title: "Script PowerShell & Sauvegarde Cloud Automatisée :",
                    desc: "Développement d'un script d'extraction et de compression du volume D: avec envoi chiffré vers un espace Google Drive dédié."
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

            {/* Section Tableau de la Cartographie des Services */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Matrice d'Infrastructure & Services Déployés</h2>
                  <p className="text-xs text-slate-400">Cartographie des rôles serveurs et protocoles associés</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">Service / Rôle</th>
                      <th className="py-3 px-4">Port(s)</th>
                      <th className="py-3 px-4">Périmètre</th>
                      <th className="py-3 px-4">Mesure de sécurité / Rôle</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {servicesConfig.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400">{row.service}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{row.port}</td>
                        <td className="py-3 px-4 font-medium text-white">{row.access}</td>
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
            
            {/* Boîte des Livrables Officiels du Projet */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  Livrables du Projet
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  /docs/Projet5
                </span>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* 1. Captures d'écran système & utilisateurs */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4" />
                    1. Validation PC & ADDS
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_1_copie_ecran_PC_062024.png">
                        1_copie_ecran_PC.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_1_copie_ecran_PC_062024.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_1_copie_ecran_PC_062024.png" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_2_copie_ecran_utilisateurs_062024.png">
                        2_copie_ecran_utilisateurs.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_2_copie_ecran_utilisateurs_062024.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_2_copie_ecran_utilisateurs_062024.png" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_3_copie_ecran_gpo_062024.png">
                        3_copie_ecran_gpo.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_3_copie_ecran_gpo_062024.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_3_copie_ecran_gpo_062024.png" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Sous-dossier VPN & Configuration pfSense */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" />
                    2. Dossier Config VPN Inter-Sites
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="config-pfsense1.openbank.xml">
                        pfsense1-openbank.xml
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/config-pfsense1-openbank-20240629192952.xml" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/config-pfsense1-openbank-20240629192952.xml" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="config-pfsense2.openbank.xml">
                        pfsense2-openbank.xml
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/config-pfsense2-openbank-20240629193134.xml" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/config-pfsense2-openbank-20240629193134.xml" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Pfsense_Nantes.png">
                        Pfsense_Nantes.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/Pfsense_Nantes.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/Pfsense_Nantes.png" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>

                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Pfsense_Paris.png">
                        Pfsense_Paris.png
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/Pfsense_Paris.png" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_4_copie_ecran_config_VPN_062024/Pfsense_Paris.png" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Script PowerShell */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Terminal className="w-4 h-4" />
                    3. Script Automatisation
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_5_script_powershell_062024.ps1">
                        5_script_powershell.ps1
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet5/Rhouma_Walid_5_script_powershell_062024.ps1" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet5/Rhouma_Walid_5_script_powershell_062024.ps1" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bloc Environnement & Outils */}
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
                        <img src={item.logo} alt={item.name} className="max-w-full max-h-full object-contain" />
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

            {/* Bloc Évaluation du Jury */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Évaluation du Jury</h3>
                  <p className="text-xs text-emerald-400 font-medium">Soutenance orale (20 min)</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Évaluateur :</strong> Jury OpenClassrooms
                </p>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Remarques de validation :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    "Projet validé ! Excellente maîtrise de l'architecture Active Directory et du contrôleur RODC distant. Le script de sauvegarde automatisé en PowerShell vers le Cloud est parfaitement opérationnel et répond à toutes les consignes."
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

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Installer et configurer un domaine Active Directory DS (AD DS) sous Windows Server 2019",
              "Mettre en place un contrôleur de domaine en lecture seule (RODC) pour un site distant",
              "Déployer et appliquer des stratégies de groupe (GPO) pour sécuriser le parc informatique",
              "Automatiser des sauvegardes récurrentes de données vers un stockage Cloud via PowerShell"
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