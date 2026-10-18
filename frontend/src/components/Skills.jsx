import { useState } from "react";
import {
  FaReact,
  FaJsSquare,
  FaHtml5,
  FaCss3Alt,
  FaGitAlt,
  FaNpm,
  FaChrome,
} from "react-icons/fa";
import {
  SiTailwindcss,
  SiVite,
  SiTypescript,
  SiVercel,
  SiGithub,
} from "react-icons/si";
import { HiOutlineCode, HiOutlineTerminal, HiOutlineSparkles } from "react-icons/hi";

const categories = [
  { id: "all", name: "All Skills" },
  { id: "frontend", name: "Frontend", icon: HiOutlineCode },
  { id: "tools", name: "Tools & Workflow", icon: HiOutlineTerminal },
];

const skillsData = [
  // Frontend
  {
    name: "React.js",
    category: "frontend",
    icon: FaReact,
    color: "text-cyan-500",
    bg: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-100 dark:border-cyan-900",
    level: "Proficient",
    description: "Hooks, Components, Router, State Management, JSX",
  },
  {
    name: "JavaScript (ES6+)",
    category: "frontend",
    icon: FaJsSquare,
    color: "text-yellow-500",
    bg: "bg-yellow-50 dark:bg-yellow-950/40 border-yellow-100 dark:border-yellow-900",
    level: "Proficient",
    description: "Async/Await, DOM manipulation, Array methods, ES6 Modules",
  },
  {
    name: "TypeScript",
    category: "frontend",
    icon: SiTypescript,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900",
    level: "Working Knowledge",
    description: "Type annotations, Interfaces, Type inference, React component typing",
  },
  {
    name: "Tailwind CSS",
    category: "frontend",
    icon: SiTailwindcss,
    color: "text-teal-500",
    bg: "bg-teal-50 dark:bg-teal-950/40 border-teal-100 dark:border-teal-900",
    level: "Proficient",
    description: "Utility classes, Flex/Grid layouts, Dark mode, Custom themes",
  },
  {
    name: "HTML5 & Semantic Markup",
    category: "frontend",
    icon: FaHtml5,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900",
    level: "Advanced",
    description: "Semantic elements, SEO optimization, Forms & Accessibility standards",
  },
  {
    name: "CSS3 & Modern Layouts",
    category: "frontend",
    icon: FaCss3Alt,
    color: "text-blue-500",
    bg: "bg-blue-50 dark:bg-blue-950/40 border-blue-100 dark:border-blue-900",
    level: "Advanced",
    description: "Flexbox, CSS Grid, Transitions, Keyframe Animations, Responsive design",
  },

  // Tools & Workflow
  {
    name: "Vite",
    category: "tools",
    icon: SiVite,
    color: "text-purple-500",
    bg: "bg-purple-50 dark:bg-purple-950/40 border-purple-100 dark:border-purple-900",
    level: "Proficient",
    description: "Fast HMR, Build optimization, Bundling, Config plugin setup",
  },
  {
    name: "Git & Version Control",
    category: "tools",
    icon: FaGitAlt,
    color: "text-orange-500",
    bg: "bg-orange-50 dark:bg-orange-950/40 border-orange-100 dark:border-orange-900",
    level: "Proficient",
    description: "Branching, Commit discipline, Pull requests, Merge conflict handling",
  },
  {
    name: "GitHub",
    category: "tools",
    icon: SiGithub,
    color: "text-gray-800 dark:text-gray-200",
    bg: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    level: "Proficient",
    description: "Remote repositories, Open source collaboration, GitHub Pages deployments",
  },
  {
    name: "npm Package Manager",
    category: "tools",
    icon: FaNpm,
    color: "text-red-500",
    bg: "bg-red-50 dark:bg-red-950/40 border-red-100 dark:border-red-900",
    level: "Proficient",
    description: "Dependency management, package.json scripts, lockfiles",
  },
  {
    name: "Chrome DevTools",
    category: "tools",
    icon: FaChrome,
    color: "text-green-500",
    bg: "bg-green-50 dark:bg-green-950/40 border-green-100 dark:border-green-900",
    level: "Proficient",
    description: "DOM inspection, Network request tracking, Console debugging, Mobile simulation",
  },
  {
    name: "Vercel Deployment",
    category: "tools",
    icon: SiVercel,
    color: "text-gray-900 dark:text-white",
    bg: "bg-gray-100 dark:bg-gray-800 border-gray-200 dark:border-gray-700",
    level: "Comfortable",
    description: "Continuous deployment from Git branches, Environment configuration",
  },
];

const Skills = () => {
  const [activeTab, setActiveTab] = useState("all");

  const filteredSkills =
    activeTab === "all"
      ? skillsData
      : skillsData.filter((skill) => skill.category === activeTab);

  return (
    <section id="skills" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Technical Expertise</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Skills &amp;{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Technologies
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Technologies and developer workflows I actively use to create responsive, accessible, and maintainable web applications.
        </p>

        {/* Filter Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-6">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = activeTab === cat.id;

            return (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                className={`inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white shadow-md shadow-blue-500/25"
                    : "bg-white dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700 hover:border-blue-400 dark:hover:border-blue-500 hover:text-blue-600 dark:hover:text-blue-400"
                }`}
              >
                {Icon && <Icon className="text-base" />}
                <span>{cat.name}</span>
              </button>
            );
          })}
        </div>
      </div>

      {/* Skills Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredSkills.map((skill) => {
          const Icon = skill.icon;

          return (
            <div
              key={skill.name}
              className="group p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300 flex flex-col justify-between"
            >
              <div>
                <div className="flex items-center justify-between mb-4">
                  <div
                    className={`w-12 h-12 rounded-xl flex items-center justify-center text-2xl border ${skill.bg}`}
                  >
                    <Icon className={skill.color} />
                  </div>
                  <span className="text-xs font-semibold px-2.5 py-1 rounded-full bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 border border-gray-200 dark:border-gray-700">
                    {skill.level}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {skill.name}
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-2 leading-relaxed">
                  {skill.description}
                </p>
              </div>

              <div className="mt-5 pt-4 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between text-xs text-gray-400 dark:text-gray-500">
                <span className="capitalize">{skill.category}</span>
                <span className="text-blue-600 dark:text-blue-400 font-medium group-hover:translate-x-0.5 transition-transform">
                  Verified In Projects &rarr;
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default Skills;
