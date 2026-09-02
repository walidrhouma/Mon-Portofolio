import React, { useState } from 'react';
import { FileText, Download, Network, Shield, Server, ArrowLeft, CheckCircle2, Clock, ZoomIn, Check, Folder, Eye, GraduationCap, ShieldAlert } from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail3() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Données réelles exactes de l'infrastructure BeeSafe
  const architectureData = [
    { machine: "Machine Cliente", os: "Windows 11", ip: "192.168.0.19", service: "Client Web / Postes Utilisateurs", port: "-", role: "Poste de travail client pour l'accès aux services web et d'administration" },
    { machine: "Serveur Web", os: "Debian 12", ip: "192.168.0.20", service: "Apache 2.4.59 / PHP 8.2.18", port: "80 / TCP", role: "Hébergement du site www.beesafe.co & moteur d'exécution PHP" },
    { machine: "Serveur SQL", os: "Debian 12", ip: "192.168.0.30", service: "MariaDB 15.1", port: "3306 / TCP", role: "Base de données distante (Accès restreint au serveur Web)" },
    { machine: "Serveur DNS", os: "Debian 12", ip: "192.168.0.40", service: "Bind9", port: "53 / UDP", role: "Résolution de noms locale pour la zone beesafe.co" }
  ];

  // Stack technique avec logos CDN SVG / SimpleIcons
  const stackTools = [
    {
      name: "Debian 12",
      desc: "Système d'exploitation des serveurs",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/debian/debian-original.svg"
    },
    {
      name: "Windows 11",
      desc: "Système de la machine cliente",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/windows8/windows8-original.svg"
    },
    {
      name: "Apache 2.4.59",
      desc: "Serveur Web",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/apache/apache-original.svg"
    },
    {
      name: "PHP 8.2.18",
      desc: "Exécutable et moteur PHP",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg"
    },
    {
      name: "MariaDB 15.1",
      desc: "Système de gestion de base de données (Port 3306)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/mariadb/mariadb-original.svg"
    },
    {
      name: "Bind9 DNS",
      desc: "Serveur DNS (Port 53 UDP)",
      logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linux/linux-original.svg"
    }
  ];

  const deliverables = [
    {
      folderTitle: "Livrable 1 : Configuration DNS (Bind9)",
      folderName: "Rhouma_Walid_1_configurations_DNS_052024",
      files: [
        { name: "db.0.168.192.txt", desc: "Fichier de zone inverse (Reverse DNS)" },
        { name: "db.beesafe.co.txt", desc: "Fichier de zone directe (www.beesafe.co)" },
        { name: "named.conf.local.txt", desc: "Déclaration des zones locale et inverse" },
        { name: "named.conf.options.txt", desc: "Options globales et forwarders DNS" }
      ]
    },
    {
      folderTitle: "Livrable 2 : Configuration HTTPD (Apache)",
      folderName: "Rhouma_Walid_2_configuration_HTTPD_052024",
      files: [
        { name: "apache2.conf.txt", desc: "Configuration globale du serveur web Apache2" },
        { name: "beesafe.co.txt", desc: "Fichier VirtualHost pour le site www.beesafe.co" }
      ]
    },
    {
      folderTitle: "Livrable 3 : Scripts SQL & Droits",
      folderName: "Rhouma_Walid_3_script_SQL_052024",
      files: [
        { name: "script.sql", desc: "Création BDD, tables et compte d'exploitation CRUD" }
      ]
    },
    {
      folderTitle: "Livrable 4 : Configuration Sources PHP",
      folderName: "Rhouma_Walid_4_configuration_sources_052024",
      files: [
        { name: "vars.txt", desc: "Variables de connexion à la BDD distante (vars.php)" }
      ]
    },
    {
      folderTitle: "Livrable 5 : Schéma d'Architecture",
      folderName: "Rhouma_Walid_5_schema_architecture_052024",
      files: [
        { name: "Schema_architecture_3_tiers.pdf", desc: "Cartographie réseau, flux, ports et adresses IP (PDF)" }
      ]
    }
  ];

  const handleDownload = async (fileUrl: string, fileName: string) => {
    try {
      const response = await fetch(fileUrl);
      if (!response.ok) throw new Error(`HTTP error! status: ${response.status}`);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = fileName;
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);
    } catch (error) {
      console.error("Erreur de téléchargement", error);
      window.open(fileUrl, '_blank');
    }
  };

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
              Projet Validé — OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 70h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Déployez une architecture n-tiers pour une PME
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Déploiement complet d'une infrastructure 3-tiers sous Debian 12 pour l'entreprise BeeSafe. Cloisonnement strict du Serveur Web (Apache 2.4.59 / PHP 8.2.18), de la Base de données (MariaDB 15.1) et du Serveur DNS (Bind9) interconnectés avec les clients Windows 11.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">BeeSafe</h3>
            <p className="text-xs text-slate-400">Contexte Startup Assurance</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Debian 12 + Win11</h3>
            <p className="text-xs text-slate-400">Apache 2.4, MariaDB 15.1, Bind9</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Architecture 3-Tiers</h3>
            <p className="text-xs text-slate-400">192.168.0.0/24</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Soutenance & Dossier technique</p>
          </div>
        </div>

        {/* Grille principale : Contenu & Livrables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Actions & Cartographie IP */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section Contexte & Objectifs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Contexte et Objectifs de la Mission
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Dans le cadre du déploiement de l'infrastructure informatique de la startup BeeSafe, la mission visait à mettre en place une architecture 3-tiers sécurisée sous Debian 12. Les différents services (Web, SGBD, DNS) sont isolés sur des machines distinctes du réseau local 192.168.0.0/24 afin d'assurer l'étanchéité des données et de limiter la surface d'attaque pour les machines clientes Windows 11.
              </p>

              {/* Aperçu du schéma d'architecture */}
              <div className="pt-2">
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-3">
                  <div className="flex justify-between items-center">
                    <h3 className="text-sm font-semibold text-cyan-400">Schéma d'Architecture 3-Tiers</h3>
                    <span className="text-xs text-slate-400">PDF / Draw.io</span>
                  </div>
                  <div 
                    onClick={() => setSelectedImage("/docs/Projet3/Rhouma_Walid_5_schema_architecture_052024/Schema_architecture_3_tiers.pdf")}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-48 flex items-center justify-center"
                  >
                    <div className="text-center p-4">
                      <FileText className="w-12 h-12 text-cyan-400 mx-auto mb-2 opacity-80 group-hover:scale-110 transition-transform" />
                      <span className="text-xs text-slate-300 font-medium block">Schéma d'Architecture 3-Tiers (PDF)</span>
                      <span className="text-[11px] text-cyan-400 mt-1 inline-flex items-center gap-1"><ZoomIn className="w-3.5 h-3.5" /> Aperçu rapide</span>
                    </div>
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
                    title: "Serveur DNS Bind9 (192.168.0.40 - Port 53 UDP) :",
                    desc: "Installation sous Debian 12, configuration des zones directe (beesafe.co) et inverse (0.168.192.in-addr.arpa) pour rediriger la clientèle Windows 11 vers les bons services."
                  },
                  {
                    title: "Serveur Web Apache 2.4.59 & PHP 8.2.18 (192.168.0.20 - Port 80 TCP) :",
                    desc: "Configuration du VirtualHost beesafe.co sous Debian 12, intégration du moteur PHP 8.2.18 et exposition sécurisée du port 80."
                  },
                  {
                    title: "Serveur de Base de Données MariaDB 15.1 (192.168.0.30 - Port 3306 TCP) :",
                    desc: "Déploiement sous Debian 12, exécution des scripts SQL de structure et création d'un utilisateur d'exploitation dédié limité aux droits CRUD."
                  },
                  {
                    title: "Sécurisation des Flux & Filtrage IP :",
                    desc: "Restriction des connexions MariaDB (port 3306) exclusivement à destination de l'adresse du serveur Web (192.168.0.20)."
                  },
                  {
                    title: "Recette & Interconnexion Client (192.168.0.19) :",
                    desc: "Validation de la résolution DNS et de l'accès applicatif global depuis un poste client de test sous Windows 11."
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

            {/* Section Tableau de découpage des Tiers avec les vraies adresses IP */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Network className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Cartographie Réseau & Matrice d'Adressage IP</h2>
                  <p className="text-xs text-slate-400">Plan d'adressage IP du réseau local (192.168.0.0/24)</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">Machines</th>
                      <th className="py-3 px-4">Système d'exploitation</th>
                      <th className="py-3 px-4">Adresse IP</th>
                      <th className="py-3 px-4">Service / Version</th>
                      <th className="py-3 px-4">Ports</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {architectureData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400">{row.machine}</td>
                        <td className="py-3 px-4 font-medium text-slate-200">{row.os}</td>
                        <td className="py-3 px-4 font-mono font-bold text-emerald-400">{row.ip}</td>
                        <td className="py-3 px-4 text-slate-300">{row.service}</td>
                        <td className="py-3 px-4 font-mono text-amber-400 font-semibold">{row.port}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Livrables & Outils */}
          <div className="space-y-6">
            
            {/* Boîte des Livrables avec consultation ET téléchargement */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-6">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Folder className="w-5 h-5 text-cyan-400" />
                Livrables du Projet
              </h3>

              <div className="space-y-6">
                {deliverables.map((deliv, groupIdx) => (
                  <div key={groupIdx} className="space-y-2">
                    <h4 className="text-xs font-bold text-cyan-400 uppercase tracking-wider flex items-center gap-1.5">
                      <Folder className="w-3.5 h-3.5 text-slate-400" />
                      {deliv.folderTitle}
                    </h4>

                    <div className="space-y-2 pl-2 border-l border-slate-800">
                      {deliv.files.map((fileItem, fileIdx) => {
                        const fileRelativePath = `/docs/Projet3/${deliv.folderName}/${fileItem.name}`;
                        const isPdf = fileItem.name.toLowerCase().endsWith('.pdf');
                        
                        const consultUrl = isPdf 
                          ? fileRelativePath 
                          : `/view-file.html?file=${encodeURIComponent(fileRelativePath)}`;

                        return (
                          <div 
                            key={fileIdx} 
                            className="p-3 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col gap-2.5"
                          >
                            <div className="flex items-start gap-2">
                              <FileText className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                              <div>
                                <h5 className="text-xs font-mono font-semibold text-white">{fileItem.name}</h5>
                                <p className="text-[11px] text-slate-400 leading-tight">{fileItem.desc}</p>
                              </div>
                            </div>

                            <div className="grid grid-cols-2 gap-2">
                              {/* Bouton Consulter */}
                              <a
                                href={consultUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-slate-800 text-slate-200 hover:bg-slate-700 hover:text-white transition-all text-[11px] font-medium"
                              >
                                <Eye className="w-3 h-3 text-cyan-400" />
                                Consulter
                              </a>

                              {/* Bouton Télécharger */}
                              <button
                                type="button"
                                onClick={() => handleDownload(fileRelativePath, fileItem.name)}
                                className="inline-flex items-center justify-center gap-1 px-2.5 py-1.5 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all text-[11px] font-semibold"
                              >
                                <Download className="w-3 h-3" />
                                Télécharger
                              </button>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc Environnement & Stack Réelle avec LOGOS */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement & Stack Réelle
              </h3>
              <div className="space-y-3">
                {stackTools.map((tool, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-center gap-3.5 hover:border-slate-700 transition-colors">
                    <div className="p-2 rounded-lg bg-slate-900/80 border border-slate-800 shrink-0 flex items-center justify-center w-10 h-10">
                      <img 
                        src={tool.logo} 
                        alt={`Logo ${tool.name}`} 
                        className="w-6 h-6 object-contain"
                      />
                    </div>
                    <div className="flex flex-col">
                      <span className="text-xs font-semibold text-cyan-400 font-mono">{tool.name}</span>
                      <span className="text-[11px] text-slate-400 leading-tight">{tool.desc}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc Évaluation du Jury (Placé en dessous d'Environnement & Stack Réelle) */}
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
                      <span>1. Installer les composantes d'un SI : <strong className="text-white">Validé</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>2. Modéliser un système d'information : <strong className="text-white">Validé</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-cyan-400 block">Livrables :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Points forts : les livrables sont conformes aux attentes. L'étudiant a effectué le travail demandé.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Soutenance :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Remarques : l'étudiant a bien présenté son travail. Il maîtrise le sujet.
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
              "Installer et configurer un système Linux Debian 12 et Windows 11",
              "Déployer la stack Web Apache 2.4.59, PHP 8.2.18, MariaDB 15.1 et Bind9",
              "Isoler les services réseau et appliquer les règles d'accès strictes (filtrage IP 3306/TCP)",
              "Modéliser et documenter l'architecture 3-tiers ainsi que les schémas de flux"
            ].map((competence, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{competence}</span>
              </div>
            ))}
          </div>
        </div>

      </div>

      {/* Modal d'agrandissement d'image / document */}
      {selectedImage && (
        <div 
          onClick={() => setSelectedImage(null)}
          className="fixed inset-0 z-50 bg-slate-950/80 backdrop-blur-md flex items-center justify-center p-4 cursor-pointer"
        >
          <div className="relative max-w-5xl w-full h-[85vh] bg-slate-900 border border-slate-800 rounded-2xl p-4 overflow-hidden" onClick={(e) => e.stopPropagation()}>
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 px-3 py-1.5 bg-slate-800 hover:bg-slate-700 text-white rounded-lg text-xs font-medium transition-colors"
            >
              Fermer ✕
            </button>
            <iframe 
              src={selectedImage} 
              title="Aperçu du document"
              className="w-full h-full rounded-lg border-0 bg-white"
            />
          </div>
        </div>
      )}
    </div>
  );
}