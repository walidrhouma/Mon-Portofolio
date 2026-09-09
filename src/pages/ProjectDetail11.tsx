import React, { useEffect, useMemo, useState } from 'react';
import { Link } from 'react-router-dom';
import { ProjectFooterNav, EvaluationJury } from '@/components/project/ProjectPageKit';
import {
  Activity,
  AlertTriangle,
  ArrowLeft,
  ArrowRight,
  Award,
  BarChart3,
  BrainCircuit,
  Check,
  CheckCircle2,
  ChevronDown,
  ChevronRight,
  CircleDot,
  Code2,
  Crosshair,
  Database,
  Download,
  FileCode2,
  FileText,
  Fingerprint,
  FolderOpen,
  Gauge,
  GitBranch,
  Globe2,
  HardDrive,
  KeyRound,
  Laptop,
  Lock,
  Network,
  Play,
  RotateCcw,
  Search,
  Server,
  Shield,
  ShieldAlert,
  ShieldCheck,
  Terminal,
  User,
  Wifi,
  X,
  Zap,
} from 'lucide-react';

/* -------------------------------------------------------------------------- */
/* DATA                                                                       */
/* -------------------------------------------------------------------------- */

type AttackStep = {
  id: string;
  number: string;
  title: string;
  short: string;
  technique: string;
  proof: string;
  impact: string;
  remediation: string;
  command?: string;
  result?: string;
  vulnerabilities: string[];
};

type Vulnerability = {
  id: string;
  title: string;
  severity: 'Élevée' | 'Moyenne';
  description: string;
  impact: string;
  remediation: string[];
  recommendation: string;
};

type Recommendation = {
  id: string;
  title: string;
  description: string;
  priority: 'Immédiate' | 'Court terme' | 'Long terme';
  linked: string[];
};

type TerminalView = {
  label: string;
  icon: React.ReactNode;
  command: string;
  output: string[];
  explanation: string;
};

const vulnerabilities: Vulnerability[] = [
  {
    id: 'V01',
    title: 'Absence de segmentation réseau',
    severity: 'Élevée',
    description:
      'Les machines découvertes appartiennent au même réseau 10.10.10.0/24, ce qui facilite les déplacements latéraux après compromission d’un premier poste.',
    impact:
      'Une compromission initiale peut permettre à un attaquant de progresser vers des serveurs et des ressources critiques.',
    remediation: [
      'Créer des VLAN dédiés par fonction.',
      'Filtrer les communications inter-VLAN avec des ACL.',
      'Appliquer des règles de pare-feu restrictives.',
    ],
    recommendation: 'R08',
  },
  {
    id: 'V02',
    title: 'Absence de sécurisation des services LDAP',
    severity: 'Moyenne',
    description:
      'Le service LDAP sur le port 389 était accessible sans les protections attendues pour sécuriser les échanges avec l’annuaire.',
    impact:
      'Les communications LDAP insuffisamment protégées peuvent exposer des informations d’annuaire et augmenter les risques d’interception ou de manipulation.',
    remediation: [
      'Privilégier LDAPS sur le port 636.',
      'Déployer des certificats TLS valides.',
      'Renforcer les exigences de signature LDAP.',
    ],
    recommendation: 'R06',
  },
  {
    id: 'V03',
    title: 'SMB Signing désactivé sur certaines machines',
    severity: 'Moyenne',
    description:
      'La signature SMB était désactivée sur FILER01 et DESKTOP01 alors qu’elle était active sur DC01.',
    impact:
      'Cette configuration augmente le risque d’attaques de type NTLM relay et facilite certaines chaînes de compromission.',
    remediation: [
      'Activer SMB Signing sur les serveurs et postes.',
      'Déployer la configuration via GPO.',
      'Vérifier l’application des stratégies.',
    ],
    recommendation: 'R07',
  },
  {
    id: 'V04',
    title: 'Mauvaise gestion des mots de passe',
    severity: 'Élevée',
    description:
      'Un compte de test utilisait un secret extrêmement faible, permettant de démontrer la faisabilité d’un password spraying.',
    impact:
      'Des identifiants faibles peuvent permettre un premier accès au domaine.',
    remediation: [
      'Imposer des mots de passe robustes.',
      'Augmenter la longueur minimale.',
      'Interdire les secrets trop simples ou prévisibles.',
    ],
    recommendation: 'R01',
  },
  {
    id: 'V05',
    title: 'Absence de verrouillage des comptes',
    severity: 'Élevée',
    description:
      'Le seuil de verrouillage était configuré à 0, ce qui signifie qu’aucun verrouillage automatique n’était déclenché après plusieurs échecs.',
    impact:
      'Cette configuration facilite les attaques par force brute et password spraying.',
    remediation: [
      'Définir un seuil de verrouillage adapté.',
      'Configurer une durée de verrouillage.',
      'Surveiller les échecs d’authentification.',
    ],
    recommendation: 'R02',
  },
  {
    id: 'V06',
    title: 'Faiblesse des politiques de sécurité Active Directory',
    severity: 'Élevée',
    description:
      'La politique de domaine présentait plusieurs paramètres trop permissifs : longueur minimale faible, absence de complexité et expiration excessivement longue.',
    impact:
      'La politique facilite la compromission et la conservation d’identifiants faibles.',
    remediation: [
      'Renforcer la stratégie de mots de passe.',
      'Activer une politique de verrouillage.',
      'Déployer LAPS pour les comptes administrateurs locaux.',
    ],
    recommendation: 'R01 / R02',
  },
  {
    id: 'V07',
    title: 'Compte exposé avec mot de passe en clair',
    severity: 'Élevée',
    description:
      'Un attribut descriptif d’un objet Active Directory contenait un mot de passe en clair.',
    impact:
      'Une information sensible stockée dans l’annuaire peut être récupérée par un utilisateur disposant d’un accès en lecture et réutilisée sur d’autres comptes.',
    remediation: [
      'Supprimer immédiatement les secrets présents dans les attributs AD.',
      'Auditer les descriptions des objets.',
      'Sensibiliser les administrateurs.',
    ],
    recommendation: 'R03',
  },
  {
    id: 'V08',
    title: 'Réutilisation de mots de passe',
    severity: 'Élevée',
    description:
      'Un même secret était réutilisé sur plusieurs comptes, dont des comptes disposant de privilèges importants.',
    impact:
      'La compromission d’un compte peut se propager vers plusieurs identités et accélérer une élévation de privilèges.',
    remediation: [
      'Interdire la réutilisation des mots de passe.',
      'Individualiser les comptes privilégiés.',
      'Changer immédiatement les secrets compromis.',
    ],
    recommendation: 'R01',
  },
  {
    id: 'V09',
    title: 'Mauvaise gestion des comptes de service',
    severity: 'Élevée',
    description:
      'Plusieurs comptes associés à des SPN présentaient des caractéristiques favorisant une attaque de type Kerberoasting.',
    impact:
      'Le cassage hors ligne de tickets Kerberos peut permettre de récupérer les secrets de comptes de service, y compris potentiellement privilégiés.',
    remediation: [
      'Utiliser des secrets longs et aléatoires.',
      'Réduire les privilèges des comptes de service.',
      'Surveiller les demandes de tickets.',
      'Privilégier les comptes gMSA lorsque cela est possible.',
    ],
    recommendation: 'R05',
  },
];

const attackSteps: AttackStep[] = [
  {
    id: 'discovery',
    number: '01',
    title: 'Découverte',
    short: 'Cartographier la surface',
    technique: 'Host discovery + identification des services',
    proof: '3 hôtes actifs identifiés sur 10.10.10.0/24.',
    impact:
      'La surface d’attaque devient suffisamment connue pour cibler les services AD, SMB, RDP et FTP.',
    remediation:
      'Réduire l’exposition réseau et segmenter les différents rôles d’infrastructure.',
    command: 'nmap -sP 10.10.10.0/24',
    result:
      '10.10.10.101 — DC01\n10.10.10.112 — FILER01\n10.10.10.117 — DESKTOP01',
    vulnerabilities: ['V01'],
  },
  {
    id: 'enumeration',
    number: '02',
    title: 'Énumération',
    short: 'Comprendre le domaine',
    technique: 'Nmap + LDAP RootDSE + SMB',
    proof:
      'Domaine travers.ic identifié, DC01 découvert comme contrôleur de domaine et services AD cartographiés.',
    impact:
      'L’attaquant obtient une vision exploitable de l’environnement Windows.',
    remediation:
      'Réduire les informations accessibles inutilement et renforcer LDAP/SMB.',
    command:
      'ldapsearch -x -H ldap://10.10.10.101 -s base -LLL',
    result:
      'namingContexts: DC=travers,DC=ic\nDC: DC01.travers.ic\nLDAP v2/v3\nKerberos détecté',
    vulnerabilities: ['V02', 'V03'],
  },
  {
    id: 'first-access',
    number: '03',
    title: 'Premier accès',
    short: 'Compromettre un compte',
    technique: 'Kerberos enumeration + password spraying',
    proof:
      'Le compte de test pouvait être compromis grâce à un secret extrêmement faible.',
    impact:
      'Un premier compte utilisateur permet d’entrer dans le périmètre authentifié.',
    remediation:
      'Renforcer la politique de mots de passe et activer le verrouillage des comptes.',
    command:
      'sprayhound -d travers.ic -dc 10.10.10.101 -u test --lower',
    result:
      'Compte de test : authentification réussie\nMot de passe : [masqué]',
    vulnerabilities: ['V04', 'V05', 'V06'],
  },
  {
    id: 'mapping',
    number: '04',
    title: 'Cartographie AD',
    short: 'Relier utilisateurs, groupes et machines',
    technique: 'LDAP domain dump + BloodHound / SharpHound',
    proof:
      'Les groupes, utilisateurs, machines, appartenances et chemins de privilèges ont été analysés.',
    impact:
      'Les relations entre comptes et privilèges révèlent des chemins d’attaque indirects.',
    remediation:
      'Appliquer le moindre privilège et revoir régulièrement les appartenances aux groupes sensibles.',
    command: 'SharpHound.exe -c All',
    result:
      'Collecte AD réalisée\nUtilisateurs / groupes / machines / relations\nAnalyse graphique BloodHound',
    vulnerabilities: ['V06', 'V08', 'V09'],
  },
  {
    id: 'chain',
    number: '05',
    title: 'Chaînage des faiblesses',
    short: 'Exploiter les relations',
    technique: 'Secret exposé + réutilisation + Kerberoasting',
    proof:
      'Un secret exposé dans AD était réutilisé sur plusieurs comptes ; des SPN exploitables ont ensuite été identifiés.',
    impact:
      'Plusieurs faiblesses indépendantes se combinent pour augmenter fortement l’impact.',
    remediation:
      'Supprimer les secrets exposés et sécuriser les comptes de service.',
    command:
      'GetUserSPNs.py travers.ic/pbegue:<mot_de_passe> -dc-ip 10.10.10.101 -request',
    result:
      '3 SPN identifiés\n2 secrets récupérés après cassage hors ligne\nSecrets réels masqués',
    vulnerabilities: ['V07', 'V08', 'V09'],
  },
  {
    id: 'lateral',
    number: '06',
    title: 'Mouvement latéral',
    short: 'Atteindre les systèmes',
    technique: 'SAM + NTLM + Pass-the-Hash',
    proof:
      'Des hashes locaux ont permis une prise de contrôle SYSTEM sur DESKTOP01 et FILER01.',
    impact:
      'Deux machines deviennent des pivots pour poursuivre la compromission.',
    remediation:
      'Renforcer SMB, protéger les comptes administrateurs locaux et segmenter le réseau.',
    command:
      'psexec.py -hashes :<hash_ntlm> Administrator@10.10.10.117',
    result:
      'DESKTOP01 → SYSTEM\nFILER01 → SYSTEM\nDC01 → accès bloqué par SMB Signing',
    vulnerabilities: ['V01', 'V03'],
  },
  {
    id: 'domain-admin',
    number: '07',
    title: 'Élévation de privilèges',
    short: 'Atteindre un compte critique',
    technique: 'Analyse LSASS + identifiants privilégiés',
    proof:
      'L’analyse des systèmes compromis a permis d’identifier des informations d’authentification sensibles.',
    impact:
      'Un compte Domain Admin devient accessible dans la chaîne de compromission.',
    remediation:
      'Déployer PAM, réduire les privilèges et limiter les sessions administratives.',
    command:
      'lsassy -H :<hash_ntlm> -u Administrator 10.10.10.112',
    result:
      'Informations d’authentification découvertes\nCompte privilégié identifié : [Domain Admin]',
    vulnerabilities: ['V08', 'V09'],
  },
  {
    id: 'compromise',
    number: '08',
    title: 'Compromission du domaine',
    short: 'Contrôle administratif',
    technique: 'Accès RDP avec compte privilégié',
    proof:
      'L’accès au contrôleur de domaine avec un compte Domain Admin a démontré la compromission de l’environnement.',
    impact:
      'L’attaquant dispose d’un niveau de privilège permettant potentiellement de contrôler le domaine.',
    remediation:
      'PAM, segmentation, MFA lorsque possible, réduction des privilèges et surveillance renforcée.',
    command:
      'xfreerdp /u:[DomainAdmin] /p:<mot_de_passe> /v:10.10.10.101',
    result:
      'DC01 → accès administratif démontré\nDomaine travers.ic → compromis',
    vulnerabilities: ['V01', 'V08', 'V09'],
  },
];

const recommendations: Recommendation[] = [
  ['R01', 'Renforcer la politique de mots de passe', 'Longueur suffisante, complexité, interdiction des secrets prévisibles et réduction de la réutilisation.', 'Immédiate', ['V04', 'V06', 'V08']],
  ['R02', 'Activer le verrouillage des comptes', 'Définir un seuil d’échecs, une durée de verrouillage et une surveillance des tentatives.', 'Immédiate', ['V05', 'V06']],
  ['R03', 'Supprimer les mots de passe présents dans AD', 'Auditer les attributs descriptifs et supprimer immédiatement tout secret stocké en clair.', 'Immédiate', ['V07']],
  ['R04', 'Nettoyer les comptes obsolètes', 'Désactiver ou supprimer les comptes inutilisés et contrôler régulièrement leurs privilèges.', 'Court terme', ['V06', 'V08']],
  ['R05', 'Sécuriser les comptes de service', 'Utiliser des secrets robustes, réduire les privilèges et envisager les gMSA.', 'Immédiate', ['V09']],
  ['R06', 'Sécuriser LDAP', 'Déployer LDAPS, certificats TLS et exigences de signature adaptées.', 'Court terme', ['V02']],
  ['R07', 'Activer SMB Signing', 'Forcer la signature SMB sur les serveurs et postes via stratégie de groupe.', 'Court terme', ['V03']],
  ['R08', 'Segmenter le réseau', 'Séparer postes, serveurs et zones sensibles avec VLAN, ACL et filtrage.', 'Immédiate', ['V01']],
  ['R09', 'Renforcer la gestion des correctifs', 'Contrôler et déployer régulièrement les correctifs Windows et services exposés.', 'Court terme', []],
  ['R10', 'Déployer un SIEM', 'Centraliser les journaux et détecter les comportements anormaux.', 'Long terme', []],
  ['R11', 'Mettre en place un PAM', 'Contrôler, limiter et surveiller les accès privilégiés.', 'Long terme', ['V08', 'V09']],
  ['R12', 'Sensibiliser les utilisateurs', 'Former aux mots de passe, au phishing et aux risques liés aux informations sensibles.', 'Long terme', ['V04', 'V07', 'V08']],
  ['R13', 'Réaliser des audits réguliers', 'Contrôler périodiquement les configurations critiques, journaux et chemins de privilèges.', 'Long terme', []],
].map(([id, title, description, priority, linked]) => ({
  id,
  title,
  description,
  priority,
  linked,
})) as Recommendation[];

const terminalViews: Record<string, TerminalView> = {
  nmap: {
    label: 'Nmap',
    icon: <Search size={16} />,
    command:
      'nmap -sV -p- 10.10.10.101 10.10.10.112 10.10.10.117',
    output: [
      'DC01       10.10.10.101',
      'Kerberos   88/tcp',
      'LDAP       389/tcp',
      'SMB        445/tcp',
      'RDP        3389/tcp',
      '',
      'FILER01    10.10.10.112',
      'FTP        21/tcp',
      'SSH        22/tcp',
      'SMB        445/tcp',
      'RDP        3389/tcp',
      '',
      'DESKTOP01  10.10.10.117',
      'SMB        445/tcp',
      'RDP        3389/tcp',
    ],
    explanation:
      'La première étape a permis d’identifier les trois hôtes actifs et les principaux services exposés.',
  },
  ldap: {
    label: 'LDAP',
    icon: <Database size={16} />,
    command:
      'ldapsearch -x -H ldap://10.10.10.101 -s base -LLL',
    output: [
      'namingContexts: DC=travers,DC=ic',
      'defaultNamingContext: DC=travers,DC=ic',
      'rootDomainNamingContext: DC=travers,DC=ic',
      'dnsHostName: DC01.travers.ic',
      'supportedLDAPVersion: 2',
      'supportedLDAPVersion: 3',
      'Kerberos detected',
    ],
    explanation:
      'RootDSE a permis d’identifier le domaine travers.ic et de confirmer le rôle de DC01.',
  },
  smb: {
    label: 'SMB',
    icon: <FolderOpen size={16} />,
    command: 'crackmapexec smb 10.10.10.0/24 --shares',
    output: [
      'DC01       SMB signing: ENABLED',
      'FILER01    SMB signing: DISABLED',
      'DESKTOP01  SMB signing: DISABLED',
      '',
      'SMBv1: disabled',
      '',
      'Authenticated shares:',
      'ADMIN$ / C$ / IPC$',
      'NETLOGON / SYSVOL',
    ],
    explanation:
      'La comparaison entre les machines a révélé une configuration SMB incohérente et un risque de NTLM relay.',
  },
  bloodhound: {
    label: 'BloodHound',
    icon: <GitBranch size={16} />,
    command: 'SharpHound.exe -c All',
    output: [
      'Collecte des relations AD...',
      'Users ............... OK',
      'Groups .............. OK',
      'Computers ........... OK',
      'Sessions ............ OK',
      'ACL / relations ..... OK',
      '',
      'SPN accounts:',
      'web_svc',
      'dmorin',
      'tnicolas',
      '',
      'Attack paths identified.',
    ],
    explanation:
      'La cartographie graphique a permis de visualiser les relations entre identités, groupes et machines.',
  },
  kerberos: {
    label: 'Kerberoasting',
    icon: <KeyRound size={16} />,
    command:
      'GetUserSPNs.py travers.ic/pbegue:<mot_de_passe> -dc-ip 10.10.10.101 -request',
    output: [
      'Service Principal Names found:',
      'MSSQL/SQLSRV',
      'WWW/INTRANET01',
      'WWW/SHARE02.TRAVERS.IC',
      '',
      'TGS requests: 3',
      'Secrets recovered offline: 2/3',
      '',
      '[credentials masked]',
    ],
    explanation:
      'Les comptes associés à des SPN ont permis de démontrer le risque de Kerberoasting et de cassage hors ligne.',
  },
};

/* -------------------------------------------------------------------------- */
/* HELPERS                                                                    */
/* -------------------------------------------------------------------------- */

const severityClass = (severity: Vulnerability['severity']) =>
  severity === 'Élevée'
    ? 'border-rose-500/30 bg-rose-500/10 text-rose-300'
    : 'border-amber-500/30 bg-amber-500/10 text-amber-300';

const priorityClass = (priority: Recommendation['priority']) => {
  if (priority === 'Immédiate')
    return 'border-rose-500/30 bg-rose-500/10 text-rose-300';
  if (priority === 'Court terme')
    return 'border-amber-500/30 bg-amber-500/10 text-amber-300';
  return 'border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue';
};

function SectionHeader({
  eyebrow,
  title,
  description,
  icon,
}: {
  eyebrow: string;
  title: string;
  description?: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="flex items-start gap-4">
      <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyber-blue/20 bg-cyber-blue/10 text-cyber-blue">
        {icon}
      </div>

      <div>
        <div className="text-xs font-black uppercase tracking-[0.22em] text-cyber-blue">
          {eyebrow}
        </div>

        <h2 className="mt-1 text-2xl font-black tracking-tight text-white md:text-3xl">
          {title}
        </h2>

        {description && (
          <p className="mt-2 max-w-3xl text-sm leading-6 text-slate-500">
            {description}
          </p>
        )}
      </div>
    </div>
  );
}

function InfoRow({ label, value }: { label: string; value: string }) {
  return (
    <div className="flex items-center justify-between gap-4 border-b border-white/5 pb-3 last:border-0 last:pb-0">
      <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
        {label}
      </span>
      <span className="text-right text-sm font-semibold text-slate-200">
        {value}
      </span>
    </div>
  );
}

function AttackInfo({
  label,
  value,
  icon,
}: {
  label: string;
  value: string;
  icon: React.ReactNode;
}) {
  return (
    <div>
      <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-slate-500">
        <span className="text-cyber-blue">{icon}</span>
        {label}
      </div>

      <p className="mt-2 text-sm leading-6 text-slate-300">{value}</p>
    </div>
  );
}

function MachineNode({
  id,
  title,
  subtitle,
  icon,
  position,
  active,
  onClick,
  accent,
}: {
  id: string;
  title: string;
  subtitle: string;
  icon: React.ReactNode;
  position: string;
  active: boolean;
  onClick: () => void;
  accent: 'cyan' | 'amber' | 'violet' | 'emerald';
}) {
  const accentClass = {
    cyan: 'border-cyber-blue/30 bg-cyber-blue/10 text-cyber-blue',
    amber: 'border-amber-400/30 bg-amber-400/10 text-amber-300',
    violet: 'border-cyber-emerald/30 bg-cyber-emerald/10 text-cyber-emerald',
    emerald: 'border-cyber-emerald/30 bg-cyber-emerald/10 text-cyber-emerald',
  }[accent];

  return (
    <button
      onClick={onClick}
      className={`${position} group w-44 rounded-2xl border p-4 text-left transition duration-300 ${
        active
          ? `${accentClass} scale-105 shadow-xl`
          : 'border-white/10 bg-base-700/90 hover:-translate-y-1 hover:border-cyber-blue/30'
      }`}
    >
      <div className="flex items-center gap-3">
        <div
          className={`flex h-11 w-11 items-center justify-center rounded-xl ${accentClass}`}
        >
          {icon}
        </div>

        <div className="min-w-0">
          <div className="font-black text-white">{id}</div>
          <div className="mt-0.5 text-[10px] leading-4 text-slate-500">
            {title}
          </div>
        </div>
      </div>

      <div className="mt-3 border-t border-white/5 pt-3 text-[10px] text-slate-500">
        {subtitle}
      </div>
    </button>
  );
}

function ConceptCard({
  icon,
  eyebrow,
  title,
  color,
  children,
}: {
  icon: React.ReactNode;
  eyebrow: string;
  title: string;
  color: 'cyan' | 'emerald';
  children: React.ReactNode;
}) {
  const style =
    color === 'cyan'
      ? 'border-cyber-blue/20 bg-cyber-blue/10 text-cyber-blue'
      : 'border-cyber-emerald/20 bg-cyber-emerald/10 text-cyber-emerald';

  return (
    <div className="rounded-3xl border border-white/5 bg-base-700/60 p-7">
      <div
        className={`flex h-12 w-12 items-center justify-center rounded-xl border ${style}`}
      >
        {icon}
      </div>

      <div className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
        {eyebrow}
      </div>

      <h3 className="mt-1 text-xl font-black text-white">{title}</h3>

      {children}
    </div>
  );
}

function ConceptNode({
  title,
  subtitle,
  danger,
  success,
}: {
  title: string;
  subtitle: string;
  danger?: boolean;
  success?: boolean;
}) {
  const style = danger
    ? 'border-rose-500/20 bg-rose-500/5'
    : success
    ? 'border-cyber-emerald/20 bg-cyber-emerald/5'
    : 'border-white/10 bg-base-900';

  return (
    <div className={`min-w-0 flex-1 rounded-xl border p-3 ${style}`}>
      <div className="text-sm font-black text-white">{title}</div>
      <div className="mt-1 text-[10px] text-slate-500">{subtitle}</div>
    </div>
  );
}

function DefenseLayer({
  number,
  title,
  description,
  icon,
}: {
  number: string;
  title: string;
  description: string;
  icon: React.ReactNode;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-base-700/60 p-5 transition hover:-translate-y-1 hover:border-cyber-blue/20">
      <div className="flex items-center justify-between">
        <div className="text-xs font-black tracking-widest text-cyber-blue">
          {number}
        </div>
        <div className="text-slate-500">{icon}</div>
      </div>

      <h3 className="mt-5 font-black text-white">{title}</h3>

      <p className="mt-2 text-sm leading-6 text-slate-500">{description}</p>
    </div>
  );
}

function EvaluationCard({
  number,
  title,
  description,
}: {
  number: string;
  title: string;
  description: string;
}) {
  return (
    <div className="rounded-2xl border border-white/5 bg-base-900/40 p-5">
      <div className="text-xs font-black tracking-widest text-cyber-emerald">
        COMPÉTENCE {number}
      </div>

      <h3 className="mt-2 font-black text-white">{title}</h3>

      <p className="mt-3 text-sm leading-6 text-slate-400">{description}</p>

      <div className="mt-4 inline-flex items-center gap-2 rounded-full border border-cyber-emerald/20 bg-cyber-emerald/10 px-3 py-1 text-xs font-bold text-cyber-emerald">
        <CheckCircle2 size={13} />
        Validée
      </div>
    </div>
  );
}

function Deliverable({
  title,
  type,
  path,
  icon,
}: {
  title: string;
  type: string;
  path: string;
  icon: React.ReactNode;
}) {
  return (
    <a
      href={path}
      className="group flex items-center justify-between rounded-2xl border border-white/5 bg-base-700/60 p-5 transition hover:-translate-y-1 hover:border-cyber-blue/30 hover:bg-base-700"
    >
      <div className="flex min-w-0 items-center gap-4">
        <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-cyber-blue/20 bg-cyber-blue/10 text-cyber-blue">
          {icon}
        </div>

        <div className="min-w-0">
          <div className="truncate font-black text-white">{title}</div>
          <div className="mt-1 text-xs text-slate-500">
            {type} · Livrable projet
          </div>
        </div>
      </div>

      <Download
        size={18}
        className="shrink-0 text-slate-500 transition group-hover:text-cyber-blue"
      />
    </a>
  );
}

function BuildingIcon() {
  return (
    <svg
      width="15"
      height="15"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="M3 21h18" />
      <path d="M5 21V5l7-3 7 3v16" />
      <path d="M9 9h1" />
      <path d="M14 9h1" />
      <path d="M9 13h1" />
      <path d="M14 13h1" />
      <path d="M9 17h1" />
      <path d="M14 17h1" />
    </svg>
  );
}

/* -------------------------------------------------------------------------- */
/* PAGE                                                                       */
/* -------------------------------------------------------------------------- */

export default function ProjectDetail11() {
  const [activeAttackStep, setActiveAttackStep] = useState(0);
  const [isPlaying, setIsPlaying] = useState(false);
  const [selectedMachine, setSelectedMachine] = useState<string | null>(null);
  const [activeTerminal, setActiveTerminal] = useState('nmap');
  const [selectedVulnerability, setSelectedVulnerability] = useState<
    string | null
  >(null);
  const [selectedRecommendation, setSelectedRecommendation] = useState<
    string | null
  >(null);

  useEffect(() => {
    if (!isPlaying) return;

    const timer = window.setInterval(() => {
      setActiveAttackStep((current) => {
        if (current >= attackSteps.length - 1) {
          setIsPlaying(false);
          return current;
        }
        return current + 1;
      });
    }, 1700);

    return () => window.clearInterval(timer);
  }, [isPlaying]);

  const currentStep = attackSteps[activeAttackStep];

  const selectedVuln = useMemo(
    () => vulnerabilities.find((v) => v.id === selectedVulnerability),
    [selectedVulnerability]
  );

  const selectedReco = useMemo(
    () => recommendations.find((r) => r.id === selectedRecommendation),
    [selectedRecommendation]
  );

  const replayAttack = () => {
    setActiveAttackStep(0);
    setIsPlaying(true);
  };

  const resetAttack = () => {
    setIsPlaying(false);
    setActiveAttackStep(0);
  };

  const terminal = terminalViews[activeTerminal];

  return (
    <div className="min-h-screen bg-base-900 text-slate-200">
      {/* BACKGROUND */}
      <div className="pointer-events-none fixed inset-0 overflow-hidden">
        <div className="absolute left-[10%] top-[-10%] h-96 w-96 rounded-full bg-cyber-blue/10 blur-3xl" />
        <div className="absolute right-[5%] top-[30%] h-80 w-80 rounded-full bg-cyber-emerald/10 blur-3xl" />
        <div className="absolute bottom-[-10%] left-[35%] h-96 w-96 rounded-full bg-cyber-blue/10 blur-3xl" />
      </div>

      <main className="container-page pb-20 pt-8">
        <Link
          to="/projets"
          className="mb-8 inline-flex items-center gap-2 text-sm text-slate-400 transition hover:text-cyber-blue"
        >
          <ArrowLeft size={16} />
          Retour aux projets
        </Link>

        {/* HERO */}
        <section className="relative overflow-hidden rounded-3xl border border-cyber-blue/20 bg-gradient-to-br from-base-700/60 via-base-700/40 to-cyber-blue/10 p-6 shadow-2xl shadow-glow md:p-10">
          <div className="absolute right-0 top-0 h-72 w-72 rounded-full bg-cyber-blue/10 blur-3xl" />

          <div className="relative grid gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:items-center">
            <div>
              <div className="mb-5 flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-2 rounded-full border border-cyber-blue/20 bg-cyber-blue/10 px-3 py-1 text-xs font-semibold text-cyber-blue">
                  <Shield size={14} />
                  Cybersécurité
                </span>

                <span className="rounded-full border border-cyber-emerald/20 bg-cyber-emerald/10 px-3 py-1 text-xs font-semibold text-cyber-emerald">
                  Active Directory
                </span>

                <span className="rounded-full border border-cyber-emerald/20 bg-cyber-emerald/10 px-3 py-1 text-xs font-semibold text-cyber-emerald">
                  Pentest
                </span>
              </div>

              <p className="mb-3 text-sm font-semibold uppercase tracking-[0.25em] text-cyber-blue">
                Projet technique · 70 heures
              </p>

              <h1 className="max-w-4xl text-3xl font-black tracking-tight text-white md:text-5xl">
                Évaluez et améliorez le niveau de sécurité d'un domaine Windows
                et de l'Active Directory associé
              </h1>

              <p className="mt-5 max-w-3xl text-base leading-8 text-slate-300 md:text-lg">
                Audit de sécurité d’un environnement Active Directory :
                reconnaissance, énumération, compromission contrôlée, analyse
                des chemins de privilèges, mouvement latéral et construction
                d’un plan de remédiation.
              </p>

              <div className="mt-7 flex flex-wrap gap-3">
                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-base-900/60 px-3 py-2 text-sm text-slate-300">
                  <BuildingIcon />
                  Clinique de Frontignan
                </span>

                <span className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-base-900/60 px-3 py-2 text-sm text-slate-300">
                  <User size={15} />
                  DSI : Nicolas Turing
                </span>

                <span className="inline-flex items-center gap-2 rounded-lg border border-cyber-emerald/20 bg-cyber-emerald/10 px-3 py-2 text-sm font-semibold text-cyber-emerald">
                  <CheckCircle2 size={15} />
                  Projet validé
                </span>
              </div>
            </div>

            {/* RADAR */}
            <div className="relative mx-auto w-full max-w-md">
              <div className="relative aspect-square overflow-hidden rounded-3xl border border-cyber-blue/20 bg-base-900/80 p-5">
                <div className="absolute inset-6 rounded-full border border-cyber-blue/10" />
                <div className="absolute inset-16 rounded-full border border-cyber-blue/10" />
                <div className="absolute inset-28 rounded-full border border-cyber-blue/10" />

                <div className="absolute left-1/2 top-1/2 h-32 w-32 -translate-x-1/2 -translate-y-1/2 rounded-full bg-cyber-blue/10 blur-2xl" />

                <div className="absolute left-1/2 top-1/2 flex h-20 w-20 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-2xl border border-cyber-blue/40 bg-base-700 shadow-lg shadow-glow">
                  <ShieldCheck className="text-cyber-blue" size={36} />
                </div>

                {[
                  { label: 'DC01', icon: Server, pos: 'left-7 top-12' },
                  { label: 'FILER01', icon: HardDrive, pos: 'right-5 top-24' },
                  { label: 'DESKTOP01', icon: Laptop, pos: 'bottom-10 left-10' },
                  { label: 'KALI', icon: Terminal, pos: 'bottom-10 right-8' },
                ].map(({ label, icon: Icon, pos }) => (
                  <div
                    key={label}
                    className={`absolute ${pos} flex items-center gap-2 rounded-xl border border-white/10 bg-base-700/90 px-3 py-2 text-xs text-slate-300 shadow-lg`}
                  >
                    <Icon size={14} className="text-cyber-blue" />
                    {label}
                  </div>
                ))}

                <div className="absolute bottom-5 left-1/2 -translate-x-1/2 rounded-full border border-cyber-emerald/20 bg-cyber-emerald/10 px-4 py-1.5 text-xs font-bold text-cyber-emerald">
                  travers.ic
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* KPI */}
        <section className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {[
            ['3', 'hôtes identifiés', Network],
            ['9', 'vulnérabilités', ShieldAlert],
            ['1', 'domaine Active Directory', Globe2],
            ['2 / 3', 'secrets Kerberoast récupérés', KeyRound],
          ].map(([value, label, Icon]) => (
            <div
              key={label as string}
              className="rounded-2xl border border-white/5 bg-base-700/70 p-5 transition hover:-translate-y-1 hover:border-cyber-blue/30"
            >
              {React.createElement(Icon as React.ElementType, {
                className: 'mb-4 text-cyber-blue',
                size: 22,
              })}
              <div className="text-3xl font-black text-white">{value}</div>
              <div className="mt-1 text-sm text-slate-400">{label}</div>
            </div>
          ))}
        </section>

        {/* CONTEXT */}
        <section className="mt-16 grid gap-6 lg:grid-cols-[1fr_0.75fr]">
          <div className="rounded-3xl border border-white/5 bg-base-700/60 p-7">
            <SectionHeader
              eyebrow="MISSION"
              title="Un audit orienté scénario d'attaque"
              icon={<Crosshair size={22} />}
            />

            <div className="mt-6 space-y-4 text-sm leading-7 text-slate-300">
              <p>
                La mission consistait à évaluer la sécurité d’un domaine
                Windows et de son Active Directory, en reproduisant de manière
                contrôlée le parcours qu’un attaquant pourrait suivre après
                l’obtention d’un premier accès.
              </p>

              <p>
                L’audit a couvert l’énumération des machines, utilisateurs,
                groupes, partages, politiques de mots de passe et protocoles,
                puis l’analyse des possibilités de compromission, de mouvement
                latéral et d’élévation de privilèges.
              </p>

              <p>
                Le résultat attendu n’était pas uniquement de démontrer des
                failles : il fallait également transformer les constats
                techniques en un plan d’action concret et priorisé.
              </p>
            </div>
          </div>

          <div className="rounded-3xl border border-cyber-blue/20 bg-cyber-blue/5 p-7">
            <SectionHeader
              eyebrow="PÉRIMÈTRE"
              title="Environnement analysé"
              icon={<Network size={22} />}
            />

            <div className="mt-6 space-y-3">
              <InfoRow label="Domaine" value="travers.ic" />
              <InfoRow label="Réseau" value="10.10.10.0/24" />
              <InfoRow label="Contrôleur" value="DC01" />
              <InfoRow label="Serveur" value="FILER01" />
              <InfoRow label="Poste" value="DESKTOP01" />
              <InfoRow label="Plateforme" value="Windows Server / Windows 10" />
              <InfoRow label="Lab" value="Root Me" />
            </div>
          </div>
        </section>

        {/* ARCHITECTURE */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="ARCHITECTURE"
            title="Cartographie de l'environnement"
            description="Une représentation simplifiée des systèmes découverts pendant la phase d'énumération."
            icon={<Network size={22} />}
          />

          <div className="mt-7 overflow-hidden rounded-3xl border border-white/5 bg-base-700/60 p-5 md:p-8">
            <div className="mb-6 flex flex-wrap items-center justify-between gap-3">
              <div>
                <div className="text-sm font-bold text-white">
                  10.10.10.0/24
                </div>
                <div className="text-xs text-slate-500">
                  Zone réseau observée pendant le pentest
                </div>
              </div>

              <span className="rounded-full border border-rose-500/20 bg-rose-500/10 px-3 py-1 text-xs text-rose-300">
                Segmentation insuffisante
              </span>
            </div>

            <div className="relative min-h-[430px] overflow-hidden rounded-2xl border border-white/5 bg-base-900">
              <div
                className="absolute inset-0 opacity-20"
                style={{
                  backgroundImage:
                    'linear-gradient(rgba(34,211,238,.12) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,.12) 1px, transparent 1px)',
                  backgroundSize: '42px 42px',
                }}
              />

              <svg
                className="absolute inset-0 h-full w-full"
                viewBox="0 0 1000 500"
                preserveAspectRatio="none"
              >
                <line
                  x1="500"
                  y1="150"
                  x2="250"
                  y2="340"
                  stroke="rgba(34,211,238,.35)"
                  strokeWidth="2"
                  strokeDasharray="7 8"
                />
                <line
                  x1="500"
                  y1="150"
                  x2="750"
                  y2="340"
                  stroke="rgba(34,211,238,.35)"
                  strokeWidth="2"
                  strokeDasharray="7 8"
                />
                <line
                  x1="500"
                  y1="150"
                  x2="500"
                  y2="340"
                  stroke="rgba(34,211,238,.35)"
                  strokeWidth="2"
                  strokeDasharray="7 8"
                />
              </svg>

              <MachineNode
                id="DC01"
                title="Domain Controller"
                subtitle="Windows Server 2019"
                icon={<Server size={26} />}
                position="absolute left-1/2 top-10 -translate-x-1/2"
                active={selectedMachine === 'DC01'}
                onClick={() => setSelectedMachine('DC01')}
                accent="cyan"
              />

              <MachineNode
                id="FILER01"
                title="Serveur de fichiers"
                subtitle="FTP / SMB / RDP"
                icon={<HardDrive size={26} />}
                position="absolute bottom-8 left-[8%]"
                active={selectedMachine === 'FILER01'}
                onClick={() => setSelectedMachine('FILER01')}
                accent="amber"
              />

              <MachineNode
                id="DESKTOP01"
                title="Poste Windows"
                subtitle="SMB / RDP"
                icon={<Laptop size={26} />}
                position="absolute bottom-8 left-1/2 -translate-x-1/2"
                active={selectedMachine === 'DESKTOP01'}
                onClick={() => setSelectedMachine('DESKTOP01')}
                accent="violet"
              />

              <MachineNode
                id="KALI"
                title="Poste d'audit"
                subtitle="Reconnaissance / pentest"
                icon={<Terminal size={26} />}
                position="absolute bottom-8 right-[8%]"
                active={selectedMachine === 'KALI'}
                onClick={() => setSelectedMachine('KALI')}
                accent="emerald"
              />

              {selectedMachine && (
                <div className="absolute left-1/2 top-1/2 w-[calc(100%-2rem)] max-w-sm -translate-x-1/2 -translate-y-1/2 rounded-2xl border border-cyber-blue/30 bg-base-900/95 p-5 shadow-2xl shadow-glow backdrop-blur">
                  <button
                    onClick={() => setSelectedMachine(null)}
                    className="absolute right-3 top-3 text-slate-500 hover:text-white"
                    aria-label="Fermer"
                  >
                    <X size={18} />
                  </button>

                  <div className="text-xs font-bold uppercase tracking-widest text-cyber-blue">
                    Système sélectionné
                  </div>

                  <div className="mt-2 text-xl font-black text-white">
                    {selectedMachine}
                  </div>

                  <p className="mt-3 text-sm leading-6 text-slate-400">
                    {selectedMachine === 'DC01' &&
                      'Contrôleur de domaine Windows Server 2019. Services AD, Kerberos, LDAP, DNS, SMB et RDP.'}
                    {selectedMachine === 'FILER01' &&
                      'Serveur de fichiers exposant notamment FTP, SSH, SMB et RDP. SMB Signing désactivé.'}
                    {selectedMachine === 'DESKTOP01' &&
                      'Poste Windows 10. SMB Signing désactivé et utilisé comme pivot lors de la chaîne de compromission.'}
                    {selectedMachine === 'KALI' &&
                      'Machine utilisée pour les opérations de reconnaissance, d’énumération et de validation du scénario d’attaque.'}
                  </p>
                </div>
              )}
            </div>
          </div>
        </section>

        {/* ATTACK PATH */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="ATTACK PATH"
            title="Rejouer le scénario de compromission"
            description="Chaque étape montre ce qui a été observé, pourquoi c'était exploitable et comment le corriger."
            icon={<GitBranch size={22} />}
          />

          <div className="mt-7 rounded-3xl border border-cyber-blue/20 bg-gradient-to-br from-base-700 to-base-900 p-5 md:p-8">
            <div className="mb-8 flex flex-wrap items-center justify-between gap-4">
              <div>
                <div className="text-sm font-bold text-white">
                  Étape {String(activeAttackStep + 1).padStart(2, '0')} /{' '}
                  {String(attackSteps.length).padStart(2, '0')}
                </div>
                <div className="mt-1 text-xs text-slate-500">
                  {isPlaying
                    ? 'Scénario en lecture…'
                    : 'Sélectionnez une étape'}
                </div>
              </div>

              <div className="flex gap-2">
                <button
                  onClick={replayAttack}
                  className="inline-flex items-center gap-2 rounded-xl border border-cyber-blue/30 bg-cyber-blue/10 px-4 py-2.5 text-sm font-bold text-cyber-blue transition hover:bg-cyber-blue/20"
                >
                  <Play size={16} />
                  Rejouer
                </button>

                <button
                  onClick={resetAttack}
                  className="inline-flex items-center gap-2 rounded-xl border border-white/10 bg-base-700/70 px-4 py-2.5 text-sm font-bold text-slate-300 transition hover:bg-base-700"
                >
                  <RotateCcw size={16} />
                  Réinitialiser
                </button>
              </div>
            </div>

            <div className="mb-8 overflow-x-auto pb-3">
              <div className="flex min-w-max items-center">
                {attackSteps.map((step, index) => {
                  const active = index === activeAttackStep;
                  const completed = index < activeAttackStep;

                  return (
                    <React.Fragment key={step.id}>
                      <button
                        onClick={() => {
                          setIsPlaying(false);
                          setActiveAttackStep(index);
                        }}
                        className={`group flex w-32 flex-col items-center text-center transition md:w-36 ${
                          active ? 'scale-105' : ''
                        }`}
                      >
                        <div
                          className={`flex h-11 w-11 items-center justify-center rounded-full border text-xs font-black transition ${
                            active
                              ? 'border-cyber-blue bg-cyber-blue text-white shadow-lg shadow-glow'
                              : completed
                              ? 'border-cyber-emerald/50 bg-cyber-emerald/10 text-cyber-emerald'
                              : 'border-white/10 bg-base-700 text-slate-500'
                          }`}
                        >
                          {completed ? <Check size={16} /> : step.number}
                        </div>

                        <div
                          className={`mt-3 text-xs font-bold ${
                            active ? 'text-cyber-blue' : 'text-slate-400'
                          }`}
                        >
                          {step.title}
                        </div>
                      </button>

                      {index < attackSteps.length - 1 && (
                        <div
                          className={`h-px w-10 shrink-0 transition md:w-16 ${
                            index < activeAttackStep
                              ? 'bg-cyber-emerald/50'
                              : 'bg-base-700'
                          }`}
                        />
                      )}
                    </React.Fragment>
                  );
                })}
              </div>
            </div>

            <div className="grid gap-6 lg:grid-cols-[0.9fr_1.1fr]">
              <div className="rounded-2xl border border-cyber-blue/20 bg-base-900/70 p-6">
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-blue/20 bg-cyber-blue/10 text-cyber-blue">
                    <Crosshair size={23} />
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cyber-blue">
                      {currentStep.number}
                    </div>
                    <h3 className="text-xl font-black text-white">
                      {currentStep.title}
                    </h3>
                  </div>
                </div>

                <div className="mt-6 space-y-5">
                  <AttackInfo
                    label="Technique"
                    value={currentStep.technique}
                    icon={<Code2 size={16} />}
                  />
                  <AttackInfo
                    label="Preuve"
                    value={currentStep.proof}
                    icon={<CheckCircle2 size={16} />}
                  />
                  <AttackInfo
                    label="Impact"
                    value={currentStep.impact}
                    icon={<AlertTriangle size={16} />}
                  />
                  <AttackInfo
                    label="Remédiation"
                    value={currentStep.remediation}
                    icon={<ShieldCheck size={16} />}
                  />
                </div>
              </div>

              <div className="overflow-hidden rounded-2xl border border-white/5 bg-base-900">
                <div className="flex items-center justify-between border-b border-white/5 bg-base-700 px-4 py-3">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Terminal size={15} className="text-cyber-emerald" />
                    preuve-technique.sh
                  </div>

                  <span className="flex items-center gap-1.5 text-[10px] text-cyber-emerald">
                    <span className="h-2 w-2 animate-pulse rounded-full bg-cyber-emerald" />
                    LAB
                  </span>
                </div>

                <div className="p-5 font-mono text-xs leading-7">
                  <div className="text-cyber-emerald">
                    $ {currentStep.command || 'analyse --scenario'}
                  </div>

                  <div className="mt-4 whitespace-pre-line text-slate-400">
                    {currentStep.result || 'Analyse en cours…'}
                  </div>
                </div>

                <div className="border-t border-white/5 bg-base-700/60 p-5">
                  <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                    Vulnérabilités impliquées
                  </div>

                  <div className="mt-3 flex flex-wrap gap-2">
                    {currentStep.vulnerabilities.map((id) => (
                      <button
                        key={id}
                        onClick={() => setSelectedVulnerability(id)}
                        className="rounded-lg border border-rose-500/20 bg-rose-500/10 px-3 py-1.5 text-xs font-bold text-rose-300 transition hover:bg-rose-500/20"
                      >
                        {id}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TERMINAL */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="PREUVES TECHNIQUES"
            title="Explorer les étapes du pentest"
            description="Une vue interactive des principales commandes et observations. Les secrets sensibles sont volontairement masqués."
            icon={<Terminal size={22} />}
          />

          <div className="mt-7 overflow-hidden rounded-3xl border border-white/5 bg-base-900 shadow-2xl">
            <div className="flex overflow-x-auto border-b border-white/5 bg-base-700/80">
              {Object.entries(terminalViews).map(([key, item]) => (
                <button
                  key={key}
                  onClick={() => setActiveTerminal(key)}
                  className={`flex shrink-0 items-center gap-2 border-b-2 px-5 py-4 text-sm font-bold transition ${
                    activeTerminal === key
                      ? 'border-cyber-blue bg-cyber-blue/5 text-cyber-blue'
                      : 'border-transparent text-slate-500 hover:text-slate-300'
                  }`}
                >
                  {item.icon}
                  {item.label}
                </button>
              ))}
            </div>

            <div className="grid lg:grid-cols-[1.25fr_0.75fr]">
              <div className="p-5 md:p-7">
                <div className="mb-5 rounded-xl border border-white/5 bg-base-700 px-4 py-3 font-mono text-xs text-cyber-emerald">
                  <span className="text-slate-600">$ </span>
                  {terminal.command}
                </div>

                <div className="min-h-[280px] rounded-2xl border border-white/5 bg-base-900 p-5 font-mono text-xs leading-7">
                  {terminal.output.map((line, index) => {
                    const warning =
                      line.includes('DISABLED') ||
                      line.includes('Secrets') ||
                      line.includes('Attack paths');

                    const success =
                      line.includes('OK') || line.includes('ENABLED');

                    return (
                      <div
                        key={`${line}-${index}`}
                        className={
                          warning
                            ? 'text-amber-300'
                            : success
                            ? 'text-cyber-emerald'
                            : 'text-slate-400'
                        }
                      >
                        {line || '\u00a0'}
                      </div>
                    );
                  })}
                </div>
              </div>

              <div className="border-t border-white/5 bg-base-700/40 p-6 lg:border-l lg:border-t-0">
                <div className="text-xs font-bold uppercase tracking-widest text-cyber-blue">
                  Ce que cela démontre
                </div>

                <p className="mt-4 text-sm leading-7 text-slate-300">
                  {terminal.explanation}
                </p>

                <div className="mt-7 rounded-xl border border-white/5 bg-base-900 p-4">
                  <div className="flex items-center gap-2 text-xs font-bold text-slate-400">
                    <Lock size={14} className="text-cyber-emerald" />
                    Données sensibles protégées
                  </div>

                  <p className="mt-2 text-xs leading-6 text-slate-500">
                    Les mots de passe, hashes NTLM et secrets récupérés dans le
                    rapport original ne sont pas publiés dans le portfolio.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* SECURITY CONCEPTS */}
        <section className="mt-16 grid gap-6 lg:grid-cols-2">
          <ConceptCard
            icon={<Database size={24} />}
            eyebrow="LDAP"
            title="Du LDAP non protégé vers LDAPS"
            color="cyan"
          >
            <div className="mt-6 flex items-center justify-center gap-3 text-center">
              <ConceptNode title="LDAP" subtitle="TCP 389" danger />
              <ArrowRight className="shrink-0 text-slate-600" />
              <ConceptNode title="TLS" subtitle="Chiffrement" />
              <ArrowRight className="shrink-0 text-slate-600" />
              <ConceptNode title="LDAPS" subtitle="TCP 636" success />
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              L’objectif de la remédiation est de protéger les échanges avec
              l’annuaire et de renforcer l’intégrité des communications LDAP.
            </p>

            <a
              href="https://learn.microsoft.com/fr-fr/windows-server/identity/ad-ds/ldap-signing"
              target="_blank"
              rel="noreferrer"
              className="mt-5 inline-flex items-center gap-2 text-xs font-bold text-cyber-blue hover:text-cyber-blue"
            >
              Documentation Microsoft
              <ArrowRight size={14} />
            </a>
          </ConceptCard>

          <ConceptCard
            icon={<Wifi size={24} />}
            eyebrow="SMB"
            title="Pourquoi SMB Signing était important"
            color="emerald"
          >
            <div className="mt-6 grid grid-cols-3 items-center gap-3">
              <ConceptNode title="Client" subtitle="DESKTOP01" />

              <div className="text-center">
                <div className="mb-2 text-[10px] font-bold uppercase text-rose-400">
                  Risque
                </div>
                <div className="h-px bg-gradient-to-r from-rose-500/20 via-rose-400 to-rose-500/20" />
                <div className="mt-2 text-[10px] text-slate-500">
                  SMB non signé
                </div>
              </div>

              <ConceptNode title="Serveur" subtitle="FILER01" danger />
            </div>

            <p className="mt-6 text-sm leading-7 text-slate-400">
              La signature SMB permet de renforcer l’intégrité des échanges et
              de réduire l’exposition à certaines attaques de relais NTLM.
            </p>
          </ConceptCard>
        </section>

        {/* VULNERABILITIES */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="FINDINGS"
            title="Les 9 vulnérabilités identifiées"
            description="Chaque constat est relié à son impact et à une mesure de remédiation."
            icon={<ShieldAlert size={22} />}
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
            {vulnerabilities.map((vulnerability) => {
              const open = selectedVulnerability === vulnerability.id;

              return (
                <div
                  key={vulnerability.id}
                  className={`rounded-2xl border bg-base-700/60 transition ${
                    open
                      ? 'border-cyber-blue/30 shadow-lg shadow-glow'
                      : 'border-white/5 hover:border-white/10'
                  }`}
                >
                  <button
                    onClick={() =>
                      setSelectedVulnerability(
                        open ? null : vulnerability.id
                      )
                    }
                    className="w-full p-5 text-left"
                  >
                    <div className="flex items-start justify-between gap-3">
                      <div>
                        <div className="text-xs font-black tracking-widest text-cyber-blue">
                          {vulnerability.id}
                        </div>

                        <h3 className="mt-2 text-base font-black text-white">
                          {vulnerability.title}
                        </h3>
                      </div>

                      <span
                        className={`shrink-0 rounded-full border px-2.5 py-1 text-[10px] font-black ${severityClass(
                          vulnerability.severity
                        )}`}
                      >
                        {vulnerability.severity}
                      </span>
                    </div>

                    <p className="mt-4 line-clamp-3 text-sm leading-6 text-slate-400">
                      {vulnerability.description}
                    </p>

                    <div className="mt-4 flex items-center justify-between text-xs font-bold text-slate-500">
                      <span>Voir le détail</span>
                      {open ? (
                        <ChevronDown size={15} />
                      ) : (
                        <ChevronRight size={15} />
                      )}
                    </div>
                  </button>

                  {open && (
                    <div className="border-t border-white/5 p-5">
                      <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                        Impact
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-300">
                        {vulnerability.impact}
                      </p>

                      <div className="mt-5 text-xs font-bold uppercase tracking-widest text-slate-500">
                        Remédiation
                      </div>

                      <ul className="mt-3 space-y-2">
                        {vulnerability.remediation.map((item) => (
                          <li
                            key={item}
                            className="flex gap-2 text-xs leading-5 text-slate-400"
                          >
                            <Check
                              size={14}
                              className="mt-0.5 shrink-0 text-cyber-emerald"
                            />
                            {item}
                          </li>
                        ))}
                      </ul>

                      <button
                        onClick={() =>
                          setSelectedRecommendation(
                            vulnerability.recommendation
                          )
                        }
                        className="mt-5 inline-flex items-center gap-2 rounded-lg border border-cyber-blue/20 bg-cyber-blue/10 px-3 py-2 text-xs font-bold text-cyber-blue"
                      >
                        Voir {vulnerability.recommendation}
                        <ArrowRight size={14} />
                      </button>
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </section>

        {/* RECOMMENDATIONS */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="REMEDIATION"
            title="Plan d'action R01 → R13"
            description="Le pentest ne s’arrête pas à la découverte : chaque faiblesse doit conduire à une action concrète."
            icon={<ShieldCheck size={22} />}
          />

          <div className="mt-7 grid gap-4 lg:grid-cols-2">
            {recommendations.map((recommendation) => {
              const open = selectedRecommendation === recommendation.id;

              return (
                <button
                  key={recommendation.id}
                  onClick={() =>
                    setSelectedRecommendation(
                      open ? null : recommendation.id
                    )
                  }
                  className={`rounded-2xl border p-5 text-left transition ${
                    open
                      ? 'border-cyber-emerald/30 bg-cyber-emerald/5'
                      : 'border-white/5 bg-base-700/60 hover:border-white/10'
                  }`}
                >
                  <div className="flex items-start gap-4">
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-cyber-emerald/20 bg-cyber-emerald/10 text-sm font-black text-cyber-emerald">
                      {recommendation.id}
                    </div>

                    <div className="min-w-0 flex-1">
                      <div className="flex flex-wrap items-center justify-between gap-2">
                        <h3 className="font-black text-white">
                          {recommendation.title}
                        </h3>

                        <span
                          className={`rounded-full border px-2 py-1 text-[10px] font-bold ${priorityClass(
                            recommendation.priority
                          )}`}
                        >
                          {recommendation.priority}
                        </span>
                      </div>

                      <p className="mt-2 text-sm leading-6 text-slate-400">
                        {recommendation.description}
                      </p>

                      {recommendation.linked.length > 0 && (
                        <div className="mt-4 flex flex-wrap gap-2">
                          {recommendation.linked.map((id) => (
                            <span
                              key={id}
                              className="rounded-md border border-rose-500/15 bg-rose-500/5 px-2 py-1 text-[10px] font-bold text-rose-300"
                            >
                              {id}
                            </span>
                          ))}
                        </div>
                      )}
                    </div>

                    {open ? (
                      <ChevronDown
                        className="mt-1 shrink-0 text-slate-500"
                        size={18}
                      />
                    ) : (
                      <ChevronRight
                        className="mt-1 shrink-0 text-slate-500"
                        size={18}
                      />
                    )}
                  </div>
                </button>
              );
            })}
          </div>
        </section>

        {/* LINK */}
        {(selectedVuln || selectedReco) && (
          <section className="mt-8">
            <div className="rounded-3xl border border-cyber-blue/20 bg-cyber-blue/5 p-6">
              <div className="flex flex-wrap items-center justify-between gap-4">
                <div>
                  <div className="text-xs font-bold uppercase tracking-widest text-cyber-blue">
                    Liaison technique
                  </div>

                  <h3 className="mt-2 text-xl font-black text-white">
                    {selectedVuln
                      ? `${selectedVuln.id} → ${selectedVuln.recommendation}`
                      : selectedReco?.id}
                  </h3>
                </div>

                <button
                  onClick={() => {
                    setSelectedVulnerability(null);
                    setSelectedRecommendation(null);
                  }}
                  className="rounded-lg border border-white/10 p-2 text-slate-400 hover:text-white"
                >
                  <X size={17} />
                </button>
              </div>

              <div className="mt-5 grid gap-4 md:grid-cols-2">
                {selectedVuln && (
                  <div className="rounded-xl border border-white/5 bg-base-900/60 p-4">
                    <div className="text-xs font-bold text-rose-300">
                      {selectedVuln.id} — CONSTAT
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {selectedVuln.description}
                    </p>
                  </div>
                )}

                {selectedReco && (
                  <div className="rounded-xl border border-white/5 bg-base-900/60 p-4">
                    <div className="text-xs font-bold text-cyber-emerald">
                      {selectedReco.id} — ACTION
                    </div>

                    <p className="mt-2 text-sm leading-6 text-slate-400">
                      {selectedReco.description}
                    </p>
                  </div>
                )}
              </div>
            </div>
          </section>
        )}

        {/* DEFENSE IN DEPTH */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="VISION GLOBALE"
            title="De la faille isolée à la défense en profondeur"
            icon={<BrainCircuit size={22} />}
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2 lg:grid-cols-4">
            <DefenseLayer
              number="01"
              title="Identité"
              description="Mots de passe robustes, verrouillage, moindre privilège."
              icon={<Fingerprint size={22} />}
            />
            <DefenseLayer
              number="02"
              title="Infrastructure"
              description="Segmentation, SMB Signing, LDAP sécurisé, correctifs."
              icon={<Server size={22} />}
            />
            <DefenseLayer
              number="03"
              title="Détection"
              description="SIEM, journaux, alertes et surveillance des comportements."
              icon={<Activity size={22} />}
            />
            <DefenseLayer
              number="04"
              title="Gouvernance"
              description="PAM, sensibilisation et audits réguliers."
              icon={<Gauge size={22} />}
            />
          </div>
        </section>

        {/* EVALUATION */}
        <section className="mt-16">
          <div className="overflow-hidden rounded-3xl border border-cyber-emerald/20 bg-gradient-to-br from-cyber-emerald/10 via-base-700 to-base-900 p-7 md:p-9">
            <div className="flex flex-col gap-7 lg:flex-row lg:items-start lg:justify-between">
              <div>
                <div className="flex items-center gap-3">
                  <div className="flex h-12 w-12 items-center justify-center rounded-xl border border-cyber-emerald/30 bg-cyber-emerald/10 text-cyber-emerald">
                    <Award size={25} />
                  </div>

                  <div>
                    <div className="text-xs font-bold uppercase tracking-widest text-cyber-emerald">
                      Évaluation
                    </div>
                    <h2 className="text-2xl font-black text-white">
                      Projet validé
                    </h2>
                  </div>
                </div>

                <p className="mt-5 max-w-3xl text-sm leading-7 text-slate-300">
                  L’évaluation a validé la méthodologie de pentest ainsi que la
                  capacité à transformer les résultats techniques en
                  recommandations concrètes.
                </p>
              </div>

              <div className="rounded-2xl border border-white/10 bg-base-900/50 p-5">
                <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                  Évaluateur
                </div>
                <div className="mt-2 font-black text-white">
                  Julien Ferrandier
                </div>
              </div>
            </div>

            <div className="mt-8 grid gap-4 md:grid-cols-2">
              <EvaluationCard
                number="01"
                title="Identifier les vulnérabilités"
                description="Méthodologie systématique : énumération, compromission d’un compte, mouvement latéral et élévation de privilèges."
              />

              <EvaluationCard
                number="02"
                title="Fournir un plan d'action"
                description="Recommandations reliées aux vulnérabilités identifiées, priorisées et formulées de manière opérationnelle."
              />
            </div>

            <div className="mt-6 rounded-2xl border border-cyber-emerald/10 bg-base-900/40 p-5">
              <div className="flex items-center gap-2 text-xs font-bold uppercase tracking-widest text-cyber-emerald">
                <CheckCircle2 size={15} />
                Synthèse du retour
              </div>

              <p className="mt-3 text-sm leading-7 text-slate-400">
                Présentation structurée, explication claire du pentest,
                exemples concrets, bonnes explications techniques et plan
                d’action pertinent. La documentation et la restitution ont
                également été jugées solides.
              </p>
            </div>
          </div>
        </section>

        {/* DELIVERABLES */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="DOCUMENTATION"
            title="Livrables du projet"
            description="Les documents complets permettent d'aller beaucoup plus loin que la synthèse présentée sur cette page."
            icon={<FileText size={22} />}
          />

          <div className="mt-7 grid gap-4 md:grid-cols-2">
            <Deliverable
              title="Rapport du pentest"
              type="PDF"
              path="/docs/Projet11/Rhouma_Walid_1_rapport_pentest_042025.pdf"
              icon={<FileText size={23} />}
            />

            <Deliverable
              title="Plan d'action"
              type="PDF"
              path="/docs/Projet11/Rhouma_Walid_2_plan_action_042025.pdf"
              icon={<ShieldCheck size={23} />}
            />

            <Deliverable
              title="Restitution"
              type="PDF"
              path="/docs/Projet11/Rhouma_Walid_3_restitution_042025.pdf"
              icon={<BarChart3 size={23} />}
            />

            <Deliverable
              title="Présentation de restitution"
              type="PPTX"
              path="/docs/Projet11/Rhouma_Walid_3_restitution_042025.pptx"
              icon={<FileCode2 size={23} />}
            />
          </div>
        </section>

        {/* SKILLS */}
        <section className="mt-16">
          <SectionHeader
            eyebrow="COMPÉTENCES MOBILISÉES"
            title="Ce que ce projet démontre"
            icon={<Zap size={22} />}
          />

          <div className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {[
              [
                'Active Directory',
                'Énumération, groupes, comptes, politiques, privilèges',
              ],
              [
                'Pentest',
                'Reconnaissance, exploitation contrôlée, mouvement latéral',
              ],
              [
                'Windows',
                'SMB, LDAP, Kerberos, RDP, SAM, LSASS',
              ],
              [
                'Sécurité',
                'Analyse des risques, remédiation, défense en profondeur',
              ],
            ].map(([title, description]) => (
              <div
                key={title}
                className="rounded-2xl border border-white/5 bg-base-700/60 p-5"
              >
                <CircleDot size={18} className="text-cyber-blue" />

                <h3 className="mt-4 font-black text-white">{title}</h3>

                <p className="mt-2 text-sm leading-6 text-slate-500">
                  {description}
                </p>
              </div>
            ))}
          </div>
        </section>
      </main>
      <EvaluationJury
        evaluator={"Julien Ferrandier"}
        summary={"Presentation structuree, explication claire du pentest, exemples concrets."}
        quote={"Bonnes explications techniques et plan d action pertinent. La documentation et la restitution ont egalement ete jugees solides."}
      />
      <ProjectFooterNav current={11} />
    </div>
  );
}