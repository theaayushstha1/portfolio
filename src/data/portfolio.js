export const personalInfo = {
  name: "Aayush Shrestha",
  title: "Software Engineer",
  tagline: "Full Stack Developer | Mobile Engineer | AI Systems Builder",
  bio: "I build software that makes a difference. From full stack web applications and mobile apps to AI powered systems, I love turning ideas into products people actually use. Currently leading AI agent development at Morgan State's CS Lab, working directly with Dr. Paul Wang to build intelligent tools for students and faculty using Google ADK and Vertex AI.",
  email: "aashr3@morgan.edu",
  location: "Towson, MD",
  education: {
    school: "Morgan State University",
    degree: "B.S. Computer Science",
    gpa: "3.96",
    graduation: "May 2026",
  },
  links: {
    github: "https://github.com/theaayushstha1",
    linkedin: "https://www.linkedin.com/in/aayushshrestha123/",
    twitter: "https://x.com/0xYush",
  },
};

export const highlights = [
  { value: "3.96", label: "GPA" },
  { value: "800+", label: "Users Served" },
  { value: "10+", label: "Apps Built" },
];

export const techStack = {
  languages: ["Python", "JavaScript", "TypeScript", "Java", "Kotlin", "R"],
  frameworks: ["React", "Next.js", "FastAPI", "Flask", "Node.js", "Android/Jetpack"],
  aiTools: ["Vertex AI", "Google ADK", "LangChain", "OpenAI API", "RAG Systems"],
  cloud: ["Google Cloud", "AWS", "Docker", "Firebase", "Vercel"],
  databases: ["PostgreSQL", "Pinecone", "MongoDB", "Redis", "AWS RDS"],
  tools: ["Git", "GitHub Actions", "CI/CD", "Figma", "NAOqi SDK"],
};

export const projects = [
  {
    title: "CS Navigator",
    subtitle: "AI Academic Assistant",
    description: "A RAG chatbot that helps over 800 CS students at Morgan State get instant answers to academic questions. It recommends courses, helps with curriculum planning, and runs on AWS handling real traffic every day.",
    tech: ["React", "FastAPI", "LangChain", "Pinecone", "AWS", "Docker"],
    highlights: ["800+ active users", "Production deployed", "RAG architecture"],
    image: "/projects/cs-navigator-opt.png",
    links: {
      github: "https://github.com/theaayushstha1/cs-chatbot-morganstate",
      live: "https://inavigator.ai"
    },
    color: "blue",
  },
  {
    title: "NAO6 Robot AI",
    subtitle: "Humanoid Robot System",
    description: "Built a distributed RAG system that lets a NAO6 humanoid robot understand natural language and respond contextually. This project was featured at the NSF Conference and AWS AI/ML Symposium.",
    tech: ["Python", "OpenAI", "NAOqi SDK", "Flask", "Pinecone"],
    highlights: ["NSF Featured", "AWS Symposium", "Speech Recognition"],
    image: "/projects/nao-robot.png",
    links: {
      github: "https://github.com/theaayushstha1/Nao-OpenAI-Morgan-Assist",
      demo: "https://www.youtube.com/watch?v=T_3m2RSoC7c"
    },
    color: "cyan",
  },
  {
    title: "Gaudon Store",
    subtitle: "E Commerce Platform",
    description: "As cofounder and lead developer, I built this full stack e commerce platform for professional silicone sealant products. It handles everything from product management to orders and customer operations.",
    tech: ["JavaScript", "React", "Node.js", "PostgreSQL", "Vercel"],
    highlights: ["Live business", "Cofounder", "Full stack"],
    image: "/projects/gaudon-logo-opt.png",
    links: {
      github: "https://github.com/theaayushstha1/gaudon.global",
      live: "https://www.gaudon.store"
    },
    color: "amber",
  },
  {
    title: "AgentX",
    subtitle: "Autonomous Twitter AI Agent",
    description: "An autonomous AI agent that monitors Twitter mentions and responds intelligently using Google Gemini. Built with the ReAct reasoning pattern, production guardrails, and deployed as a serverless app on Vercel with automatic scaling.",
    tech: ["Python", "Google Gemini", "Twitter API", "Vercel", "ReAct Pattern"],
    highlights: ["ReAct AI pattern", "Serverless architecture", "Production guardrails"],
    image: "/projects/agentx.png",
    links: {
      github: "https://github.com/theaayushstha1/agentX"
    },
    color: "cyan",
  },
  {
    title: "ML Document Extraction",
    subtitle: "Machine Learning Research",
    description: "Fine tuned TrOCR and BERT models for automated metadata extraction from historical manuscripts. Extended context window to 3k tokens for dense document processing.",
    tech: ["PyTorch", "TrOCR", "BERT", "Transformers", "Python"],
    highlights: ["Fine tuned models", "3k token context", "Historical documents"],
    links: {
      colab: "https://colab.research.google.com/drive/1fUvtVFGdWItXwlVgqOkdOFZpWpyjWcSL"
    },
    color: "purple",
  },
  {
    title: "FileNinja AI",
    subtitle: "Privacy First Document Processor",
    description: "A document processor that runs entirely in your browser. You can process sensitive documents with AI without ever uploading them to external servers. Your data stays with you.",
    tech: ["React", "PDF.js", "OpenAI", "JavaScript"],
    highlights: ["Browser based", "Privacy first", "No server uploads"],
    links: {
      github: "https://github.com/theaayushstha1/fileninja-ai"
    },
    color: "green",
  },
  {
    title: "MSU Chatbot Mobile",
    subtitle: "Android Mobile App",
    description: "A native Android chatbot app built for Morgan State students. I used Kotlin with modern Android architecture patterns like MVVM and Jetpack components to create a smooth experience.",
    tech: ["Kotlin", "Android", "Jetpack", "Firebase", "MVVM"],
    highlights: ["Native Android", "MVVM architecture", "Firebase backend"],
    links: { github: "https://github.com/theaayushstha1/MSUChatbot" },
    color: "purple",
  },
  {
    title: "FlixsterPlus",
    subtitle: "Movie Discovery App",
    description: "An Android app for browsing movies with live data from the TMDB API. It shows movie details, ratings, and recommendations with smooth animations throughout.",
    tech: ["Kotlin", "Android", "TMDB API", "RecyclerView", "Retrofit"],
    highlights: ["API integration", "RecyclerView", "Modern UI"],
    links: { github: "https://github.com/theaayushstha1/FlixsterPlusApp" },
    color: "red",
  },
  {
    title: "BitFit",
    subtitle: "Fitness Tracking App",
    description: "An Android fitness tracker that stores your data locally using Room database. Track workouts, calories, and see your progress through intuitive visualizations.",
    tech: ["Kotlin", "Android", "Room DB", "Charts", "Material Design"],
    highlights: ["Local persistence", "Data viz", "Material UI"],
    links: { github: "https://github.com/theaayushstha1/Bitfit2" },
    color: "green",
  },
  {
    title: "WishList App",
    subtitle: "Shopping List Manager",
    description: "A clean Android app for managing wishlists with full CRUD operations and persistent storage. Built with Material Design for a polished look.",
    tech: ["Kotlin", "Android", "SQLite", "Material Design"],
    highlights: ["CRUD operations", "SQLite", "Clean UI"],
    links: { github: "https://github.com/theaayushstha1/WishListApp" },
    color: "pink",
  },
];

export const experience = [
  {
    role: "Lead Developer, AI Agents",
    company: "Morgan State University CS Lab",
    period: "Dec 2025 to Present",
    description: "Currently leading AI agent development at the CS Department, working directly with Dr. Paul Wang, Department Chair. Building intelligent tools for students and faculty using Google ADK and Vertex AI to automate workflows and enhance academic operations.",
    tech: ["Vertex AI", "Google ADK", "Python", "LangChain", "Cloud Functions"],
  },
  {
    role: "Research Assistant, Robotics and AI",
    company: "Morgan State University",
    period: "Jun 2025 to Dec 2025",
    description: "Architected a distributed RAG system for the NAO6 robot using OpenAI and Pinecone. Built a Python acoustic DSP pipeline with AGC and Voice Activity Detection for speech transcription. Presented research at NSF Conference and Amazon AI/ML Symposium.",
    tech: ["Python", "OpenAI", "NAOqi SDK", "Flask", "Pinecone"],
  },
  {
    role: "Software Engineering Intern",
    company: "Ace Data Cloud",
    period: "May 2024 to Aug 2024",
    description: "Designed Python and FastAPI wrappers for external AI models with Redis caching, reducing API response latency by 20 percent. Containerized backend microservices with Docker and deployed on AWS to support a scalable, high traffic proxy management system.",
    tech: ["Python", "FastAPI", "Redis", "Docker", "AWS"],
  },
  {
    role: "Android Engineering Fellow",
    company: "CodePath",
    period: "Mar 2024 to Aug 2024",
    description: "Completed 18 week curriculum building 10 Android apps including Wordle, WishList, and FlixsterPlus using Kotlin and Android Studio. Integrated RESTful APIs with secure authentication, data caching, and modular architecture.",
    tech: ["Kotlin", "Android", "RecyclerView", "REST APIs", "Glide"],
  },
];
