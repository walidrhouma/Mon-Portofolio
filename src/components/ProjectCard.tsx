import React from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../data/projectsData';
import { Clock, ArrowRight, CheckCircle2 } from 'lucide-react';

interface ProjectCardProps {
  project: Project;
}

export const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  return (
    <div className="group relative rounded-2xl bg-base-800/60 border border-white/5 hover:border-cyber-blue/40 transition-all duration-300 flex flex-col justify-between overflow-hidden hover:shadow-xl hover:shadow-cyber-blue/5">
      <div className="p-6 space-y-4">
        {/* Badges supérieur */}
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="px-2.5 py-1 rounded-md bg-cyber-blue/10 border border-cyber-blue/20 text-cyber-blue font-semibold">
            {project.category}
          </span>
          <span className="flex items-center gap-1 text-slate-400">
            <Clock className="w-3.5 h-3.5 text-cyber-blue" />
            Projet {project.projectNumber || project.id} • {project.durationHours}h
          </span>
        </div>

        {/* Titre & Description */}
        <div>
          <h3 className="text-lg font-bold text-white group-hover:text-cyber-blue transition-colors leading-snug">
            {project.title}
          </h3>
          <p className="text-xs text-slate-300 mt-2 line-clamp-3 leading-relaxed">
            {project.shortDescription || project.description}
          </p>
        </div>

        {/* Badges Technologies */}
        {project.tools && project.tools.length > 0 && (
          <div className="flex flex-wrap gap-1.5 pt-2">
            {project.tools.slice(0, 4).map((tool, idx) => (
              <span 
                key={idx}
                className="px-2 py-0.5 rounded bg-base-700/60 border border-white/5 text-[11px] font-mono text-slate-300"
              >
                {tool}
              </span>
            ))}
            {project.tools.length > 4 && (
              <span className="px-2 py-0.5 rounded bg-base-700/30 text-[11px] font-mono text-slate-500">
                +{project.tools.length - 4}
              </span>
            )}
          </div>
        )}
      </div>

      {/* Pied de carte avec statut & bouton */}
      <div className="p-6 pt-0 space-y-3">
        <div className="flex items-center gap-1.5 text-xs text-cyber-emerald font-medium">
          <CheckCircle2 className="w-4 h-4" />
          <span>Validé en soutenance</span>
        </div>

        <Link
          to={`/projets/${project.id}`}
          className="inline-flex items-center justify-center gap-2 w-full py-2.5 rounded-xl bg-cyber-blue text-white text-xs font-semibold hover:bg-cyber-blue/90 transition-all shadow-md group-hover:shadow-cyber-blue/20"
        >
          Voir le projet
          <ArrowRight className="w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" />
        </Link>
      </div>
    </div>
  );
};

export default ProjectCard;