import { motion } from "framer-motion";
import { experience } from "../data/content";

export default function Experience() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-10 relative"
    >
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Experience</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Professional journey focused on building intelligent, data-driven, and
          scalable systems through innovation and collaboration.
        </p>
      </div>

      {/* Timeline Line */}
      <div className="relative pl-4">
        <div className="absolute left-2 top-0 bottom-0 border-l border-ghBorder" />

        {experience.map((e, idx) => (
          <motion.article
            key={idx}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              delay: idx * 0.15,
              duration: 0.6,
              ease: "easeOut",
            }}
            className="mb-8 relative group"
          >
            <div className="absolute -left-[7px] top-3 h-3 w-3 rounded-full bg-ghAccent shadow-[0_0_15px_rgba(59,130,246,0.8)]" />

            <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <motion.div
              whileHover={{ scale: 1.02, y: -6 }}
              transition={{ type: "spring", stiffness: 250, damping: 15 }}
              className="relative gh-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10"
            >
              <div className="flex flex-wrap items-center gap-x-3">
                <h3 className="text-lg font-semibold text-white">{e.role}</h3>
                <span className="gh-muted">• {e.company}</span>
                <span className="pill ml-auto">{e.duration}</span>
              </div>

              <ul className="list-disc ml-5 mt-3 space-y-1 gh-muted">
                {e.bullets.map((b, i) => (
                  <li key={i}>{b}</li>
                ))}
              </ul>

              <div className="mt-3 flex flex-wrap gap-2">
                {e.stack.map((t) => (
                  <span
                    key={t}
                    className="pill hover:scale-105 transition-transform duration-200"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </motion.div>
          </motion.article>
        ))}
      </div>
    </motion.section>
  );
}
