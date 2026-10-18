import { useState } from "react";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlineChatAlt2,
  HiOutlineCheck,
  HiOutlineClipboardCopy,
  HiOutlinePhone,
} from "react-icons/hi";
import { FaGithub, FaPaperPlane, FaLinkedin, FaWhatsapp } from "react-icons/fa";
import personalInfo from "../data/personalInfo";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    subject: "",
    message: "",
  });
  const [copiedEmail, setCopiedEmail] = useState(false);
  const [copiedPhone, setCopiedPhone] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(personalInfo.email);
    setCopiedEmail(true);
    setTimeout(() => setCopiedEmail(false), 3000);
  };

  const handleCopyPhone = () => {
    navigator.clipboard.writeText(personalInfo.phoneRaw);
    setCopiedPhone(true);
    setTimeout(() => setCopiedPhone(false), 3000);
  };

  const handleSendEmail = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(formData.subject || `Inquiry from ${formData.name || "Portfolio Visitor"}`);
    const body = encodeURIComponent(
      `Hello Saifur,\n\nMy Name: ${formData.name}\n\nMessage:\n${formData.message}`
    );
    window.location.href = `mailto:${personalInfo.email}?subject=${subject}&body=${body}`;
  };

  return (
    <section id="contact" className="py-24 px-6 md:px-12 max-w-7xl mx-auto">
      {/* Section Header */}
      <div className="text-center max-w-3xl mx-auto mb-16 space-y-3">
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-blue-50 dark:bg-blue-950/60 border border-blue-200/60 dark:border-blue-800 text-blue-700 dark:text-blue-300 text-xs font-semibold uppercase tracking-wider">
          <HiOutlineChatAlt2 className="text-blue-600 dark:text-blue-400 text-sm" />
          <span>Get In Touch</span>
        </div>

        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold text-gray-900 dark:text-white tracking-tight">
          Let's{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-blue-400 dark:to-indigo-400">
            Connect
          </span>
        </h2>

        <p className="text-base sm:text-lg text-gray-600 dark:text-gray-300">
          Interested in working together or discussing junior frontend opportunities? Feel free to reach out directly.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start max-w-5xl mx-auto">
        {/* Left Column: Direct Contact Info Cards */}
        <div className="lg:col-span-5 space-y-4">
          {/* Email Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-100 dark:border-blue-900 flex items-center justify-center text-blue-600 dark:text-blue-400 text-xl shrink-0">
                <HiOutlineMail />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Direct Email</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">{personalInfo.email}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={`mailto:${personalInfo.email}`}
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-blue-600 hover:bg-blue-700 text-white text-xs font-semibold shadow-xs transition"
              >
                <HiOutlineMail /> Open Mail Client
              </a>
              <button
                type="button"
                onClick={handleCopyEmail}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold border border-gray-200 dark:border-gray-700 transition cursor-pointer"
              >
                {copiedEmail ? <HiOutlineCheck className="text-emerald-500" /> : <HiOutlineClipboardCopy />}
                <span>{copiedEmail ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* LinkedIn Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-blue-50 dark:bg-blue-950/70 border border-blue-200 dark:border-blue-800 flex items-center justify-center text-[#0A66C2] dark:text-[#388fed] text-xl shrink-0">
                <FaLinkedin />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">LinkedIn Profile</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white truncate">linkedin.com/in/saifur162</p>
              </div>
            </div>

            <a
              href={personalInfo.linkedin}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-[#0A66C2] hover:bg-[#084e96] text-white text-xs font-semibold shadow-xs transition"
            >
              <FaLinkedin /> Connect on LinkedIn &rarr;
            </a>
          </div>

          {/* Phone / WhatsApp Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-emerald-50 dark:bg-emerald-950/70 border border-emerald-100 dark:border-emerald-900 flex items-center justify-center text-emerald-600 dark:text-emerald-400 text-xl shrink-0">
                <HiOutlinePhone />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Phone / WhatsApp</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">{personalInfo.phone} ({personalInfo.phoneRaw})</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-1">
              <a
                href={personalInfo.whatsapp || "https://wa.me/8801408086610"}
                target="_blank"
                rel="noreferrer"
                className="flex-1 inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold shadow-xs transition"
              >
                <FaWhatsapp className="text-sm" /> Chat on WhatsApp
              </a>
              <button
                type="button"
                onClick={handleCopyPhone}
                className="inline-flex items-center justify-center gap-1.5 px-3 py-2 rounded-xl bg-gray-100 dark:bg-gray-800 hover:bg-gray-200 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-200 text-xs font-semibold border border-gray-200 dark:border-gray-700 transition cursor-pointer"
              >
                {copiedPhone ? <HiOutlineCheck className="text-emerald-500" /> : <HiOutlineClipboardCopy />}
                <span>{copiedPhone ? "Copied!" : "Copy"}</span>
              </button>
            </div>
          </div>

          {/* GitHub Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs space-y-3">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 rounded-xl bg-gray-100 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center text-gray-800 dark:text-gray-200 text-xl shrink-0">
                <FaGithub />
              </div>
              <div className="min-w-0">
                <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">GitHub Profile</p>
                <p className="text-sm font-semibold text-gray-900 dark:text-white">github.com/saifur18234</p>
              </div>
            </div>

            <a
              href={personalInfo.github}
              target="_blank"
              rel="noreferrer"
              className="w-full inline-flex items-center justify-center gap-2 px-3 py-2 rounded-xl bg-gray-900 dark:bg-gray-800 hover:bg-gray-800 dark:hover:bg-gray-700 text-white text-xs font-semibold transition"
            >
              <FaGithub /> Visit GitHub Repositories &rarr;
            </a>
          </div>

          {/* Location Card */}
          <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-gray-900 border border-gray-200/90 dark:border-gray-800 shadow-xs flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-teal-50 dark:bg-teal-950/70 border border-teal-100 dark:border-teal-900 flex items-center justify-center text-teal-600 dark:text-teal-400 text-xl shrink-0">
              <HiOutlineLocationMarker />
            </div>
            <div>
              <p className="text-xs font-bold text-gray-400 uppercase tracking-wider">Location &amp; Availability</p>
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{personalInfo.location}</p>
              <p className="text-xs text-emerald-600 dark:text-emerald-400 font-medium">Open to Remote &amp; Onsite Roles</p>
            </div>
          </div>
        </div>

        {/* Right Column: Direct Messaging Form (Launches Verified Mailto with Structured Message) */}
        <div className="lg:col-span-7 bg-white dark:bg-gray-900 rounded-2xl border border-gray-200/90 dark:border-gray-800 p-6 sm:p-8 shadow-xs">
          <div className="mb-6">
            <h3 className="text-xl font-bold text-gray-900 dark:text-white">Send a Direct Message</h3>
            <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mt-1">
              Fills your default email client with your pre-written subject and message.
            </p>
          </div>

          <form onSubmit={handleSendEmail} className="space-y-4">
            <div>
              <label htmlFor="name" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                Your Name
              </label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={formData.name}
                onChange={handleChange}
                placeholder="e.g. John Doe"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label htmlFor="subject" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                value={formData.subject}
                onChange={handleChange}
                placeholder="e.g. Job Opportunity / Frontend Collaboration"
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition"
              />
            </div>

            <div>
              <label htmlFor="message" className="block text-xs font-bold uppercase tracking-wider text-gray-600 dark:text-gray-300 mb-1.5">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                placeholder="Write your message here..."
                className="w-full px-4 py-3 rounded-xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white text-sm focus:outline-none focus:border-blue-500 dark:focus:border-blue-400 transition resize-none"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full inline-flex items-center justify-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white font-bold py-3.5 px-6 rounded-xl shadow-md shadow-blue-500/25 hover:shadow-lg transition-all duration-300 cursor-pointer text-sm"
            >
              <FaPaperPlane className="text-sm" />
              <span>Compose Email Directly</span>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
