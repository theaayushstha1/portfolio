export const personalInfo = {
  name: "Aayush Shrestha",
  title: "AI Agent Developer",
  tagline: "Building intelligent AI agents with Vertex AI & Google ADK",
  bio: "I build autonomous AI agents that solve real-world problems. Currently exploring multi-agent systems with Google's Agent Development Kit (ADK) and Vertex AI, while researching generative AI for humanoid robotics at Morgan State University.",
  email: "aayushofficial006@gmail.com",
  location: "Baltimore, MD",
  education: {
    school: "Morgan State University",
    degree: "B.S. Computer Science",
    gpa: "3.96",
    graduation: "May 2026",
  },
  links: {
    github: "https://github.com/theaayushstha1",
    linkedin: "https://linkedin.com/in/aayushstha123",
    twitter: "https://x.com/0xYush",
  },
};

export const highlights = [
  { value: "3.96", label: "GPA" },
  { value: "800+", label: "Users Served" },
  { value: "2", label: "AI Agents Built" },
];

export const techStack = {
  aiAgents: ["Vertex AI", "Google ADK", "LangChain", "OpenAI API", "Claude API"],
  languages: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin"],
  frameworks: ["React", "FastAPI", "Flask", "Next.js"],
  cloud: ["Google Cloud", "AWS", "Docker", "Kubernetes"],
  databases: ["Pinecone", "PostgreSQL", "Firebase", "Redis"],
  tools: ["Git", "Nginx", "CI/CD", "NAOqi SDK"],
};

export const projects = [
  {
    title: "CS Navigator",
    subtitle: "AI Academic Advisor Agent",
    description: "RAG-powered AI agent serving 800+ CS students with intelligent course recommendations, curriculum planning, and academic advising through natural conversation.",
    tech: ["LangChain", "Pinecone", "OpenAI", "React", "FastAPI", "AWS"],
    highlights: ["800+ active users", "RAG architecture", "Multi-turn conversations"],
    links: { github: "https://github.com/theaayushstha1/cs-navigator" },
    color: "blue",
  },
  {
    title: "NAO6 Robot AI",
    subtitle: "Embodied AI Agent",
    description: "Distributed AI system for NAO6 humanoid robot with speech recognition, gesture control, and contextual responses. Featured at NSF Conference & Amazon AI/ML Symposium.",
    tech: ["Python", "OpenAI", "NAOqi SDK", "Flask", "Pinecone"],
    highlights: ["NSF Featured", "Amazon Symposium", "Speech + Gesture AI"],
    links: { github: "https://github.com/theaayushstha1/nao-robot" },
    color: "cyan",
  },
  {
    title: "Baltimore Crime Dashboard",
    subtitle: "Data Intelligence Platform",
    description: "Interactive visualization platform analyzing 5 years of Baltimore crime data with geospatial mapping, trend analysis, and predictive insights.",
    tech: ["R Shiny", "ggplot2", "Docker", "Leaflet"],
    highlights: ["5 years of data", "Geospatial analysis", "Trend prediction"],
    links: { github: "https://github.com/theaayushstha1/baltimore-crime" },
    color: "green",
  },
  {
    title: "Turing Machine Simulator",
    subtitle: "Educational Tool",
    description: "Web-based Turing machine simulator with real-time state visualization, step-by-step execution, and custom tape configurations for CS education.",
    tech: ["Python", "Flask", "Docker", "JavaScript"],
    highlights: ["Real-time visualization", "Custom configurations", "Educational"],
    links: { github: "https://github.com/theaayushstha1/turing-machine" },
    color: "purple",
  },
];

export const experience = [
  {
    role: "Research Assistant - AI & Robotics",
    company: "Morgan State University",
    period: "Jun 2025 – Present",
    description: "Building AI agents for NAO6 humanoid robot using RAG systems, speech processing, and the NAOqi SDK. Exploring multi-agent coordination and embodied AI.",
    tech: ["Python", "LangChain", "NAOqi", "OpenAI"],
  },
  {
    role: "Software Engineering Intern",
    company: "Ace Data Cloud",
    period: "May 2024 – Aug 2024",
    description: "Developed high-performance backend services with Python/FastAPI, implemented Redis caching for 10x faster response times, and deployed on AWS with Docker.",
    tech: ["Python", "FastAPI", "Redis", "AWS", "Docker"],
  },
  {
    role: "Android Engineering Fellow",
    company: "CodePath",
    period: "Mar 2024 – Aug 2024",
    description: "Built 10 Android applications using Kotlin, mastering modern Android development patterns including MVVM, Jetpack Compose, and Room database.",
    tech: ["Kotlin", "Android", "Jetpack", "Firebase"],
  },
];
