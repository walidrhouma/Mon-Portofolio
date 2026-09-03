import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  ArrowRight,
  Download,
  Server,
  Network,
  ShieldCheck,
  Terminal,
  ChevronRight,
  Briefcase,
  GraduationCap,
  ShieldAlert,
  FileText,
  CheckCircle2,
  MapPin,
  Mail,
  Phone,
  Linkedin,
  Car,
} from 'lucide-react';
import { getFeaturedProjects } from '@/data/projectsData';
import ProjectCard from '@/components/ProjectCard';

const skills = [
  {
    icon: Server,
    title: 'Systèmes & Virtualisation',
    description: 'Windows Server (AD, DNS, DHCP, GPO, WSUS), Linux (Debian/Ubuntu, LAMP, LDAP), AWS (EC2, VPC, RDS, S3), Hyper-V, VirtualBox.',
    color: 'cyber-blue',
  },
  {
    icon: Network,
    title: 'Infrastructures Réseau',
    description: 'VLAN, IPv4/IPv6, routage, ACL Cisco, pare-feu PfSense, VPN IPSec/SSL, Wi-Fi sécurisé.',
    color: 'cyber-emerald',
  },
  {
    icon: ShieldCheck,
    title: 'Sécurité & Supervision',
    description: 'Chiffrement Cryhod, PKI, durcissement, Nagios, Fail2ban, Rsyslog, Wireshark, conformité ANSSI.',
    color: 'cyber-blue',
  },
  {
    icon: Terminal,
    title: 'Automatisation & MCO',
    description: 'PowerShell, Ansible, Git, GLPI, EasyVista, ServiceNow, SCCM, Citrix, ITIL.',
    color: 'cyber-emerald',
  },
];

const highlights = [
  {
    icon: ShieldAlert,
    title: 'Environnements Exigeants',
    desc: 'Administration AD, GPO, chiffrement Cryhod et gestion de la confidentialité au Ministère de la Justice.',
  },
  {
    icon: FileText,
    title: 'Compétences Validées',
    desc: 'Réalisation concrète de 13 projets professionnels complets (systèmes, réseaux, sécurité et cloud).',
  },
  {
    icon: CheckCircle2,
    title: 'Vision Globale IT',
    desc: 'Analyse du besoin, déploiement, sécurisation, automatisation PowerShell/Ansible et documentation.',
  },
];

const stats = [
  { value: '12', label: 'Projets techniques validés' },
  { value: '6+ ans', label: "D'expérience terrain IT" },
  { value: 'Bac+4', label: 'Titre RNCP Niv. 6 (OC)' },
  { value: 'Permis B', label: 'Véhiculé & Mobile' },
];

export default function Home() {
  const featured = getFeaturedProjects();

  return (
    <div>
      {/* Hero Section */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 grid-bg animate-grid-fade" />
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-cyber-blue/10 rounded-full blur-[120px] -z-10" />
        <div className="absolute bottom-0 right-0 w-[400px] h-[400px] bg-cyber-emerald/10 rounded-full blur-[100px] -z-10" />

        <div className="container-page relative pt-16 pb-16 lg:pt-24 lg:pb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-4xl"
          >
            <div className="inline-flex items-center gap-2.5 px-3.5 py-1.5 rounded-full bg-cyber-emerald/10 border border-cyber-emerald/20 mb-6">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full rounded-full bg-cyber-emerald opacity-75 animate-ping" />
                <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyber-emerald" />
              </span>
              <span className="text-sm font-medium text-cyber-emerald">
                Administrateur Systèmes &amp; Réseaux — En recherche active
              </span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold text-white leading-[1.1] mb-4">
              Walid <span className="text-gradient">RHOUMA</span>
            </h1>

            <h2 className="text-xl sm:text-2xl font-semibold text-slate-300 mb-6">
              Concevoir, sécuriser, automatiser et maintenir vos infrastructures IT
            </h2>

            {/* Fiche de coordonnées rapide */}
            <div className="flex flex-wrap items-center gap-y-2 gap-x-6 text-sm text-slate-400 mb-8">
              <div className="flex items-center gap-1.5">
                <MapPin className="w-4 h-4 text-cyber-blue" />
                Colombes (92700)
              </div>
              <div className="flex items-center gap-1.5">
                <Car className="w-4 h-4 text-cyber-blue" />
                Permis B
              </div>
              <a href="tel:0665790323" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Phone className="w-4 h-4 text-cyber-blue" />
                06 65 79 03 23
              </a>
              <a href="mailto:walidrhouma@hotmail.fr" className="flex items-center gap-1.5 hover:text-white transition-colors">
                <Mail className="w-4 h-4 text-cyber-blue" />
                walidrhouma@hotmail.fr
              </a>
              <a
                href="https://linkedin.com/in/walid-rhouma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-1.5 text-cyber-blue hover:underline"
              >
                <Linkedin className="w-4 h-4" />
                linkedin.com/in/walid-rhouma
              </a>
            </div>

            <p className="text-base sm:text-lg text-slate-400 leading-relaxed mb-8 max-w-3xl">
              Administrateur systèmes &amp; réseaux avec plusieurs années d’expérience en support avancé, 
              gestion d’infrastructures Windows/Linux, sécurité, téléphonie mobile sécurisée et exploitation. 
              Forte capacité d’analyse, autonomie et sens du service au service de vos projets IT.
            </p>

            <div className="flex flex-col sm:flex-row gap-3">
              <Link
                to="/projets"
                className="group inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-blue text-white font-semibold shadow-glow hover:shadow-glow hover:bg-cyber-blue/90 transition-all"
              >
                Explorez mes projets
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Link>
              <a
                href="/docs/CV_Rhouma_Walid.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-base-700 border border-white/10 text-white font-semibold hover:border-cyber-blue/30 hover:bg-base-600 transition-all"
              >
                <Download className="w-5 h-5" />
                Télécharger mon CV (PDF)
              </a>
            </div>
          </motion.div>

          {/* Key Stats */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.2 }}
            className="mt-12 grid grid-cols-2 lg:grid-cols-4 gap-4"
          >
            {stats.map((stat) => (
              <div
                key={stat.label}
                className="rounded-xl bg-base-700/50 border border-white/5 px-5 py-4"
              >
                <div className="text-2xl sm:text-3xl font-extrabold text-gradient">{stat.value}</div>
                <div className="text-xs sm:text-sm text-slate-400 mt-1">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Presentation Detail / À propos */}
      <section className="container-page py-10">
        <div className="rounded-3xl bg-base-700/40 border border-white/5 p-8 lg:p-12 relative overflow-hidden">
          <div className="absolute -bottom-10 -right-10 w-80 h-80 bg-cyber-blue/5 rounded-full blur-3xl" />
          
          <div className="max-w-4xl relative z-10">
            <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
              Présentation
            </span>
            <h2 className="text-2xl sm:text-3xl font-bold text-white mt-2 mb-6">
              Une double expérience terrain et projets d'infrastructure
            </h2>

            <div className="space-y-4 text-slate-300 leading-relaxed text-sm sm:text-base">
              <p>
                Passionné par les infrastructures informatiques et les environnements systèmes, mon parcours combine une expérience solide sur le terrain avec une formation approfondie chez OpenClassrooms (Bac+4).
              </p>
              <p>
                J'ai eu l'opportunité d'intervenir sur des environnements professionnels exigeants, notamment au <strong className="text-white">Ministère de la Justice</strong> (via SCC) et chez <strong className="text-white">Canal+</strong> (via Helpline), où j'ai géré l'administration Active Directory, les GPO, la suite Microsoft 365/Exchange, le déploiement SCCM et la sécurisation des postes chiffrés.
              </p>
              <p className="pt-2 text-cyber-emerald font-medium">
                Au-delà des outils, j'accorde une importance majeure à la vision globale de l'infrastructure : analyser un besoin, concevoir une solution cohérente, la déployer, la sécuriser, la documenter et anticiper son évolution.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights */}
      <section className="container-page pb-10">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {highlights.map((item, i) => (
            <div key={i} className="rounded-2xl bg-base-700/30 border border-white/5 p-6 flex flex-col justify-between hover:border-cyber-blue/20 transition-all">
              <item.icon className="w-8 h-8 text-cyber-blue mb-4" />
              <div>
                <h3 className="text-base font-bold text-white mb-2">{item.title}</h3>
                <p className="text-sm text-slate-400 leading-relaxed">{item.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Skills */}
      <section className="container-page py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
        >
          <div className="mb-8">
            <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
              Compétences Techniques
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Domaines de compétences
            </h2>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {skills.map((skill, i) => (
            <motion.div
              key={skill.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-50px' }}
              transition={{ duration: 0.4, delay: i * 0.08 }}
              className="group rounded-2xl bg-base-700/50 border border-white/5 p-6 hover:border-cyber-blue/30 hover:bg-base-700 transition-all"
            >
              <div
                className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 ${
                  skill.color === 'cyber-blue'
                    ? 'bg-cyber-blue/10 text-cyber-blue'
                    : 'bg-cyber-emerald/10 text-cyber-emerald'
                }`}
              >
                <skill.icon className="w-6 h-6" />
              </div>
              <h3 className="text-base font-semibold text-white mb-2">{skill.title}</h3>
              <p className="text-sm text-slate-400 leading-relaxed">{skill.description}</p>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Expériences & Formations DÉTAILLÉES */}
      <section className="container-page py-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
          
          {/* Parcours Professionnel Étoffé (7 cols sur 12) */}
          <div className="lg:col-span-7 rounded-3xl bg-base-700/40 border border-white/5 p-6 lg:p-8">
            <div className="flex items-center gap-3 mb-8">
              <Briefcase className="w-6 h-6 text-cyber-blue" />
              <h2 className="text-2xl font-bold text-white">Parcours Professionnel</h2>
            </div>

            <div className="space-y-8 border-l-2 border-white/10 pl-4 sm:pl-6 ml-2">
              {/* Poste 1 */}
              <div className="relative">
                <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-cyber-blue ring-4 ring-base-900" />
                <span className="text-xs font-mono text-cyber-blue bg-cyber-blue/10 px-2.5 py-1 rounded-md inline-block mb-2">
                  2021 – 2024
                </span>
                <h3 className="text-lg font-bold text-white">Support N2 / Admin Systèmes Junior</h3>
                <p className="text-sm font-medium text-slate-300">SCC — Ministère de la Justice</p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400 list-disc list-inside">
                  <li><strong>Gestion Active Directory :</strong> création de comptes, groupes, affectation de droits et déploiement de GPO.</li>
                  <li><strong>Support avancé Exchange / M365 :</strong> gestion des boîtes partagées, permissions et résolutions d'incidents complexes.</li>
                  <li><strong>Terminaux mobiles sécurisés :</strong> masterisation, chiffrement, certificats, configuration cartes mémoires et suivi logistique.</li>
                  <li><strong>Support VIP / Utilisateurs sensibles :</strong> accompagnement de magistrats et directeurs avec haute exigence de confidentialité.</li>
                  <li><strong>Sécurisation Cryhod :</strong> chiffrement des postes Windows, déploiement et gestion des incidents de démarrage.</li>
                  <li><strong>Documentation :</strong> rédaction et optimisation des procédures techniques internes.</li>
                </ul>
              </div>

              {/* Poste 2 */}
              <div className="relative">
                <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-slate-500 ring-4 ring-base-900" />
                <span className="text-xs font-mono text-slate-400 bg-base-800 px-2.5 py-1 rounded-md inline-block mb-2">
                  2018 – 2021
                </span>
                <h3 className="text-lg font-bold text-white">Support N1/N2</h3>
                <p className="text-sm font-medium text-slate-300">Helpline — Canal+</p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400 list-disc list-inside">
                  <li><strong>Incidents Office 365 &amp; Métier :</strong> support Outlook (fichiers PST, boîtes) et diagnostic des applications métier.</li>
                  <li><strong>Support à distance :</strong> résolution des problèmes de stockage saturé, lenteurs systèmes et périphériques.</li>
                  <li><strong>Administration Active Directory :</strong> création et gestion des accès utilisateurs aux ressources réseau.</li>
                  <li><strong>Déploiement SCCM :</strong> télédistribution de packages applicatifs et mises à jour système.</li>
                  <li><strong>Environnement Citrix :</strong> support et maintenance du parc virtuel pour utilisateurs itinérants.</li>
                </ul>
              </div>

              {/* Poste 3 */}
              <div className="relative">
                <div className="absolute -left-[25px] sm:-left-[33px] top-1.5 w-3 h-3 rounded-full bg-slate-600 ring-4 ring-base-900" />
                <span className="text-xs font-mono text-slate-400 bg-base-800 px-2.5 py-1 rounded-md inline-block mb-2">
                  2017
                </span>
                <h3 className="text-lg font-bold text-white">Technicien Systèmes &amp; Réseau</h3>
                <p className="text-sm font-medium text-slate-300">ASSI</p>
                <ul className="mt-3 space-y-2 text-xs sm:text-sm text-slate-400 list-disc list-inside">
                  <li><strong>Réseau &amp; VoIP :</strong> installation de routeurs, switchs PoE, pare-feu PfSense, bornes Wi-Fi et téléphonie VoIP.</li>
                  <li><strong>Migration de parc :</strong> passage de Windows 7 à Windows 10 et configuration des profils utilisateurs.</li>
                  <li><strong>Support de proximité :</strong> prise en charge des demandes utilisateurs sur site.</li>
                </ul>
              </div>
            </div>
          </div>

          {/* Formations & Langues (5 cols sur 12) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="rounded-3xl bg-base-700/40 border border-white/5 p-6 lg:p-8">
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap className="w-6 h-6 text-cyber-emerald" />
                <h2 className="text-2xl font-bold text-white">Formations</h2>
              </div>
              <div className="space-y-4">
                <div className="p-4 rounded-xl bg-base-800/60 border border-white/5">
                  <span className="text-xs font-mono text-cyber-emerald">2025</span>
                  <h3 className="text-base font-bold text-white">Admin. Systèmes, Réseaux &amp; Sécurité</h3>
                  <p className="text-sm text-slate-400">OpenClassrooms (Titre RNCP Niv. 6 — Bac+3/4)</p>
                </div>
                <div className="p-4 rounded-xl bg-base-800/60 border border-white/5">
                  <span className="text-xs font-mono text-slate-400">2018</span>
                  <h3 className="text-base font-bold text-white">BTS SIO option SISR</h3>
                  <p className="text-sm text-slate-400">Solutions d'Infrastructure, Systèmes et Réseaux</p>
                </div>
                <div className="p-4 rounded-xl bg-base-800/60 border border-white/5">
                  <span className="text-xs font-mono text-slate-400">2017</span>
                  <h3 className="text-base font-bold text-white">Technicien Réseaux &amp; Télécoms</h3>
                  <p className="text-sm text-slate-400">Titre RNCP Niveau 5</p>
                </div>
                <div className="p-4 rounded-xl bg-base-800/60 border border-white/5">
                  <span className="text-xs font-mono text-slate-400">2002</span>
                  <h3 className="text-base font-bold text-white">Baccalauréat Scientifique</h3>
                </div>
              </div>
            </div>

            {/* Encadré Langues */}
            <div className="rounded-2xl bg-base-700/30 border border-white/5 p-6">
              <h3 className="text-sm font-mono text-cyber-blue uppercase tracking-wider mb-3">
                Langues &amp; Permis
              </h3>
              <div className="flex flex-wrap gap-2 text-xs">
                <span className="px-3 py-1.5 rounded-lg bg-base-800 border border-white/10 text-slate-300">
                  🇫🇷 Français : Natif
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-base-800 border border-white/10 text-slate-300">
                  🇬🇧 Anglais : Professionnel
                </span>
                <span className="px-3 py-1.5 rounded-lg bg-base-800 border border-white/10 text-slate-300">
                  🚗 Permis B (Véhiculé)
                </span>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Featured Projects */}
      <section className="container-page py-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.4 }}
          className="flex items-end justify-between mb-8"
        >
          <div>
            <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
              Démonstration pratique
            </span>
            <h2 className="text-3xl font-bold text-white mt-2">
              Aperçu des infrastructures configurées
            </h2>
          </div>
          <Link
            to="/projets"
            className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-cyber-blue hover:gap-2.5 transition-all"
          >
            Découvrir l'ensemble des projets
            <ChevronRight className="w-4 h-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          {featured.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>

        <div className="mt-8 sm:hidden">
          <Link
            to="/projets"
            className="inline-flex items-center gap-1.5 text-sm font-medium text-cyber-blue"
          >
            Découvrir les projets
            <ChevronRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </div>
  );
}
