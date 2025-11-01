import { motion } from "framer-motion";
import { projects } from "../data/content";

export default function Projects() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* Header */}
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Projects</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A curated showcase of my AI, data, and cloud solutions — each blending
          scalability, innovation, and measurable results.
        </p>
      </div>

      {/* Project Grid */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="grid md:grid-cols-2 gap-6"
      >
        {projects.map((p, idx) => (
          <motion.div
            key={p.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative group"
          >
            {/* 💫 Glow layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

            {/* Project Card */}
            <div className="relative gh-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
              {/* Project Header */}
              <div className="flex justify-between items-start mb-2">
                <h3 className="text-lg font-semibold text-white">{p.name}</h3>
                {p.link && (
                  <a
                    href={p.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-blue-400 hover:underline text-sm whitespace-nowrap"
                  >
                    🔗 GitHub
                  </a>
                )}
              </div>

              {/* Description */}
              {p.desc && <p className="gh-muted text-sm mb-3">{p.desc}</p>}

              {/* Tech Stack */}
              {p.tag && (
                <div className="flex flex-wrap gap-2 mt-2">
                  {p.tag.split("•").map((tag) => (
                    <span
                      key={tag.trim()}
                      className="pill hover:scale-105 transition-transform duration-200"
                    >
                      {tag.trim()}
                    </span>
                  ))}
                </div>
              )}
            </div>
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
