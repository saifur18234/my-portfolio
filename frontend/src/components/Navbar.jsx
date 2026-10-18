import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { HiMenuAlt3, HiX, HiDocumentText, HiSun, HiMoon } from "react-icons/hi";
import { useTheme } from "../context/ThemeContext";
import personalInfo from "../data/personalInfo";

const navLinks = [
  { name: "Home", id: "home" },
  { name: "About", id: "about" },
  { name: "Skills", id: "skills" },
  { name: "Projects", id: "projects" },
  { name: "Education", id: "education" },
  { name: "Milestones", id: "experience" },
  { name: "Contact", id: "contact" },
];

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [active, setActive] = useState("home");
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();
  const { theme, toggleTheme } = useTheme();

  const isHomePage = location.pathname === "/";

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);

      if (!isHomePage) return;

      const sections = navLinks.map((link) =>
        document.getElementById(link.id)
      );

      sections.forEach((section) => {
        if (!section) return;

        const top = section.offsetTop - 120;
        const height = section.offsetHeight;

        if (window.scrollY >= top && window.scrollY < top + height) {
          setActive(section.id);
        }
      });
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomePage]);

  const closeMenu = () => setMenuOpen(false);

  const handleLogoClick = (e) => {
    closeMenu();
    if (isHomePage) {
      e.preventDefault();
      window.scrollTo({ top: 0, behavior: "smooth" });
      setActive("home");
      if (window.location.hash) {
        window.history.pushState(null, "", window.location.pathname);
      }
    } else {
      window.scrollTo({ top: 0, behavior: "instant" });
    }
  };

  return (
    <header
      className={`fixed w-full top-0 left-0 z-50 transition-all duration-300 print:hidden ${
        scrolled || !isHomePage
          ? "bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-md border-b border-gray-100 dark:border-gray-800"
          : "bg-transparent"
      }`}
    >
      <nav className="max-w-7xl mx-auto flex items-center justify-between h-20 px-6">
        {/* Logo / Branding */}
        <Link
          to="/"
          onClick={handleLogoClick}
          aria-label="Go to homepage"
          className="text-2xl font-extrabold tracking-tight text-gray-900 dark:text-white group flex items-center gap-2 cursor-pointer"
        >
          <span className="w-9 h-9 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 flex items-center justify-center text-white font-mono text-lg shadow-md shadow-blue-500/25 group-hover:scale-105 transition-transform">
            S
          </span>
          <span className="bg-gradient-to-r from-gray-900 via-blue-900 to-blue-600 dark:from-white dark:via-blue-200 dark:to-blue-400 bg-clip-text text-transparent">
            {personalInfo.shortName || "Saifur"}
            <span className="text-blue-600 dark:text-blue-400">.dev</span>
          </span>
        </Link>

        {/* Desktop Navigation Links */}
        <ul className="hidden md:flex items-center gap-6 lg:gap-7">
          {navLinks.map((link) => {
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                {isHomePage ? (
                  <a
                    href={`#${link.id}`}
                    className={`relative py-1 font-medium text-sm transition-colors duration-200 ${
                      isLinkActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                    <span
                      className={`absolute left-0 -bottom-1 h-0.5 bg-blue-600 dark:bg-blue-400 transition-all duration-300 ${
                        isLinkActive ? "w-full" : "w-0 group-hover:w-full"
                      }`}
                    ></span>
                  </a>
                ) : (
                  <Link
                    to={`/#${link.id}`}
                    className="relative py-1 font-medium text-sm text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}
        </ul>

        {/* Desktop Right Actions (Theme Toggle + Resume Button) */}
        <div className="hidden md:flex items-center gap-3">
          {/* Theme Toggle Button */}
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            title={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2.5 rounded-xl text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 transition-colors cursor-pointer"
          >
            {theme === "dark" ? (
              <HiSun className="text-xl text-yellow-400 animate-spin-slow" />
            ) : (
              <HiMoon className="text-xl text-gray-700" />
            )}
          </button>

          {/* Resume Button */}
          <Link
            to="/resume"
            className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white px-5 py-2.5 rounded-full text-sm font-semibold shadow-md shadow-blue-500/20 hover:shadow-lg hover:shadow-blue-500/30 transition-all duration-300 transform hover:-translate-y-0.5 cursor-pointer"
          >
            <HiDocumentText className="text-lg" />
            Resume
          </Link>
        </div>

        {/* Mobile Controls (Theme Toggle + Hamburger Button) */}
        <div className="flex md:hidden items-center gap-2">
          <button
            onClick={toggleTheme}
            aria-label={theme === "dark" ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-lg text-gray-600 dark:text-gray-300 bg-gray-100 dark:bg-gray-800"
          >
            {theme === "dark" ? (
              <HiSun className="text-lg text-yellow-400" />
            ) : (
              <HiMoon className="text-lg text-gray-700" />
            )}
          </button>

          <button
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label="Toggle navigation menu"
            className="text-2xl text-gray-800 dark:text-gray-100 p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-gray-800 transition focus:outline-none"
          >
            {menuOpen ? <HiX /> : <HiMenuAlt3 />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Drawer */}
      <div
        className={`md:hidden bg-white/95 dark:bg-gray-900/95 backdrop-blur-lg border-b border-gray-200 dark:border-gray-800 shadow-xl overflow-hidden transition-all duration-300 ${
          menuOpen ? "max-h-[32rem] py-6 px-6" : "max-h-0 py-0 px-6"
        }`}
      >
        <ul className="flex flex-col gap-4">
          {navLinks.map((link) => {
            const isLinkActive = isHomePage && active === link.id;

            return (
              <li key={link.id}>
                {isHomePage ? (
                  <a
                    href={`#${link.id}`}
                    onClick={closeMenu}
                    className={`block py-1.5 text-base font-medium transition ${
                      isLinkActive
                        ? "text-blue-600 dark:text-blue-400 font-semibold"
                        : "text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400"
                    }`}
                  >
                    {link.name}
                  </a>
                ) : (
                  <Link
                    to={`/#${link.id}`}
                    onClick={closeMenu}
                    className="block py-1.5 text-base font-medium text-gray-700 dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 transition"
                  >
                    {link.name}
                  </Link>
                )}
              </li>
            );
          })}

          {/* Mobile Resume Link */}
          <li className="pt-3 border-t border-gray-100 dark:border-gray-800">
            <Link
              to="/resume"
              onClick={closeMenu}
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 text-white px-5 py-2.5 rounded-xl text-sm font-semibold shadow-md"
            >
              <HiDocumentText className="text-lg" />
              View Printable Resume
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
};

export default Navbar;