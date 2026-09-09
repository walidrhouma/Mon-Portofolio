import { useState } from 'react';
import {
  ArrowRight,
  CheckCircle2,
  Database,
  FileText,
  Headphones,
  Laptop,
  Lightbulb,
  Network,
  Play,
  Server,
  ShieldCheck,
  Terminal,
  Ticket,
  Workflow,
  X,
} from 'lucide-react';
import {
  ProjectPage,
  BackLink,
  ProjectHero,
  StatStrip,
  SectionTitle,
  Card,
  InfoCard,
  DeliverablesPanel,
  CompetencesValidees,
  EvaluationJury,
  ProjectFooterNav,
} from '@/components/project/ProjectPageKit';

type TicketItem = {
  id: string;
  title: string;
  level: 'N1' | 'N2';
  priority: string;
  action: string;
};

const tickets: TicketItem[] = [
  {
    id: 'N13',
    title: 'Médiation Raphaël / Steeve',
    level: 'N2',
    priority: 'Haute',
    action: "Analyse de la situation et proposition d'une réponse professionnelle.",
  },
  {
    id: 'N17',
    title: 'Contact Ocito / VPN',
    level: 'N2',
    priority: 'Haute',
    action: 'Identification du besoin et orientation vers la bonne solution.',
  },
  {
    id: 'N19',
    title: 'Commande de disques durs',
    level: 'N1',
    priority: 'Normale',
    action: 'Demande orientée vers le service achats avec justification du matériel.',
  },
  {
    id: 'N22',
    title: 'Problème rencontré par Steeve',
    level: 'N2',
    priority: 'Haute',
    action: "Proposition d'escalade hiérarchique ou restriction de l'outil aux utilisateurs formés.",
  },
];

const installSteps = [
  {
    title: 'Préparer Debian',
    command: 'apt update && apt upgrade -y',
    description: "Mettre le serveur à jour avant l'installation des composants.",
  },
  {
    title: 'Installer la pile',
    command:
      'apt install apache2 mariadb-server php php-mysql \\\n  php-curl php-gd php-mbstring php-xml \\\n  php-intl php-zip php-ldap',
    description: 'Installer les services nécessaires au fonctionnement de GLPI.',
  },
  {
    title: 'Préparer MariaDB',
    command:
      "CREATE DATABASE glpidb\n  CHARACTER SET utf8mb4\n  COLLATE utf8mb4_unicode_ci;",
    description: 'Créer la base de données dédiée à GLPI.',
  },
  {
    title: 'Déployer GLPI',
    command: 'tar -xvf glpi.tar.gz -C /var/www/html/',
    description: "Déployer les fichiers de l'application sur le serveur Web.",
  },
  {
    title: 'Configurer Apache',
    command: 'a2ensite glpi.conf && a2enmod rewrite && systemctl reload apache2',
    description: 'Configurer le serveur Web et activer la réécriture nécessaire.',
  },
];

const flowSteps = [
  { number: '01', title: 'Réception', description: "La demande utilisateur est reçue par le support.", icon: Headphones },
  { number: '02', title: 'Création', description: "La demande est enregistrée sous forme de ticket GLPI.", icon: Ticket },
  { number: '03', title: 'Attribution', description: "Le ticket est affecté au technicien ou au niveau adapté.", icon: FileText },
  { number: '04', title: 'Escalade', description: "Le N1 transmet au N2 lorsque la résolution dépasse son périmètre.", icon: ArrowRight },
  { number: '05', title: 'Traitement', description: "Le problème est analysé et une solution est mise en œuvre.", icon: Terminal },
  { number: '06', title: 'Clôture', description: "La résolution est documentée puis le ticket est fermé.", icon: CheckCircle2 },
];

const documents = [
  "Médiation Raphaël / Steeve",
  "Contact Ocito / VPN",
  "Commande de matériel",
  "Réponse personnalisée à Steeve",
];

export default function ProjectDetail() {
  const [selectedTicket, setSelectedTicket] = useState(0);
  const [activeInstallStep, setActiveInstallStep] = useState(0);
  const [showTerminal, setShowTerminal] = useState(false);

  const currentTicket = tickets[selectedTicket];
  const currentInstall = installSteps[activeInstallStep];

  return (
    <ProjectPage>
      <BackLink />

      <ProjectHero
        category="Systèmes & Réseaux"
        formationVolume="50 h de formation"
        title={<>Gérez les demandes<span className="block text-cyber-blue">au quotidien</span></>}
        summary="Mise en place d'un processus de support N2 autour de GLPI, traitement et priorisation des demandes utilisateurs, reconstruction d'un serveur GLPI sous Debian et formalisation des procédures selon les principes ITIL."
      />

      <StatStrip
        stats={[
          { value: 'N2', label: 'Niveau de support' },
          { value: 'GLPI', label: 'Outil ITSM utilisé' },
          { value: 'ITIL', label: 'Référentiel appliqué' },
          { value: 'Debian', label: 'Serveur reconstruit' },
        ]}
      />

      {/* CONTEXTE */}
      <section className="container-page py-8">
        <Card>
          <SectionTitle
            eyebrow="Contexte"
            title="Une mission de support intégrée à une équipe infrastructure"
            description="Le scénario place le rôle dans une équipe informatique d'OpenShowroom, entreprise de commerce en ligne. Le périmètre confié correspond au support de niveau 2 et aux interventions nécessaires sur le système d'information."
          />
          <div className="grid gap-5 md:grid-cols-3">
            <InfoCard icon={Headphones} title="Support utilisateur">
              Prendre en charge les incidents qui n'ont pas pu être résolus au niveau 1 et assurer un suivi structuré des demandes.
            </InfoCard>
            <InfoCard icon={Server} title="Incident majeur">
              Le serveur GLPI est indisponible et aucune sauvegarde n'est disponible. Le service doit être reconstruit sous Debian.
            </InfoCard>
            <InfoCard icon={Workflow} title="Organisation ITIL">
              Structurer le traitement des demandes : création, attribution, escalade, traitement, résolution et clôture.
            </InfoCard>
          </div>
        </Card>
      </section>

      {/* ARCHITECTURE */}
      <section className="container-page py-4">
        <Card>
          <SectionTitle
            eyebrow="Environnement"
            title="Reconstruction du service GLPI"
            description="L'objectif technique est de remettre à disposition une plateforme GLPI fonctionnelle, avec les composants nécessaires à son exploitation."
          />
          <div className="grid grid-cols-2 gap-5 md:grid-cols-4">
            <InfoCard icon={Laptop} title="Utilisateur">Demandeur</InfoCard>
            <InfoCard icon={Ticket} title="GLPI">Gestion des tickets</InfoCard>
            <InfoCard icon={Database} title="MariaDB">Base de données</InfoCard>
            <InfoCard icon={Server} title="Apache + Debian">Serveur applicatif</InfoCard>
          </div>
        </Card>
      </section>

      {/* DEMO TICKETS */}
      <section className="container-page py-4">
        <Card>
          <SectionTitle
            eyebrow="Démonstration"
            title="Du ticket à la résolution"
            description="Sélectionnez un ticket pour voir le traitement proposé dans le projet."
          />
          <div className="grid gap-6 lg:grid-cols-[0.8fr_1.2fr]">
            <div className="space-y-2">
              {tickets.map((ticket, index) => {
                const active = index === selectedTicket;
                return (
                  <button
                    key={ticket.id}
                    type="button"
                    onClick={() => setSelectedTicket(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${
                      active
                        ? 'border-cyber-blue/40 bg-cyber-blue/10'
                        : 'border-white/5 bg-base-900/50 hover:border-white/10'
                    }`}
                  >
                    <div className={`flex h-9 w-9 items-center justify-center rounded-lg shrink-0 ${active ? 'bg-cyber-blue text-white' : 'bg-base-700 text-slate-500'}`}>
                      <Ticket size={16} />
                    </div>
                    <div className="min-w-0">
                      <div className="text-xs font-semibold text-cyber-blue">TICKET {ticket.id}</div>
                      <div className="mt-0.5 truncate text-sm font-medium text-white">{ticket.title}</div>
                    </div>
                  </button>
                );
              })}
            </div>

            <div className="rounded-2xl border border-white/5 bg-base-900/50 p-6">
              <div className="flex flex-wrap items-start justify-between gap-3">
                <div>
                  <span className="text-xs font-semibold uppercase tracking-widest text-cyber-blue">Ticket {currentTicket.id}</span>
                  <h3 className="mt-2 text-xl font-bold text-white">{currentTicket.title}</h3>
                </div>
                <div className="flex gap-2">
                  <span className="inline-flex items-center rounded-full border border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue px-3 py-1 text-xs font-semibold">{currentTicket.level}</span>
                  <span className="inline-flex items-center rounded-full border border-white/10 bg-base-700 text-slate-300 px-3 py-1 text-xs font-semibold">{currentTicket.priority}</span>
                </div>
              </div>
              <div className="mt-6 rounded-2xl border border-white/5 bg-base-700/40 p-5 flex items-start gap-3">
                <Lightbulb className="mt-0.5 shrink-0 text-cyber-blue" size={18} />
                <div>
                  <p className="font-semibold text-white">Traitement proposé</p>
                  <p className="mt-2 text-sm leading-6 text-slate-400">{currentTicket.action}</p>
                </div>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* INSTALLATION */}
      <section className="container-page py-4">
        <Card>
          <SectionTitle
            eyebrow="Intervention technique"
            title="Reconstruction du serveur GLPI"
            description="Le serveur ayant été perdu sans sauvegarde disponible, le service doit être recréé sur une nouvelle installation Debian."
          />
          <div className="grid gap-6 lg:grid-cols-[0.75fr_1.25fr]">
            <div className="space-y-2">
              {installSteps.map((step, index) => {
                const active = index === activeInstallStep;
                return (
                  <button
                    key={step.title}
                    type="button"
                    onClick={() => setActiveInstallStep(index)}
                    className={`flex w-full items-center gap-3 rounded-xl border p-4 text-left transition ${active ? 'border-cyber-blue/40 bg-cyber-blue/10' : 'border-white/5 bg-base-900/50 hover:border-white/10'}`}
                  >
                    <span className={`flex h-8 w-8 shrink-0 items-center justify-center rounded-lg text-xs font-bold ${active ? 'bg-cyber-blue text-white' : 'bg-base-700 text-slate-500'}`}>{index + 1}</span>
                    <span className="text-sm font-medium text-white">{step.title}</span>
                  </button>
                );
              })}
            </div>
            <div className="overflow-hidden rounded-2xl border border-white/5 bg-base-900/50">
              <div className="flex items-center justify-between border-b border-white/5 bg-base-700/40 px-5 py-4">
                <div className="flex items-center gap-3">
                  <Terminal size={18} className="text-cyber-blue" />
                  <span className="font-semibold text-white">Étape technique</span>
                </div>
                <span className="text-xs text-slate-500">{activeInstallStep + 1}/{installSteps.length}</span>
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-white">{currentInstall.title}</h3>
                <p className="mt-3 text-sm leading-6 text-slate-400">{currentInstall.description}</p>
                <div className="mt-6 rounded-2xl border border-white/5 bg-slate-950/80 p-5">
                  <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
                    <span className="h-2 w-2 rounded-full bg-cyber-emerald" />shell
                  </div>
                  <code className="block overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7 text-cyber-blue">{currentInstall.command}</code>
                </div>
                <button
                  type="button"
                  onClick={() => setShowTerminal(true)}
                  className="mt-5 inline-flex items-center gap-2 rounded-xl border border-white/10 px-4 py-2 text-sm font-semibold text-white transition hover:border-cyber-blue/40 hover:text-cyber-blue"
                >
                  <Play size={16} />Voir la logique d'installation
                </button>
              </div>
            </div>
          </div>
        </Card>
      </section>

      {/* ITIL FLOW */}
      <section className="container-page py-4">
        <Card>
          <SectionTitle
            eyebrow="ITIL"
            title="Le flux de traitement N1 → N2"
            description="Le logigramme demandé dans le projet formalise le cheminement d'une demande depuis sa réception jusqu'à sa clôture."
          />
          <div className="grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6">
            {flowSteps.map((step) => {
              const Icon = step.icon;
              return (
                <div key={step.number} className="rounded-2xl border border-white/5 bg-base-900/50 p-4 transition hover:-translate-y-1 hover:border-cyber-blue/30">
                  <div className="flex items-center justify-between">
                    <span className="text-xs font-bold text-cyber-blue">{step.number}</span>
                    <Icon size={18} className="text-slate-500" />
                  </div>
                  <h3 className="mt-5 font-semibold text-white">{step.title}</h3>
                  <p className="mt-2 text-xs leading-5 text-slate-500">{step.description}</p>
                </div>
              );
            })}
          </div>
        </Card>
      </section>

      {/* DOCUMENTATION */}
      <section className="container-page py-4">
        <Card>
          <SectionTitle
            eyebrow="Documentation"
            title="Transformer les solutions en connaissances réutilisables"
            description="Le projet demande également de produire des documents professionnels et de les intégrer dans la base de connaissances GLPI."
          />
          <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {documents.map((doc) => (
              <div key={doc} className="rounded-2xl border border-white/5 bg-base-900/50 p-5">
                <FileText className="text-cyber-blue" size={20} />
                <h3 className="mt-4 text-sm font-semibold text-white">{doc}</h3>
              </div>
            ))}
          </div>
          <div className="grid gap-5 md:grid-cols-2">
            <InfoCard icon={Network} title="Étude GLPI Agent">
              Présentation de l'agent, de ses bénéfices et des principales étapes de déploiement sur un poste Windows.
            </InfoCard>
            <InfoCard icon={Workflow} title="Logigramme ITIL">
              Formalisation du processus N1 : réception, création, attribution, escalade vers le N2, traitement et clôture.
            </InfoCard>
          </div>
        </Card>
      </section>

      {/* LIVRABLES */}
      <section className="container-page py-4">
        <DeliverablesPanel
          items={[
            { name: 'Export de la base de tickets', description: 'Export de la base de tickets au format MySQL.', viewUrl: '/docs/Projet1/export_tickets.sql' },
            { name: 'Documents professionnels', description: 'Quatre documents professionnels au format PDF.', viewUrl: '/docs/Projet1/' },
            { name: 'Étude GLPI Agent', description: 'Présentation GLPI Agent au format PDF.', viewUrl: '/docs/Projet1/etude_glpi_agent.pdf' },
            { name: 'Logigramme ITIL', description: 'Logigramme du processus N1 selon ITIL au format PDF.', viewUrl: '/docs/Projet1/logigramme_itil.pdf' },
          ]}
        />
      </section>

      {/* COMPETENCES */}
      <section className="container-page py-4">
        <CompetencesValidees
          items={[
            "Assurer un support utilisateur de niveau 2 et prioriser les demandes selon leur criticité",
            "Reconstruire un service applicatif (GLPI) sur une nouvelle installation Debian, Apache et MariaDB",
            "Formaliser un processus de traitement des demandes conforme aux principes ITIL",
            "Produire une documentation professionnelle réutilisable dans une base de connaissances",
          ]}
        />
      </section>

      {/* EVALUATION */}
      <section className="container-page py-4 pb-8">
        <EvaluationJury
          summary="Les compétences liées au support utilisateur et aux interventions techniques sur le système d'information ont été validées."
          quote="Aucun axe d'amélioration particulier n'a été relevé. Le traitement des demandes et la reconstruction du service GLPI répondent aux attentes du projet."
        />
      </section>

      <ProjectFooterNav current={1} />

      {/* MODAL TERMINAL */}
      {showTerminal && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-6 backdrop-blur-sm" onClick={() => setShowTerminal(false)}>
          <div className="w-full max-w-2xl overflow-hidden rounded-3xl border border-white/10 bg-base-800 shadow-2xl" onClick={(e) => e.stopPropagation()}>
            <div className="flex items-center justify-between border-b border-white/5 p-5">
              <div className="flex items-center gap-3">
                <Terminal className="text-cyber-blue" size={20} />
                <span className="font-semibold text-white">Logique de reconstruction</span>
              </div>
              <button type="button" onClick={() => setShowTerminal(false)} className="rounded-lg p-2 text-slate-500 transition hover:bg-base-700 hover:text-white" aria-label="Fermer">
                <X size={20} />
              </button>
            </div>
            <div className="space-y-4 p-6">
              <div className="rounded-2xl border border-white/5 bg-slate-950/80 p-5 font-mono text-sm leading-7">
                <div className="text-slate-500"># Préparation du serveur</div>
                <div className="text-cyber-blue">apt update && apt upgrade -y</div>
                <div className="mt-4 text-slate-500"># Installation des services</div>
                <div className="text-cyber-blue">apache2 + php + mariadb-server</div>
                <div className="mt-4 text-slate-500"># Création de la base de données</div>
                <div className="text-cyber-blue">CREATE DATABASE glpidb CHARACTER SET utf8mb4;</div>
                <div className="mt-4 text-slate-500"># Déploiement applicatif</div>
                <div className="text-cyber-blue">tar -xvf glpi.tar.gz -C /var/www/html/</div>
                <div className="mt-4 text-slate-500"># Activation Apache</div>
                <div className="text-cyber-blue">a2ensite glpi.conf && a2enmod rewrite</div>
                <div className="mt-4 text-cyber-emerald font-bold">✓ Service GLPI opérationnel</div>
              </div>
              <p className="text-sm leading-6 text-slate-400">
                La vue ci-dessus présente la logique technique du rétablissement. Aucun mot de passe ni secret n'est exposé.
              </p>
            </div>
          </div>
        </div>
      )}
    </ProjectPage>
  );
}
