
export interface Project {
  id: string;
  title: string;
  description: string;
  longDescription: string;
  image: string;
  tags: string[];
  link?: string;
  github?: string;
  role: string;
}

export interface Skill {
  category: string;
  items: string[];
}

export interface Experience {
  company: string;
  position: string;
  period: string;
  description: string;
}

export interface ChatMessage {
  role: 'user' | 'model';
  text: string;
}
