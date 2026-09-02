import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  Clock, GraduationCap, Activity, FolderArchive, 
  Eye, Terminal, CheckCircle, Network, 
  CheckCircle2, Lock, Award, ExternalLink,
  AlertTriangle, ThumbsUp, UserCheck, HardDrive, Cpu, Calendar, LayoutGrid
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail10() {
  const [activeProofTab, setActiveProofTab] = useState<'architecture' | 'baie' | 'plan' | 'doc' | 'anssi'>('architecture');
  const [archSubTab, setArchSubTab] = useState<'initial' | 'target'>('target');

  // Helper pour encoder proprement les chemins d'accès aux fichiers PDFs
  const getDocPath = (folder: string, fileName: string) => 
    `/docs/Projet10/${encodeURIComponent(folder)}/${encodeURIComponent(fileName)}`;

  // Helper pour les visuels d'illustrations issus de Captures
  const getCapturePath = (fileName: string) =>
    `/docs/Projet10/Captures/${encodeURIComponent(fileName)}`;

  // Onglets de la section Preuves d'Implémentations Techniques
  const proofTabs = [
    { id: 'architecture', label: 'Cartographie & Architecture', icon: Network },
    { id: 'baie', label: 'Baie de Brassage Hardware', icon: Server },
    { id: 'plan', label: 'Planning & Devis Réel', icon: Calendar },
    { id: 'doc', label: 'Guide Utilisateurs & Admin', icon: Lock },
    { id: 'anssi', label: 'Conformité & Guides ANSSI', icon: Shield },
  ] as const;

  // Actions Techniques & Réalisations
  const technicalActions = [
    {
      title: "Redesign de l'Architecture Réseau & Segmentation VLAN :",
      description: "Mise en place de VLANs dédiés (Administration, Direction, Laboratoires, Études, Technique, DMZ, Production, ToIP, Impressions) et déploiement d'ACLs inter-VLAN selon le principe du moindre privilège (Règles ANSSI R5, R16, R19)."
    },
    {
      title: "Déploiement du Pare-feu Stormshield SN510 & DMZ :",
      description: "Filtrage périmétrique avancé avec inspection SSL, module IPS/IDS pour la prévention d'intrusions, Proxy web filtrant et concentrateur VPN SSL/TLS avec authentification forte (MFA) et certificats OpenSSL (Règles ANSSI R20, R21, R24)."
    },
    {
      title: "Infrastructure de Virtualisation, Stockage & Sauvegardes :",
      description: "Intégration d'un serveur HPE ProLiant DL20 Gen11 (VMs WSUS, Rsyslog, Rsync, AD/DNS) et d'un serveur de stockage dédié HPE ProLiant ML30 Gen11. Modernisation des OS (Hyperviseur, Windows Server 2022, migration Debian 8) (Règles ANSSI R22, R45, R46, R47)."
    },
    {
      title: "Sécurisation de l'Administration & Postes Dédiés :",
      description: "Déploiement d'un poste Dell Optiplex 7020 strictly réservé aux tâches d'administration sur un VLAN 10 hermétique, avec accès SSH/RDP journalisés et fermeture automatique des sessions (Règles ANSSI R9, R15)."
    }
  ];

  // Livrables du Projet 10
  const deliverables = [
    {
      title: "1. Cartographie du SI",
      icon: Network,
      color: "text-cyan-400 border-cyan-800/60 bg-cyan-950/40",
      files: [
        { 
          name: "cartographie.pdf", 
          path: getDocPath("Rhouma_Walid_1_cartographie_022025", "cartographie.pdf") 
        }
      ]
    },
    {
      title: "2. Plan Projet & Devis",
      icon: FileText,
      color: "text-emerald-400 border-emerald-800/60 bg-emerald-950/40",
      files: [
        { 
          name: "plan_projet.pdf", 
          path: getDocPath("Rhouma_Walid_2_plan_projet_022025", "plan_projet.pdf") 
        }
      ]
    },
    {
      title: "3. Documentation Utilisateurs & Admin",
      icon: Lock,
      color: "text-amber-400 border-amber-800/60 bg-amber-950/40",
      files: [
        { 
          name: "Documentation utilisateurs et administrateurs.pdf", 
          path: getDocPath("Rhouma_Walid_3_documentation_022025", "Documentation utilisateurs et administrateurs.pdf") 
        }
      ]
    }
  ];

  // Guides ANSSI officiels
  const anssiGuides = [
    {
      title: "Recommandations relatives à l'administration sécurisée des SI",
      url: "https://messervices.cyber.gouv.fr/guides/recommandations-relatives-ladministration-securisee-des-si",
      appliedPart: "Mise en place du poste d'administration dédié (Dell Optiplex 7020), isolation du VLAN 10 Admin, bannissement des comptes partagés, accès SSH/RDP filtrés et sessions temporaires (Règles R9, R15, R16)."
    },
    {
      title: "Cartographie du Système d'Information",
      url: "https://messervices.cyber.gouv.fr/guides/cartographie-du-systeme-dinformation",
      appliedPart: "Modélisation de l'architecture réseau cible, identification des points de défaillance uniques (SPOF), segmentation VLANs et positionnement de la DMZ (Règles R5, R16, R19, R20)."
    },
    {
      title: "Les fondamentaux de la sauvegarde des SI",
      url: "https://messervices.cyber.gouv.fr/guides/fondamentaux-sauvegarde-systemes-dinformation",
      appliedPart: "Architecture de sauvegarde automatisée avec VM Rsync vers serveur de stockage dédié HPE ProLiant ML30 Gen11, transfert incrémental et tests de restauration réguliers (Règle R45)."
    }
  ];

  // Environnement & Outils
  const toolsList = [
    { 
      name: "Stormshield SN510", 
      desc: "Pare-feu matériel 12 ports, filtrage UTM, Proxy, IPS/IDS et VPN SSL",
      badge: "Sécurité / NGFW",
      icon: Shield,
      color: "text-red-400 bg-red-950/40 border-red-800/60"
    },
    { 
      name: "HPE ProLiant DL20 & ML30", 
      desc: "Serveur de virtualisation (DL20) et serveur de stockage dédié (ML30 Gen11)",
      badge: "Matériel / Serveurs",
      icon: Server,
      color: "text-emerald-400 bg-emerald-950/40 border-emerald-800/60"
    },
    { 
      name: "Rsyslog & Rsync", 
      desc: "Centralisation des journaux système en temps réel et sauvegardes sécurisées",
      badge: "Logs & Sauvegarde",
      icon: HardDrive,
      color: "text-cyan-400 bg-cyan-950/40 border-cyan-800/60"
    },
    { 
      name: "WSUS & Windows Server 2022", 
      desc: "Gestion centralisée des patchs de sécurité et contrôleur de domaine AD / DNS",
      badge: "Administration SI",
      icon: Cpu,
      color: "text-blue-400 bg-blue-950/40 border-blue-800/60"
    },
    { 
      name: "OpenSSL & MFA", 
      desc: "Chiffrement HTTPS/TLS, certificats numériques et authentification forte",
      badge: "Chiffrement & Accès",
      icon: Lock,
      color: "text-amber-400 bg-amber-950/40 border-amber-800/60"
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
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 60h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Sécurisez le réseau d'une grande entreprise (Open Pharma)
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Refonte globale de l'architecture réseau du département R&D (Angers) suite à une cyberattaque : modélisation d'une cartographie conforme aux recommandations de l'<strong>ANSSI</strong>, intégration du pare-feu Stormshield SN510, déploiement d'un plan projet de 8 768,02 € HT matériel et rédaction des guides d'exploitation pour utilisateurs et administrateurs.
          </p>
        </div>

        {/* Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Normes ANSSI</h3>
            <p className="text-xs text-slate-400">Cartographie, DMZ & VLANs</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Stormshield SN510</h3>
            <p className="text-xs text-slate-400">Pare-feu, IPS/IDS & Proxy</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">8 768,02 € HT</h3>
            <p className="text-xs text-slate-400">Devis respectant l'enveloppe de 10k€</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">HPE DL20 & ML30</h3>
            <p className="text-xs text-slate-400">Virtualisation & Stockage dédié</p>
          </div>
        </div>

        {/* Layout principal */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne Gauche */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contexte */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Activity className="w-5 h-5 text-cyan-400" />
                Contexte et Enjeux Métiers
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Située à Angers, l'entreprise de biotechnologie <strong>Open Pharma</strong> a subi une attaque informatique sur son SI. En collaboration avec Laurie Garrido (Responsable Technique), ma mission a consisté à sécuriser le département R&D (10 collaborateurs répartis en pôles Technique, Laboratoires et Études). Il a fallu éliminer les vulnérabilités majeures (absence de segmentation, pas de DMZ, administration sur postes standards, absence de centralisation des logs Rsyslog et sauvegardes non sécurisées) avec un budget matériel plafonné à 10 000 € HT.
              </p>
            </div>

            {/* Actions Techniques & Réalisations */}
            <div className="space-y-4">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
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
                    className="bg-[#09111e]/90 border border-slate-800/80 rounded-xl p-5 flex items-start gap-4 transition-all hover:border-slate-700/80"
                  >
                    <div className="p-2 rounded-lg bg-[#062128] border border-cyan-500/30 text-cyan-400 shrink-0 mt-0.5">
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
            <div className="bg-slate-900/80 border border-cyan-500/30 rounded-2xl p-6 md:p-8 backdrop-blur-md space-y-8 shadow-xl shadow-cyan-950/20">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-5">
                <div className="flex items-center gap-2">
                  <span className="p-2 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/30">
                    <Terminal className="w-6 h-6" />
                  </span>
                  <div>
                    <h2 className="text-2xl font-bold text-white tracking-tight">
                      Preuves d'Implémentations Techniques
                    </h2>
                    <p className="text-xs text-slate-400 mt-0.5">
                      Architecture réseau, intégration physique, planning projet et guides d'exploitation
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-mono px-3 py-1.5 rounded-lg bg-emerald-950/80 text-emerald-400 border border-emerald-700/60">
                  <CheckCircle className="w-3.5 h-3.5" />
                  Architecture Sec-ANSSI Validée
                </span>
              </div>

              {/* Menu d'onglets principaux */}
              <div className="bg-slate-950/90 p-2 rounded-xl border border-slate-800 shadow-inner">
                <p className="text-[11px] font-mono text-cyan-400/80 mb-2 px-1 uppercase tracking-wider font-semibold">
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
                            ? 'bg-cyan-500 text-slate-950 border-cyan-400 shadow-md shadow-cyan-500/20 scale-[1.02]'
                            : 'bg-slate-900/90 text-slate-300 border-slate-700/70 hover:bg-slate-800 hover:text-white hover:border-cyan-500/50'
                        }`}
                      >
                        <Icon className={`w-4 h-4 ${isActive ? 'text-slate-950' : 'text-cyan-400'}`} />
                        {tab.label}
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Onglet 1: Cartographie & Architecture (Avec switch Avant / Après) */}
              {activeProofTab === 'architecture' && (
                <div className="space-y-6">
                  {/* Sub-tabs pour permuter entre l'état initial et cible */}
                  <div className="flex items-center gap-2 border-b border-slate-800 pb-3">
                    <span className="text-xs text-slate-400 font-mono">Vue :</span>
                    <button
                      onClick={() => setArchSubTab('target')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all border ${
                        archSubTab === 'target'
                          ? 'bg-emerald-950/80 text-emerald-400 border-emerald-700'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                       Architecture Cible (Sécurisée ANSSI)
                    </button>
                    <button
                      onClick={() => setArchSubTab('initial')}
                      className={`px-3 py-1.5 rounded-lg text-xs font-bold font-mono transition-all border ${
                        archSubTab === 'initial'
                          ? 'bg-amber-950/80 text-amber-400 border-amber-700'
                          : 'bg-slate-900 text-slate-400 border-slate-800 hover:text-white'
                      }`}
                    >
                       Architecture Initiale (Vulnérable)
                    </button>
                  </div>

                  {archSubTab === 'target' ? (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h3 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                          <Network className="w-4 h-4" />
                          Cartographie Cible - Réseau Segmenté Open Pharma
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">VLANs, DMZ & ACLs ANSSI</span>
                      </div>

                      {/* Image Cible */}
                      <div className="rounded-lg overflow-hidden border border-slate-800 bg-white p-2">
                        <img 
                          src={getCapturePath("cartographie_image.png")} 
                          alt="Schéma de la cartographie réseau cible sécurisée"
                          className="w-full object-contain rounded-md max-h-[550px]"
                        />
                      </div>

                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-xs">
                        <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                          <span className="font-bold text-cyan-400">Segmentation VLANs Déployée :</span>
                          <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-0.5">
                            <li>VLAN 10 : Administration Dédiée (192.168.10.0/29)</li>
                            <li>VLANs Métiers : Direction (.20), Labo (.30), Études (.40), Technique (.50)</li>
                            <li>VLAN 80 : DMZ Serveurs Web & Mails (192.168.80.0/29)</li>
                            <li>VLAN 70/60 : Infra Admin & Production (AD/DNS, WSUS, Logs)</li>
                            <li>VLAN 100/110 : ToIP (.100) & Impressions (.110)</li>
                          </ul>
                        </div>
                        <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                          <span className="font-bold text-emerald-400">Contrôle des Flux & Pare-feu :</span>
                          <ul className="list-disc list-inside text-slate-300 text-[11px] space-y-0.5">
                            <li>Pare-feu Stormshield SN510 avec filtrage Proxy & IPS/IDS</li>
                            <li>VPN SSL (HTTPS 443) pour accès nomades chiffrés</li>
                            <li>Filtrage strict inter-VLANs via ACLs et routeurs internes</li>
                            <li>Poste d'admin isolé accédant uniquement en SSH (22) / RDP (3389)</li>
                          </ul>
                        </div>
                      </div>
                    </div>
                  ) : (
                    <div className="p-4 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                      <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                        <h3 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                          <AlertTriangle className="w-4 h-4" />
                          Cartographie Initiale - Vulnerabilités Avant Refonte
                        </h3>
                        <span className="text-[10px] font-mono text-slate-400">Architecture Plat / Sans DMZ</span>
                      </div>

                      {/* Image Initiale */}
                      <div className="rounded-lg overflow-hidden border border-slate-800 bg-white p-2">
                        <img 
                          src={getCapturePath("cartographie initiale image.png")} 
                          alt="Schéma de l'architecture réseau initiale vulnérable"
                          className="w-full object-contain rounded-md max-h-[550px]"
                        />
                      </div>

                      <div className="p-3 bg-slate-900/80 rounded-lg border border-amber-900/50 text-xs space-y-1">
                        <span className="font-bold text-amber-400">Défauts critiques identifiés :</span>
                        <p className="text-slate-300 text-[11px] leading-relaxed">
                          Réseau à plat sans isolation entre les départements, serveurs hébergés directement sur le LAN local, administration effectuée depuis des postes utilisateurs non sécurisés et absence de pare-feu dédié UTM/IPS.
                        </p>
                      </div>
                    </div>
                  )}
                </div>
              )}

              {/* Onglet 2: Baie de Brassage Hardware */}
              {activeProofTab === 'baie' && (
                <div className="space-y-6">
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                      <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                        <LayoutGrid className="w-4 h-4" />
                        Implantation des Nouveaux Équipements en Baie de Brassage
                      </h3>
                      <span className="text-[10px] font-mono text-slate-400">Rack Infra 19 pouces</span>
                    </div>

                    <p className="text-xs text-slate-300">
                      Ajout matériel validé au niveau du rack d'infrastructure : switch managé 48 ports (VLANs), pare-feu physique Stormshield SN510 et serveur HPE ProLiant DL20 dédié à la virtualisation.
                    </p>

                    {/* Image Baie de brassage */}
                    <div className="rounded-lg overflow-hidden border border-slate-800 bg-white p-3 flex justify-center">
                      <img 
                        src={getCapturePath("image baie brassage.png")} 
                        alt="Implantation physique des nouveaux équipements dans la baie de brassage"
                        className="max-h-[550px] object-contain rounded"
                      />
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-3 pt-2 text-xs">
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                        <span className="font-bold text-cyan-400">Switch 48 Ports :</span>
                        <p className="text-[11px] text-slate-300">Commutation de niveau 2/3 pour la répartition des 10 VLANs physiques/logiques.</p>
                      </div>
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                        <span className="font-bold text-red-400">Stormshield SN510 :</span>
                        <p className="text-[11px] text-slate-300">Boîtier UTM 1U (12 ports) assurant le routage, la protection IPS/IDS et les tunnels VPN.</p>
                      </div>
                      <div className="p-3 bg-slate-900/80 rounded-lg border border-slate-800 space-y-1">
                        <span className="font-bold text-emerald-400">HPE ProLiant DL20 :</span>
                        <p className="text-[11px] text-slate-300">Serveur rack 1U compact hébergeant les machines virtuelles critiques (WSUS, Rsyslog, Rsync, AD).</p>
                      </div>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 3: Planning & Devis Réel */}
              {activeProofTab === 'plan' && (
                <div className="space-y-6">
                  {/* Planning Gantt Image */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                      <Calendar className="w-4 h-4" />
                      Planification du Projet sur 6 Semaines (Diagramme de Gantt)
                    </h3>

                    <div className="rounded-lg overflow-hidden border border-slate-800 bg-white p-2">
                      <img 
                        src={getCapturePath("image planif.png")} 
                        alt="Planning détaillé du projet sur 6 semaines"
                        className="w-full object-contain rounded"
                      />
                    </div>
                  </div>

                  {/* Tableau Devis */}
                  <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                    <h3 className="text-sm font-bold text-emerald-400 flex items-center gap-2">
                      <FileText className="w-4 h-4" />
                      Devis Presta IT N° 20240210-001 (Matériel)
                    </h3>

                    <div className="overflow-x-auto">
                      <table className="w-full text-left text-xs font-mono border-collapse">
                        <thead>
                          <tr className="border-b border-slate-800 bg-slate-900 text-cyan-400">
                            <th className="p-2.5">Équipement / Désignation</th>
                            <th className="p-2.5">Quantité</th>
                            <th className="p-2.5">Prix Unit. HT</th>
                            <th className="p-2.5 text-right">Prix Total HT</th>
                          </tr>
                        </thead>
                        <tbody className="divide-y divide-slate-800/60 text-slate-300">
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Pare-feu Stormshield SN510 (12 ports)</td>
                            <td className="p-2.5">1</td>
                            <td className="p-2.5">3 248,00 €</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">3 248,00 €</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Serveur Virtualisation HPE ProLiant DL20 Gen11</td>
                            <td className="p-2.5">1</td>
                            <td className="p-2.5">1 990,00 €</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">1 990,00 €</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Serveur Stockage HPE ProLiant ML30 Gen11</td>
                            <td className="p-2.5">1</td>
                            <td className="p-2.5">1 974,00 €</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">1 974,00 €</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Poste Administration Dell Optiplex 7020</td>
                            <td className="p-2.5">1</td>
                            <td className="p-2.5">654,49 €</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">654,49 €</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Disques durs WD Blue 1 To SATA & Licences Win Server</td>
                            <td className="p-2.5">3 + 1</td>
                            <td className="p-2.5">Var.</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">832,28 €</td>
                          </tr>
                          <tr>
                            <td className="p-2.5 font-semibold text-white">Câblage (Cordon RJ45 Cat6 & Jarretière optique)</td>
                            <td className="p-2.5">16 + 1</td>
                            <td className="p-2.5">Var.</td>
                            <td className="p-2.5 text-right font-bold text-emerald-400">69,25 €</td>
                          </tr>
                          <tr className="bg-slate-900/90 font-bold text-white">
                            <td colSpan={3} className="p-2.5 text-right text-cyan-400">TOTAL MATÉRIEL FACTURÉ HT (Max 10 000 €) :</td>
                            <td className="p-2.5 text-right text-emerald-400 text-sm">8 768,02 € HT</td>
                          </tr>
                        </tbody>
                      </table>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 text-[11px] text-slate-400 space-y-1">
                      <span className="font-bold text-slate-200">Précision Ressources Humaines (20 Jours-Homme) :</span>
                      <p>
                        La main-d'œuvre nécessaire (installation, configuration VLAN/ACL, pare-feu, WSUS, Rsyslog, Rsync, tests et supervision) s'élève à 7 400 € HT mobilisés en interne/externe, mais non facturée au budget d'équipement.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 4: Documentation Utilisateurs & Admin */}
              {activeProofTab === 'doc' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-amber-400 flex items-center gap-2">
                    <Lock className="w-4 h-4" />
                    Procédures & Bonnes Pratiques d'Exploitation
                  </h3>

                  <div className="space-y-3 text-xs text-slate-300">
                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-cyan-400"></span>
                        1. Procédure Utilisateurs (MFA, VPN SSL, Proxy)
                      </h4>
                      <p className="text-[11px] text-slate-400 pl-4">
                        Complexité des mots de passe (12 car. min, maj, min, chiffres, spé, renouvellement 90j). Interdiction stricte des comptes partagés. Passage obligatoire par le Proxy pour le filtrage Web et VPN SSL chiffré de bout en bout pour le télétravail.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                        2. Procédure Administrateurs (Poste Optiplex 7020 & WSUS)
                      </h4>
                      <p className="text-[11px] text-slate-400 pl-4">
                        Connexions SSH/RDP effectuées exclusivement depuis le poste d'administration dédié. Gestion centralisée des patchs via WSUS, supervision des alertes Rsyslog en temps réel et tâches de sauvegarde automatisées via Rsync.
                      </p>
                    </div>

                    <div className="p-3 bg-slate-900/60 rounded-lg border border-slate-800 space-y-1">
                      <h4 className="font-bold text-white flex items-center gap-2">
                        <span className="w-2 h-2 rounded-full bg-amber-400"></span>
                        3. Sensibilisation & Phishing
                      </h4>
                      <p className="text-[11px] text-slate-400 pl-4">
                        Vérification systématique des expéditeurs de mails, blocage des périphériques USB non autorisés, verrouillage automatique de session et formations régulières aux cybermenaces.
                      </p>
                    </div>
                  </div>
                </div>
              )}

              {/* Onglet 5: Conformité & Guides ANSSI */}
              {activeProofTab === 'anssi' && (
                <div className="p-5 rounded-xl bg-slate-950 border border-slate-800 space-y-4">
                  <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                    <Shield className="w-4 h-4" />
                    Guides de Bonnes Pratiques ANSSI Référencés
                  </h3>

                  <div className="space-y-3">
                    {anssiGuides.map((guide, gIdx) => (
                      <div key={gIdx} className="p-3.5 bg-slate-900/60 rounded-lg border border-slate-800 space-y-2">
                        <div className="flex items-center justify-between">
                          <h4 className="text-xs font-bold text-white">{guide.title}</h4>
                          <a 
                            href={guide.url} 
                            target="_blank" 
                            rel="noreferrer" 
                            className="inline-flex items-center gap-1 text-[11px] font-mono text-cyan-400 hover:underline shrink-0"
                          >
                            Consulter
                            <ExternalLink className="w-3 h-3" />
                          </a>
                        </div>
                        <p className="text-[11px] text-slate-300">
                          <span className="font-semibold text-emerald-400">Parties appliquées : </span>
                          {guide.appliedPart}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

            </div>

            {/* Évaluation Officielle du Jury */}
            <div className="bg-[#0b1320] border border-slate-800/80 rounded-2xl p-6 md:p-8 space-y-6">
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800/80 pb-5">
                <div className="flex items-center gap-3">
                  <div className="p-3 rounded-2xl bg-[#092b26] border border-emerald-500/30 text-emerald-400 flex items-center justify-center">
                    <Award className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-xl font-bold text-white tracking-tight">Évaluation Officielle du Jury</h2>
                    <p className="text-xs text-slate-400">
                      Évaluateur : <span className="text-slate-200 font-medium">Yacouba Diabira</span> • Étudiant : <span className="text-cyan-400 font-medium">Walid Rhouma</span>
                    </p>
                  </div>
                </div>

                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-1.5 rounded-full bg-emerald-950/80 text-emerald-400 border border-emerald-700/60 self-start md:self-auto">
                  <CheckCircle className="w-4 h-4" />
                  Projet Validé (Durée soutenance : 35 mins)
                </span>
              </div>

              {/* Compétences Évaluées */}
              <div className="space-y-3">
                <h3 className="text-sm font-bold text-cyan-400 flex items-center gap-2">
                  <UserCheck className="w-4 h-4" />
                  Compétences Évaluées
                </h3>

                <div className="grid grid-cols-1 gap-3">
                  <div className="p-4 rounded-xl bg-[#050b14] border border-slate-800/70 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">1. Planifier un projet de sécurisation d'infrastructure</span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">✅ Validé</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      « L’étudiant a fourni un plan projet détaillé avec une liste exhaustive des matériels nécessaires, en adéquation avec la taille de l’entreprise et son budget. La planification des tâches est cohérente, incluant des tests avant déploiement, conformément aux exigences du projet. Le choix des équipements et leur rôle sont justifiés de manière claire. »
                    </p>
                  </div>

                  <div className="p-4 rounded-xl bg-[#050b14] border border-slate-800/70 space-y-1.5">
                    <div className="flex items-center justify-between">
                      <span className="text-xs font-bold text-white">2. Garantir le respect des règles de sécurité du SI</span>
                      <span className="text-[11px] font-bold text-emerald-400 bg-emerald-950/60 px-2 py-0.5 rounded border border-emerald-800/60">✅ Validé</span>
                    </div>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      « L’étudiant a correctement documenté les évolutions du SI en mentionnant les procédures de sécurité mises en place, notamment l’authentification forte, la segmentation du réseau, et les mises à jour des systèmes critiques. De plus, les recommandations de l’ANSSI sont bien intégrées, assurant la conformité aux bonnes pratiques de cybersécurité. »
                    </p>
                  </div>
                </div>
              </div>

              {/* Points Forts & Axes d'amélioration */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
                
                <div className="p-4 rounded-xl bg-[#061e19]/60 border border-emerald-800/50 space-y-2">
                  <h4 className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <ThumbsUp className="w-4 h-4" />
                    Points Forts des Livrables & Soutenance
                  </h4>
                  <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1">
                    <li>Respect des critères d’évaluation et intégration des recommandations ANSSI.</li>
                    <li>Planification détaillée et bien structurée.</li>
                    <li>Documentation claire et adaptée à différents profils d’utilisateurs.</li>
                    <li>Justification pertinente des choix techniques et des équipements.</li>
                    <li>Cartographie réseau complète et conforme aux exigences.</li>
                    <li>Temps imparti respecté, bonne gestion du stress et maîtrise du sujet.</li>
                  </ul>
                </div>

                <div className="p-4 rounded-xl bg-[#1e1506]/60 border border-amber-800/50 space-y-2">
                  <h4 className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <AlertTriangle className="w-4 h-4" />
                    Axes d'Amélioration Métier
                  </h4>
                  <ul className="list-disc list-inside text-[11px] text-slate-300 space-y-1">
                    <li>Ajouter des captures d’écran/diagrammes plus détaillés pour illustrer les procédures.</li>
                    <li>Renforcer la gestion des incidents de sécurité avec des scénarios concrets.</li>
                    <li>Clarifier l’impact des mesures de sécurité sur la performance réseau.</li>
                    <li>Approfondir la gestion des risques et tests de résilience face aux cyberattaques.</li>
                  </ul>
                </div>

              </div>

              {/* Conclusion du jury */}
              <div className="p-4 rounded-xl bg-[#050b14] border border-cyan-800/40 space-y-1 text-xs text-slate-300">
                <span className="font-bold text-cyan-400">Conclusion globale de l'évaluateur :</span>
                <p className="italic leading-relaxed">
                  « L’étudiant a bien respecté les exigences du projet et a démontré une bonne compréhension des enjeux de sécurité. Quelques améliorations mineures peuvent être apportées pour renforcer l’exhaustivité et l’illustration des concepts abordés. BRAVO pour la validation du projet et bonne continuation pour le parcours ! 🎉 »
                </p>
              </div>

            </div>

          </div>

          {/* Colonne Droite (Livrables & Outils) */}
          <div className="space-y-6">
            
            {/* Livrables */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between border-b border-slate-800 pb-3">
                <div className="flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  <h3 className="text-lg font-bold text-white">Livrables du Projet</h3>
                </div>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-950 text-slate-400 border border-slate-800">
                  /docs/Projet10
                </span>
              </div>

              <div className="space-y-3 max-h-[600px] overflow-y-auto pr-1">
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

            {/* Environnement & Outils */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement & Outils
              </h3>
              
              <div className="space-y-3">
                {toolsList.map((item, i) => {
                  const ToolIcon = item.icon;
                  return (
                    <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                      <div className="flex items-center gap-3">
                        <div className={`p-2 rounded-lg border shrink-0 flex items-center justify-center ${item.color}`}>
                          <ToolIcon className="w-4 h-4" />
                        </div>
                        <div>
                          <h4 className="text-xs font-semibold text-white font-mono">{item.name}</h4>
                          <p className="text-[11px] text-slate-400">{item.desc}</p>
                        </div>
                      </div>
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800 shrink-0 ml-2">
                        {item.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Liens Guides ANSSI en Sidebar */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-3">
              <h3 className="text-sm font-bold text-white flex items-center gap-2">
                <Shield className="w-4 h-4 text-cyan-400" />
                Guides Officiels ANSSI
              </h3>
              <div className="space-y-2">
                {anssiGuides.map((guide, idx) => (
                  <a
                    key={idx}
                    href={guide.url}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-2.5 rounded-lg bg-slate-950/60 border border-slate-800/80 hover:border-cyan-500/50 text-xs text-slate-300 hover:text-cyan-400 transition-all group"
                  >
                    <span className="truncate max-w-[200px]" title={guide.title}>
                      {guide.title}
                    </span>
                    <ExternalLink className="w-3.5 h-3.5 shrink-0 opacity-70 group-hover:opacity-100" />
                  </a>
                ))}
              </div>
            </div>

          </div>

        </div>

      </div>
    </div>
  );
}