import React, { useState } from 'react';
import { 
  FileText, Download, Shield, ArrowLeft, 
  CheckCircle2, Clock, ZoomIn, Check, GraduationCap,
  ExternalLink, Lock, FileCode, ShieldAlert, Bug, Terminal, AlertTriangle
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail11() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const vulnerabilitiesData = [
    { id: "VULN-01", name: "Injection SQL (Blind/Boolean-based)", severity: "Critique", cvss: "9.8", target: "Interface d'authentification Web", impact: "Accès total à la base de données et élévation de privilèges" },
    { id: "VULN-02", name: "Cross-Site Scripting (XSS Stické)", severity: "Élevée", cvss: "8.2", target: "Formulaire de commentaires / Profil", impact: "Vol de sessions administrateur et détournement de compte" },
    { id: "VULN-03", name: "Mauvaise configuration TLS/SSL", severity: "Moyenne", cvss: "5.3", target: "Serveur HTTPS (Ciphers obsolètes)", impact: "Écoute clandestine et attaques Man-in-the-Middle" },
    { id: "VULN-04", name: "Exposition d'interfaces d'administration", severity: "Moyenne", cvss: "6.1", target: "Portail de gestion /admin", impact: "Tentatives de bruteforce et reconnaissance facilitée" },
    { id: "VULN-05", name: "Divulgation d'informations (Information Disclosure)", severity: "Faible", cvss: "3.7", target: "En-têtes HTTP & Réponses d'erreur", impact: "Empreinte précise des versions applicatives et OS" }
  ];

  const deliverables = [
    {
      title: "Rapport d'Audit de Pénétration (Pentest)",
      desc: "Analyse détaillée des vulnérabilités, méthodologie OWASP et preuves de concept (PoC).",
      path: "/docs/Projet11/Rhouma_Walid_1_rapport_pentest_042025.pdf",
      type: "PDF",
      color: "border-red-500/20 bg-red-500/10 text-red-400"
    },
    {
      title: "Plan d'Action & Remédiation",
      desc: "Feuille de route priorisée et correctifs techniques pour la sécurisation du SI.",
      path: "/docs/Projet11/Rhouma_Walid_2_plan_action_042025.pdf",
      type: "PDF",
      color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
    },
    {
      title: "Présentation de Restitution (PDF)",
      desc: "Support visuel synthétique pour la restitution managériale et technique.",
      path: "/docs/Projet11/Rhouma_Walid_3_restitution_042025.pdf",
      type: "PDF",
      color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Présentation de Restitution (PPTX)",
      desc: "Format éditable du support de soutenance et des graphiques d'exposition.",
      path: "/docs/Projet11/Rhouma_Walid_3_restitution_042025.pptx",
      type: "PPTX",
      color: "border-amber-500/20 bg-amber-500/10 text-amber-400"
    }
  ];

  const toolsList = [
    {
      name: "Kali Linux",
      desc: "Distribution spécialisée en tests d'intrusion",
      badge: "OS Security",
      svg: (
        <svg className="w-5 h-5 fill-current text-cyan-400" viewBox="0 0 24 24">
          <path d="M11.9 2C6.4 2 2 6.4 2 11.9c0 4.4 2.9 8.2 6.9 9.4.5.1.7-.2.7-.5v-1.7c-2.8.6-3.4-1.4-3.4-1.4-.5-1.2-1.2-1.5-1.2-1.5-1-.7.1-.7.1-.7 1.1.1 1.7 1.1 1.7 1.1 1 1.7 2.6 1.2 3.2.9.1-.7.4-1.2.7-1.5-2.2-.3-4.6-1.1-4.6-5 0-1.1.4-2 1-2.7-.1-.3-.4-1.3.1-2.7 0 0 .8-.3 2.8 1a9.6 9.6 0 0 1 5.1 0c2-1.3 2.8-1 2.8-1 .5 1.4.2 2.4.1 2.7.7.7 1 1.6 1 2.7 0 3.9-2.4 4.7-4.7 5 .4.3.7.9.7 1.9v2.8c0 .3.2.6.7.5 4-1.3 6.9-5.1 6.9-9.5C21.8 6.4 17.4 2 11.9 2z"/>
        </svg>
      )
    },
    {
      name: "Burp Suite",
      desc: "Proxy d'interception & Audit Web OWASP",
      badge: "Web Audit",
      svg: (
        <svg className="w-5 h-5 fill-current text-orange-400" viewBox="0 0 24 24">
          <path d="M12 2L2 7v10l10 5 10-5V7L12 2zm0 2.8l7.2 3.6-7.2 3.6-7.2-3.6L12 4.8zM4 9.6l7 3.5v7.1l-7-3.5V9.6zm16 7.1l-7 3.5v-7.1l7-3.5v7.1z"/>
        </svg>
      )
    },
    {
      name: "Metasploit",
      desc: "Framework d'exploitation et PoC",
      badge: "Exploitation",
      svg: (
        <svg className="w-5 h-5 fill-current text-indigo-400" viewBox="0 0 24 24">
          <path d="M12 1L3 5v6c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V5l-9-4zm0 10.99h7c-.53 4.12-3.28 7.79-7 8.94V12H5V6.3l7-3.11v8.81z"/>
        </svg>
      )
    },
    {
      name: "Nmap",
      desc: "Reconnaissance & Scan de ports / services",
      badge: "Network Scan",
      svg: (
        <svg className="w-5 h-5 fill-current text-emerald-400" viewBox="0 0 24 24">
          <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 13v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"/>
        </svg>
      )
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
              Cybersécurité &amp; Pentest
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 120h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Menez un audit d'intrusion et sécurisez l'infrastructure
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Réalisation d'un test d'intrusion complet (Pentest Web &amp; Infrastructure) en environnement simulé d'entreprise. Couvre la phase de reconnaissance, l'identification et l'exploitation de vulnérabilités selon le standard OWASP, la rédaction d'un rapport technique et la définition d'un plan d'action correctif.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">OWASP Top 10</h3>
            <p className="text-xs text-slate-400">Référentiel d'Audit Web</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Kali Linux</h3>
            <p className="text-xs text-slate-400">Plateforme Offensive</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Rapport &amp; PoC</h3>
            <p className="text-xs text-slate-400">Preuves de concept complètes</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Soutenance &amp; Restitution</p>
          </div>
        </div>

        {/* Grille principale : Contenu & Livrables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Preuves Techniques & Actions */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section Contexte & Objectifs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Contexte et Objectifs de l'Audit
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                L'objectif de cette intervention était d'évaluer le niveau de sécurité des applications Web et des services réseau d'une organisation. En adoptant la posture d'un attaquant externe (Boîte Noire / Boîte Grise), l'audit a permis d'identifier les failles critiques avant qu'elles ne soient exploitées à des fins malveillantes, et de proposer des recommandations de remédiation concrètes.
              </p>

              {/* Blocs Architectures avec Aperçu Image */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                
                {/* Cartographie d'Attaque */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-1">Surface d'Attaque &amp; Port Scan</h3>
                    <p className="text-xs text-slate-400">Cartographie des services ouverts, empreintes d'OS et identification des vecteurs d'entrée via Nmap et Nessus.</p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage("/docs/Projet11/surface_attaque.png")}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-40 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <Terminal className="w-8 h-8" />
                      <span className="text-xs font-mono">Cartographie des Ports</span>
                    </div>
                    <div className="absolute inset-0 bg-slate-950/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-1.5 text-xs font-medium text-cyan-400">
                      <ZoomIn className="w-4 h-4" /> Agrandir
                    </div>
                  </div>
                </div>

                {/* Preuve d'Exploitation (PoC) */}
                <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex flex-col justify-between space-y-4">
                  <div>
                    <h3 className="text-sm font-semibold text-cyan-400 mb-1">Exploitation &amp; Interception</h3>
                    <p className="text-xs text-slate-400">Analyse des requêtes HTTP/HTTPS, injection de payloads et interception des flux via Burp Suite Professional.</p>
                  </div>
                  <div 
                    onClick={() => setSelectedImage("/docs/Projet11/poc_exploitation.png")}
                    className="relative group cursor-pointer overflow-hidden rounded-lg border border-slate-800 bg-slate-900 h-40 flex items-center justify-center"
                  >
                    <div className="flex flex-col items-center gap-2 text-slate-500 group-hover:text-cyan-400 transition-colors">
                      <Bug className="w-8 h-8" />
                      <span className="text-xs font-mono">Capture Burp Suite</span>
                    </div>
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
                    title: "Reconnaissance & Cartographie du SI :",
                    desc: "Analyse passive et active des cibles, découverte des sous-domaines, balayage des ports TCP/UDP et identification précise des services exposés."
                  },
                  {
                    title: "Analyse des Vulnérabilités Web (OWASP) :",
                    desc: "Audits applicatifs approfondis visant à détecter les injections SQL, failles XSS, défaillances de contrôle d'accès (IDOR) et erreurs de configuration."
                  },
                  {
                    title: "Développement de Preuves de Concept (PoC) :",
                    desc: "Exploitation contrôlée des vulnérabilités pour valider leur impact réel sans perturber la disponibilité des services de production."
                  },
                  {
                    title: "Élaboration d'un Plan de Remédiation Priorisé :",
                    desc: "Définition de correctifs techniques ciblés (requêtes préparées, sanitisation, en-têtes de sécurité CSP/HSTS) classés selon la sévérité CVSSv3."
                  },
                  {
                    title: "Restitution Managériale et Technique :",
                    desc: "Rédaction du rapport final et présentation orale adaptée aux profils décideurs (résumé exécutif) et équipes de développement (détails techniques)."
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

            {/* Section Preuves d'Implémentations Techniques (Vulnérabilités) */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <AlertTriangle className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Preuves d'Implémentations Techniques</h2>
                  <p className="text-xs text-slate-400">Synthèse des vulnérabilités identifiées et auditées lors du Pentest</p>
                </div>
              </div>

              {/* Tableau des Vulnérabilités */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">ID</th>
                      <th className="py-3 px-4">Vulnérabilité</th>
                      <th className="py-3 px-4">Sévérité</th>
                      <th className="py-3 px-4">Score CVSS</th>
                      <th className="py-3 px-4">Cible / Impact</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {vulnerabilitiesData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400 font-mono">{row.id}</td>
                        <td className="py-3 px-4 font-medium text-white">{row.name}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 text-xs rounded-md font-semibold border ${
                            row.severity === 'Critique' ? 'bg-red-950/80 text-red-400 border-red-800' :
                            row.severity === 'Élevée' ? 'bg-orange-950/80 text-orange-400 border-orange-800' :
                            row.severity === 'Moyenne' ? 'bg-amber-950/80 text-amber-400 border-amber-800' :
                            'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {row.severity}
                          </span>
                        </td>
                        <td className="py-3 px-4 font-mono font-bold text-slate-200">{row.cvss}</td>
                        <td className="py-3 px-4 text-xs text-slate-300">
                          <strong className="text-white block">{row.target}</strong>
                          <span className="text-slate-400">{row.impact}</span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Colonne de droite : Livrables, Outils, ANSSI & Évaluation */}
          <div className="space-y-6">
            
            {/* Boîte de téléchargement des Livrables */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <FileText className="w-5 h-5 text-cyan-400" />
                Livrables du Projet
              </h3>

              <div className="space-y-3">
                {deliverables.map((doc, idx) => (
                  <div key={idx} className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 hover:border-cyan-500/30 transition-all flex flex-col gap-3 group">
                    <div className="flex items-start gap-3">
                      <div className={`p-2.5 rounded-lg border shrink-0 ${doc.color}`}>
                        <FileText className="w-5 h-5" />
                      </div>
                      <div className="space-y-0.5">
                        <h4 className="text-xs font-semibold text-white group-hover:text-cyan-400 transition-colors">
                          {doc.title}
                        </h4>
                        <p className="text-[11px] text-slate-400 leading-relaxed">
                          {doc.desc}
                        </p>
                      </div>
                    </div>

                    <a
                      href={doc.path}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all text-xs font-semibold"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Télécharger ({doc.type})
                    </a>
                  </div>
                ))}
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
                Les tests d'intrusion et recommandations respectent le guide d'hygiène informatique et le cadre d’audit de sécurité de l’ANSSI.
              </p>

              <a 
                href="https://www.ssi.gouv.fr/guide/guide-des-bonnes-pratiques-de-linformatique/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    Guide d'Hygiène Informatique
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
                <FileCode className="w-5 h-5 text-cyan-400" />
                Environnement &amp; Outils
              </h3>
              
              <div className="space-y-3">
                {toolsList.map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                        {item.svg}
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
                      <span>1. Réaliser un audit de sécurité / Pentest : <strong className="text-white">Validé</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>2. Identifier et exploiter des vulnérabilités OWASP : <strong className="text-white">Validé</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>3. Élaborer un plan d'action et remédiations : <strong className="text-white">Validé</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-cyan-400 block">Livrables :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Rapport de pentest particulièrement rigoureux, preuves de concept claires et reproductibles, plan de remédiation pragmatique.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Soutenance :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Excellente présentation, grande maîtrise des concepts offensifs et défensifs, restitution parfaitement structurée.
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
              "Identifier les vulnérabilités d'un système d'information et évaluer les risques associés (CVSS)",
              "Mener des tests d'intrusion Web et Réseau conformément à la méthodologie OWASP",
              "Rédiger un rapport d'audit technique et proposer un plan d'action correctif priorisé",
              "Restituer les conclusions d'un audit de sécurité devant un public technique et décisionnel"
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