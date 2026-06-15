export interface ProjectLinks {
  github?: string;
  live?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  results: string[];
  techStack: string[];
  links: ProjectLinks;
  featured?: boolean;
}

export interface Category {
  id: string;
  name: string;
  description: string;
}
