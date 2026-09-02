export type ProjectCategory =
  | 'Réseau & Pare-feu'
  | 'Active Directory & PKI'
  | 'Sécurité & Audits'
  | 'Automatisation & Scripts';

export interface ProjectScript {
  filename: string;
  language: 'bash' | 'powershell' | 'ansible' | 'python';
  code: string;
}

export interface ProjectDeliverable {
  label: string;
  type: 'PDF' | 'ZIP' | 'CR';
}

export interface Project {
  id: number;
  slug: string;
  title: string;
  category: ProjectCategory;
  duration: string;
  role: string;
  status: 'Soutenance Validée';
  excerpt: string;
  technologies: string[];
  context: {
    need: string;
    constraints: string[];
    objectives: string[];
  };
  architecture: {
    description: string;
    layers: string[];
  };
  scripts: ProjectScript[];
  deliverables: {
    summary: string;
    strengths: string[];
    files: ProjectDeliverable[];
  };
  featured: boolean;
}
