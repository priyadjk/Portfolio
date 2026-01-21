
import { Project, Skill, Experience } from './types';

export const PERSONAL_INFO = {
  name: "Priyadarsni JK",
  title: "AI & Data Science Student",
  email: "priyadarsnijk@gmail.com",
  phone: "8925117462",
  location: "Chennai, Tamil Nadu",
  university: "Hindustan Institute of Technology & Science",
  summary: "AI & Data Science student at Hindustan Institute of Technology with hands-on experience in data analytics, model building, and generative AI. Actively exploring AI and Data Science roles with a strong interest in building intelligent, user-centric solutions.",
  bio: "Proficient in Python and experienced in end-to-end machine learning project delivery, I possess strong analytical skills. I combine my technical abilities with an interest in full-stack development to build and deploy robust, data-driven applications.",
  socials: {
    github: "https://github.com/priyadjk",
    linkedin: "https://linkedin.com/in/priyadarsni-jk-745a0025b",
    twitter: "https://twitter.com"
  }
};

export const PROJECTS: Project[] = [
  {
    id: "capstone",
    title: "Praxis: Multi-LLM Model",
    description: "A unified multi-LLM app merging chat, voice, image generation, and smart document Q&A.",
    longDescription: "Praxis is a unified multi-LLM app that merges chat, voice, image generation, and smart document Q&A into one seamless platform. It boosts productivity by enabling both online and offline AI interactions for students, professionals, and creators.",
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
    tags: ["LLM", "AI", "GenAI", "Productivity"],
    role: "Lead Developer"
  },
  {
    id: "frosty",
    title: "Frosty the Penguin",
    description: "A voice-interactive, penguin-themed AI companion built using NLP concepts.",
    longDescription: "Frosty is a voice-interactive AI companion that uses Natural Language Processing to interact with users in a fun, penguin-themed environment.",
    image: "https://images.unsplash.com/photo-1551989137-024fbc99014b?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "NLP", "AI Companion"],
    github: "https://github.com/priyadjk",
    role: "AI Developer"
  },
  {
    id: "pizza",
    title: "Pizza Bill Generator",
    description: "A mini project that generates pizza bill receipts using core Java.",
    longDescription: "A robust Java-based application designed to automate the process of calculating and generating detailed pizza billing receipts.",
    image: "https://images.unsplash.com/photo-1513104890138-7c749659a591?auto=format&fit=crop&q=80&w=800",
    tags: ["Java", "OOP", "Software Dev"],
    github: "https://github.com/priyadjk",
    role: "Software Developer"
  },
  {
    id: "gif-creator",
    title: "ImageIO GIF Creator",
    description: "Python script to merge multiple images into GIFs using the ImageIO library.",
    longDescription: "A utility script leveraging Python's ImageIO library to seamlessly combine static images into animated GIFs.",
    // Using a high-quality community/collaboration image that reflects the user's provided photo (Codédex community vibe)
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?auto=format&fit=crop&q=80&w=800",
    tags: ["Python", "ImageIO", "Automation"],
    github: "https://github.com/priyadjk",
    role: "Python Developer"
  }
];

export const SKILLS: Skill[] = [
  {
    category: "Technical Skills",
    items: ["Python (Intermediate Level)", "Machine Learning", "NLP", "SQL", "Pandas", "NumPy", "Seaborn", "Matplotlib"]
  },
  {
    category: "AI Tools & Dev",
    items: ["Google Gemini", "ChatGPT", "GitHub Copilot", "Git", "VS Code", "Jupyter Notebook"]
  },
  {
    category: "Soft Skills",
    items: ["Problem Solving", "Team Collaboration", "Communication", "Time Management"]
  }
];

export const EXPERIENCES: Experience[] = [
  {
    company: "Cognifyz Technologies",
    position: "Data Science Intern",
    period: "May 12 – June 12, 2025",
    description: "Focused on data analytics and model building using advanced Python libraries."
  },
  {
    company: "Internship Studio",
    position: "Java Programming Intern",
    period: "July 19 – Aug 23, 2024",
    description: "Developed core Java applications and enhanced software development logic."
  },
  {
    company: "Cognizant (Forage)",
    position: "Virtual Intern - AI & Data Analytics",
    period: "July 1 – July 9, 2023",
    description: "Explored AI and Data Analytics fundamentals through industry-simulated tasks."
  }
];
