import { Link } from 'react-router-dom';
import { Shield, Github, Linkedin, Mail, Terminal } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="border-t border-white/5 bg-base-900 mt-20">
      <div className="container-page py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2.5 mb-4">
              <Shield className="w-6 h-6 text-cyber-blue" />
              <span className="font-bold text-white text-lg">
                SysAdmin<span className="text-cyber-blue">.</span>Portfolio
              </span>
            </div>
            <p className="text-sm text-slate-400 leading-relaxed">
              Administrateur Systèmes, Réseaux &amp; Sécurité — passionné par
              la pratique continue et la sécurité de l'infrastructure IT.
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Navigation</h3>
            <ul className="space-y-2 text-sm">
              <li>
                <Link to="/" className="text-slate-400 hover:text-cyber-blue transition-colors">
                  Accueil
                </Link>
              </li>
              <li>
                <Link to="/projets" className="text-slate-400 hover:text-cyber-blue transition-colors">
                  Catalogue des projets
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-slate-400 hover:text-cyber-blue transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold text-white mb-4">Réseaux &amp; Contact</h3>
            <div className="flex gap-3">
              <a
                href="https://github.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-base-700 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-blue/30 transition-all"
                aria-label="GitHub"
              >
                <Github className="w-5 h-5" />
              </a>
              <a
                href="https://linkedin.com"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-base-700 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-blue/30 transition-all"
                aria-label="LinkedIn"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <Link
                to="/contact"
                className="w-10 h-10 rounded-lg bg-base-700 border border-white/5 flex items-center justify-center text-slate-400 hover:text-white hover:border-cyber-blue/30 transition-all"
                aria-label="Email"
              >
                <Mail className="w-5 h-5" />
              </Link>
            </div>
            <div className="mt-4 flex items-center gap-2 text-xs text-slate-500">
              <Terminal className="w-4 h-4 text-cyber-emerald" />
              <span className="font-mono">Homelab actif — veille cyber quotidienne</span>
            </div>
          </div>
        </div>

        <div className="mt-10 pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-slate-500">
            &copy; {new Date().getFullYear()} — Portfolio Administrateur Systèmes, Réseaux &amp; Sécurité
          </p>
          <p className="text-xs text-slate-500 font-mono">
            Conçu avec React, Vite &amp; Tailwind CSS
          </p>
        </div>
      </div>
    </footer>
  );
}
