import { useState, useMemo } from 'react';
import { Search, Filter, FolderOpen } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { projects, projectCategories } from '@/data/projectsData';
import type { ProjectCategory } from '@/data/types';
import ProjectCard from '@/components/ProjectCard';

export default function Projects() {
  const [query, setQuery] = useState('');
  const [category, setCategory] = useState<'Tous' | ProjectCategory>('Tous');

  const filtered = useMemo(() => {
    return projects.filter((p) => {
      const matchesCategory = category === 'Tous' || p.category === category;
      const q = query.toLowerCase();
      const matchesQuery =
        q === '' ||
        p.title.toLowerCase().includes(q) ||
        p.excerpt.toLowerCase().includes(q) ||
        p.technologies.some((t) => t.toLowerCase().includes(q));
      return matchesCategory && matchesQuery;
    });
  }, [query, category]);

  return (
    <div className="container-page py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
          Catalogue complet
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-3">
          Mes 12 Projets Techniques
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Chaque projet a été réalisé, documenté et validé en soutenance.
          Filtrez par catégorie ou recherchez par mot-clé pour explorer mon
          travail pratique.
        </p>
      </motion.div>

      {/* Search & Filters */}
      <div className="mb-8 space-y-4">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-slate-500" />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Rechercher par mot-clé, technologie, titre..."
            className="w-full pl-12 pr-4 py-3.5 rounded-xl bg-base-700/50 border border-white/5 text-white placeholder-slate-500 focus:outline-none focus:border-cyber-blue/40 focus:bg-base-700 transition-all"
          />
        </div>

        <div className="flex items-center gap-2 flex-wrap">
          <Filter className="w-4 h-4 text-slate-500 mr-1" />
          {projectCategories.map((cat) => {
            const active = category === cat;
            return (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                  active
                    ? 'bg-cyber-blue text-white shadow-glow'
                    : 'bg-base-700/50 text-slate-400 border border-white/5 hover:text-white hover:border-white/10'
                }`}
              >
                {cat}
              </button>
            );
          })}
        </div>
      </div>

      <div className="mb-6 text-sm text-slate-500">
        {filtered.length} projet{filtered.length > 1 ? 's' : ''} trouvé{filtered.length > 1 ? 's' : ''}
      </div>

      {/* Grid */}
      {filtered.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.id} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      ) : (
        <div className="text-center py-20">
          <FolderOpen className="w-12 h-12 text-slate-600 mx-auto mb-4" />
          <p className="text-slate-400">Aucun projet ne correspond à votre recherche.</p>
          <button
            onClick={() => {
              setQuery('');
              setCategory('Tous');
            }}
            className="mt-4 text-sm text-cyber-blue hover:underline"
          >
            Réinitialiser les filtres
          </button>
        </div>
      )}
    </div>
  );
}
