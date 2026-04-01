import { Java, mongoDB, Mysql, Nodejs, Python } from "../assets/assets";

export const TECH_DATA = [
  // ================= BACKEND =================
  {
    id: "nodejs",
    name: "Node.js",
    category: "BACKEND",
    logo: Nodejs,
    description: "A JavaScript runtime built on Chrome's V8 engine."
  },
  {
    id: "php",
    name: "PHP",
    category: "BACKEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/php/php-original.svg",
    description: "A popular general-purpose scripting language suited for web development."
  },
  {
    id: "java",
    name: "Java",
    category: "BACKEND",
    logo: Java,
    description: "A high-level, class-based, object-oriented programming language."
  },
  {
    id: "dotnet",
    name: ".NET Core",
    category: "BACKEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dotnetcore/dotnetcore-original.svg",
    description: "A free, cross-platform, open-source developer platform."
  },
  {
    id: "python",
    name: "Python",
    category: "BACKEND",
    logo: Python,
    description: "Interpreted, high-level, general-purpose programming language."
  },
  {
    id: "rails",
    name: "Rails",
    category: "BACKEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/rails/rails-plain-wordmark.svg",
    description: "A server-side web application framework written in Ruby."
  },
  {
    id: "go",
    name: "Go",
    category: "BACKEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/go/go-original-wordmark.svg",
    description: "Statically typed, compiled programming language designed at Google."
  },

  // ================= FRONTEND =================
  {
    id: "react",
    name: "React",
    category: "FRONTEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
    description: "A JavaScript library for building user interfaces."
  },
  {
    id: "vue",
    name: "Vue.js",
    category: "FRONTEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/vuejs/vuejs-original.svg",
    description: "The Progressive JavaScript Framework."
  },
  {
    id: "angular",
    name: "Angular",
    category: "FRONTEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/angularjs/angularjs-original.svg",
    description: "A platform for building mobile and desktop web applications."
  },
  {
    id: "typescript",
    name: "TypeScript",
    category: "FRONTEND",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/typescript/typescript-original.svg",
    description: "A strongly typed programming language that builds on JavaScript."
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    category: "FRONTEND",
    logo: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
    description: "A utility-first CSS framework for rapid UI development."
  },

  // ================= DATABASES =================
  {
    id: "mysql",
    name: "MySQL",
    category: "DATABASES",
    logo: Mysql,
    description: "The world's most popular open-source database."
  },
  {
    id: "mongodb",
    name: "MongoDB",
    category: "DATABASES",
    logo: mongoDB,
    description: "A source-available cross-platform document-oriented database."
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    category: "DATABASES",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
    description: "The world's most advanced open source relational database."
  },
  {
    id: "redis",
    name: "Redis",
    category: "DATABASES",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/redis/redis-original.svg",
    description: "In-memory data structure store, used as a database, cache, and message broker."
  },

  // ================= CMS =================
  {
    id: "wordpress",
    name: "WordPress",
    category: "CMS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/wordpress/wordpress-plain.svg",
    description: "The most popular CMS on the web."
  },
  {
    id: "strapi",
    name: "Strapi",
    category: "CMS",
    logo: "https://cdn.worldvectorlogo.com/logos/strapi-2.svg",
    description: "The leading open-source Headless CMS."
  },

  // ================= CLOUD & TESTING =================
  {
    id: "selenium",
    name: "Selenium",
    category: "CLOUD_TESTING",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/selenium/selenium-original.svg",
    description: "Tools and libraries enabling web browser automation."
  },
  {
    id: "jest",
    name: "Jest",
    category: "CLOUD_TESTING",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jest/jest-plain.svg",
    description: "Delightful JavaScript testing framework."
  },

  // ================= DEVOPS =================
  {
    id: "docker",
    name: "Docker",
    category: "DEVOPS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg",
    description: "Empowering app development using containers."
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    category: "DEVOPS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/kubernetes/kubernetes-plain.svg",
    description: "Production-grade container orchestration."
  },
  {
    id: "jenkins",
    name: "Jenkins",
    category: "DEVOPS",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jenkins/jenkins-original.svg",
    description: "The leading open source automation server."
  }
];
