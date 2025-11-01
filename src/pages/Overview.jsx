import { motion } from "framer-motion";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { Typewriter } from "react-simple-typewriter";

export default function Overview() {
  return (
    <section className="relative w-full h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-[#05010a] via-[#0b1224] to-[#0e1530] text-white overflow-hidden m-0 p-0">
      
      {/* 🌌 Full-screen animated background lights */}
      <div className="absolute inset-0 w-full h-full overflow-hidden">
        <div className="absolute w-[700px] h-[700px] bg-blue-600/20 rounded-full blur-3xl animate-pulse top-[-150px] left-[-200px]" />
        <div className="absolute w-[600px] h-[600px] bg-purple-600/25 rounded-full blur-3xl animate-[ping_6s_ease-in-out_infinite] bottom-[-150px] right-[-200px]" />
        <div className="absolute w-[400px] h-[400px] bg-pink-600/15 rounded-full blur-3xl animate-[float_10s_ease-in-out_infinite] top-[30%] left-[40%]" />
      </div>

      {/* ✨ Center Text */}
      <motion.h1
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="text-5xl sm:text-6xl md:text-7xl font-extrabold tracking-tight relative drop-shadow-[0_0_15px_rgba(147,51,234,0.4)]"
      >
        Hi, I’m{" "}
        <motion.span
          animate={{
            backgroundPosition: ["0%", "200%"],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "linear",
          }}
          className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-[length:200%_auto] bg-clip-text text-transparent"
        >
          Jahnavi Vankayalapati
        </motion.span>{" "}
        👋
      </motion.h1>

      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.4, duration: 1 }}
        className="text-blue-300 font-medium text-xl md:text-2xl mt-6 mb-6"
      >
        <Typewriter
          words={[
            "Generative AI & Data Engineer.",
            "Crafting Intelligent Cloud Solutions.",
            "Empowering AI-driven Transformation.",
          ]}
          loop={0}
          cursor
          cursorStyle="|"
          typeSpeed={70}
          deleteSpeed={40}
          delaySpeed={1300}
        />
      </motion.p>

      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 1 }}
        className="max-w-3xl text-gray-400 text-base sm:text-lg leading-relaxed px-6 md:px-0"
      >
        I design and build intelligent systems that merge data engineering with modern AI — 
        transforming information into action through scalable, cloud-native automation.
      </motion.p>

      {/* 🌐 Buttons */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.2, duration: 0.8 }}
        className="flex flex-wrap justify-center gap-6 mt-12"
      >
        <a
          href="https://github.com/jahnavivankayalapati"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
        >
          <FaGithub className="text-2xl group-hover:text-blue-400 transition" />
          <span className="font-medium">GitHub</span>
        </a>

        <a
          href="https://www.linkedin.com/in/jahnavi-vankayalapati-b35821281/"
          target="_blank"
          rel="noreferrer"
          className="group flex items-center gap-2 px-8 py-3 rounded-xl border border-white/10 bg-white/10 hover:bg-white/20 backdrop-blur-md transition-all duration-300 hover:-translate-y-1"
        >
          <FaLinkedin className="text-2xl group-hover:text-blue-400 transition" />
          <span>LinkedIn</span>
        </a>
      </motion.div>

      <style>{`
        @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-25px); }
        }
      `}</style>
    </section>
  );
}
