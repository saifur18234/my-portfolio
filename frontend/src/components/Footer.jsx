import { Link } from "react-router-dom";
import { FaGithub, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import { HiMail, HiArrowUp } from "react-icons/hi";
import personalInfo from "../data/personalInfo";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="bg-white dark:bg-gray-950 border-t border-gray-200/90 dark:border-gray-800 text-gray-600 dark:text-gray-400 print:hidden mt-auto transition-colors">
      <div className="max-w-7xl mx-auto px-6 py-12 md:py-16">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-10">
          {/* Brand & Summary */}
          <div className="md:col-span-2 space-y-3">
            <Link
              to="/"
              onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
              className="text-xl font-extrabold text-gray-900 dark:text-white flex items-center gap-2 cursor-pointer"
            >
              <span className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-sm shadow-xs">
                S
              </span>
              <span>
                {personalInfo.shortName || "Saifur"}
                <span className="text-blue-600 dark:text-blue-400">.dev</span>
              </span>
            </Link>
            <p className="text-sm text-gray-500 dark:text-gray-400 max-w-md leading-relaxed">
              {personalInfo.bio.tagline}
            </p>
            <div className="pt-1 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              <span className="text-xs text-gray-500 dark:text-gray-400 font-medium">
                {personalInfo.status}
              </span>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Navigation
            </h4>
            <ul className="space-y-2 text-sm">
              <li>
                <a href="/#home" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/#about" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  About Me
                </a>
              </li>
              <li>
                <a href="/#skills" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Skills &amp; Tech
                </a>
              </li>
              <li>
                <a href="/#projects" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Featured Projects
                </a>
              </li>
              <li>
                <a href="/#education" className="hover:text-blue-600 dark:hover:text-blue-400 transition">
                  Education
                </a>
              </li>
              <li>
                <Link to="/resume" className="text-blue-600 dark:text-blue-400 font-semibold hover:underline">
                  Online Resume &rarr;
                </Link>
              </li>
              <li>
                <a
                  href={personalInfo.resumePdf || "/MD_Saifur_Rahman_Resume.pdf"}
                  download="MD_Saifur_Rahman_Resume.pdf"
                  className="hover:text-blue-600 dark:hover:text-blue-400 transition"
                >
                  Download PDF Resume
                </a>
              </li>
            </ul>
          </div>

          {/* Connect & Socials */}
          <div className="space-y-3">
            <h4 className="text-sm font-bold text-gray-900 dark:text-white uppercase tracking-wider">
              Connect
            </h4>
            <p className="text-sm text-gray-500 dark:text-gray-400">
              Have a question or looking to recruit? Feel free to reach out anytime.
            </p>
            <div className="flex items-center gap-2.5 pt-1">
              <a
                href={personalInfo.linkedin}
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn Profile"
                title="LinkedIn Profile"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-[#0A66C2] dark:hover:text-[#388fed] hover:border-blue-400 transition"
              >
                <FaLinkedin className="text-lg" />
              </a>
              <a
                href={personalInfo.github}
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub Profile"
                title="GitHub Profile"
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition"
              >
                <FaGithub className="text-lg" />
              </a>
              <a
                href={`mailto:${personalInfo.email}`}
                aria-label="Direct Email"
                title={`Email: ${personalInfo.email}`}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:border-blue-400 transition"
              >
                <HiMail className="text-lg" />
              </a>
              <a
                href={personalInfo.whatsapp || "https://wa.me/8801408086610"}
                target="_blank"
                rel="noreferrer"
                aria-label="Chat on WhatsApp"
                title={`Chat on WhatsApp (${personalInfo.phone})`}
                className="w-10 h-10 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-700 dark:text-gray-200 hover:text-emerald-500 dark:hover:text-emerald-400 hover:border-emerald-500 transition"
              >
                <FaWhatsapp className="text-lg" />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Bar with Back to Top */}
        <div className="border-t border-gray-100 dark:border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-gray-500 dark:text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} {personalInfo.name}. All rights reserved.
          </p>

          <button
            onClick={scrollToTop}
            aria-label="Scroll back to top"
            className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-lg bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 transition cursor-pointer"
          >
            <span>Back to top</span>
            <HiArrowUp className="text-sm" />
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
