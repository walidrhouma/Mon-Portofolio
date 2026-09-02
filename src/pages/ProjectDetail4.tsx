import React, { useState } from 'react';
import { 
  FileText, Download, Shield, Server, ArrowLeft, 
  CheckCircle2, Clock, Check, GraduationCap,
  Lock, Terminal, ShieldAlert, Cpu, FolderArchive, FileCode, Key, Eye, File
} from 'lucide-react';
import { Link } from 'react-router-dom';

export default function ProjectDetail4() {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  const servicesConfig = [
    { service: "HTTP / HTTPS (Extranet)", port: "80 / 443", access: "Patte Publique", detail: "Certificat SSL Wildcard + Redirection HTTP vers HTTPS" },
    { service: "HTTP / HTTPS (Admin)", port: "5501 / 5502", access: "Patte Privée", detail: "Vhost Administration sécurisé à accès restreint" },
    { service: "FTPS (vsftpd)", port: "21 / 990 / Pasv", access: "Patte Privée", detail: "Transfert FTP chrooté (jail) chiffré en TLS/SSL" },
    { service: "SSH", port: "22", access: "Patte Privée", detail: "Administration à distance sécurisée et filtrée" },
    { service: "Netfilter / iptables", port: "Tous", access: "Global", detail: "Filtrage strict par interface (pattes publique / privée)" },
    { service: "Fail2Ban", port: "Tous", access: "Global", detail: "Bannissement dynamique contre le brute-force & HTTP 404" }
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
              Systèmes & Réseaux
            </span>

            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 text-xs font-medium rounded-full bg-emerald-950/40 text-emerald-400 border border-emerald-800/60">
              <GraduationCap className="w-3.5 h-3.5 text-emerald-400" />
              Projet Validé - OpenClassrooms
            </span>

            <span className="flex items-center gap-1.5 text-xs text-slate-300 font-mono ml-1">
              <Clock className="w-3.5 h-3.5 text-cyan-400" />
              Volume : 60h
            </span>
          </div>

          <h1 className="text-3xl md:text-5xl font-extrabold text-white tracking-tight">
            Mettez en place des services web sécurisés
          </h1>

          <p className="text-slate-300 max-w-4xl text-base md:text-lg leading-relaxed">
            Déploiement et sécurisation d'un prototype de serveur web et de transfert de fichiers pour le projet EXTRANET de Rainbow Bank. Configuration multi-cartes réseau (pattes publique/privée), hébergement sécurisé des vhosts, serveur FTPS chrooté et hardening complet via Netfilter (iptables) et Fail2Ban.
          </p>
        </div>

        {/* 4 Blocs récapitulatifs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Rainbow Bank</h3>
            <p className="text-xs text-slate-400">Projet EXTRANET / DIL</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-emerald-400">HTTPD & FTPS</h3>
            <p className="text-xs text-slate-400">Services Web & Transfert</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">Netfilter & Fail2Ban</h3>
            <p className="text-xs text-slate-400">Hardening & Anti-DDoS</p>
          </div>
          <div className="p-5 rounded-2xl bg-slate-900/60 border border-slate-800 backdrop-blur-sm space-y-1">
            <h3 className="text-lg font-bold text-cyan-400">100% Validé</h3>
            <p className="text-xs text-slate-400">Soutenance officielle</p>
          </div>
        </div>

        {/* Grille principale : Contenu & Livrables */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Colonne gauche : Contexte, Actions & Matrice des Services */}
          <div className="lg:col-span-2 space-y-8">
            
            {/* Section Contexte & Objectifs */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <Shield className="w-5 h-5 text-cyan-400" />
                Contexte et Périmètre de la Mission
              </h2>
              <p className="text-slate-300 text-sm md:text-base leading-relaxed">
                Sous la responsabilité d'Aurélie Fernandez au sein du Pôle Systèmes et Réseaux de Rainbow Bank, la mission consistait à valider l'infrastructure du projet EXTRANET. Le serveur prototype devait séparer strictement les accès clients externes des accès d'administration internes via une configuration double patte réseau, tout en garantissant un haut niveau de résilience face aux attaques (DDoS, Slowloris, tentatives de brute-force).
              </p>

              {/* Étude comparative demandée par la direction */}
              <div className="p-4 rounded-xl bg-slate-950/50 border border-slate-800 space-y-3">
                <h3 className="text-sm font-semibold text-cyan-400 flex items-center gap-2">
                  <Cpu className="w-4 h-4" />
                  Analyses Techniques Clés Approfondies
                </h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-slate-300">
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">NGINX vs Apache :</span>
                    Comparatif axé sur le modèle événementiel asynchrone de NGINX face au modèle multi-process d'Apache, analysant la gestion de la mémoire sous forte charge et la résistance aux attaques par connexions lentes.
                  </div>
                  <div className="p-3 rounded-lg bg-slate-900/80 border border-slate-800">
                    <span className="font-bold text-white block mb-1">FTPS vs SFTP :</span>
                    Explication de la différence de couche protocolaire : FTPS (FTP encapsulé dans du TLS/SSL avec canaux de commande/données séparés) vs SFTP (sous-système opérant via un canal SSH unique).
                  </div>
                </div>
              </div>
            </div>

            {/* Section Actions Techniques & Réalisations */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <h2 className="text-xl font-bold text-white flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-cyan-400" />
                Actions Techniques & Réalisations
              </h2>

              <div className="space-y-4">
                {[
                  {
                    title: "Configuration Multi-Hôtes & Certificat SSL Auto-Signé :",
                    desc: "Déploiement du vhost Extranet accessible sur la patte publique en HTTPS (redirection HTTP vers HTTPS) et du vhost Admin réservé à la patte privée sur les ports 5501/5502. Génération de la clé privée, de la demande CSR et du certificat SSL."
                  },
                  {
                    title: "Déploiement du Service FTPS Sécurisé :",
                    desc: "Configuration du serveur FTP sécurisé avec chiffrement TLS/SSL sur la patte privée uniquement, et cloisonnement strict des comptes utilisateurs dans un environnement chroot (jail)."
                  },
                  {
                    title: "Filtrage Pare-feu avec Netfilter (iptables) :",
                    desc: "Définition des règles de filtrage réseau par interface (pattes publique/privée). Blocage par défaut et autorisation stricte des flux autorisés (HTTP/HTTPS sur la patte publique, FTPS/SSH/Admin sur la patte privée)."
                  },
                  {
                    title: "Hardening & Protection Dynamique Fail2Ban :",
                    desc: "Mise en place de jails Fail2Ban surveillant les logs pour contrer les attaques par force brute, les scans agressifs et les requêtes répétées sur des ressources inexistantes."
                  },
                  {
                    title: "Mitigation des Attaques DDoS et Slow Connections :",
                    desc: "Ajustement des timeouts de requêtes et limitation du nombre de connexions/requêtes par adresse IP pour prévenir la saturation du serveur web."
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

            {/* Section Tableau de la Cartographie des Services */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-cyan-500/10 text-cyan-400 border border-cyan-500/20">
                  <Server className="w-6 h-6" />
                </div>
                <div>
                  <h2 className="text-lg md:text-xl font-bold text-white">Matrice d'Exposition des Services Web & Réseaux</h2>
                  <p className="text-xs text-slate-400">Cloisonnement par interface et politique d'accès par service</p>
                </div>
              </div>

              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs md:text-sm">
                  <thead>
                    <tr className="border-b border-slate-800 text-slate-400 font-medium">
                      <th className="py-3 px-4">Service</th>
                      <th className="py-3 px-4">Port(s)</th>
                      <th className="py-3 px-4">Interface réseau</th>
                      <th className="py-3 px-4">Mesure de sécurité associée</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800/50">
                    {servicesConfig.map((row, index) => (
                      <tr key={index} className="hover:bg-slate-800/30 transition-colors">
                        <td className="py-3 px-4 font-semibold text-cyan-400">{row.service}</td>
                        <td className="py-3 px-4 font-mono text-slate-300">{row.port}</td>
                        <td className="py-3 px-4 font-medium text-white">{row.access}</td>
                        <td className="py-3 px-4 text-slate-300">{row.detail}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>

          {/* Colonne de droite */}
          <div className="space-y-6">
            
            {/* Boîte des Livrables Officiels du Projet */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                  <FolderArchive className="w-5 h-5 text-cyan-400" />
                  Livrables du Projet
                </h3>
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800 text-slate-400 border border-slate-700">
                  dossier /docs/Projet4
                </span>
              </div>

              <div className="space-y-4 pt-2">
                
                {/* Livrable 1 */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-cyan-400 flex items-center gap-1.5">
                    <FileCode className="w-4 h-4" />
                    1. Rhouma_Walid_1_config_service_web
                  </span>
                  
                  <div className="pl-2 space-y-2 text-[11px]">
                    <div className="space-y-1">
                      <p className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider">Configuration principale & Modules</p>
                      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                        <span className="font-mono text-slate-300">apache2.conf</span>
                        <div className="flex items-center gap-2">
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/configuration principale/apache2.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/configuration principale/apache2.conf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                        <span className="font-mono text-slate-300">evasive.conf</span>
                        <div className="flex items-center gap-2">
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/modules complémentaires/evasive.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/modules complémentaires/evasive.conf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                        <span className="font-mono text-slate-300">reqtimeout.conf</span>
                        <div className="flex items-center gap-2">
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/modules complémentaires/reqtimeout.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/modules complémentaires/reqtimeout.conf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                        </div>
                      </div>
                    </div>

                    <div className="space-y-1 pt-1">
                      <p className="text-slate-400 font-semibold text-[10px] uppercase tracking-wider">Vhosts</p>
                      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                        <span className="font-mono text-slate-300">admin.rainbowbank.com.conf</span>
                        <div className="flex items-center gap-2">
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/Vhosts/admin.rainbowbank.com.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/Vhosts/admin.rainbowbank.com.conf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                        </div>
                      </div>
                      <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                        <span className="font-mono text-slate-300">extranet.rainbowbank.com.conf</span>
                        <div className="flex items-center gap-2">
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/Vhosts/extranet.rainbowbank.com.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-cyan-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                          <a href="/docs/Projet4/Rhouma_Walid_1_config_service_web_062024/Vhosts/extranet.rainbowbank.com.conf" download className="text-slate-400 hover:text-cyan-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livrable 2 */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-emerald-400 flex items-center gap-1.5">
                    <Lock className="w-4 h-4" />
                    2. Rhouma_Walid_2_config_FTP
                  </span>
                  
                  <div className="pl-2 space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">vsftpd.txt.conf</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd.txt.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd.txt.conf" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">vsftpd_user_conf/devuser</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd_user_conf/devuser" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd_user_conf/devuser" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">vsftpd_user_conf/graphuser</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd_user_conf/graphuser" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-emerald-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_2_config_FTP_062024/vsftpd_user_conf/graphuser" download className="text-slate-400 hover:text-emerald-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Livrable 3 */}
                <div className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800 space-y-2.5">
                  <span className="text-xs font-bold text-amber-400 flex items-center gap-1.5">
                    <Shield className="w-4 h-4" />
                    3. Rhouma_Walid_3_config_filtrage
                  </span>
                  
                  <div className="pl-2 space-y-1 text-[11px]">
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">iptables/rules.txt.v4</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/iptables/rules.txt.v4" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/iptables/rules.txt.v4" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">Fail2ban/jail.local.txt</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/jail.local.txt" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/jail.local.txt" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">Fail2ban/filtres/rainbowbank.txt.conf</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/rainbowbank.txt.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/rainbowbank.txt.conf" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">Fail2ban/filtres/sshd.txt.conf</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/sshd.txt.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/sshd.txt.conf" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-slate-900/80 p-1.5 rounded border border-slate-800/60">
                      <span className="font-mono text-slate-300">Fail2ban/filtres/vsftpd.txt.conf</span>
                      <div className="flex items-center gap-2">
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/vsftpd.txt.conf" target="_blank" rel="noreferrer" className="text-slate-400 hover:text-amber-400" title="Consulter"><Eye className="w-3.5 h-3.5" /></a>
                        <a href="/docs/Projet4/Rhouma_Walid_3_config_filtrage_062024/Fail2ban/filtres/vsftpd.txt.conf" download className="text-slate-400 hover:text-amber-400" title="Télécharger"><Download className="w-3.5 h-3.5" /></a>
                      </div>
                    </div>
                  </div>
                </div>

              </div>
            </div>

            {/* Bloc Environnement & Outils */}
            <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 backdrop-blur-sm space-y-4">
              <h3 className="text-lg font-bold text-white flex items-center gap-2">
                <Server className="w-5 h-5 text-cyan-400" />
                Environnement & Outils
              </h3>
              
              <div className="space-y-3">
                {[
                  { 
                    name: "HTTPD / NGINX / Apache", 
                    desc: "Vhosts, SSL Auto-signé, Anti-DDoS",
                    icon: <Server className="w-5 h-5 text-cyan-400" />,
                    badge: "HTTPD"
                  },
                  { 
                    name: "vsftpd (FTPS)", 
                    desc: "Transfert sécurisé TLS/SSL & Jail",
                    icon: <Lock className="w-5 h-5 text-emerald-400" />,
                    badge: "FTP"
                  },
                  { 
                    name: "Netfilter / iptables", 
                    desc: "Pare-feu & Filtrage par interface",
                    icon: <Shield className="w-5 h-5 text-amber-400" />,
                    badge: "Firewall"
                  },
                  { 
                    name: "Fail2Ban & OpenSSL", 
                    desc: "Bannissement dynamique & Certificats",
                    icon: <Terminal className="w-5 h-5 text-indigo-400" />,
                    badge: "Sécurité"
                  }
                ].map((item, i) => (
                  <div key={i} className="p-3 rounded-xl bg-slate-950/50 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors">
                    <div className="flex items-center gap-3">
                      <div className="p-2 rounded-lg bg-slate-900 border border-slate-800 shrink-0">
                        {item.icon}
                      </div>
                      <div>
                        <h4 className="text-xs font-semibold text-white font-mono">{item.name}</h4>
                        <p className="text-[11px] text-slate-400">{item.desc}</p>
                      </div>
                    </div>
                    <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-900 text-slate-400 border border-slate-800">
                      {item.badge}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Bloc Évaluation du Jury (Placé en dessous d'Environnement & Outils) */}
            <div className="bg-gradient-to-br from-slate-900 via-slate-900 to-emerald-950/30 border border-emerald-500/30 rounded-2xl p-6 backdrop-blur-sm space-y-4 shadow-lg shadow-emerald-950/20">
              <div className="flex items-center gap-3">
                <div className="p-2.5 rounded-xl bg-emerald-500/10 text-emerald-400 border border-emerald-500/20">
                  <ShieldAlert className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-white">Évaluation du Jury</h3>
                  <p className="text-xs text-emerald-400 font-medium">Soutenance orale (20 min)</p>
                </div>
              </div>

              <div className="space-y-2 text-xs text-slate-300">
                <p className="leading-relaxed">
                  <strong className="text-white">Évaluateur :</strong> Philippe Michels
                </p>
                <div className="p-3 rounded-lg bg-slate-950/60 border border-slate-800 space-y-1.5">
                  <span className="font-semibold text-emerald-400 block">Remarques de validation :</span>
                  <p className="text-[11px] text-slate-300 leading-relaxed">
                    "Projet validé ! Bonne maîtrise de l'oral et des sujets abordés. Bonne qualité des livrables. Les services Web, FTP et le filtrage réseau ont correctement été installés et sécurisés."
                  </p>
                </div>
              </div>
            </div>

          </div>

        </div>

        {/* Section Compétences RNCP Validées */}
        <div className="bg-slate-900/60 border border-slate-800 rounded-2xl p-6 md:p-8 backdrop-blur-sm space-y-6">
          <h2 className="text-xl font-bold text-white flex items-center gap-2">
            <Shield className="w-5 h-5 text-cyan-400" />
            Compétences RNCP Validées lors de la Soutenance
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {[
              "Installer et configurer un service FTP sécurisé (FTPS) avec système de jail (chroot)",
              "Installer, configurer et sécuriser un serveur HTTPD avec certificats SSL auto-signés",
              "Protéger et filtrer les flux réseau d'un serveur (Netfilter/iptables) sur plusieurs interfaces",
              "Mettre en place des mécanismes de défense dynamiques (Fail2Ban) et de mitigation DDoS"
            ].map((competence, index) => (
              <div key={index} className="p-4 rounded-xl bg-slate-950/40 border border-slate-800/80 flex items-start gap-3">
                <span className="text-emerald-400 font-bold mt-0.5">✓</span>
                <span className="text-xs md:text-sm text-slate-200 leading-relaxed">{competence}</span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </div>
  );
}