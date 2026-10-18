import { Link } from "react-router-dom";
import {
  HiDocumentText,
  HiArrowRight,
  HiSparkles,
  HiOutlineMail,
  HiOutlineDownload,
} from "react-icons/hi";
import { FaReact, FaJsSquare, FaGitAlt, FaLinkedin, FaGithub } from "react-icons/fa";
import { SiTailwindcss, SiVite, SiTypescript } from "react-icons/si";
import profileImg from "../assets/Profile.png";
import personalInfo from "../data/personalInfo";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative min-h-[90vh] flex items-center justify-center pt-28 pb-16 px-6 md:px-12 max-w-7xl mx-auto overflow-hidden"
    >
      {/* Background Decorative Ambient Glows */}
      <div className="absolute top-20 left-1/4 w-96 h-96 bg-blue-500/10 dark:bg-blue-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>
      <div className="absolute bottom-10 right-1/4 w-96 h-96 bg-indigo-500/10 dark:bg-indigo-600/15 rounded-full blur-3xl pointer-events-none -z-10"></div>

      <div className="w-full grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center">
        {/* Left Column: Introductions, Roles, and CTAs */}
        <div className="lg:col-span-7 text-left space-y-6">
          {/* Status Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/80 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs sm:text-sm font-semibold shadow-xs">
            <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse"></span>
            <span>{personalInfo.status}</span>
          </div>

          {/* Heading */}
          <div className="space-y-2">
            <p className="text-gray-600 dark:text-gray-400 font-medium text-lg">
              Hello, I am
            </p>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-black text-gray-900 dark:text-white tracking-tight leading-tight">
              {personalInfo.name}
            </h1>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-indigo-600 to-cyan-500 dark:from-blue-400 dark:via-indigo-300 dark:to-cyan-400">
              {personalInfo.role}
            </h2>
          </div>

          {/* Description */}
          <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300 max-w-2xl leading-relaxed">
            I craft clean, fast, and responsive modern web applications with{" "}
            <span className="text-gray-900 dark:text-white font-semibold">React.js</span>,{" "}
            <span className="text-gray-900 dark:text-white font-semibold">JavaScript (ES6+)</span>,{" "}
            <span className="text-gray-900 dark:text-white font-semibold">TypeScript</span>, and{" "}
            <span className="text-gray-900 dark:text-white font-semibold">Tailwind CSS</span>.
            Dedicated to writing maintainable code and bringing intuitive user experiences to life.
          </p>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-3 pt-2">
            {/* View Projects CTA */}
            <a
              href="#projects"
              className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-6 py-3.5 rounded-xl font-bold shadow-lg shadow-blue-500/25 hover:shadow-xl hover:shadow-blue-500/35 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer text-sm sm:text-base"
            >
              <span>View Projects</span>
              <HiArrowRight className="text-base" />
            </a>

            {/* Resume Page Button */}
            <Link
              to="/resume"
              className="inline-flex items-center justify-center gap-2 bg-white dark:bg-gray-800 text-gray-800 dark:text-gray-100 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base"
            >
              <HiDocumentText className="text-lg" />
              <span>Resume</span>
            </Link>

            {/* Direct PDF Download Button */}
            <a
              href={personalInfo.resumePdf || "/MD_Saifur_Rahman_Resume.pdf"}
              download="MD_Saifur_Rahman_Resume.pdf"
              title="Download Resume in PDF Format"
              className="inline-flex items-center justify-center gap-1.5 bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 hover:bg-blue-100 dark:hover:bg-blue-900/60 px-4 py-3.5 rounded-xl font-semibold shadow-xs hover:shadow-md transition-all duration-300 text-sm sm:text-base cursor-pointer"
            >
              <HiOutlineDownload className="text-lg" />
              <span>PDF</span>
            </a>

            {/* Contact Me CTA */}
            <a
              href="#contact"
              className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-3.5 transition"
            >
              <HiOutlineMail className="text-lg" />
              <span>Contact &rarr;</span>
            </a>

            {/* Direct Social Links */}
            <div className="flex items-center gap-2">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                title="LinkedIn Profile"
                aria-label="LinkedIn Profile"
                className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-[#0A66C2] dark:text-[#388fed] hover:border-blue-400 dark:hover:border-blue-500 transition shadow-xs"
              >
                <FaLinkedin className="text-xl" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                title="GitHub Profile"
                aria-label="GitHub Profile"
                className="w-11 h-11 rounded-xl bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition shadow-xs"
              >
                <FaGithub className="text-xl" />
              </a>
            </div>
          </div>

          {/* Core Tech Stack Badges */}
          <div className="pt-4 border-t border-gray-200/80 dark:border-gray-800">
            <p className="text-xs font-semibold uppercase tracking-wider text-gray-500 dark:text-gray-400 mb-3 flex items-center gap-1.5">
              <HiSparkles className="text-blue-600 dark:text-blue-400" /> Core Tech Stack
            </p>
            <div className="flex flex-wrap items-center gap-2.5 text-xs sm:text-sm">
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <FaReact className="text-cyan-500 text-base" /> React.js
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <FaJsSquare className="text-yellow-500 text-base" /> JavaScript (ES6+)
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <SiTypescript className="text-blue-500 text-base" /> TypeScript
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <SiTailwindcss className="text-teal-500 text-base" /> Tailwind CSS
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <SiVite className="text-purple-500 text-base" /> Vite
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100/90 dark:bg-gray-800/90 text-gray-800 dark:text-gray-200 font-medium border border-gray-200 dark:border-gray-700">
                <FaGitAlt className="text-orange-500 text-base" /> Git &amp; GitHub
              </span>
            </div>
          </div>
        </div>

        {/* Right Column: Real Portrait Photograph Card */}
        <div className="lg:col-span-5 flex justify-center items-center relative">
          {/* Ambient Portrait Glow */}
          <div className="absolute inset-0 max-w-sm mx-auto bg-gradient-to-tr from-blue-600/20 via-indigo-600/20 to-cyan-500/20 dark:from-blue-500/30 dark:to-cyan-400/30 rounded-3xl blur-2xl -z-10"></div>

          {/* Profile Card Frame */}
          <div className="relative w-full max-w-sm sm:max-w-md bg-white dark:bg-gray-900 rounded-3xl p-4 sm:p-5 border border-gray-200/90 dark:border-gray-800 shadow-2xl">
            {/* Image Container with Proper Aspect Ratio and Object-Fit */}
            <div className="relative w-full aspect-[4/5] rounded-2xl overflow-hidden bg-gradient-to-b from-blue-900/10 to-indigo-900/20 dark:from-gray-800 dark:to-gray-900 shadow-inner">
              <img
                src={profileImg}
                alt="Portrait of MD Saifur Rahman - Aspiring Frontend Developer"
                className="w-full h-full object-cover object-top select-none hover:scale-102 transition-transform duration-500"
                loading="eager"
              />
            </div>

            {/* Structured Caption Under Photo (Unblocked & Clean) */}
            <div className="mt-4 pt-3.5 border-t border-gray-100 dark:border-gray-800 flex items-center justify-between gap-3">
              <div>
                <p className="text-base font-bold text-gray-900 dark:text-white leading-tight">
                  {personalInfo.name}
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold mt-0.5">
                  {personalInfo.role}
                </p>
              </div>
              <div className="flex flex-col items-end gap-1.5 shrink-0">
                <span className="inline-flex items-center gap-1.5 text-xs font-semibold px-3 py-0.5 rounded-full bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200/80 dark:border-blue-800 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-blue-500"></span>
                  <span>{personalInfo.location}</span>
                </span>
                <span className="inline-flex items-center gap-1.5 text-xs font-bold px-3 py-0.5 rounded-full bg-emerald-50 dark:bg-emerald-950/70 text-emerald-700 dark:text-emerald-300 border border-emerald-200/80 dark:border-emerald-800 shadow-xs">
                  <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
                  <span>3 Verified Projects</span>
                </span>
              </div>
            </div>

            {/* Top-Right Floating Badge (Outside the card, free of text) */}
            <div className="absolute -top-3 -right-3 bg-white/95 dark:bg-gray-800/95 backdrop-blur-md border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-1.5 shadow-lg flex items-center gap-2 pointer-events-none">
              <span className="w-2.5 h-2.5 rounded-full bg-emerald-500"></span>
              <p className="text-xs font-bold text-gray-900 dark:text-gray-100">100% Responsive</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;