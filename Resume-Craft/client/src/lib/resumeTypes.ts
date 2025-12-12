export interface PersonalInfo {
  name: string;
  location: string;
  phone: string;
  email: string;
  linkedin: string;
}

export interface Experience {
  id: string;
  company: string;
  location: string;
  role: string;
  startDate: string;
  endDate: string;
  bullets: string[];
}

export interface Project {
  id: string;
  name: string;
  technologies: string[];
  bullets: string[];
}

export interface Education {
  id: string;
  institution: string;
  location: string;
  degree: string;
  date: string;
  bullets: string[];
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  summary: string;
  experience: Experience[];
  projects: Project[];
  education: Education[];
  skills: string[];
  languages: { language: string; level: string }[];
}

export const defaultResumeData: ResumeData = {
  personalInfo: {
    name: "Takuro Akiyama",
    location: "Golden Beach, QLD, Australia",
    phone: "+61 405 726 234",
    email: "akiyaman0212@gmail.com",
    linkedin: "linkedin.com/in/takuro-akiyama-46477b221",
  },
  summary:
    "Full-stack developer with experience building web applications using modern technologies including React, TypeScript, Python, and cloud services. Passionate about creating efficient solutions and continuously learning new technologies. International experience in Japan, the United States, and Australia with strong communication skills in English and Japanese.",
  experience: [
    {
      id: "1",
      company: "Botanical Food Company Pty Ltd.",
      location: "Palmwoods, QLD",
      role: "Quality Checker",
      startDate: "Dec 2024",
      endDate: "Present",
      bullets: [
        "Collaborated with team members to identify and resolve production issues efficiently.",
        "Followed strict quality and safety protocols under pressure.",
        "Communicated effectively with supervisors and team leaders to ensure smooth operations.",
      ],
    },
    {
      id: "2",
      company: "TEPCO Energy Partner, Inc.",
      location: "Sapporo, Japan",
      role: "Customer Support Assistant",
      startDate: "Nov 2023",
      endDate: "Jan 2024",
      bullets: [
        "Supported 200+ customers monthly by managing service requests and troubleshooting billing issues.",
        "Reduced service completion time by 40% through improved communication with technicians.",
        "Maintained accuracy and professionalism in handling customer data.",
      ],
    },
  ],
  projects: [
    {
      id: "1",
      name: "Auto Matcher",
      technologies: ["React", "TypeScript", "Node.js", "Express", "PostgreSQL", "TanStack Query"],
      bullets: [
        "Built a full-stack matching application with real-time data synchronization.",
        "Implemented RESTful API with Express and PostgreSQL for data persistence.",
        "Created responsive UI components using React and Tailwind CSS.",
      ],
    },
    {
      id: "2",
      name: "Charge Spotter",
      technologies: ["React", "TypeScript", "Google Maps API", "Node.js", "Express"],
      bullets: [
        "Developed an EV charging station finder with interactive map integration.",
        "Integrated Google Maps API for location services and directions.",
        "Built search and filter functionality for optimal user experience.",
      ],
    },
    {
      id: "3",
      name: "Secure.zip",
      technologies: ["Python", "Cryptography", "Flask", "React", "TypeScript"],
      bullets: [
        "Created a secure file encryption and compression application.",
        "Implemented AES encryption using Python cryptography libraries.",
        "Built intuitive web interface for file upload and download operations.",
      ],
    },
    {
      id: "4",
      name: "YouTube Dual Subtitle",
      technologies: ["JavaScript", "Chrome Extension API", "HTML", "CSS"],
      bullets: [
        "Developed Chrome extension for displaying dual language subtitles on YouTube.",
        "Utilized Chrome Extension APIs for seamless browser integration.",
        "Enhanced language learning experience for multilingual users.",
      ],
    },
    {
      id: "5",
      name: "Celebrity Identify",
      technologies: ["Python", "TensorFlow", "OpenCV", "Flask", "Machine Learning"],
      bullets: [
        "Built machine learning application for celebrity face recognition.",
        "Trained neural network models using TensorFlow and image processing with OpenCV.",
        "Created Flask backend API for model inference and predictions.",
      ],
    },
  ],
  education: [
    {
      id: "1",
      institution: "University of the People",
      location: "USA (Online)",
      degree: "Bachelor of Science in Computer Science",
      date: "Oct 2024 - Present",
      bullets: [],
    },
    {
      id: "2",
      institution: "Coursera",
      location: "Online",
      degree: "Google IT Support Certificate",
      date: "Jul 2025 - Aug 2025",
      bullets: [],
    },
    {
      id: "3",
      institution: "Coursera",
      location: "Online",
      degree: "CompTIA A+ Certification (Preparation)",
      date: "Aug 2025 - Ongoing",
      bullets: [],
    },
  ],
  skills: [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Express",
    "Python",
    "Flask",
    "TensorFlow",
    "PostgreSQL",
    "HTML/CSS",
    "Tailwind CSS",
    "Git",
    "REST APIs",
    "Chrome Extensions",
    "Google Maps API",
    "Machine Learning",
    "Windows",
    "macOS",
    "Ubuntu",
    "TCP/IP",
    "VPN",
  ],
  languages: [
    { language: "English", level: "Highly Proficient" },
    { language: "Japanese", level: "Native" },
    { language: "Korean", level: "Beginner" },
  ],
};
