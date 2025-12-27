export interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  link?: string;
  highlights: string[];
}

export interface Skill {
  name: string;
  icon: React.ReactNode;
  level: string;
}

export interface Experience {
  role: string;
  company: string;
  period: string;
  description: string;
}

export enum SectionType {
  HERO = 'hero',
  ABOUT = 'about',
  PROJECTS = 'projects',
  EXPERIENCE = 'experience',
  CONTACT = 'contact',
}