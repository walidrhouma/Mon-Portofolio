import React, { useState, useEffect } from 'react';
import { 
  FileText, Download, Shield, ArrowLeft, 
  CheckCircle2, Clock, ZoomIn, Check, GraduationCap,
  ExternalLink, Lock, Cloud, Server, Cpu,
  DollarSign, Network, Layers, HardDrive, CheckCircle, Eye
} from 'lucide-react';
import { Link } from 'react-router-dom';

interface CloudProvider {
  id: string;
  provider: string;
  serviceType: string;
  highAvailability: string;
  costEstimate: string;
  verdict: string;
}

export default function ProjectDetail12() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setSelectedImage(null);
    };
    if (selectedImage) {
      window.addEventListener('keydown', handleKeyDown);
    }
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [selectedImage]);

  const cloudBenchmarkData: CloudProvider[] = [
    { 
      id: "CSP-01", 
      provider: "Amazon Web Services (AWS)", 
      serviceType: "IaaS / PaaS (EC2, RDS, ALB, S3)", 
      highAvailability: "Multi-AZ Auto Scaling", 
      costEstimate: "Optimisé (PAYG / RIs)", 
      verdict: "Solution Retenue (Recommandée)" 
    },
    { 
      id: "CSP-02", 
      provider: "Microsoft Azure", 
      serviceType: "IaaS / PaaS (VMs, Azure SQL, Blob)", 
      highAvailability: "Availability Sets / Zones", 
      costEstimate: "Moyen (Avantage hybride MS)", 
      verdict: "Écarté (Surcoût hors écosystème)" 
    },
    { 
      id: "CSP-03", 
      provider: "Google Cloud Platform (GCP)", 
      serviceType: "IaaS / PaaS (Compute Engine, Cloud SQL)", 
      highAvailability: "Regional Deployment", 
      costEstimate: "Compétitif", 
      verdict: "Écarté (SLA & Services Tierce partie)" 
    }
  ];

  const deliverables = [
    {
      title: "Résultat de la Veille Technologique Cloud",
      desc: "Étude comparative des acteurs du marché (AWS, Azure, GCP), modèles IaaS/PaaS/SaaS et matrice de décision.",
      path: "/docs/Projet12/Rhouma_Walid_1_resultat-veille_052025 (3).pdf",
      type: "PDF",
      color: "border-cyan-500/20 bg-cyan-500/10 text-cyan-400"
    },
    {
      title: "Document de Préparation de la Migration Patronus",
      desc: "Dossier d'architecture cible, étude financière (TCO, charges salariales et prestataires HT) et jalons du projet.",
      path: "/docs/Projet12/Rhouma_Walid_2_migration_Patronus_052025 (3).pdf",
      type: "PDF",
      color: "border-emerald-500/20 bg-emerald-500/10 text-emerald-400"
    },
    {
      title: "Diaporama de Présentation Kick-off",
      desc: "Support visuel synthétique destiné à la direction et aux équipes non-techniques pour la réunion de lancement.",
      path: "/docs/Projet12/Rhouma_Walid_3_diaporama_052025 (3).pdf",
      type: "PDF",
      color: "border-amber-500/20 bg-amber-500/10 text-amber-400"
    }
  ];

  const toolsList = [
    {
      name: "Amazon Web Services",
      desc: "Fournisseur IaaS/PaaS retenu pour héberger Patronus",
      badge: "Cloud Provider",
      svg: (
        <svg className="w-5 h-5 fill-current text-amber-400" viewBox="0 0 24 24">
          <path d="M18.75 14.28c-.37-.21-.84-.09-1.06.27-.68 1.13-1.89 1.83-3.21 1.83-1.33 0-2.54-.71-3.22-1.84-.22-.36-.69-.48-1.06-.26-.37.22-.49.69-.27 1.06.94 1.58 2.64 2.57 4.55 2.57s3.61-.99 4.55-2.57c.22-.37.1-.84-.28-1.06zM12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8z"/>
        </svg>
      )
    },
    {
      name: "Microsoft Azure",
      desc: "Benchmark et évaluation comparative des infrastructures",
      badge: "Cloud Benchmark",
      svg: (
        <svg className="w-5 h-5 fill-current text-blue-400" viewBox="0 0 24 24">
          <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/>
        </svg>
      )
    },
    {
      name: "Google Cloud",
      desc: "Analyse d'éligibilité et comparatif des offres de stockage",
      badge: "Cloud Benchmark",
      svg: (
        <svg className="w-5 h-5 fill-current text-red-400" viewBox="0 0 24 24">
          <path d="M19.35 10.04C18.67 6.59 15.64 4 12 4 9.11 4 6.6 5.64 5.35 8.04 2.34 8.36 0 10.91 0 14c0 3.31 2.69 6 6 6h13c2.76 0 5-2.24 5-5 0-2.64-2.05-4.78-4.65-4.96z"/>
        </svg>
      )
    },
    {
      name: "Terraform / IaC",
      desc: "Automatisation du déploiement de l'infrastructure cible",
      badge: "Infrastructure",
      svg: (
        <svg className="w-5 h-5 fill-current text-purple-400" viewBox="0 0 24 24">
          <path d="M1.5 4.5l7 4v8l-7-4v-8zm8 4l7-4v8l-7 4v-8zm8-4l7 4v8l-7-4v-8zm-8-4l7 4-7 4-7-4 7-4z"/>
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
              Systèmes &amp; Réseaux Cloud
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 44h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Gérez une migration vers le cloud
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Conception et planification de la migration de l'application critique de sécurisation des données <strong>Patronus</strong> (Nimbus Corp) depuis un environnement physique obsolète vers une infrastructure Cloud moderne, hautement disponible, scalable et optimisée financièrement.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">AWS Cloud</h3>
            <p className="text-xs text-slate-400">Infrastructure Cible</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">Haute Dispo</h3>
            <p className="text-xs text-slate-400">Multi-AZ &amp; Auto Scaling</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">TCO &amp; Budget</h3>
            <p className="text-xs text-slate-400">Chiffrage Interne / Externe HT</p>
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
                <Cloud className="w-5 h-5 text-cyan-400" />
                Contexte et Objectifs de la Migration
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Au sein de Nimbus Corp, l'application critique <strong>Patronus</strong> souffrait de contraintes matérielles sévères : saturation des serveurs internes et fin de support (EOL) du système d'exploitation hôte. La mission consistait à mener la veille technologique, choisir le Cloud Service Provider adapté, concevoir le dossier d'architecture technique (DAT) cible et structurer la gouvernance budgétaire et opérationnelle du projet.
              </p>

              {/* Comparatif Existant vs Cible */}
              <div className="space-y-4 pt-2">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {/* Architecture Actuelle */}
                  <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                    <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                      <Server className="w-4 h-4" /> Infrastructure Actuelle
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      L'utilisateur envoie une requête vers le <strong>serveur web Apache</strong> qui exécute le code métier de Patronus. Ce serveur communique avec une <strong>base MySQL</strong> pour les données et un <strong>serveur de fichiers CIFS</strong> pour les documents.
                    </p>
                  </div>

                  {/* Infrastructure Migrée */}
                  <div className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 space-y-2">
                    <h3 className="text-sm font-semibold text-emerald-400 flex items-center gap-2">
                      <Network className="w-4 h-4" /> Infrastructure Migrée
                    </h3>
                    <p className="text-xs text-slate-300 leading-relaxed">
                      Accès sécurisé via un <strong>WAF</strong>, puis répartition par un <strong>Load Balancer</strong> vers un <strong>Autoscaling group</strong> d'instances web. Interaction avec une <strong>base SQL managée</strong> et du <strong>stockage objets</strong> hautement disponible.
                    </p>
                  </div>
                </div>

                {/* Image Agrandissable Unique */}
                <div 
                  onClick={() => setSelectedImage("/docs/Projet12/Capture/old infra vs new infra.png")}
                  className="relative group cursor-pointer overflow-hidden rounded-xl border border-slate-800 bg-slate-950 p-2 text-center"
                >
                  <img 
                    src="/docs/Projet12/Capture/old infra vs new infra.png" 
                    alt="Migration Cloud : de l'existant à la cible" 
                    className="w-full h-auto max-h-64 object-contain rounded-lg mx-auto"
                  />
                  <div className="absolute inset-0 bg-slate-950/60 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-2 text-xs font-semibold text-cyan-400 backdrop-blur-[2px]">
                    <ZoomIn className="w-4 h-4" /> Agrandir le schéma comparatif
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
                    title: "Veille Technologique & Benchmark des acteurs Cloud :",
                    desc: "Analyse approfondie comparant AWS, Microsoft Azure et Google Cloud Platform selon les critères d'élasticité, d'intégration de sécurité et de grille tarifaire."
                  },
                  {
                    title: "Définition du Modèle de Service (IaaS vs PaaS) :",
                    desc: "Sélection d'une approche hybride PaaS/IaaS sur AWS permettant d'externaliser la gestion matérielle et des bases de données (RDS) tout en gardant la maîtrise des conteneurs applicatifs."
                  },
                  {
                    title: "Résolution des Maillons Faibles de l'Architecture :",
                    desc: "Mise en place d'un équilibreur de charge (ALB) et d'Auto Scaling pour répondre dynamiquement aux pics de charge sans interruption de service."
                  },
                  {
                    title: "Modélisation Financière & Ventilation des Coûts :",
                    desc: "Établissement du TCO incluant la distinction exacte des charges salariales mobilisées (RH internes) et des prestations externes exprimées en Montant HT."
                  },
                  {
                    title: "Planification Opérationnelle & Stratégie de Bascule :",
                    desc: "Élaboration du planning de migration par étapes (POC, synchronisation des données, recette, bascule DNS) pour minimiser le Temps d'Indisponibilité (Downtime)."
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

            {/* Section Preuves d'Implémentations Techniques */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Layers className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Preuves d'Implémentations Techniques</h2>
                  <p className="text-xs text-slate-300">Synthèse de l'étude comparative et des métriques issues de la préparation de migration</p>
                </div>
              </div>

              {/* Tableau Comparatif Cloud */}
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-300 font-medium">
                      <th className="py-3 px-4">ID</th>
                      <th className="py-3 px-4">Fournisseur Cloud</th>
                      <th className="py-3 px-4">Modèle Retenu</th>
                      <th className="py-3 px-4">Haute Dispo</th>
                      <th className="py-3 px-4">Verdict Technique</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {cloudBenchmarkData.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400 font-mono">{row.id}</td>
                        <td className="py-3 px-4 font-medium text-white">{row.provider}</td>
                        <td className="py-3 px-4 text-slate-300">{row.serviceType}</td>
                        <td className="py-3 px-4 text-slate-300">{row.highAvailability}</td>
                        <td className="py-3 px-4">
                          <span className={`px-2 py-0.5 text-xs rounded-md font-semibold border ${
                            row.verdict.includes('Retenue') 
                              ? 'bg-emerald-950/80 text-emerald-400 border-emerald-800' 
                              : 'bg-slate-800 text-slate-300 border-slate-700'
                          }`}>
                            {row.verdict}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* Encadré Récapitulatif TCO & Coûts */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
                <h3 className="text-sm font-bold text-white flex items-center gap-2">
                  <DollarSign className="w-4 h-4 text-emerald-400" />
                  Ventilation Budgétaire du Projet (Coûts Internes vs Externes HT)
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-semibold text-cyan-400 block">Ressources Internes (Masse Salariale)</span>
                    <p className="text-slate-300 leading-relaxed">
                      Temps homme valorisé incluant l'administrateur système, l'expert Cloud et le développeur full-stack mobilisés sur la phase de POC et de recette.
                    </p>
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900 border border-slate-800 space-y-1">
                    <span className="font-semibold text-emerald-400 block">Prestations Extérieures &amp; Run (HT)</span>
                    <p className="text-slate-300 leading-relaxed">
                      Facturation Hors Taxes des prestations de conseil spécialisé et coût récurrent des services consommés sur AWS (PAYG avec réservations d'instances).
                    </p>
                  </div>
                </div>
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
                        <p className="text-[11px] text-slate-300 leading-relaxed">
                          {doc.desc}
                        </p>
                      </div>
                    </div>

                    {/* Boutons d'action : Visualiser & Télécharger */}
                    <div className="grid grid-cols-2 gap-2">
                      <a
                        href={doc.path}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-slate-800 hover:bg-slate-700 text-slate-200 border border-slate-700 transition-all text-xs font-semibold"
                      >
                        <Eye className="w-3.5 h-3.5 text-cyan-400" />
                        Visualiser
                      </a>

                      <a
                        href={doc.path}
                        download
                        className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-lg bg-cyan-500/10 text-cyan-400 border border-cyan-500/20 hover:bg-cyan-500 hover:text-white transition-all text-xs font-semibold"
                      >
                        <Download className="w-3.5 h-3.5" />
                        Télécharger
                      </a>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc Référentiel de Sécurité & Conformité Cloud */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-cyan-950/30 border border-cyan-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-cyan-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Lock className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Sécurité &amp; SecNumCloud</h3>
                  <p className="text-xs text-cyan-400 font-medium">Recommandations ANSSI</p>
                </div>
              </div>

              <p className="text-xs text-slate-300 leading-relaxed">
                Le choix de l'architecture Cloud intègre les exigences de sécurité relatives à la protection des données sensibles et à l'isolation des tenants applicatifs.
              </p>

              <a 
                href="https://www.ssi.gouv.fr/guide/recommandations-de-securite-pour-les-architectures-du-cloud-computing/"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full p-3 rounded-xl bg-cyan-500/10 border border-cyan-500/30 hover:bg-cyan-500/20 transition-all flex items-center justify-between group block"
              >
                <div className="space-y-0.5">
                  <span className="text-xs font-bold text-white group-hover:text-cyan-300 transition-colors flex items-center gap-1.5">
                    Guide Cloud ANSSI
                    <ExternalLink className="w-3.5 h-3.5" />
                  </span>
                  <span className="text-[11px] text-slate-300 block">Consulter les recommandations officielles</span>
                </div>
                <div className="w-8 h-8 rounded-lg bg-cyan-500/20 flex items-center justify-center text-cyan-300 group-hover:scale-105 transition-transform">
                  ☁️
                </div>
              </a>
            </div>

            {/* Bloc Environnement & Outils */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <HardDrive className="w-5 h-5 text-cyan-400" />
                Technologies &amp; Cloud Providers
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
                        <p className="text-[11px] text-slate-300">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-300 border border-slate-800">
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
                  <CheckCircle className="w-5 h-5" />
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
                      <span>1. Piloter un projet d'amélioration du SI : <strong className="text-white">Validé</strong></span>
                    </div>
                    <div className="flex items-center gap-2">
                      <span className="text-emerald-400 font-bold">✓</span>
                      <span>2. Assurer une veille technologique sur l'infrastructure : <strong className="text-white">Validé</strong></span>
                    </div>
                  </div>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-cyan-400 block">Livrables :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Les livrables respectent parfaitement les attentes du projet. La distinction des coûts des ressources externes (HT) et internes (salariés mobilisés) est rigoureusement traitée.
                  </p>
                </div>

                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Soutenance :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    Bonne présentation, la gestion de la migration est bien menée. Les compétences techniques sont toutes acquises.
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section Compétences RNCP Validées */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Cpu className="w-5 h-5 text-cyan-400" />
            Compétences RNCP Validées lors de la Soutenance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Réaliser une veille technologique structurée sur les solutions IaaS, PaaS et SaaS",
              "Concevoir une architecture cible hautement disponible et adaptable aux variations de charge",
              "Élaborer un plan de migration détaillé avec analyse d'impact et gestion du downtime",
              "Chiffrer le TCO global du projet en distinguant masse salariale interne et prestations HT"
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
          role="dialog"
          aria-label="Aperçu agrandi de l'image"
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