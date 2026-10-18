import {
  HiOutlineCalendar,
  HiOutlineCheckCircle,
  HiOutlineSparkles,
} from "react-icons/hi";
import personalInfo from "../data/personalInfo";

const Experience = () => {
  return (
    <section id="experience" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineSparkles className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Hands-on Journey</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Practical{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Milestones
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Focused self-directed development experience, practical engineering milestones, and open-source project building.
        </p>
      </div>

      {/* Experience / Milestones List */}
      <div className="max-w-4xl mx-auto space-y-8">
        {personalInfo.milestones.map((item, idx) => (
          <div
            key={idx}
            className="group relative bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs hover:shadow-lg hover:border-blue-300 dark:hover:border-blue-600 transition-all duration-300"
          >
            <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-3 border-b border-gray-100 dark:border-gray-800 pb-5 mb-5">
              <div className="space-y-1">
                <div className="inline-flex items-center gap-2">
                  <span className="px-2.5 py-0.5 rounded-full text-xs font-bold bg-blue-50 dark:bg-blue-950/70 text-blue-700 dark:text-blue-300 border border-blue-200 dark:border-blue-800">
                    {item.type}
                  </span>
                </div>
                <h3 className="text-xl sm:text-2xl font-bold text-gray-900 dark:text-white group-hover:text-blue-600 dark:group-hover:text-blue-400 transition-colors">
                  {item.title}
                </h3>
                <p className="text-sm font-semibold text-blue-600 dark:text-blue-400">
                  {item.role}
                </p>
              </div>

              <div className="inline-flex items-center gap-1.5 text-xs sm:text-sm font-medium text-gray-500 dark:text-gray-400 self-start sm:self-center">
                <HiOutlineCalendar className="text-blue-500" />
                <span>{item.period}</span>
              </div>
            </div>

            {/* Highlights List */}
            <ul className="space-y-2.5 mb-5">
              {item.highlights.map((point, pIdx) => (
                <li key={pIdx} className="flex items-start gap-2.5 text-sm sm:text-base text-gray-600 dark:text-gray-300">
                  <HiOutlineCheckCircle className="text-blue-600 dark:text-blue-400 text-lg shrink-0 mt-0.5" />
                  <span>{point}</span>
                </li>
              ))}
            </ul>

            {/* Technologies */}
            <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-100 dark:border-gray-800">
              {item.technologies.map((tech) => (
                <span
                  key={tech}
                  className="px-2.5 py-0.5 text-xs font-medium rounded-md bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border border-gray-200 dark:border-gray-700"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;
