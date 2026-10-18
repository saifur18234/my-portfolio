import projectDevstack from "../assets/projects/project-devstack.png";
import projectDevconf from "../assets/projects/project-b14-a01.png";
import projectPortfolioV1 from "../assets/projects/project-portfolio-v1.png";

const projects = [
  {
    id: 1,
    title: "DevStack — Development Stack Builder",
    image: projectDevstack,
    category: "React & TypeScript Web App",
    featured: true,
    technologies: [
      "React 19",
      "TypeScript",
      "Tailwind CSS",
      "Vite",
      "React Icons",
      "React Toastify"
    ],
    description:
      "A modern, responsive development stack builder application. Allows developers to explore various technologies across categories (Frontend, Backend, Database, and Tools) and dynamically compose a personalized tech stack with interactive selection, instant feedback, and educational React Q&A.",
    live: "https://a05-dev-stack-theta.vercel.app/",
    github: "https://github.com/saifur18234/B-14-A05-DevStack",
    challenges: [
      "Building a dynamic stack selection mechanism with persistent state and real-time reactive feedback",
      "Strict typing across technology categories and interactive action dispatchers using TypeScript",
      "Designing a clean, high-contrast dark/light responsive interface with Tailwind CSS",
      "Integrating an educational React Q&A accordion section alongside active stack management"
    ],
    future: [
      "Exporting personalized stack configuration as downloadable README/JSON files",
      "Category search and tag-based filtering for extensive technology catalogs",
      "Community sharing of pre-configured tech stack templates"
    ],
  },
  {
    id: 2,
    title: "DevConf 2026 — Developer Conference",
    image: projectDevconf,
    category: "Responsive Web Landing Page",
    featured: true,
    technologies: [
      "HTML5",
      "CSS3",
      "Font Awesome",
      "Responsive Layout",
      "Modern Web Design"
    ],
    description:
      "A sleek, responsive developer conference landing page inspired by the DevConf 2026 design. Features a bold hero section ('Code. Connect. Create'), keynote speaker showcase, 3-day conference schedule timeline, and tiered pricing plans with highlighted featured tickets.",
    live: "https://saifur18234.github.io/B14-A01/",
    github: "https://github.com/saifur18234/B14-A01",
    challenges: [
      "Crafting an accessible, semantic HTML5 structure for intricate conference schedules and multi-card grids",
      "Implementing pure modern CSS layout techniques (Flexbox & CSS Grid) for seamless responsiveness across mobile, tablet, and desktop",
      "Balancing high visual impact with lightweight asset loading and zero heavy JavaScript runtime overhead"
    ],
    future: [
      "Dynamic track filtering for sessions (AI/ML, Cloud, Web, DevOps)",
      "Interactive ticket booking modal with real-time validation",
      "Calendar integration for keynotes and workshop bookmarks"
    ],
  },
  {
    id: 3,
    title: "Portfolio v1.0 — Vibe Coded Project",
    image: projectPortfolioV1,
    category: "Vibe Coded Personal Web App",
    featured: true,
    technologies: [
      "HTML5",
      "CSS3",
      "JavaScript (ES6)",
      "Font Awesome",
      "GitHub Pages"
    ],
    description:
      "The initial 'vibe coded' v1.0 portfolio that sparked Saifur's web development journey! Hand-coded with raw HTML5, CSS3, and vanilla JavaScript, featuring an authentic personal introduction, education timeline, skill cards, interactive projects (Calculator, Student Management System), and contact form.",
    live: "https://saifur18234.github.io/portfolio.v.1.0/#home",
    github: "https://github.com/saifur18234/portfolio.v.1.0",
    challenges: [
      "Building a complete, multi-section personal portfolio website using vanilla web standards without external frontend frameworks",
      "Creating custom responsive navigation with sticky header and mobile dropdown drawer using pure JavaScript DOM methods",
      "Configuring automated static website deployment and repository hosting through GitHub Pages"
    ],
    future: [
      "Preserved as a fun, creative retrospective milestone highlighting developer progress and foundational mastery",
      "Adding interactive retrospective commentary on code evolution from v1.0 to modern React 19 architecture"
    ],
  },
];

export default projects;
