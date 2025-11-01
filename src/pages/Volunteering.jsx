import { motion } from "framer-motion";
import { volunteering } from "../data/content";

export default function Volunteering() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* Education Section */}
<div className="text-center">
  <h2 className="gh-section-title mb-2">Education</h2>
  <p className="text-gray-400 max-w-2xl mx-auto">
    My academic foundation in Computer Science strengthened my expertise
    in software design, AI, and data systems — forming the base of my
    professional journey.
  </p>
</div>

<div className="flex flex-col gap-6">
  {/* M.S. */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -6 }}
    className="relative group"
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="relative gh-card p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
      <h3 className="text-lg font-semibold">M.S. in Computer Science</h3>
      <div className="gh-muted">
        Middle Tennessee State University, USA | GPA: 3.75 / 4.0
      </div>
      <p className="gh-muted">
        Graduate Assistant – Accounting Services Department
      </p>
      <p className="gh-muted">
        Automated financial reporting workflows using SQL, Argos, Banner,
        and Python to enable real-time insights. Developed dynamic
        departmental forms to enhance data collection efficiency.
      </p>
      <p className="text-sm mt-2">
        <strong>Relevant Coursework:</strong> Database Management Systems,
        Data Mining, Intro to Artificial Intelligence, Data Exploration,
        Parallel Processing, Software Design & Web Technologies.
      </p>
    </div>
  </motion.div>

  {/* B.S. */}
  <motion.div
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6, delay: 0.2 }}
    viewport={{ once: true }}
    whileHover={{ scale: 1.02, y: -6 }}
    className="relative group"
  >
    <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />
    <div className="relative gh-card p-6 space-y-3 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
      <h3 className="text-lg font-semibold">
        B.S. in Computer Science and Engineering
      </h3>
      <div className="gh-muted">
        Jawaharlal Nehru Technological University, Kakinada, India
      </div>
      <p className="text-sm mt-2">
        <strong>Relevant Coursework:</strong> Artificial Intelligence,
        Machine Learning, Database Management Systems, Cloud Computing,
        Operating Systems, Information Security, and Python Programming.
      </p>
    </div>
  </motion.div>
</div>


      {/* ===================== VOLUNTEERING SECTION ===================== */}
      <div className="text-center mt-10">
        <h2 className="gh-section-title mb-2">Volunteering & Other</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Contributing beyond academics — engaging in initiatives that foster
          collaboration, leadership, and community growth.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {volunteering.map((v, idx) => (
          <motion.div
            key={v.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            viewport={{ once: true }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative group"
          >
            {/* Glow background */}
            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Card */}
            <div className="relative gh-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
              <div className="text-lg font-semibold">{v.title}</div>
              <div className="gh-muted">{v.org}</div>
              <p className="mt-2 gh-muted">{v.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
