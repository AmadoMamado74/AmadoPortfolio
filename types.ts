
export interface ContactInfo {
  name: string;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  location: string;
  portfolioUrl: string;
}

export interface Experience {
  id: string;
  company: string;
  role: string;
  period: string;
  location: string;
  description: string[];
}

export interface Education {
  id: string;
  institution: string;
  degree: string;
  period: string;
  location: string;
  gpa?: string;
}

export interface Project {
  id: string;
  title: string;
  description: string;
  technologies: string[];
  link?: string;
}

export interface Skill {
  name: string;
  level: number; // 1-5
}

export interface ProjectCategory {
  title: string;
  projects: Project[];
}

export interface PortfolioData {
  contact: ContactInfo;
  summary: string;
  workExperience: Experience[];
  education: Education[];
  skills: {
    mechanical: string[];
    systems: string[];
    electrical: string[];
  };
  projectCategories: ProjectCategory[];
  extracurriculars: string[];
}
