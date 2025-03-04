export interface TimelineItem {
  id: number;
  title: string;
  role: string;
  date: string;
  description: string;
  skills: string[];
}

export interface Project {
  id: number;
  title: string;
  description: string;
  longDescription?: string;
  tags: string[];
  imageUrl: string;
  demoLink?: string;
  githubLink?: string;
}

export interface Skill {
  id: number;
  name: string;
  icon: string;
  category: string;
}

export interface PersonalInfo {
  name: string;
  phone: string;
  location: string;
  email: string;
  linkedin: string;
  github: string;
}