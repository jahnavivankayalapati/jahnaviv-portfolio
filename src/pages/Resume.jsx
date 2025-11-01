import { motion } from "framer-motion";

export default function Resume() {
  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="flex flex-col items-center justify-center min-h-screen p-8 space-y-10"
    >
      <div className="text-center">
        <h2 className="gh-section-title mb-2">My Resume</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          A concise overview of my academic background, professional experience,
          and technical expertise.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.02, y: -6 }}
        className="relative group w-full max-w-5xl"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <iframe
          src="/Jahnavi_Vankalayapati_CV.pdf#toolbar=0&navpanes=0&scrollbar=0"
          title="Jahnavi Vankalayapati Resume"
          className="relative w-full h-[80vh] border rounded-lg shadow-lg hover:shadow-blue-500/10 transition-all duration-300 z-10"
        ></iframe>
      </motion.div>
    </motion.section>
  );
}
