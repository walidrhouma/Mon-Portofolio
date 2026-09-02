import React, { useState } from 'react';
import { 
  FileText, Download, Network, Shield, Server, ArrowLeft, 
  CheckCircle2, Clock, ZoomIn, Check, GraduationCap,
  ExternalLink, Lock, Router, FileCode, ShieldAlert
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail2() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const vlanData = [
    { vlan: "VLAN 10", name: "R&D", subnet: "192.168.0.0/25", gateway: "192.168.0.1", type: "DHCP (126 hôtes)" },
    { vlan: "VLAN 20", name: "Commercial", subnet: "192.168.0.128/26", gateway: "192.168.0.129", type: "DHCP (62 hôtes)" },
    { vlan: "VLAN 30", name: "Wifi", subnet: "192.168.0.192/27", gateway: "192.168.0.193", type: "DHCP (30 hôtes)" },
    { vlan: "VLAN 40", name: "Caméras", subnet: "192.168.0.224/27", gateway: "192.168.0.225", type: "Statique (30 hôtes)" },
    { vlan: "VLAN 50", name: "Badge d'accès", subnet: "192.168.1.0/27", gateway: "192.168.1.1", type: "Statique (30 hôtes)" },
    { vlan: "VLAN 60", name: "IT", subnet: "192.168.1.32/27", gateway: "192.168.1.33", type: "DHCP (30 hôtes)" },
    { vlan: "VLAN 70", name: "RH et Comptabilité", subnet: "192.168.1.64/28", gateway: "192.168.1.65", type: "DHCP (14 hôtes)" },
    { vlan: "VLAN 80", name: "Impression", subnet: "192.168.1.80/28", gateway: "192.168.1.81", type: "Statique (14 hôtes)" },
    { vlan: "VLAN 90", name: "Direction", subnet: "192.168.1.96/29", gateway: "192.168.1.97", type: "DHCP (6 hôtes)" },
    { vlan: "VLAN 100", name: "DHCP", subnet: "192.168.1.104/30", gateway: "192.168.1.105", type: "Fixe" },
    { vlan: "VLAN 110", name: "DMZ", subnet: "192.168.1.108/30", gateway: "192.168.1.109", type: "Statique" },
    { vlan: "VLAN 120", name: "Interne", subnet: "192.168.1.112/30", gateway: "192.168.1.113", type: "Interne" },
    { vlan: "VLAN 130", name: "Externe", subnet: "192.168.1.116/30", gateway: "192.168.1.117", type: "Externe" },
    { vlan: "VLAN 140", name: "Admin", subnet: "192.168.1.120/30", gateway: "192.168.1.121", type: "Statique" }
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
              Réseaux &amp; Sécurité
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 90h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mettez en place et documentez le réseau local d'une startup
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Conception intégrale de l'architecture réseau physique et logique du bâtiment Hill Start situé au 130 rue de Lourmel à Paris. Le projet couvre l'ensemble des étages (du RDC au 5e) avec une segmentation rigoureuse par VLANs, un plan d'adressage CIDR optimisé et une stricte application des règles de sécurité.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Hill Start</h3>
            <p className="text-xs text-slate-400">Bâtiment 130 rue de Lourmel</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Cisco Packet Tracer</h3>
            <p className="text-xs text-slate-400">Simulation &amp; Topologie</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Dossier Technique</h3>
            <p className="text-xs text-slate-400">DAT v2.0 complet (PDF)</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Soutenance &amp; Normes ANSSI</p>
          </div>
        </div>

        {/* Grille principale : Contenu & Livrable */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Schémas, Plan d'adressage & Actions Techniques */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section Contexte & Objectifs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Contexte et Objectifs du Déploiement
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Ce projet a consisté à concevoir et documenter l'infrastructure réseau complète du nouveau bâtiment de la startup Hill Start. Destiné aux équipes techniques en charge du déploiement, le travail formalise la cartographie des baies de brassage, des switchs (Layers 2 et 3), des routeurs, ainsi que l'interconnexion sécurisée des différents départements (R&amp;D, Commercial, Direction, RH, IT, etc.).
              </p>

              {/* Blocs Architectures avec Aperçu Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Architecture Physique */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-1">Architecture Physique</h3>
                    <p className="text-xs text-slate-400">Répartition des switchs (16, 24, 48 ports), des bornes Wi-Fi et des liaisons fibre optique du RDC au 5e étage.</p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage("/docs/Projet2/architecture physique.png")}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-40 flex items-center justify-center"
                  >
                    <img 
                      src="/docs/Projet2/architecture physique.png" 
                      alt="Architecture Physique" 
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-medium text-cyan-400">
                      <ZoomIn className="w-4 h-4" /> Agrandir
                    </div>
                  </div>
                </div>

                {/* Architecture Logique */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-1">Architecture Logique</h3>
                    <p className="text-xs text-slate-400">Mise en place du routage inter-VLAN, de la DMZ, des zones d'administration et des règles de filtrage.</p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage("/docs/Projet2/architecture logique.png")}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-40 flex items-center justify-center"
                  >
                    <img 
                      src="/docs/Projet2/architecture logique.png" 
                      alt="Architecture Logique" 
                      className="object-cover w-full h-full opacity-80 group-hover:opacity-100 group-hover:scale-105 transition-all duration-300"
                    />
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-medium text-cyan-400">
                      <ZoomIn className="w-4 h-4" /> Agrandir
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Section Actions Techniques & Réalisations */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Actions Techniques &amp; Réalisations
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Conception de l'Architecture Réseau sous Cisco Packet Tracer :",
                    desc: "Modélisation topologique complète du bâtiment Hill Start (du RDC au 5e étage), configuration des équipements actifs (switchs, routeurs) et interconnexion des étages."
                  },
                  {
                    title: "Plan d'Adressage CIDR & Segmentation VLAN :",
                    desc: "Découpage rigoureux des sous-réseaux IP pour 14 VLANs dédiés (R&D, Commercial, Wi-Fi, Caméras, Badge d'accès, DMZ, Admin, etc.) garantissant l'isolation des flux."
                  },
                  {
                    title: "Rédaction du Dossier d'Architecture Technique (DAT) :",
                    desc: "Production documentaire aux standards professionnels (DAT v2.0) détaillant les choix d'infrastructure, les règles de nommage et les matrices de flux."
                  },
                  {
                    title: "Application des Recommandations ANSSI :",
                    desc: "Intégration des bonnes pratiques de cloisonnement logique, mise en place d'une DMZ et sécurisation des accès d'administration conformément au guide de cartographie de l'ANSSI."
                  },
                  {
                    title: "Modélisation Logique et Topologique :",
                    desc: "Création des schémas physiques et logiques détaillés sous Draw.io pour faciliter la compréhension et le déploiement opérationnel par les équipes techniques."
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

            {/* Section Tableau du Plan d'Adressage */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Plan d'Adressage Réseau &amp; Segmentation VLAN</h2>
                  <p className="text-xs text-slate-400">Découpage CIDR conforme au Dossier d'Architecture Technique (DAT v2.0)</p>
                </div>
              </div>

              {/* Tableau des VLANs */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">VLAN</th>
                      <th className="py-3 px-4">Nom</th>
                      <th className="py-3 px-4">Sous-réseau</th>
                      <th className="py-3 px-4">Passerelle</th>
                      <th className="py-3 px-4">Type</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {vlanData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400">{row.vlan}</td>
                        <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{row.subnet}</td>
                        <td className="py-3 px-4 font-mono text-slate-400">{row.gateway}</td>
                        <td className="py-3 px-4">
                          <span className="px-2 py-0.5 text-xs rounded-md bg-slate-800 text-slate-300 border border-slate-700">
                            {row.type}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Livrable, Outils, Encadré ANSSI & Évaluation */}
          <div className="space-y-6">
            
            {/* Boîte de téléchargement du DAT */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Livrable du Projet
              </h3>

              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col gap-4 group">
                <div className="flex items-start gap-3">
                  <div className="p-2.5 rounded-lg bg-red-500/10 text-red-400 border border-red-500/20 shrink-0">
                    <FileText className="w-6 h-6" />
                  </div>
                  <div className="space-y-1">
                    <h4 className="text-sm font-semibold text-white group-hover:text-cyan-400 transition-colors">
                      Dossier d'Architecture Technique (DAT)
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed">
                      Infrastructure réseau du bâtiment Hill Start (v2.0). Cartographies physiques, logiques et plan d'adressage.
                    </p>
                  </div>
                </div>

                <a
                  href="/docs/Projet2/Rhouma_Walid_DAT_042024.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all text-xs font-semibold"
                >
                  <Download className="w-4 h-4" />
                  Télécharger le DAT (PDF)
                </a>
              </div>
            </div>

            {/* Bloc Référentiel de Sécurité ANSSI */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-cyan-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Conformité &amp; Sécurité</h3>
                  <p className="text-xs text-cyan-400 font-medium">Référentiel officiel ANSSI</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Ce projet intègre les recommandations de l'Agence Nationale de la Sécurité des Systèmes d'Information (ANSSI) pour le cloisonnement logique et le zonage du SI.
              </p>

              <a 
                href="https://messervices.cyber.gouv.fr/guides/cartographie-du-systeme-dinformation"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    Guide de Cartographie SI
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-slate-400 block">Consulter le guide officiel en ligne</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                  🛡️
                </div>
              </a>
            </div>

            {/* Bloc Environnement & Outils */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement &amp; Outils
              </h3>
              
              <div className="space-y-3">
                {[
                  { 
                    name: "Cisco Packet Tracer", 
                    desc: "Simulation & Topologie",
                    icon: <Router className="w-5 h-5 text-cyan-400" />,
                    badge: "Cisco"
                  },
                  { 
                    name: "IPv4 / CIDR / VLANs", 
                    desc: "Plan d'adressage & Segmentation",
                    icon: <Network className="w-5 h-5 text-emerald-400" />,
                    badge: "Protocole"
                  },
                  { 
                    name: "Draw.io / Diagrams", 
                    desc: "Schémas physiques et logiques",
                    icon: <FileCode className="w-5 h-5 text-amber-400" />,
                    badge: "Design"
                  },
                  { 
                    name: "Documentation Technique", 
                    desc: "DAT v2.0 & Rédaction",
                    icon: <FileText className="w-5 h-5 text-indigo-400" />,
                    badge: "DOC"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                        {item.icon}
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
                  <p className="text-xs text-emerald-400 font-medium">Soutenance orale de projet</p>
                </div>
              </div>

              <div className="space-y-3 text-xs text-slate-300">
                <div className="space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Compétences évaluées :</span>
                  <div className="space-y-1 pl-1">
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>1. Concevoir la cartographie d'un réseau : <strong className="text-white">Validé</strong> (Schéma logique OK, Schéma physique OK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>2. Construire un réseau TCP-IP : <strong className="text-white">Validé</strong> (Plan d'adressage OK)</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>3. Formaliser les procédures via une documentation technique : <strong className="text-white">Validé</strong> (DAT bien complété)</span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-cyan-400 block">Livrables :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Points forts : Livrables OK, timing de présentation OK, connaissances OK, réponses aux questions OK. Pas de stress visible, très fluide.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Soutenance :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Remarques : Très bonne soutenance, travail fait sérieusement ! Les connaissances sont bien présentes.
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
              "Concevoir et documenter l'architecture d'un réseau local d'entreprise",
              "Mettre en place une segmentation rigoureuse par VLANs et un plan d'adressage IP optimisé",
              "Appliquer les règles de sécurité et les normes de cloisonnement (recommandations ANSSI)",
              "Modéliser les topologies physiques et logiques sous des outils de simulation et de conception"
            ].map((competence, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{competence}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal d'agrandissement d'image */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Fermer ✕
            </button>
            <img 
              src={selectedImage} 
              alt="Aperçu agrandi" 
              className="object-contain w-full max-h-[80vh] rounded-lg"
            />
          </div>
        </div>
      )}
    </div>
  );
}