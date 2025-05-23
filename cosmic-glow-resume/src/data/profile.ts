export interface ProfileData {
  basics: {
    name: string;
    title: string;
    summary: string;
    email: string;
    phone?: string;
    website?: string;
    location: string;
    profiles: Array<{
      network: string;
      username: string;
      url: string;
      icon?: string;
    }>;
    image?: string;
  };
  skills: Array<{
    name: string;
    level: number;
    keywords: string[];
  }>;
  work: Array<{
    company: string;
    position: string;
    website?: string;
    startDate: string;
    endDate?: string;
    summary: string;
    highlights: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    startDate?: string;
    endDate?: string;
    url?: string;
    repo?: string;
    technologies: string[];
    image?: string;
  }>;
  education: Array<{
    institution: string;
    area: string;
    studyType: string;
    startDate: string;
    endDate?: string;
    gpa?: string;
    courses?: string[];
  }>;
  achievements: Array<{
    title: string;
    date: string;
    awarder?: string;
    summary: string;
  }>;
  interests?: Array<{
    name: string;
    keywords: string[];
  }>;
  languages?: Array<{
    language: string;
    fluency: string;
  }>;
}

const profileData: ProfileData = {
  basics: {
    name: "JANE DOE",
    title: "SENIOR FULL STACK DEVELOPER",
    summary: "Innovative and deadline-driven developer with 5+ years of experience designing and developing user-centered digital solutions from initial concept to final, polished deliverable.",
    email: "contact@janedoe.dev",
    phone: "+1 (555) 123-4567",
    website: "#YOUR_PERSONAL_WEBSITE",
    location: "San Francisco, CA",
    profiles: [
      {
        network: "GitHub",
        username: "janedoe",
        url: "#YOUR_GITHUB_URL",
        icon: "github"
      },
      {
        network: "LinkedIn",
        username: "janedoe",
        url: "#YOUR_LINKEDIN_URL",
        icon: "linkedin"
      },
      {
        network: "Twitter",
        username: "janedoe",
        url: "#YOUR_TWITTER_URL",
        icon: "twitter"
      }
    ],
    image: "/avatar.jpg"
  },
  skills: [
    {
      name: "React",
      level: 90,
      keywords: ["Components", "Redux", "Hooks", "Context API"]
    },
    {
      name: "TypeScript",
      level: 85,
      keywords: ["ES6+", "Type Safety", "Interfaces", "Generics"]
    },
    {
      name: "Node.js",
      level: 80,
      keywords: ["Express", "RESTful API", "Authentication"]
    },
    {
      name: "GraphQL",
      level: 75,
      keywords: ["Apollo", "Schema Design", "Resolvers"]
    },
    {
      name: "AWS",
      level: 70,
      keywords: ["Lambda", "S3", "EC2", "DynamoDB"]
    },
    {
      name: "Three.js",
      level: 65,
      keywords: ["WebGL", "3D Animation", "Shaders"]
    },
    {
      name: "CI/CD",
      level: 80,
      keywords: ["GitHub Actions", "Docker", "Kubernetes"]
    },
  ],
  work: [
    {
      company: "TechNova Solutions",
      position: "Senior Full Stack Developer",
      website: "#COMPANY_WEBSITE",
      startDate: "2020-01",
      summary: "Leading full-stack development for enterprise clients",
      highlights: [
        "Architected and implemented a microservices-based platform that reduced system latency by 40%",
        "Led a team of 5 developers to deliver projects consistently ahead of schedule",
        "Modernized legacy systems improving performance by 60% and reducing maintenance costs"
      ]
    },
    {
      company: "DigitalEdge Inc.",
      position: "Frontend Developer",
      website: "#COMPANY_WEBSITE",
      startDate: "2017-03",
      endDate: "2019-12",
      summary: "Developed responsive, cross-browser compatible web applications",
      highlights: [
        "Built reusable component library that decreased development time by 35%",
        "Optimized rendering performance resulting in 25% faster page loads",
        "Integrated complex data visualizations using D3.js for financial dashboard"
      ]
    },
    {
      company: "CreativeTech Labs",
      position: "Junior Developer",
      website: "#COMPANY_WEBSITE",
      startDate: "2015-06",
      endDate: "2017-02",
      summary: "Collaborated on full-stack applications using various technologies",
      highlights: [
        "Developed and maintained RESTful APIs for mobile applications",
        "Implemented automated testing reducing bugs in production by 30%",
        "Contributed to open-source projects within the company ecosystem"
      ]
    }
  ],
  projects: [
    {
      name: "Quantum Dashboard",
      description: "Real-time analytics platform with 3D data visualization",
      url: "#PROJECT_LIVE_URL",
      repo: "#PROJECT_REPO_URL",
      technologies: ["React", "Three.js", "Socket.io", "D3.js"],
      image: "/projects/quantum.jpg"
    },
    {
      name: "NeoCommerce",
      description: "Next-generation e-commerce platform with AR product previews",
      url: "#PROJECT_LIVE_URL",
      repo: "#PROJECT_REPO_URL",
      technologies: ["Next.js", "GraphQL", "Stripe", "AR.js"],
      image: "/projects/neocommerce.jpg"
    },
    {
      name: "SyncVerse",
      description: "Collaborative workspace with real-time document editing",
      url: "#PROJECT_LIVE_URL",
      repo: "#PROJECT_REPO_URL",
      technologies: ["Vue.js", "Firebase", "WebRTC", "TipTap"],
      image: "/projects/syncverse.jpg"
    }
  ],
  education: [
    {
      institution: "Stanford University",
      area: "Computer Science",
      studyType: "Master of Science",
      startDate: "2013-09",
      endDate: "2015-05",
      gpa: "3.8/4.0"
    },
    {
      institution: "Massachusetts Institute of Technology",
      area: "Software Engineering",
      studyType: "Bachelor of Science",
      startDate: "2009-09",
      endDate: "2013-05",
      gpa: "3.7/4.0"
    }
  ],
  achievements: [
    {
      title: "Tech Innovator Award",
      date: "2022-11",
      awarder: "Silicon Valley Technology Council",
      summary: "Recognized for contributions to open-source development"
    },
    {
      title: "Best Web Application",
      date: "2020-03",
      awarder: "World Dev Summit",
      summary: "First place for innovative use of WebGL in data visualization"
    },
    {
      title: "Published Research Paper",
      date: "2019-06",
      awarder: "International Journal of Computer Science",
      summary: "Co-authored research on efficient state management in complex UIs"
    }
  ],
  interests: [
    {
      name: "3D Graphics",
      keywords: ["Three.js", "WebGL", "Blender"]
    },
    {
      name: "Machine Learning",
      keywords: ["TensorFlow", "Computer Vision", "Neural Networks"]
    },
    {
      name: "Music Production",
      keywords: ["Synthesis", "Digital Audio Workstations", "Sound Design"]
    }
  ],
  languages: [
    {
      language: "English",
      fluency: "Native"
    },
    {
      language: "Spanish",
      fluency: "Professional"
    },
    {
      language: "Mandarin",
      fluency: "Intermediate"
    }
  ]
};

export default profileData;
