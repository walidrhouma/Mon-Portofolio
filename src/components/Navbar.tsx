import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Download, Shield, Linkedin, Mail, Github } from 'lucide-react';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { name: 'Accueil', path: '/' },
    { name: 'Projets', path: '/projets' },
    { name: 'Contact', path: '/contact' },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-white/10 bg-base-900/80 backdrop-blur-md">
      <div className="container-page flex h-16 items-center justify-between">
        {/* Logo / Nom */}
        <Link to="/" className="flex items-center gap-2 group">
          <div className="w-9 h-9 rounded-lg bg-cyber-blue/10 border border-cyber-blue/20 flex items-center justify-center text-cyber-blue group-hover:bg-cyber-blue group-hover:text-white transition-all">
            <Shield className="w-5 h-5" />
          </div>
          <span className="font-bold text-white text-lg tracking-tight">
            Walid <span className="text-gradient">RHOUMA</span>
          </span>
        </Link>

        {/* Navigation Desktop */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              className={`text-sm font-medium transition-colors ${
                isActive(link.path)
                  ? 'text-cyber-blue font-semibold'
                  : 'text-slate-400 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}
        </nav>

        {/* Actions Desktop */}
        <div className="hidden md:flex items-center gap-3">
          <a
            href="https://github.com/walidrhouma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-base-800 border border-white/10 text-slate-400 hover:text-cyber-emerald hover:border-cyber-emerald/30 transition-all"
            title="GitHub"
          >
            <Github className="w-4 h-4" />
          </a>
          <a
            href="https://linkedin.com/in/walid-rhouma"
            target="_blank"
            rel="noopener noreferrer"
            className="p-2 rounded-lg bg-base-800 border border-white/10 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
            title="LinkedIn"
          >
            <Linkedin className="w-4 h-4" />
          </a>
          <a
            href="mailto:walidrhouma@hotmail.fr"
            className="p-2 rounded-lg bg-base-800 border border-white/10 text-slate-400 hover:text-cyber-blue hover:border-cyber-blue/30 transition-all"
            title="Envoyer un e-mail"
          >
            <Mail className="w-4 h-4" />
          </a>
          <a
            href="/docs/CV_Rhouma_Walid.pdf"
            download
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyber-blue/10 border border-cyber-blue/30 text-cyber-blue text-sm font-semibold hover:bg-cyber-blue hover:text-white transition-all"
          >
            <Download className="w-4 h-4" />
            CV
          </a>
        </div>

        {/* Bouton Mobile */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-slate-400 hover:text-white focus:outline-none"
          aria-label="Toggle Menu"
        >
          {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
        </button>
      </div>

      {/* Menu Mobile déroulant */}
      {isOpen && (
        <div className="md:hidden border-b border-white/10 bg-base-800 px-4 pt-2 pb-6 space-y-3">
          {navLinks.map((link) => (
            <Link
              key={link.path}
              to={link.path}
              onClick={() => setIsOpen(false)}
              className={`block px-3 py-2 rounded-md text-base font-medium ${
                isActive(link.path)
                  ? 'bg-cyber-blue/10 text-cyber-blue'
                  : 'text-slate-300 hover:bg-white/5 hover:text-white'
              }`}
            >
              {link.name}
            </Link>
          ))}

          <div className="pt-2 border-t border-white/5 flex items-center gap-3">
            <a
              href="https://github.com/walidrhouma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-base-900 border border-white/10 text-slate-300 hover:text-cyber-emerald transition-all"
              title="GitHub"
            >
              <Github className="w-5 h-5" />
            </a>
            <a
              href="https://linkedin.com/in/walid-rhouma"
              target="_blank"
              rel="noopener noreferrer"
              className="p-2.5 rounded-lg bg-base-900 border border-white/10 text-slate-300 hover:text-cyber-blue transition-all"
              title="LinkedIn"
            >
              <Linkedin className="w-5 h-5" />
            </a>
            <a
              href="mailto:walidrhouma@hotmail.fr"
              className="p-2.5 rounded-lg bg-base-900 border border-white/10 text-slate-300 hover:text-cyber-blue transition-all"
              title="Envoyer un e-mail"
            >
              <Mail className="w-5 h-5" />
            </a>
          </div>

          <a
            href="/docs/CV_Rhouma_Walid.pdf"
            download
            className="flex items-center justify-center gap-2 w-full mt-4 px-4 py-2.5 rounded-lg bg-cyber-blue text-white text-sm font-semibold"
          >
            <Download className="w-4 h-4" />
            Télécharger le CV
          </a>
        </div>
      )}
    </header>
  );
}