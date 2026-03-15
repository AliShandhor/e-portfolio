// All content derived from Ali Shandhor's resume

export const personalInfo = {
  name: "Ali Shandhor",
  title: "Software Engineering Student",
  subtitle: "Intern @ Ciena · Previously @ Ericsson · York University",
  email: "ali2030@my.yorku.ca",
  phone: "+1 289-689-0664",
  location: "Ottawa, Canada",
  github: "https://github.com",
  linkedin: "https://linkedin.com",
  website: "https://website.com",
  summary:
    "Senior Software Engineering student with 2+ years of hands-on experience writing and testing code, building automation frameworks, and delivering software solutions across diverse industries. Experienced in both corporate and startup environments, demonstrating strong analytical skills and a results-driven approach to solving complex, real-world engineering challenges.",
};

export const education = [
  {
    degree: "Spec. Hons. Bachelor of Engineering, Software Engineering",
    school: "York University",
    location: "Toronto, ON, Canada",
    period: "Sep 2021 – May 2027",
    coursework: ["DSA", "OOP", "Software Design", "Computer Organization", "Embedded Systems"],
    awards: ["Dean's Honour Roll", "Gordon & Agnes Brash Scholarship", "YorkU Intl. Entrance Award (A+ average)"],
  },
];

export const experience = [
  {
    role: "Software Engineering Intern",
    company: "Ciena",
    location: "Ottawa, ON, Canada",
    period: "Sept 2025 – Present",
    current: true,
    bullets: [
      "Designed and implemented Python test cases in Jupyter Notebooks to automate validation of optical network captive environments for hyperscale customers including Google, Microsoft, and Meta.",
      "Maintained and enhanced the RLS product automation framework by developing APIs and utilities for CLI, REST, NETCONF, and gRPC interfaces, resolving bugs, and assisting manual testers.",
      "Contributed to improving CI/CD pipelines in Jenkins by enhancing automation, testing workflows, and deployment processes.",
    ],
    tech: ["Python", "Jupyter", "REST", "NETCONF", "gRPC", "Jenkins", "CI/CD"],
  },
  {
    role: "Software Engineering Intern",
    company: "Ericsson",
    location: "Ottawa, ON, Canada",
    period: "Jan 2024 – Dec 2024",
    current: false,
    bullets: [
      "Developed a software tool to automate Qualcomm enterprise applications through their APIs using Python, enabling customized automation and data analysis workflows.",
      "Built a test automation framework using Python that takes YAML input to configure 5G test case workflows, leveraging pandas and NumPy.",
      "Applied concurrent and parallel processing techniques using CPU cores and threads, achieving a 50% reduction in data processing time.",
    ],
    tech: ["Python", "YAML", "pandas", "NumPy", "5G", "Parallel Processing"],
  },
  {
    role: "AI Software Development Intern",
    company: "Vosyn",
    location: "Toronto, ON, Canada",
    period: "July 2023 – Oct 2023",
    current: false,
    bullets: [
      "Contributed to core MVP features for a large language and voice synthesis model.",
      "Trained models on diverse audio datasets to improve generalization and multilingual voice cloning.",
      "Built a Gradio front-end for the MVP using a 60M-parameter vision transformer in PyTorch, trained on 10,000 hours of audio via GCP.",
    ],
    tech: ["PyTorch", "Gradio", "GCP", "Vision Transformer", "Audio ML"],
  },
];

export const projects = [
  {
    name: "Salon AI",
    description:
      "Full-stack AI-powered salon booking platform with intelligent stylist suggestions. Features RESTful APIs for appointment management and an AI-driven recommendation engine for personalized stylist matching.",
    tech: ["Flask", "React", "Next.js", "Tailwind CSS", "MongoDB"],
    github: "https://github.com",
    demo: null,
  },
  {
    name: "YorkU Parking System",
    description:
      "Comprehensive parking management system for York University. Built with Java backend handling admin controls, authentication, vehicle tracking, and parking management with multiple design patterns and unit tests.",
    tech: ["Java", "JavaFX", "MVC", "JUnit"],
    github: "https://github.com",
    demo: null,
  },
];

export const skills = {
  languages: ["Java", "Python", "C/C++", "JavaScript", "MATLAB", "Bash", "HTML/CSS", "SQL/NoSQL"],
  frameworks: ["Spring Boot", "Flask", "PyTorch", "React", "Next.js", "Bootstrap", "Tailwind CSS"],
  cloud: ["AWS", "Azure", "GCP", "Docker", "Jenkins", "CI/CD"],
  tools: ["Git", "Jira", "Linux", "Jupyter", "JUnit"],
  databases: ["MongoDB", "SQL", "NoSQL"],
};

// Terminal commands data
export const terminalData = {
  about: `Ali Shandhor — Senior Software Engineering Student at York University.
Currently interning at Ciena (Ottawa) working on optical network automation.
Previously at Ericsson (5G test frameworks) and Vosyn (AI voice synthesis).
Dean's Honour Roll · A+ average · Expected graduation May 2027.`,
  
  skills: `LANGUAGES   Java · Python · C/C++ · JavaScript · Bash · SQL
FRAMEWORKS  Spring Boot · Flask · PyTorch · React · Next.js
CLOUD       AWS · Azure · GCP · Docker · Jenkins
TOOLS       Git · Linux · Jupyter · Jira · JUnit
DATABASES   MongoDB · SQL · NoSQL`,

  projects: `[1] Salon AI
     Stack: Flask · React · Next.js · MongoDB
     AI-powered salon booking with stylist recommendation engine.
     → github.com/alishandhor/salon-ai

[2] YorkU Parking System  
     Stack: Java · JavaFX · MVC · JUnit
     Full parking management system with authentication & vehicle tracking.
     → github.com/alishandhor/yorku-parking`,

  experience: `[Current]  Software Engineering Intern @ Ciena         Sept 2025 – Present
             Optical network automation · gRPC · REST · Jenkins

[2024]     Software Engineering Intern @ Ericsson          Jan 2024 – Dec 2024
             5G test framework · 50% perf improvement · pandas

[2023]     AI Software Development Intern @ Vosyn               Jul 2023 – Oct 2023
             PyTorch · Vision Transformer · Voice synthesis`,

  contact: `EMAIL    ali2030@my.yorku.ca
PHONE    +1 289-689-0664
LOCATION Ottawa, Canada
GITHUB   github.com
LINKEDIN linkedin.com`,

  resume: `Resume available for download at:
→ /Ali_Shandhor_Resume.pdf

Opening download link...`,
};
