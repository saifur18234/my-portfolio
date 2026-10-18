import { Link } from "react-router-dom";
import {
  HiOutlineUser,
  HiOutlineSparkles,
  HiOutlineLocationMarker,
  HiOutlineBriefcase,
  HiOutlineCheckCircle,
  HiOutlineAcademicCap,
  HiOutlineChatAlt2,
  HiOutlineDownload,
  HiOutlineHeart,
} from "react-icons/hi";
import {
  FaLaptopCode,
  FaRocket,
  FaFutbol,
  FaChessKnight,
  FaBookOpen,
  FaCamera,
} from "react-icons/fa";
import profileImg from "../assets/Profile.png";
import personalInfo from "../data/personalInfo";

const AboutMe = () => {
  const highlights = [
    {
      title: "Clean & Component-Driven Code",
      desc: "Writing modular, reusable, and maintainable React code adhering to modern best practices.",
    },
    {
      title: "Analytical & Mathematical Logic",
      desc: "Applying structured mathematical reasoning to problem-solving, algorithm design, and UI state.",
    },
    {
      title: "Responsive & Pixel-Perfect",
      desc: "Creating fluid, accessible layouts with Tailwind CSS that adapt flawlessly across all screen sizes.",
    },
    {
      title: "Fast Learner & High Discipline",
      desc: "Demonstrated academic excellence (GPA 5.00 SSC, 4.67 HSC) and dedication to continuous self-improvement.",
    },
  ];

  return (
    <section id="about" className="py-24 px-6 md:px-12 max-w-7xl mx-auto bg-gray-50/50 dark:bg-gray-950/40">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineUser className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>About Me</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Who I <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">Am</span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          A glimpse into my background, academic foundation in Mathematics, and dedication to frontend engineering.
        </p>
      </div>

      {/* Top 2-Column Grid: Profile Card (Left) & Bio Narrative (Right) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-start">
        {/* Left Column: Visual Card & Quick Specs */}
        <div className="lg:col-span-5 space-y-6">
          <div className="relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-sm">
            {/* Ambient Accent Glow */}
            <div className="w-24 h-24 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-2xl absolute -top-4 -right-4 -z-10"></div>

            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-gray-100 dark:border-gray-800">
              <div className="w-16 h-16 rounded-2xl overflow-hidden border border-blue-200 dark:border-blue-800 shadow-md shrink-0">
                <img
                  src={profileImg}
                  alt={personalInfo.name}
                  className="w-full h-full object-cover object-top"
                />
              </div>
              <div>
                <h3 className="text-xl font-bold text-gray-900 dark:text-white">
                  {personalInfo.name}
                </h3>
                <p className="text-sm font-medium text-blue-600 dark:text-blue-400">
                  {personalInfo.role}
                </p>
                <div className="flex items-center gap-1.5 text-xs text-gray-500 dark:text-gray-400 mt-1">
                  <HiOutlineLocationMarker className="text-gray-400" />
                  <span>{personalInfo.location}</span>
                </div>
              </div>
            </div>

            {/* Quick Specs List */}
            <div className="space-y-3 text-sm text-gray-600 dark:text-gray-300">
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/80">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HiOutlineBriefcase className="text-blue-600 dark:text-blue-400" /> Status:
                </span>
                <span className="font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded text-xs">
                  Available for Hire
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/80">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HiOutlineAcademicCap className="text-blue-600 dark:text-blue-400" /> Education:
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm text-right">
                  B.Sc. in Mathematics
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/80">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <FaLaptopCode className="text-blue-600 dark:text-blue-400" /> Primary Focus:
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm text-right">
                  {personalInfo.primaryFocus || "React & Modern Frontend"}
                </span>
              </div>
              <div className="flex items-center justify-between py-1.5 border-b border-gray-50 dark:border-gray-800/80">
                <span className="flex items-center gap-2 text-gray-500 dark:text-gray-400">
                  <HiOutlineChatAlt2 className="text-blue-600 dark:text-blue-400" /> Communication:
                </span>
                <span className="font-semibold text-gray-800 dark:text-gray-200 text-xs sm:text-sm text-right">
                  English &amp; Bengali
                </span>
              </div>
            </div>

            {/* Micro Stats */}
            <div className="grid grid-cols-3 gap-3 pt-6 mt-6 border-t border-gray-100 dark:border-gray-800 text-center">
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl">
                <span className="block text-2xl font-black text-blue-600 dark:text-blue-400">3</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Live Projects</span>
              </div>
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl">
                <span className="block text-2xl font-black text-indigo-600 dark:text-indigo-400">500+</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Coding Hours</span>
              </div>
              <div className="p-2.5 bg-gray-50 dark:bg-gray-800/60 rounded-xl">
                <span className="block text-2xl font-black text-emerald-600 dark:text-emerald-400">100%</span>
                <span className="text-[11px] text-gray-500 dark:text-gray-400 font-medium">Commitment</span>
              </div>
            </div>
          </div>
        </div>

        {/* Right Column: Bio Narrative, Strengths & Actions */}
        <div className="lg:col-span-7 space-y-6">
          <div className="space-y-4 text-gray-600 dark:text-gray-300 leading-relaxed text-base sm:text-lg">
            <h3 className="text-2xl sm:text-3xl font-extrabold text-gray-900 dark:text-white tracking-tight leading-snug">
              Bridging analytical mathematics with intuitive, high-performance web engineering.
            </h3>
            
            {/* Programming Journey */}
            <p>
              <strong>My Programming Journey:</strong> Currently pursuing my B.Sc. in Mathematics at National University, Bangladesh, my coding adventure began by exploring how computational logic, discrete mathematics, and visual design converge. What started with tinkering with web fundamentals quickly grew into a deep dedication to mastering modern frontend ecosystems — specifically <strong>React.js</strong>, <strong>JavaScript (ES6+)</strong>, <strong>TypeScript</strong>, and <strong>Tailwind CSS</strong>.
            </p>

            {/* Type of Work I Enjoy */}
            <p>
              <strong>The Work I Enjoy:</strong> I thrive on transforming complex ideas into intuitive, component-driven user interfaces. I love building responsive web apps with fluid micro-interactions, structuring clean state management flows, and ensuring every pixel is accessible, mobile-first, and performant.
            </p>
          </div>

          {/* Core Strengths Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-1">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="p-4 rounded-xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs flex items-start gap-3"
              >
                <HiOutlineCheckCircle className="text-xl text-blue-600 dark:text-blue-400 shrink-0 mt-0.5" />
                <div>
                  <h4 className="text-sm font-bold text-gray-900 dark:text-white">{item.title}</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-normal">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-wrap items-center gap-3.5 pt-2">
            <Link
              to="/resume"
              className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 text-white px-5 py-3 rounded-xl font-semibold shadow-md shadow-blue-500/20 transition-all duration-300"
            >
              <HiOutlineSparkles className="text-lg" />
              <span>Inspect Full Resume</span>
            </Link>

            <a
              href={personalInfo.resumePdf || "/MD_Saifur_Rahman_Resume.pdf"}
              download="MD_Saifur_Rahman_Resume.pdf"
              className="inline-flex items-center gap-2 bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-200 border border-gray-300 dark:border-gray-700 hover:border-blue-500 dark:hover:border-blue-400 hover:text-blue-600 dark:hover:text-blue-400 px-5 py-3 rounded-xl font-semibold shadow-xs transition-all duration-300"
            >
              <HiOutlineDownload className="text-lg" />
              <span>Download PDF</span>
            </a>

            <a
              href="#contact"
              className="inline-flex items-center gap-1.5 text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 px-3 py-3 font-semibold text-sm transition-all duration-300"
            >
              <FaRocket className="text-sm" />
              <span>Let's Connect &rarr;</span>
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Row: Full-Width Hobbies & Interests Showcase (Requirement 5) */}
      <div className="mt-12 p-6 sm:p-8 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/80 dark:border-gray-800 shadow-xs space-y-5">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-100 dark:border-gray-800 pb-4">
          <div className="flex items-center gap-3">
            <span className="w-9 h-9 rounded-xl bg-rose-50 dark:bg-rose-950/60 border border-rose-100 dark:border-rose-900 flex items-center justify-center text-rose-500 text-xl shrink-0">
              <HiOutlineHeart />
            </span>
            <div>
              <h4 className="text-base sm:text-lg font-bold text-gray-900 dark:text-white">
                Outside of Programming &amp; Personal Interests
              </h4>
              <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400">
                How I stay active, refreshed, and creatively inspired beyond the code editor
              </p>
            </div>
          </div>
          <span className="text-xs font-semibold px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 text-blue-700 dark:text-blue-300 border border-blue-200/60 dark:border-blue-800 w-fit">
            Work-Life Harmony
          </span>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-1">
          {/* Card 1: Sports */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 hover:border-emerald-300 dark:hover:border-emerald-700 transition flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-lg shrink-0">
              <FaFutbol />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Outdoor Sports</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Cricket &amp; Football</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Staying physically active and building teamwork energy.</p>
            </div>
          </div>

          {/* Card 2: Strategy */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 hover:border-indigo-300 dark:hover:border-indigo-700 transition flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-indigo-50 dark:bg-indigo-950/70 border border-indigo-100 dark:border-indigo-900 flex items-center justify-center text-indigo-600 dark:text-indigo-400 text-lg shrink-0">
              <FaChessKnight />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Mental Strategy</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Chess &amp; Logic Puzzles</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Exercising forward-thinking and analytical logic.</p>
            </div>
          </div>

          {/* Card 3: Reading */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 hover:border-blue-300 dark:hover:border-blue-700 transition flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-lg shrink-0">
              <FaBookOpen />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Lifelong Learning</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Tech Blogs &amp; Math</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Exploring modern web developments and mathematics.</p>
            </div>
          </div>

          {/* Card 4: Recreation */}
          <div className="p-4 rounded-xl bg-gray-50 dark:bg-gray-800/60 border border-gray-100 dark:border-gray-800 hover:border-amber-300 dark:hover:border-amber-700 transition flex items-start gap-3.5">
            <div className="w-10 h-10 rounded-xl bg-amber-50 dark:bg-amber-950/70 border border-amber-100 dark:border-amber-900 flex items-center justify-center text-amber-600 dark:text-amber-400 text-lg shrink-0">
              <FaCamera />
            </div>
            <div>
              <p className="text-sm font-bold text-gray-900 dark:text-white">Nature &amp; Photos</p>
              <p className="text-xs text-blue-600 dark:text-blue-400 font-semibold">Outdoor Exploration</p>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1 leading-relaxed">Scenic photography and refreshing walks in nature.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutMe;
