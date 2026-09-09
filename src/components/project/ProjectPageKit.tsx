import { type ReactNode, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  ArrowLeft,
  ArrowRight,
  CheckCircle2,
  Download,
  Eye,
  GraduationCap,
  Quote,
  ShieldCheck,
  X,
} from 'lucide-react';

/**
 * ProjectPageKit
 * ----------------------------------------------------------------
 * Bibliothèque de composants partagés par toutes les pages "Projet".
 * Objectif : une structure de page strictement identique d'un projet
 * à l'autre (mêmes sections, dans le même ordre, avec le même
 * habillage visuel que le reste du site : cyber-blue / base-700-900 /
 * container-page), afin que la navigation soit prévisible pour un
 * recruteur qui explore plusieurs fiches à la suite.
 *
 * Ordre de section imposé par ces composants sur chaque page projet :
 *   1. BackLink            – retour au catalogue
 *   2. ProjectHero          – titre, résumé, badges (aucune date)
 *   3. StatStrip            – repères rapides (contexte, durée de
 *                             formation, outils clés — jamais de date
 *                             calendaire)
 *   4. SectionCard          – contenu libre propre à chaque projet
 *                             (contexte, démarche, démonstration…)
 *   5. DeliverablesPanel    – livrables consultables EN UN CLIC
 *                             (aperçu immédiat + téléchargement),
 *                             jamais de date affichée
 *   6. CompetencesValidees  – compétences validées à la soutenance
 *   7. EvaluationJury       – retour de synthèse des évaluateurs
 *   8. ProjectFooterNav     – navigation projet précédent / accueil /
 *                             projet suivant, identique partout
 * ------------------------------------------------------------------
 */

export const TOTAL_PROJECTS = 12;

/* ---------------------------------------------------------------- */
/* Layout & structure                                               */
/* ---------------------------------------------------------------- */

export function ProjectPage({ children }: { children: ReactNode }) {
  return (
    <main className="min-h-screen bg-base-900 text-slate-200">{children}</main>
  );
}

export function BackLink() {
  return (
    <div className="container-page pt-8">
      <Link
        to="/projets"
        className="inline-flex items-center gap-2 text-sm font-medium text-cyber-blue hover:gap-2.5 transition-all"
      >
        <ArrowLeft className="w-4 h-4" />
        Retour aux projets
      </Link>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Hero                                                              */
/* ---------------------------------------------------------------- */

export function ProjectHero({
  category,
  formationVolume,
  title,
  summary,
}: {
  category: string;
  /** Ex. "50 h de formation" — un volume d'heures, jamais une date. */
  formationVolume: string;
  title: ReactNode;
  summary: string;
}) {
  return (
    <section className="container-page pt-8 pb-4">
      <div className="flex flex-wrap items-center gap-3 mb-6">
        <span className="px-3.5 py-1 text-xs font-semibold rounded-full bg-cyber-blue/10 text-cyber-blue border border-cyber-blue/30">
          {category}
        </span>
        <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-cyber-emerald/10 text-cyber-emerald border border-cyber-emerald/30">
          <GraduationCap className="w-3.5 h-3.5" />
          Projet validé · OpenClassrooms
        </span>
        <span className="text-xs font-mono text-slate-400">{formationVolume}</span>
      </div>

      <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight max-w-4xl">
        {title}
      </h1>

      <p className="mt-5 max-w-3xl text-base md:text-lg leading-relaxed text-slate-400">
        {summary}
      </p>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Stat strip                                                       */
/* ---------------------------------------------------------------- */

export function StatStrip({ stats }: { stats: { label: string; value: string }[] }) {
  return (
    <section className="container-page py-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((stat) => (
          <div
            key={stat.label}
            className="rounded-2xl bg-base-700/40 border border-white/5 p-5 space-y-1"
          >
            <h3 className="text-lg font-bold text-cyber-blue">{stat.value}</h3>
            <p className="text-xs text-slate-500">{stat.label}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Generic section / card primitives                                */
/* ---------------------------------------------------------------- */

export function SectionTitle({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description?: string;
}) {
  return (
    <div className="mb-6 max-w-3xl">
      <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
        {eyebrow}
      </span>
      <h2 className="mt-2 text-2xl font-bold tracking-tight text-white md:text-3xl">
        {title}
      </h2>
      {description && (
        <p className="mt-3 leading-7 text-slate-400">{description}</p>
      )}
    </div>
  );
}

export function Card({
  children,
  className = '',
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <div
      className={`rounded-2xl bg-base-700/40 border border-white/5 p-6 md:p-8 space-y-6 ${className}`}
    >
      {children}
    </div>
  );
}

export function InfoCard({
  icon: Icon,
  title,
  children,
}: {
  icon: React.ComponentType<{ size?: number; className?: string }>;
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="rounded-2xl bg-base-700/30 border border-white/5 p-5 transition-all hover:border-cyber-blue/30 hover:-translate-y-0.5">
      <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue">
        <Icon size={20} />
      </div>
      <h3 className="font-semibold text-white">{title}</h3>
      <div className="mt-2 text-sm leading-6 text-slate-400">{children}</div>
    </div>
  );
}

export function CodeBlock({ label = 'shell', children }: { label?: string; children: ReactNode }) {
  return (
    <div className="rounded-2xl border border-white/5 bg-slate-950 p-5">
      <div className="mb-3 flex items-center gap-2 text-xs text-slate-500">
        <span className="h-2 w-2 rounded-full bg-cyber-emerald" />
        {label}
      </div>
      <code className="block overflow-x-auto whitespace-pre-wrap font-mono text-sm leading-7 text-cyber-blue">
        {children}
      </code>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Deliverables — consultation instantanée, jamais de date affichée */
/* ---------------------------------------------------------------- */

export type Deliverable = {
  name: string;
  description: string;
  /** URL d'aperçu direct (ouvre dans un nouvel onglet). Optionnel. */
  viewUrl?: string;
  /** URL de téléchargement direct. Optionnel. */
  downloadUrl?: string;
};

function DeliverableButtons({ viewUrl, downloadUrl }: Pick<Deliverable, 'viewUrl' | 'downloadUrl'>) {
  const hasLinks = viewUrl || downloadUrl;

  if (!hasLinks) {
    return (
      <div className="flex items-center gap-2 rounded-lg border border-white/5 bg-base-900/40 px-3 py-2">
        <Download className="w-3.5 h-3.5 shrink-0 text-slate-600" />
        <span className="text-xs text-slate-600 italic">Livrable non joint</span>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-2 gap-2">
      <a
        href={viewUrl ?? downloadUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-base-700 px-3 py-2 text-xs font-medium text-slate-200 hover:text-white hover:bg-base-600 transition-all"
      >
        <Eye className="w-3.5 h-3.5 text-cyber-blue" />
        Consulter
      </a>
      <a
        href={downloadUrl ?? viewUrl}
        download
        className="inline-flex items-center justify-center gap-1.5 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 px-3 py-2 text-xs font-semibold text-cyber-blue hover:bg-cyber-blue hover:text-white transition-all"
      >
        <Download className="w-3.5 h-3.5" />
        Télécharger
      </a>
    </div>
  );
}

export function DeliverablesPanel({
  title = 'Livrables',
  description = 'Chaque livrable est consultable immédiatement, sans délai ni étape intermédiaire.',
  items,
}: {
  title?: string;
  description?: string;
  items: Deliverable[];
}) {
  return (
    <Card>
      <SectionTitle eyebrow="Livrables" title={title} description={description} />
      <div className="grid gap-3 md:grid-cols-2">
        {items.map((item) => (
          <div
            key={item.name}
            className="rounded-xl bg-base-900/60 border border-white/5 p-4 flex flex-col gap-3 hover:border-cyber-blue/30 transition-colors"
          >
            <div>
              <h4 className="text-sm font-semibold text-white">{item.name}</h4>
              <p className="mt-1 text-xs leading-5 text-slate-500">{item.description}</p>
            </div>
            <DeliverableButtons viewUrl={item.viewUrl} downloadUrl={item.downloadUrl} />
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------- */
/* Compétences validées                                             */
/* ---------------------------------------------------------------- */

export function CompetencesValidees({ items }: { items: string[] }) {
  return (
    <Card>
      <SectionTitle
        eyebrow="Compétences validées"
        title="Ce que ce projet démontre"
        description="Compétences du référentiel RNCP validées lors de la soutenance de ce projet."
      />
      <div className="grid gap-3 sm:grid-cols-2">
        {items.map((item) => (
          <div
            key={item}
            className="flex items-start gap-3 rounded-xl bg-base-900/60 border border-white/5 p-4"
          >
            <CheckCircle2 size={18} className="mt-0.5 shrink-0 text-cyber-emerald" />
            <span className="text-sm leading-6 text-slate-300">{item}</span>
          </div>
        ))}
      </div>
    </Card>
  );
}

/* ---------------------------------------------------------------- */
/* Retour des évaluateurs                                           */
/* ---------------------------------------------------------------- */

export function EvaluationJury({
  evaluator,
  summary,
  quote,
}: {
  /** Nom de l'évaluateur si connu, sinon "Jury OpenClassrooms". */
  evaluator?: string;
  /** Une ou deux lignes de synthèse (ex. compétences évaluées). */
  summary?: string;
  /** Citation resituant le retour oral du jury. */
  quote: string;
}) {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-base-700/60 via-base-700/40 to-cyber-emerald/10 border border-cyber-emerald/30 p-6 md:p-8 space-y-4">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/30 text-cyber-emerald">
          <ShieldCheck size={20} />
        </div>
        <div>
          <h3 className="font-semibold text-white">Retour des évaluateurs</h3>
          <p className="text-xs text-cyber-emerald">
            {evaluator ? `Soutenance · ${evaluator}` : 'Soutenance orale de projet'}
          </p>
        </div>
      </div>

      {summary && <p className="text-sm leading-6 text-slate-300">{summary}</p>}

      <div className="rounded-xl bg-base-900/50 border border-white/5 p-4 flex gap-3">
        <Quote className="w-4 h-4 shrink-0 text-cyber-emerald mt-0.5" />
        <p className="text-sm leading-6 text-slate-300 italic">{quote}</p>
      </div>
    </div>
  );
}

/* ---------------------------------------------------------------- */
/* Navigation de bas de page                                        */
/* ---------------------------------------------------------------- */

export function ProjectFooterNav({ current }: { current: number }) {
  const prev = current > 1 ? current - 1 : null;
  const next = current < TOTAL_PROJECTS ? current + 1 : null;

  return (
    <section className="container-page py-16">
      <div className="grid gap-4 md:grid-cols-3">

        {/* ← Précédent — bleu */}
        <Link
          to={prev ? `/projets/${prev}` : '/projets'}
          className="group relative overflow-hidden rounded-2xl border border-cyber-blue/30 bg-gradient-to-br from-cyber-blue/20 via-cyber-blue/10 to-transparent p-6 transition-all hover:border-cyber-blue/60 hover:from-cyber-blue/30 hover:shadow-[0_0_24px_rgba(0,180,255,0.15)]"
        >
          <div className="flex items-center gap-2 text-cyber-blue">
            <ArrowLeft size={18} />
            <span className="text-xs font-semibold uppercase tracking-widest">
              {prev ? 'Projet précédent' : 'Retour'}
            </span>
          </div>
          <strong className="mt-4 block text-xl font-extrabold text-white group-hover:text-cyber-blue transition-colors">
            {prev ? `Projet ${prev}` : 'Tous les projets'}
          </strong>
        </Link>

        {/* Accueil — neutre lumineux */}
        <Link
          to="/"
          className="group rounded-2xl border border-white/10 bg-white/5 p-6 text-center transition-all hover:border-white/25 hover:bg-white/10"
        >
          <span className="text-xs font-semibold uppercase tracking-widest text-slate-400 group-hover:text-white transition-colors">
            Portfolio
          </span>
          <strong className="mt-4 block text-xl font-extrabold text-white">Accueil</strong>
        </Link>

        {/* Suivant → émeraude */}
        <Link
          to={next ? `/projets/${next}` : '/projets'}
          className="group relative overflow-hidden rounded-2xl border border-cyber-emerald/30 bg-gradient-to-bl from-cyber-emerald/20 via-cyber-emerald/10 to-transparent p-6 text-right transition-all hover:border-cyber-emerald/60 hover:from-cyber-emerald/30 hover:shadow-[0_0_24px_rgba(0,255,180,0.12)]"
        >
          <div className="flex items-center justify-end gap-2 text-cyber-emerald">
            <span className="text-xs font-semibold uppercase tracking-widest">
              {next ? 'Projet suivant' : 'Retour'}
            </span>
            <ArrowRight size={18} />
          </div>
          <strong className="mt-4 block text-xl font-extrabold text-white group-hover:text-cyber-emerald transition-colors">
            {next ? `Projet ${next}` : 'Tous les projets'}
          </strong>
        </Link>

      </div>
    </section>
  );
}

/* ---------------------------------------------------------------- */
/* Lightbox réutilisable (aperçu image/document en un clic)         */
/* ---------------------------------------------------------------- */

export function useLightbox() {
  const [src, setSrc] = useState<string | null>(null);
  return { src, open: setSrc, close: () => setSrc(null) };
}

export function Lightbox({ src, onClose }: { src: string | null; onClose: () => void }) {
  if (!src) return null;
  const isDoc = /\.(pdf)$/i.test(src);

  return (
    <div
      onClick={onClose}
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 p-4 backdrop-blur-sm cursor-pointer"
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className="relative w-full max-w-5xl h-[85vh] rounded-2xl border border-white/10 bg-base-800 p-4 overflow-hidden"
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute top-4 right-4 z-10 rounded-lg bg-base-700 p-2 text-slate-300 hover:text-white transition-colors"
          aria-label="Fermer"
        >
          <X size={18} />
        </button>
        {isDoc ? (
          <iframe src={src} title="Aperçu du document" className="w-full h-full rounded-lg border-0 bg-white" />
        ) : (
          <img src={src} alt="Aperçu" className="w-full h-full object-contain rounded-lg" />
        )}
      </div>
    </div>
  );
}
