import { Link } from 'react-router-dom';
import { Home, ArrowLeft } from 'lucide-react';

export default function NotFound() {
  return (
    <div className="container-page py-20 lg:py-32 text-center">
      <div className="inline-block mb-6">
        <span className="font-mono text-8xl font-extrabold text-gradient">404</span>
      </div>
      <h1 className="text-2xl font-bold text-white mb-3">Page introuvable</h1>
      <p className="text-slate-400 max-w-md mx-auto mb-8">
        La page que vous recherchez n'existe pas ou a été déplacée.
      </p>
      <div className="flex flex-col sm:flex-row gap-3 justify-center">
        <Link
          to="/"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-cyber-blue text-white font-semibold shadow-glow hover:bg-cyber-blue/90 transition-all"
        >
          <Home className="w-5 h-5" />
          Retour à l'accueil
        </Link>
        <Link
          to="/projets"
          className="inline-flex items-center justify-center gap-2 px-5 py-3 rounded-xl bg-base-700 border border-white/10 text-white font-semibold hover:border-cyber-blue/30 transition-all"
        >
          <ArrowLeft className="w-5 h-5" />
          Voir les projets
        </Link>
      </div>
    </div>
  );
}
