import { Code, LayoutTemplate, BrainCircuit, Cloud } from "lucide-react";

export const personalInfo = {
  name: "Gaurav Pawar",
  role: "Future Software Engineer",
  taglines: [
    "AI/ML Enthusiast",
    "Full Stack Developer",
    "Future DevOps Engineer",
    "Problem Solver"
  ],
  description: "Building intelligent systems and scalable digital solutions.",
  about: "Passionate Computer Engineering student focused on developing innovative solutions using AI, software systems, and modern web technologies. I possess a strong problem-solving mindset and a drive for continuous learning to build impactful and production-ready systems.",
  contact: {
    email: "pawargaurav3600@gmail.com",
    github: "https://github.com/gauravp379",
    linkedin: "https://www.linkedin.com/in/gaurav-pawar-31b929279/",
  }
};

export const skills = [
  {
    category: "Programming",
    items: [
      { name: "JavaScript / TypeScript", level: 90 },
      { name: "Python", level: 85 },
      { name: "C++", level: 80 }
    ],
    icon: Code
  },
  {
    category: "Web Development",
    items: [
      { name: "React / Next.js", level: 88 },
      { name: "HTML & CSS", level: 95 },
      { name: "Tailwind CSS", level: 90 }
    ],
    icon: LayoutTemplate
  },
  {
    category: "AI & ML",
    items: [
      { name: "Machine Learning Basics", level: 75 },
      { name: "Model Integration", level: 80 },
      { name: "Data Processing", level: 78 }
    ],
    icon: BrainCircuit
  },
  {
    category: "Cloud & DevOps",
    items: [
      { name: "Git & GitHub", level: 90 },
      { name: "Cloud Computing Basics", level: 70 },
      { name: "System Design", level: 65 }
    ],
    icon: Cloud
  }
];

export const projects = [
  {
    id: 1,
    title: "AI-Based Indian Sign Language (ISL) Recognition",
    description: "Assistive AI system designed to facilitate communication for the speech and hearing impaired by accurately translating ISL into text and speech.",
    tags: ["Python", "TensorFlow", "OpenCV", "Machine Learning"],
    demoUrl: "",
    githubUrl: "https://github.com/gauravp379/AI-Based-Indian-Sign-Language-ISL-Recognition",
    color: "from-blue-500 to-cyan-400"
  },
  {
    id: 2,
    title: "Smart-Traffic Management System",
    description: "Intelligent control system built to optimize traffic flow, reduce congestion, and prioritize emergency vehicles using real-time data analysis.",
    tags: ["Computer Vision", "Python", "IoT", "Algorithms"],
    demoUrl: "",
    githubUrl: "https://github.com/gauravp379/Smart-Traffic-Management-System",
    color: "from-purple-500 to-indigo-400"
  },
  {
    id: 3,
    title: "Zero-Touch-Growth-Operating-System",
    description: "Highly automated, scalable system aimed at streamlining business operations with minimal manual intervention.",
    tags: ["React", "Node.js", "System Architecture", "Cloud"],
    demoUrl: "",
    githubUrl: "https://github.com/gauravp379/Smart-Traffic-Management-System",
    color: "from-emerald-500 to-teal-400"
  },
  {
    id: 4,
    title: "Ayurveda Remedies Mobile Application",
    description: "A user-centric health-tech solution providing accessible traditional Ayurvedic prescriptions and wellness routines.",
    tags: ["React Native", "Firebase", "UI/UX", "API Design"],
    demoUrl: "",
    githubUrl: "https://github.com/gauravp379/Smart-Traffic-Management-System",
    color: "from-amber-500 to-orange-400"
  }
];

export const experience = [
  {
    title: "B.Tech Computer Engineering",
    organization: "NMIMS Deemed to be University",
    date: "Current",
    details: "Currently pursuing B.Tech with focus on core computer science subjects, algorithms, and practical software engineering.",
    type: "education"
  },
  {
    title: "Focus Areas & Continuous Learning",
    organization: "Self-Driven",
    date: "Ongoing",
    details: "Gaining robust knowledge in Cloud Computing architectures, CI/CD pipelines (DevOps), and scalable System Design principles to prepare for enterprise environments.",
    type: "learning"
  }
];
