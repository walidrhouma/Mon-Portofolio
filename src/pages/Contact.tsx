import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
  Github,
  Linkedin,
  FileText,
  Eye,
  X,
} from 'lucide-react';
import { supabase } from '@/lib/supabase';

interface FormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}

type Status = 'idle' | 'submitting' | 'success' | 'error';

export default function Contact() {
  const [form, setForm] = useState<FormData>({
    name: '',
    email: '',
    subject: '',
    message: '',
  });
  const [status, setStatus] = useState<Status>('idle');
  const [errors, setErrors] = useState<Partial<Record<keyof FormData, string>>>({});
  const [showCv, setShowCv] = useState(false);

  function validate(): boolean {
    const e: Partial<Record<keyof FormData, string>> = {};
    if (!form.name.trim()) e.name = 'Le nom est requis';
    if (!form.email.trim()) e.email = "L'email est requis";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) e.email = 'Email invalide';
    if (!form.message.trim()) e.message = 'Le message est requis';
    else if (form.message.trim().length < 10) e.message = 'Message trop court (10 caractères minimum)';
    setErrors(e);
    return Object.keys(e).length === 0;
  }

  async function handleSubmit(e: FormEvent) {
    e.preventDefault();
    if (!validate()) return;
    setStatus('submitting');
    try {
      const { error } = await supabase.from('contact_messages').insert({
        name: form.name.trim(),
        email: form.email.trim(),
        subject: form.subject.trim() || null,
        message: form.message.trim(),
      });
      if (error) throw error;
      setStatus('success');
      setForm({ name: '', email: '', subject: '', message: '' });
      setTimeout(() => setStatus('idle'), 5000);
    } catch {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 5000);
    }
  }

  const inputBase =
    'w-full px-4 py-3 rounded-xl bg-base-700/50 border text-white placeholder-slate-500 focus:outline-none transition-all';
  const borderClass = (field: keyof FormData) =>
    errors[field] ? 'border-red-500/40' : 'border-white/5 focus:border-cyber-blue/40';

  return (
    <div className="container-page py-12 lg:py-16">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.4 }}
        className="mb-10"
      >
        <span className="text-sm font-mono text-cyber-blue uppercase tracking-wider">
          Contact
        </span>
        <h1 className="text-4xl font-bold text-white mt-2 mb-3">
          Discutons de votre infrastructure
        </h1>
        <p className="text-slate-400 max-w-2xl">
          Recruteur, manager ou simplement curieux ? N'hésitez pas à me contacter
          pour échanger sur mes projets, mon expérience ou une opportunité.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 lg:grid-cols-5 gap-6">
        {/* Form */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.1 }}
          className="lg:col-span-3"
        >
          <form
            onSubmit={handleSubmit}
            className="rounded-2xl bg-base-700/40 border border-white/5 p-6 lg:p-8 space-y-5"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Nom complet <span className="text-red-400">*</span>
                </label>
                <input
                  type="text"
                  value={form.name}
                  onChange={(e) => setForm({ ...form, name: e.target.value })}
                  placeholder="Jean Dupont"
                  className={`${inputBase} ${borderClass('name')}`}
                />
                {errors.name && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.name}
                  </p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-slate-300 mb-1.5">
                  Email <span className="text-red-400">*</span>
                </label>
                <input
                  type="email"
                  value={form.email}
                  onChange={(e) => setForm({ ...form, email: e.target.value })}
                  placeholder="jean.dupont@entreprise.com"
                  className={`${inputBase} ${borderClass('email')}`}
                />
                {errors.email && (
                  <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                    <AlertCircle className="w-3.5 h-3.5" />
                    {errors.email}
                  </p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Sujet
              </label>
              <input
                type="text"
                value={form.subject}
                onChange={(e) => setForm({ ...form, subject: e.target.value })}
                placeholder="Opportunité, question, collaboration..."
                className={`${inputBase} ${borderClass('subject')}`}
              />
            </div>

            <div>
              <label className="block text-sm font-medium text-slate-300 mb-1.5">
                Message <span className="text-red-400">*</span>
              </label>
              <textarea
                value={form.message}
                onChange={(e) => setForm({ ...form, message: e.target.value })}
                placeholder="Votre message..."
                rows={6}
                className={`${inputBase} ${borderClass('message')} resize-none`}
              />
              {errors.message && (
                <p className="mt-1.5 text-xs text-red-400 flex items-center gap-1">
                  <AlertCircle className="w-3.5 h-3.5" />
                  {errors.message}
                </p>
              )}
            </div>

            <button
              type="submit"
              disabled={status === 'submitting'}
              className="w-full inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-cyber-blue text-white font-semibold shadow-glow hover:bg-cyber-blue/90 transition-all disabled:opacity-60 disabled:cursor-not-allowed"
            >
              {status === 'submitting' ? (
                <>
                  <Loader2 className="w-5 h-5 animate-spin" />
                  Envoi en cours...
                </>
              ) : (
                <>
                  <Send className="w-5 h-5" />
                  Envoyer le message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2.5 p-4 rounded-xl bg-cyber-emerald/10 border border-cyber-emerald/20 text-sm text-cyber-emerald"
                >
                  <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
                  Message envoyé avec succès. Je vous répondrai rapidement.
                </motion.div>
              )}
              {status === 'error' && (
                <motion.div
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  className="flex items-center gap-2.5 p-4 rounded-xl bg-red-500/10 border border-red-500/20 text-sm text-red-400"
                >
                  <AlertCircle className="w-5 h-5 flex-shrink-0" />
                  Une erreur est survenue. Veuillez réessayer ou me contacter directement.
                </motion.div>
              )}
            </AnimatePresence>
          </form>
        </motion.div>

        {/* Sidebar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4, delay: 0.2 }}
          className="lg:col-span-2 space-y-5"
        >
          <div className="rounded-2xl bg-base-700/40 border border-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-4">Réseaux &amp; Liens</h3>
            <div className="space-y-3">
              <a
                href="https://linkedin.com/in/walid-rhouma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-base-800/60 border border-white/5 hover:border-cyber-blue/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                  <Linkedin className="w-5 h-5 text-cyber-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">LinkedIn</div>
                  <div className="text-xs text-slate-500">Voir mon profil</div>
                </div>
              </a>
              <a
                href="https://github.com/walidrhouma"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-3 p-4 rounded-xl bg-base-800/60 border border-white/5 hover:border-cyber-blue/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cyber-emerald/10 flex items-center justify-center">
                  <Github className="w-5 h-5 text-cyber-emerald" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">GitHub</div>
                  <div className="text-xs text-slate-500">Mes dépôts et scripts</div>
                </div>
              </a>
              <a
                href="mailto:walidrhouma@hotmail.fr"
                className="flex items-center gap-3 p-4 rounded-xl bg-base-800/60 border border-white/5 hover:border-cyber-blue/30 transition-all"
              >
                <div className="w-10 h-10 rounded-lg bg-cyber-blue/10 flex items-center justify-center">
                  <Mail className="w-5 h-5 text-cyber-blue" />
                </div>
                <div>
                  <div className="text-sm font-medium text-white">Email</div>
                  <div className="text-xs text-slate-500 font-mono">walidrhouma@hotmail.fr</div>
                </div>
              </a>
            </div>
          </div>

          <div className="rounded-2xl bg-base-700/40 border border-white/5 p-6">
            <h3 className="text-lg font-semibold text-white mb-2">Mon CV</h3>
            <p className="text-sm text-slate-400 mb-4">
              Consultez ou téléchargez mon CV complet au format PDF.
            </p>
            <div className="flex flex-col gap-2.5">
              <button
                onClick={() => setShowCv(true)}
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-base-800/60 border border-white/5 text-sm font-medium text-white hover:border-cyber-blue/30 transition-all"
              >
                <Eye className="w-4 h-4" />
                Prévisualiser le CV
              </button>
              <a
                href="/docs/CV_Rhouma_Walid.pdf"
                download
                className="inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-cyber-blue/10 border border-cyber-blue/20 text-sm font-medium text-cyber-blue hover:bg-cyber-blue/20 transition-all"
              >
                <FileText className="w-4 h-4" />
                Télécharger (PDF)
              </a>
            </div>
          </div>
        </motion.div>
      </div>

      {/* CV Preview Modal */}
      <AnimatePresence>
        {showCv && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setShowCv(false)}
            className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm"
          >
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="relative w-full max-w-2xl max-h-[85vh] overflow-y-auto rounded-2xl bg-base-700 border border-white/10"
            >
              <button
                onClick={() => setShowCv(false)}
                className="absolute top-4 right-4 p-2 rounded-lg bg-base-800/80 text-slate-400 hover:text-white transition-colors z-10"
              >
                <X className="w-5 h-5" />
              </button>
              <div className="p-8 lg:p-12">
                <div className="text-center mb-8">
                  <h2 className="text-2xl font-bold text-white mb-1">Curriculum Vitae</h2>
                  <p className="text-cyber-blue font-mono text-sm">Administrateur Systèmes, Réseaux &amp; Sécurité</p>
                </div>

                <div className="space-y-6 text-sm">
                  <div>
                    <h3 className="text-white font-semibold mb-2 border-b border-white/10 pb-1">Profil</h3>
                    <p className="text-slate-400 leading-relaxed">
                      Administrateur Systèmes, Réseaux et Sécurité passionné, avec
                      13 projets techniques validés en formation et un Homelab
                      actif. Expert en hardening, virtualisation, automatisation
                      et supervision d'infrastructure.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 border-b border-white/10 pb-1">Compétences clés</h3>
                    <div className="grid grid-cols-2 gap-2 text-slate-400">
                      <span>• Linux / Windows Server</span>
                      <span>• Réseau (VLAN, VPN, ACL)</span>
                      <span>• Sécurité (Wazuh, Nmap)</span>
                      <span>• Scripting (Bash, PS)</span>
                      <span>• Ansible / Docker</span>
                      <span>• PKI / Active Directory</span>
                    </div>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 border-b border-white/10 pb-1">Formation</h3>
                    <p className="text-slate-400">
                      Formation Administrateur Systèmes, Réseaux et Sécurité —
                      13 projets pratiques validés en soutenance.
                    </p>
                  </div>

                  <div>
                    <h3 className="text-white font-semibold mb-2 border-b border-white/10 pb-1">Homelab</h3>
                    <p className="text-slate-400">
                      Proxmox VE (8 VMs), Wazuh SIEM, pfSense, Active Directory,
                      Docker — veille cyber quotidienne.
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}