import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  CheckCircle2, Clock, Check, GraduationCap,
  Network, ShieldAlert, Cpu, FolderArchive, Eye,
  Terminal, Image as ImageIcon, ExternalLink
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail6() {
  const [activeTab, setActiveTab] = useState('switching');

  // Galerie d'images mise à jour avec les chemins exacts du projet
  const galleryTabs = {
    topology: [
      {
        title: "Topologie Globale Packet Tracer",
        src: encodeURI("/docs/Projet6/Capture d'écran Packet Tracer.png"),
        desc: "Vue générale de la maquette d'architecture multi-sites (Bâtiments Bleu, Vert, Rouge)."
      }
    ],
    services: [
      {
        title: "Serveur DNS Dual-Stack",
        src: encodeURI("/docs/Projet6/Capture d'écran serveur DNS.png"),
        desc: "Configuration des enregistrements A et AAAA pour impactinfluence.com."
      },
      {
        title: "Résolution DNS & Validation ACL",
        src: encodeURI("/docs/Projet6/DNS_ACL.png"),
        desc: "Tests de requêtes DNS et validations des accès autorisés."
      },
      {
        title: "Traduction d'Adresses (NAT / PAT)",
        src: encodeURI("/docs/Projet6/Ip NAT.png"),
        desc: "Configuration et table de traduction NAT Statique et Dynamique."
      }
    ],
    switching: [
      {
        title: "Agrégation EtherChannel LACP",
        src: encodeURI("/docs/Projet6/etherchannel switch distributed 1.png"),
        desc: "Lien trunk multi-interfaces (Port-Channel) sur switch de distribution."
      },
      {
        title: "Commandes Show Interface Trunk",
        src: encodeURI("/docs/Projet6/show interface trunk (switch_core).png"),
        desc: "Vérification du mode Trunk 802.1Q et des VLANs autorisés."
      },
      {
        title: "Filtrage VLAN & ACLs (v4 & v6)",
        src: encodeURI("/docs/Projet6/VLAN_ACL et VLAN_ACL_v6.png"),
        desc: "Segmentation des VLANs et application des ACLs Dual-Stack."
      }
    ],
    cli: [
      {
        title: "Show IP Interface Brief",
        src: encodeURI("/docs/Projet6/show ip interface brief.png"),
        desc: "État et adresses des interfaces des équipements réseau."
      },
      {
        title: "Table de Routage (Show IP Route)",
        src: encodeURI("/docs/Projet6/show ip route.png"),
        desc: "Vérification des routes apprises dynamiquement via OSPF."
      },
      {
        title: "Show Run - Routeur Bleu",
        src: encodeURI("/docs/Projet6/show run 1 (routeur bleu).png"),
        desc: "Extrait de la configuration active du Routeur Bleu."
      },
      {
        title: "Show Run - Switch Core 1",
        src: encodeURI("/docs/Projet6/show run switch_core 1.png"),
        desc: "Configuration running-config du commutateur cœur de réseau."
      }
    ]
  };

  const servicesConfig = [
    { service: "Routage OSPF", port: "Protocole IP 89", access: "Bâtiments Bleu, Vert, Rouge", detail: "Routage dynamique IPv4 & IPv6 multi-zones inter-routeurs" },
    { service: "Agrégation LACP (EtherChannel)", port: "Lien 4-ports Trunk", access: "Switchs Distributed", detail: "Optimisation de la bande passante et haute disponibilité" },
    { service: "VLANs & Segmentation", port: "802.1Q (VLAN 10 à 60)", access: "LAN Interne", detail: "Isolation des flux Direction, RH, Commerciaux, IT, Finance, DNS" },
    { service: "Services DHCP & DNS", port: "UDP 53 / 67 / 68", access: "LAN & Web Server", detail: "Attribution IP dynamique par VLAN & Résolution ImpactInfluence.com" },
    { service: "NAT Statique & Dynamique", port: "PAT / Static 1:1", access: "WAN / Internet", detail: "NAT surchargé pour accès Web + NAT Statique pour serveur Web" },
    { service: "ACLs & Hardening ANSSI", port: "Filtrage IP / Ports", access: "Toutes interfaces", detail: "Restrictions inter-VLAN & préconisations de cybersécurité" }
  ];

  const tools = [
    { 
      name: "Cisco Packet Tracer", 
      desc: "Simulateur & Maquettage d'infrastructure réseau",
      type: "img",
      icon: "https://cdn.simpleicons.org/cisco/1BA0D7",
      badge: "Simulation"
    },
    { 
      name: "Cisco IOS", 
      desc: "Système d'exploitation des switchs et routeurs Cisco",
      type: "img",
      icon: "https://cdn.simpleicons.org/cisco/049FD9",
      badge: "Équipements"
    },
    { 
      name: "Routage OSPF & LACP", 
      desc: "Protocole de routage dynamique & EtherChannel",
      type: "img",
      icon: "https://cdn.simpleicons.org/wireshark/167EC4",
      badge: "Protocoles"
    },
    { 
      name: "Référentiel ANSSI", 
      desc: "Recommandations relatives à l'administration sécurisée",
      type: "anssi",
      badge: "Cybersécurité"
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
              Volume : 80h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Configurez des services réseaux et des équipements d'interconnexion
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Conception et configuration complète de l'architecture réseau d'un nouveau complexe d'entreprise composé de trois bâtiments (Bleu, Vert, Rouge) pour la société Impact Influence. Implémentation d'un plan d'adressage IP (IPv4/IPv6), routage dynamique OSPF, agrégation LACP, VLANs, services DHCP/DNS, NAT et durcissement des accès selon les recommandations de l'ANSSI sur Cisco Packet Tracer.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">OSPF IPv4 / IPv6</h3>
            <p className="text-xs text-slate-400">Routage dynamique multi-sites</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">VLANs & LACP</h3>
            <p className="text-xs text-slate-400">Segmentation & Agrégation 4 liens</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">NAT & Services</h3>
            <p className="text-xs text-slate-400">DHCP, DNS & Accès Internet / Web</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Évaluation par David Daussin</p>
          </div>
        </div>

        {/* Grille principale */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Actions, Galerie & Matrice */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Contexte */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Network className="w-5 h-5 text-cyan-400" />
                Contexte et Périmètre de la Mission
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                En pleine croissance, l'entreprise <strong>Impact Influence</strong> a déménagé dans de nouveaux locaux répartis sur trois bâtiments voisins (Bleu, Vert, Rouge). En tant qu'administrateur réseau, la mission consistait à maquetter et configurer l'ensemble des équipements d'interconnexion (routeurs, switchs Distributed et Access), à segmenter les services par VLANs, à automatiser l'adressage IP via DHCP/DNS et à assurer un accès sécurisé à Internet et au serveur Web d'entreprise.
              </p>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
                <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Analyses Techniques & Choix d'Architecture
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">Routage OSPF & Load-Balancing :</span>
                    Utilisation du protocole dynamique OSPF en IPv4 et IPv6 combiné à l'agrégation de liens LACP sur 4 cartes entre switchs Distributed pour garantir haute disponibilité et tolérance aux pannes.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">Stratégie de Sécurité ANSSI :</span>
                    Mise en place d'ACLs strictes autorisant le service IT sur l'ensemble des sous-réseaux tout en isolant les VLANs métiers (Direction, RH, Commerciaux, Finance) et en protégeant la zone DNS.
                  </div>
                </div>
              </div>
            </div>

            {/* Actions Techniques */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Actions Techniques & Réalisations
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Calcul du Plan d'Adressage IP (IPv4 & IPv6) :",
                    desc: "Découpage du sous-réseau attribué 132.186.32.32/27 en sous-réseaux optimisés pour chaque VLAN (Direction, RH, Commerciaux, IT, Finance, DNS) et interconnexions."
                  },
                  {
                    title: "Maquettage Complet sous Cisco Packet Tracer (.pkt) :",
                    desc: "Saisie de la topologie physique et logique comprenant l'ensemble des équipements d'interconnexion pour les bâtiments Bleu, Vert et Rouge."
                  },
                  {
                    title: "Configuration de la Segmentation VLAN & EtherChannel (LACP) :",
                    desc: "Configuration des liens Trunk 802.1Q, création des VLANs et agrégation de 4 liens physiques LACP entre les switchs de distribution."
                  },
                  {
                    title: "Déploiement du Routage Dynamique OSPF & Services Réseaux :",
                    desc: "Configuration d'OSPFv2 et OSPFv3, attribution DHCPv4 par VLAN, résolution DNS pour ImpactInfluence.com et NAT statique/dynamique pour la sortie WAN."
                  },
                  {
                    title: "Rédaction du Document de Préconisations Cybersécurité ANSSI :",
                    desc: "Analyse et rédaction de 3 recommandations techniques adaptées au contexte de l'entreprise basées sur le guide d'administration sécurisée de l'ANSSI."
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

            {/* Preuves d'Implémentation Technique */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 border-b border-slate-800 pb-4">
                <div className="flex items-center gap-3">
                  <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                    <ImageIcon className="w-6 h-6" />
                  </div>
                  <div>
                    <h2 className="text-lg md:text-xl font-bold text-white">Preuves d'Implémentation Technique</h2>
                    <p className="text-xs text-slate-400">Captures officielles issues du projet Packet Tracer (11 vues)</p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-1 bg-slate-950/80 p-1 rounded-xl border border-slate-800 text-xs font-mono">
                  <button 
                    onClick={() => setActiveTab('topology')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'topology' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                  >
                    Topologie
                  </button>
                  <button 
                    onClick={() => setActiveTab('services')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'services' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                  >
                    DNS & NAT
                  </button>
                  <button 
                    onClick={() => setActiveTab('switching')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'switching' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                  >
                    Switching & ACLs
                  </button>
                  <button 
                    onClick={() => setActiveTab('cli')}
                    className={`px-3 py-1.5 rounded-lg transition-all ${activeTab === 'cli' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30' : 'text-slate-400 hover:text-white'}`}
                  >
                    Commandes CLI
                  </button>
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {galleryTabs[activeTab as keyof typeof galleryTabs].map((img, idx) => (
                  <div key={idx} className={`p-4 rounded-xl bg-slate-950/60 border border-slate-800 space-y-3 ${galleryTabs[activeTab as keyof typeof galleryTabs].length === 1 ? 'md:col-span-2' : ''}`}>
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
                        className="w-full h-auto max-h-[350px] object-contain hover:scale-102 transition-transform duration-300"
                      />
                    </div>
                    <p className="text-xs text-slate-400">{img.desc}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* Matrice des services */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Matrice des Configurations & Services Réseaux</h2>
                  <p className="text-xs text-slate-400">Synthèse des protocoles d'interconnexion et mécanismes de sécurité</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">Service / Protocole</th>
                      <th className="py-3 px-4">Port / Type</th>
                      <th className="py-3 px-4">Périmètre</th>
                      <th className="py-3 px-4">Rôle & Mesure de sécurité</th>
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
            
            {/* Livrables Officiels */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  Livrables du Projet
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  /docs/Projet6
                </span>
              </div>

              <div className="space-y-3 pt-2">
                
                {/* 1. Configuration des Équipements */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <FileText className="w-4 h-4" />
                    1. Configuration des Équipements
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_1_config_equipements_082024.pdf">
                        1_config_equipements.pdf
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet6/Rhouma_Walid_1_config_equipements_082024.pdf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet6/Rhouma_Walid_1_config_equipements_082024.pdf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 2. Maquette Packet Tracer */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Network className="w-4 h-4" />
                    2. Maquette Packet Tracer
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_2_maquette_packet_tracer.pkt">
                        2_maquette_packet_tracer.pkt
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet6/Rhouma_Walid_2_maquette_packet_tracer.pkt" download className="text-slate-400 hover:text-emerald-400" title="Télécharger le fichier PKT"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* 3. Préconisations techniques (Titre renommé) */}
                <div className="p-3 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Shield className="w-4 h-4" />
                    3. Préconisations techniques
                  </span>
                  
                  <div className="space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300 truncate max-w-[170px]" title="Rhouma_Walid_3_preconisations_082024.pdf">
                        3_preconisations.pdf
                      </span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet6/Rhouma_Walid_3_preconisations_082024.pdf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet6/Rhouma_Walid_3_preconisations_082024.pdf" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
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
                        {item.type === 'anssi' ? (
                          <svg className="w-full h-full text-blue-400" viewBox="0 0 24 24" fill="currentColor">
                            <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-5.45 9-12V5l-9-4zm0 2.18l7 3.12v4.7c0 4.54-3.14 8.78-7 9.82-3.86-1.04-7-5.28-7-9.82V6.3l7-3.12zM11 7v6h2V7h-2zm0 8v2h2v-2h-2z"/>
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
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Évaluation du Jury */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Évaluation du Jury</h3>
                  <p className="text-xs text-emerald-400 font-medium">Soutenance orale (30 min)</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Évaluateur :</strong> David Daussin 
                </p>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Remarques sur l'évaluation :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    "La soutenance est fluide et respecte le temps imparti. Une présentation du travail effectué est proposée tout en justifiant les choix faits. Le déroulé de la présentation est cohérent, logique et dynamique. L'ensemble est très structuré et didactique. Les réponses aux questions sont pertinentes."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Compétences RNCP Validées */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Compétences RNCP Validées lors de la Soutenance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Configurer des services réseaux (DNS, DHCP, NAT) et valider la résolution de nom et l'accès Web",
              "Mettre en place un réseau local virtuel (VLANs, liens Trunk 802.1Q et règles d'isolation)",
              "Configurer des équipements d'interconnexion (Routeurs & Switchs avec OSPF IPv4/IPv6)",
              "Optimiser des performances réseau (Agrégation LACP) & appliquer 3 préconisations ANSSI"
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