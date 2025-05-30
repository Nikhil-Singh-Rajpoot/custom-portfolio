import { percent } from "framer-motion";

// Single source of truth for the entire portfolio
export interface ProfileData {
  basics: {
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    aboutSummary?: string;
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
    percent?: string;
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
    name: "Nikhil Kumar Singh",
    title: "Software Development Engineer",
    email: "nikhilkumarsingh2000@gmail.com",
    phone: "+91-7272090004",
    location: "Noida, India",
    aboutSummary: "I’m Nikhil, a Post Graduate in Computer Applications with a strong academic background in computer science and a deep passion for Full-Stack Web Development. Throughout my studies, I have consistently nurtured my interest in designing and developing dynamic, user-centric, and scalable web applications.I have hands-on experience working with front-end technologies like HTML, CSS, JavaScript, and React, and back-end tools such as Java, JDBC, Spring Boot, and Hibernate, along with MySQL for database management. I understand how different components of a full-stack application come together to create seamless digital experiences.My passion for coding goes beyond the classroom—I'm constantly learning new frameworks, practicing through personal projects, and keeping up with the latest trends in web development. I enjoy problem-solving, writing clean and efficient code, and turning ideas into reality through technology.I’m a self-driven, curious learner with a strong belief in continuous growth. My goal is to apply my skills in a real-world environment, contribute to impactful projects, and grow as a developer within a collaborative team.",
    summary: "Aspiring Full-Stack Developer with a solid foundation in both front-end and back-end development. Proficient in front-end technologies like HTML, CSS, JavaScript, and React, and skilled in back-end tools including Java, JDBC, Spring Boot, Hibernate, and RESTful APIs. Experienced in working with MySQL databases and building CRUD-based applications. Passionate about developing user-friendly, scalable, and efficient web applications with clean, maintainable code. Continuously learning through self-driven projects and hands-on practice, with a strong interest in problem-solving and keeping up with emerging technologies. Eager to contribute to real-world projects and grow as a developer in a collaborative team environment.",
    picture: "/photo.png",
    links: [
      { label: "LinkedIn", url: "https://www.linkedin.com/in/nikhilsingh9312/" },
      { label: "GitHub", url: "https://github.com/Nikhil-Singh-Rajpoot" },
      { label: "Instagram", url: "https://www.instagram.com/nikkhil__rajpoot/" },
    ]
  },
  skills: [
    { name: "Java", level: 90 },
    { name: "JDBC", level: 80 },
    { name: "SpringBoot", level: 85 },
    { name: "HTML/CSS", level: 90 },
    { name: "JavaScript", level: 95 },
    { name: "Hibernate", level: 80 },
    { name: "Spring Security", level: 75 },
    { name: "MySQL", level: 80 },
    { name: "ORM Tool", level: 85 },
     { name: "Spring MVC", level: 80 },
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
      name: "TheCodeChamp, Learning Platform",
      description: "TheCodeChamp is a learning platform focused on empowering students and aspiring developers through quality technical training. We provide hands-on training programs, study notes, quizzes, and previous year question papers for Computer Science, BCA, MCA, and IT students—bridging the gap between academics and industry needs.(Host only frontend part, backend is hosted on Github)",
      technologies: ["Java", "HTML/CSS", "Spring Boot", "Rest APIs", "Spring JPA", "OAuth", "GoDaddy","Spring Security","JWT","Autometed Email","javaScript"],
      link: "http://www.thecodechamp.in/",
    },
     {
      name: "Photography Website",
      description: "The Photography Website is a fully responsive static website designed using HTML, CSS, JavaScript, and Bootstrap. It serves as a professional online portfolio for photographers to showcase their work, promote their services, and attract potential clients with an eye-catching design and smooth navigation.",
      technologies: ["HTML/CSS","JavaScript", "Bootstrap"],
      link: "https://devloperdevansh.github.io/PhotographyWeb/?fbclid=PAZXh0bgNhZW0CMTEAAacH8iKpUHhs_eO5OQBVpvYgJf5OvWVVt312AujtUIIW23THoYAd_Dr7hNFrWw_aem_HfGW9UjOBnH8-TTzwZEw2w",
    },
    {
      name: "Sweet Shop, Porfolio (Client)",
      description: "The SweetShop Web Project is a beautifully designed static website developed using HTML, CSS, JavaScript, and Bootstrap. It showcases an elegant and user-friendly interface that represents a modern sweet shop, aimed at offering customers a seamless browsing experience through various sweet categories and product details.",
      technologies: ["HTML/CSS", "JavaScript", "Excel"],
      link: "https://nikhil-singh-rajpoot.github.io/SweetShop/",
    },
    {
      name: "Searching App",
      description: "The Searching App is a dynamic web application built using Spring Boot (Java) for the backend and JSP (JavaServer Pages) for the frontend. The main objective of this project is to allow users to search for data through a web interface and display real-time search results on the client side based on the user's query.",
      technologies: ["Java", "Spring Boot", "JSP","JavaScript","Rest APIs"],
      link: "https://github.com/Nikhil-Singh-Rajpoot/SearchApp.github.io",
    },
    {
      name: "Truck MGT System",
      description: "The Truck Management System, also known as Truck MGT, is a console-based application developed using Core Java. The project is designed to manage and organize the data of trucks, including their details, availability, assignments, and drivers. This project applies the fundamental concepts of Object-Oriented Programming (OOPs), including Encapsulation, Abstraction, Inheritance, and Polymorphism.",
      technologies: ["Java", "JDBC", "OOPs"],
      link: "https://github.com/Nikhil-Singh-Rajpoot/TruckMGT",
    },
    {
      name: "E-commerce website",
      description: "The E-Commerce Project is a fully functional web-based shopping platform developed using Java Servlets, JSP (JavaServer Pages)/Thymeleaf, and JDBC (Java Database Connectivity) for backend operations. The project provides complete functionality for both customers and administrators, simulating a real-world online shopping experience.",
      technologies: ["Java", "Servlet", "JSP/Thymeleaf","JavaScript","Rest APIs"],
      link: "https://github.com/Nikhil-Singh-Rajpoot/E-commerceProject",
    },
  ],
  education: [
    {
      institution: "Veer Bahadur Singh Purvanchal University Jaunpur U.P",
      degree: "Master's",
      field: "Computer Applications (M.C.A)",
      start: "2023",
      end: "2025",
      location: "Jaunpur, Uttar Pradesh",
      gpa: "8.6/10",
      achievements: [
        "Dean's List for academic excellence (all semesters)",
        "Best Final Year Project Award",
        // "Merit scholarship recipient"
      ]
    },
    {
      institution: "Veer Bahadur Singh Purvanchal University Jaunpur U.P",
      degree: "Bachelor",
      field: "Computer Applications (B.C.A)",
      start: "2020",
      end: "2023",
      location: "Jaunpur, Uttar Pradesh",
      gpa: "Percent 81%",
      achievements: [
        "Dean's List for academic excellence (all semesters)",
        "Best Final Year Project Award",
      ]
    }
  ],
  achievements: [
    {
      title: "Nation Engineering Day (Quiz)",
      date: "2022",
      issuer: "University India",
      description: "First place in a 4-hour Quiz challenge,"
    },
    {
      title: "Codding Competition",
      issuer: "University India",
      date: "2024",
      description: "First place in a 4-hour coding challenge, developing an accessibility solution for visually impaired users"
    },
    {
      title: "Teaching on College",
      date: "2023",
      issuer: "University India",
      description: "Win reward from the university in the Teaching skill,"
    }
  ],
  extracurricular: [
    {
      organization: "Code for Change",
      role: "Volunteer Developer",
      start: "2023",
      end: "2023",
      description: "Develop web applications for non-profit organizations to address social challenges"
    },
    {
      organization: "Dance Competition in College",
      role: "Group Leader",
      start: "2022",
      end: "2022",
      description: "Monitor our group or prepare our dance and got price."
    }
  ],
  contact: {
    email: "nikhilkumarsingh2000@gmail.com",
    phone: "+91-7272090004",
    location: "Noida, India",
    availability: "Open to full-time opportunities",
    message: "Feel free to reach out for project collaborations, job opportunities, or just a friendly chat about technology!"
  }
};

export default profile;
