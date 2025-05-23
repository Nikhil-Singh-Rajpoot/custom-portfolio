// Single source of truth for the entire portfolio
export interface ProfileData {
  basics: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    summary: string;
    picture?: string;
    links: Array<{
      label: string;
      url: string;
      icon?: string;
    }>;
  };
  skills: Array<{
    name: string;
    level: number;
  }>;
  experience: Array<{
    role: string;
    company: string;
    location?: string;
    start: string;
    end: string;
    bullets: string[];
  }>;
  projects: Array<{
    name: string;
    description: string;
    technologies: string[];
    link?: string;
    image?: string;
  }>;
  education: Array<{
    institution: string;
    degree: string;
    field: string;
    start: string;
    end: string;
    location?: string;
    gpa?: string;
    achievements?: string[];
  }>;
  achievements: Array<{
    title: string;
    date: string;
    issuer?: string;
    description?: string;
  }>;
  extracurricular: Array<{
    organization: string;
    role: string;
    start: string;
    end: string;
    description: string;
  }>;
  contact: {
    email: string;
    phone: string;
    location: string;
    availability: string;
    message?: string;
  };
}

const profile: ProfileData = {
  basics: {
    name: "Jane Doe",
    title: "Software Development Engineer",
    email: "jane.doe@example.com",
    phone: "+91-98765-43210",
    location: "Bengaluru, India",
    summary: "Full-stack developer with 3+ years of experience in building scalable web applications. Passionate about creating efficient, maintainable code and delivering exceptional user experiences. Expertise in React, TypeScript, and cloud-native architectures.",
    picture: "/placeholder.svg",
    links: [
      { label: "LinkedIn", url: "#YOUR_LINKEDIN_URL" },
      { label: "GitHub", url: "#YOUR_GITHUB_URL" },
      { label: "Twitter", url: "#YOUR_TWITTER_URL" },
    ]
  },
  skills: [
    { name: "JavaScript / TypeScript", level: 90 },
    { name: "React", level: 85 },
    { name: "Node.js", level: 80 },
    { name: "HTML/CSS", level: 90 },
    { name: "AWS", level: 75 },
    { name: "Docker", level: 70 },
    { name: "GraphQL", level: 65 },
    { name: "SQL", level: 80 },
  ],
  experience: [
    {
      role: "SDE I",
      company: "ACME Tech",
      location: "Bengaluru, India",
      start: "Jun 2023",
      end: "Present",
      bullets: [
        "Led migration to micro-frontend architecture, cutting build times by 25%",
        "Optimized React bundle size by 30%, improving Core Web Vitals scores",
        "Implemented CI/CD pipelines that reduced deployment time from hours to minutes",
        "Mentored 3 junior developers, facilitating their professional growth"
      ]
    },
    {
      role: "Software Engineer Intern",
      company: "StartUp Inc",
      location: "Remote",
      start: "Jan 2023",
      end: "May 2023",
      bullets: [
        "Developed a real-time analytics dashboard using React and D3.js",
        "Refactored legacy code, improving test coverage from 65% to 85%",
        "Collaborated with UX designers to implement responsive UI components",
      ]
    },
    {
      role: "Web Developer",
      company: "Freelance",
      start: "Sep 2021",
      end: "Dec 2022",
      bullets: [
        "Built e-commerce solutions for 5+ small businesses using modern web technologies",
        "Implemented payment gateways and shopping cart functionalities",
        "Provided ongoing maintenance and support for client websites"
      ]
    }
  ],
  projects: [
    {
      name: "E-Commerce Platform",
      description: "A full-featured online shopping platform with real-time inventory management, payment processing, and admin dashboard.",
      technologies: ["React", "Node.js", "MongoDB", "Stripe API", "AWS"],
      link: "#ECOMMERCE_PROJECT_REPO_URL",
    },
    {
      name: "Health Monitoring App",
      description: "Mobile application that tracks health metrics, sends reminders, and generates reports for healthcare providers.",
      technologies: ["React Native", "Firebase", "Chart.js", "OAuth"],
      link: "#HEALTH_APP_REPO_URL",
    },
    {
      name: "Content Management System",
      description: "Custom CMS with role-based access control, content scheduling, and SEO optimization tools.",
      technologies: ["TypeScript", "Express.js", "PostgreSQL", "Redis"],
      link: "#CMS_PROJECT_REPO_URL",
    }
  ],
  education: [
    {
      institution: "Indian Institute of Technology",
      degree: "Bachelor of Technology",
      field: "Computer Science",
      start: "2019",
      end: "2023",
      location: "Mumbai, India",
      gpa: "3.8/4.0",
      achievements: [
        "Dean's List for academic excellence (all semesters)",
        "Best Final Year Project Award",
        "Merit scholarship recipient"
      ]
    },
    {
      institution: "Online Learning Platform",
      degree: "Professional Certification",
      field: "Cloud Architecture",
      start: "2022",
      end: "2022",
      achievements: [
        "Completed with distinction",
        "Capstone project featured in platform showcase"
      ]
    }
  ],
  achievements: [
    {
      title: "Hackathon Winner",
      date: "2022",
      issuer: "TechCon India",
      description: "First place in a 48-hour coding challenge, developing an accessibility solution for visually impaired users"
    },
    {
      title: "Open Source Contributor",
      date: "2021-Present",
      description: "Active contributor to React ecosystem libraries with 5+ merged pull requests"
    },
    {
      title: "Technical Article Publication",
      date: "2023",
      issuer: "Dev.to",
      description: "Published 'Optimizing React Performance' tutorial with 10,000+ views"
    }
  ],
  extracurricular: [
    {
      organization: "Code for Change",
      role: "Volunteer Developer",
      start: "2022",
      end: "Present",
      description: "Develop web applications for non-profit organizations to address social challenges"
    },
    {
      organization: "Women Who Code",
      role: "Community Mentor",
      start: "2021",
      end: "Present",
      description: "Mentored 10+ aspiring women developers, provided code reviews and career guidance"
    }
  ],
  contact: {
    email: "jane.doe@example.com",
    phone: "+91-98765-43210",
    location: "Bengaluru, India",
    availability: "Open to full-time opportunities",
    message: "Feel free to reach out for project collaborations, job opportunities, or just a friendly chat about technology!"
  }
};

export default profile;
