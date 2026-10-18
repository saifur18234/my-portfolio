import {
  HiPrinter,
  HiDownload,
  HiMail,
  HiPhone,
  HiLocationMarker,
  HiExternalLink,
} from "react-icons/hi";
import { FaGithub, FaGlobe, FaLinkedin } from "react-icons/fa";
import personalInfo from "../data/personalInfo";
import projects from "../data/projects";

const Resume = () => {
  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="min-h-screen bg-gray-100 dark:bg-gray-950 pt-28 pb-16 px-4 sm:px-6 lg:px-8 text-gray-800 dark:text-gray-200 font-sans print:bg-white print:text-black print:pt-0 print:pb-0 print:px-0 transition-colors">
      {/* Top Action Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mb-6 flex flex-wrap items-center justify-end gap-3 print:hidden">
        <a
          href={personalInfo.resumePdf || "/MD_Saifur_Rahman_Resume.pdf"}
          download="MD_Saifur_Rahman_Resume.pdf"
          className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition cursor-pointer"
        >
          <HiDownload className="text-base" /> Download Resume (PDF)
        </a>

        <button
          onClick={handlePrint}
          className="inline-flex items-center gap-2 text-sm font-semibold text-gray-700 dark:text-gray-200 bg-white dark:bg-gray-900 hover:bg-gray-50 dark:hover:bg-gray-800 border border-gray-300 dark:border-gray-800 px-4 py-2.5 rounded-xl shadow-xs hover:shadow-md transition cursor-pointer"
        >
          <HiPrinter className="text-base" /> Print
        </button>
      </div>

      {/* Main Resume Sheet */}
      <div className="max-w-4xl mx-auto bg-white dark:bg-gray-900 rounded-2xl shadow-xl border border-gray-200/80 dark:border-gray-800 p-8 sm:p-12 print:shadow-none print:border-none print:p-0 print:rounded-none print:bg-white print:text-black">

        {/* Header Section */}
        <header className="border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-6 mb-6">
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
            <div>
              <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 dark:text-white print:text-black tracking-tight">
                {personalInfo.name}
              </h1>
              <p className="text-lg font-semibold text-blue-600 dark:text-blue-400 print:text-blue-800 mt-1">
                {personalInfo.role} | Mathematics Undergraduate
              </p>
              <p className="text-sm text-gray-500 dark:text-gray-400 print:text-gray-600 mt-1">
                {personalInfo.bio.tagline}
              </p>
            </div>

            {/* Availability Badge */}
            <div className="flex flex-col items-start md:items-end gap-1 text-sm text-gray-600 dark:text-gray-400 print:text-gray-700">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-emerald-50 dark:bg-emerald-950/60 print:bg-gray-100 text-emerald-700 dark:text-emerald-300 print:text-black border border-emerald-200 dark:border-emerald-800 print:border-gray-300">
                <span className="w-2 h-2 rounded-full bg-emerald-500 print:hidden animate-pulse"></span>
                {personalInfo.status}
              </span>
              <span className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-600 mt-1">{personalInfo.location}</span>
            </div>
          </div>

          {/* Contact Details Bar */}
          <div className="mt-5 flex flex-wrap items-center gap-x-6 gap-y-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 print:text-gray-700 pt-4 border-t border-gray-100 dark:border-gray-800 print:border-gray-200">
            <a
              href={`mailto:${personalInfo.email}`}
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <HiMail className="text-blue-600 dark:text-blue-400 text-base shrink-0" />
              <span>{personalInfo.email}</span>
            </a>
            <a
              href={`tel:${personalInfo.phoneRaw}`}
              className="flex items-center gap-1.5 hover:text-emerald-600 transition"
            >
              <HiPhone className="text-emerald-600 dark:text-emerald-400 text-base shrink-0" />
              <span>{personalInfo.phone}</span>
            </a>
            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-[#0A66C2] transition"
            >
              <FaLinkedin className="text-[#0A66C2] dark:text-[#388fed] print:text-black text-base shrink-0" />
              <span>linkedin.com/in/saifur162</span>
            </a>
            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGithub className="text-gray-900 dark:text-gray-100 print:text-black text-base shrink-0" />
              <span>github.com/saifur18234</span>
            </a>
            <div className="flex items-center gap-1.5">
              <HiLocationMarker className="text-blue-600 dark:text-blue-400 text-base shrink-0" />
              <span>{personalInfo.location}</span>
            </div>
            <a
              href="/"
              className="flex items-center gap-1.5 hover:text-blue-600 transition"
            >
              <FaGlobe className="text-blue-600 dark:text-blue-400 text-base shrink-0" />
              <span>Portfolio Website</span>
            </a>
          </div>
        </header>

        {/* Section: Professional Summary */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-2.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Professional Summary
          </h2>
          <p className="text-sm text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
            Passionate and self-directed <strong>Frontend &amp; React Developer</strong> currently studying Mathematics at National University, Bangladesh (2025 – Present). Demonstrated solid academic excellence with a GPA of 5.00 in SSC and 4.67 in HSC. Proficient in <strong>React.js</strong>, <strong>TypeScript</strong>, <strong>JavaScript (ES6+)</strong>, and <strong>Tailwind CSS</strong>, with experience architecting interactive web applications like DevStack and DevConf 2026. Adept at translating analytical problem-solving and mathematical logic into clean, maintainable, responsive code and seeking an entry-level junior frontend position.
          </p>
        </section>

        {/* Section: Technical Skills */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Technical Skills
          </h2>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-3 text-sm">
            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-transparent rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Core Frontend:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-xs sm:text-sm">
                React.js, TypeScript, JavaScript (ES6+), HTML5, CSS3, Tailwind CSS, React Router, Component Architecture.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-transparent rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Developer Tools &amp; Workflow:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-xs sm:text-sm">
                Git, GitHub, Vite, npm, Chrome DevTools, Vercel, GitHub Pages.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-transparent rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Engineering Practices:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-xs sm:text-sm">
                Component-Driven Design, Responsive Layouts, Semantic Markup, Clean State Handling, Fast Load Times.
              </p>
            </div>

            <div className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-transparent rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-300">
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Analytical Strengths:
              </span>
              <p className="text-gray-700 dark:text-gray-300 print:text-black leading-relaxed text-xs sm:text-sm">
                Mathematical Logic, Algorithmic Thinking, Fast Learning, Rigorous Attention to Detail.
              </p>
            </div>
          </div>
        </section>

        {/* Section: Featured Projects */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Featured Projects
          </h2>

          <div className="space-y-4">
            {projects.map((proj) => (
              <div key={proj.id} className="border-l-2 border-blue-600 pl-4 py-0.5">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1">
                  <h3 className="text-base font-bold text-gray-900 dark:text-white print:text-black flex items-center gap-2">
                    {proj.title}
                    <span className="text-xs font-normal text-blue-600 dark:text-blue-400 print:text-gray-700 font-mono bg-blue-50 dark:bg-blue-950/60 print:bg-gray-100 px-2 py-0.5 rounded">
                      2026
                    </span>
                  </h3>
                  <div className="flex items-center gap-3 text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-blue-800">
                    {proj.live && (
                      <a href={proj.live} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                        Live Demo <HiExternalLink />
                      </a>
                    )}
                    {proj.github && (
                      <>
                        <span>•</span>
                        <a href={proj.github} target="_blank" rel="noreferrer" className="hover:underline flex items-center gap-1">
                          GitHub <HiExternalLink />
                        </a>
                      </>
                    )}
                  </div>
                </div>
                <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-600 font-medium mt-0.5">
                  Tech Stack: {proj.technologies.join(", ")}
                </p>
                <p className="mt-1.5 text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-black leading-relaxed">
                  {proj.description}
                </p>
                <ul className="mt-1.5 list-disc list-inside text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-black space-y-0.5">
                  {proj.challenges.map((c, i) => (
                    <li key={i}>{c}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Section: Education */}
        <section className="mb-6">
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-3.5 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Education
          </h2>

          <div className="space-y-4">
            {personalInfo.education.map((edu, idx) => (
              <div key={idx} className="border-b border-gray-100 dark:border-gray-800/60 print:border-gray-200 pb-3 last:border-0">
                <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-1 text-sm">
                  <div>
                    <h3 className="font-bold text-gray-900 dark:text-white print:text-black">
                      {edu.degree}
                    </h3>
                    <p className="text-gray-700 dark:text-gray-300 print:text-gray-800 font-medium text-xs sm:text-sm">
                      {edu.institution} — {edu.location}
                    </p>
                  </div>
                  <div className="text-left sm:text-right shrink-0">
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-gray-700 block">
                      {edu.period}
                    </span>
                    {edu.grade && (
                      <span className="text-xs font-bold text-emerald-600 dark:text-emerald-400 print:text-black">
                        {edu.grade}
                      </span>
                    )}
                  </div>
                </div>

                <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-600 mt-1">
                  {edu.description}
                </p>

                {/* Display Relevant Coursework for B.Sc. */}
                {idx === 0 && personalInfo.coursework && (
                  <p className="text-xs text-gray-600 dark:text-gray-400 print:text-gray-700 mt-1.5">
                    <strong className="font-semibold text-gray-800 dark:text-gray-200 print:text-black">Relevant Coursework:</strong>{" "}
                    {personalInfo.coursework.join(", ")}.
                  </p>
                )}
              </div>
            ))}
          </div>
        </section>

        {/* Section: Certifications & Training */}
        {personalInfo.certifications && personalInfo.certifications.length > 0 && (
          <section className="mb-6">
            <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-3 flex items-center gap-2">
              <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
              Certifications &amp; Training
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-sm">
              {personalInfo.certifications.map((cert, cIdx) => (
                <div key={cIdx} className="p-3 bg-gray-50/80 dark:bg-gray-800/50 print:bg-transparent rounded-lg border border-gray-100 dark:border-gray-800 print:border-gray-300">
                  <div className="flex items-center justify-between gap-2">
                    <h4 className="font-semibold text-gray-900 dark:text-white print:text-black text-xs sm:text-sm">
                      {cert.title}
                    </h4>
                    <span className="text-xs font-semibold text-blue-600 dark:text-blue-400 print:text-gray-700 shrink-0">
                      {cert.year}
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 dark:text-gray-400 print:text-gray-600 mt-0.5">{cert.issuer}</p>
                  <p className="text-xs text-gray-600 dark:text-gray-300 print:text-black mt-1 leading-relaxed">
                    {cert.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>
        )}

        {/* Section: Soft Skills & Languages */}
        <section>
          <h2 className="text-lg font-bold text-gray-900 dark:text-white print:text-black uppercase tracking-wider border-b border-gray-200 dark:border-gray-800 print:border-gray-300 pb-1 mb-3 flex items-center gap-2">
            <span className="w-2.5 h-2.5 bg-blue-600 rounded-sm"></span>
            Soft Skills &amp; Languages
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300 print:text-black">
            <div>
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Soft Skills:
              </span>
              <p className="leading-relaxed">
                {personalInfo.softSkills ? personalInfo.softSkills.join(", ") : "Problem Solving, Collaborative Teamwork, Fast Learner & Adaptability, Time Management, Attention to Detail."}
              </p>
            </div>
            <div>
              <span className="font-semibold text-gray-900 dark:text-white print:text-black block mb-1">
                Languages:
              </span>
              <p className="leading-relaxed">
                {personalInfo.languages
                  ? personalInfo.languages.map((l) => `${l.name} (${l.proficiency})`).join(", ")
                  : "Bengali (Native), English (Professional Working Proficiency)."}
              </p>
            </div>
          </div>
        </section>

      </div>

      {/* Bottom Download CTA Bar (Hidden during print) */}
      <div className="max-w-4xl mx-auto mt-8 flex flex-col sm:flex-row items-center justify-between gap-4 p-5 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/80 dark:border-gray-800 shadow-sm print:hidden">
        <div>
          <h3 className="text-base font-bold text-gray-900 dark:text-white">
            Need an offline PDF copy for your hiring team?
          </h3>
          <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">
            Download the official ATS-compliant PDF resume formatted for recruitment screening and print.
          </p>
        </div>
        <div className="flex items-center gap-3 shrink-0">
          <a
            href={personalInfo.resumePdf || "/MD_Saifur_Rahman_Resume.pdf"}
            download="MD_Saifur_Rahman_Resume.pdf"
            className="inline-flex items-center gap-2 text-sm font-bold text-white bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 px-5 py-2.5 rounded-xl shadow-md hover:shadow-lg transition cursor-pointer"
          >
            <HiDownload className="text-base" /> Download Resume PDF
          </a>
        </div>
      </div>
    </div>
  );
};

export default Resume;
