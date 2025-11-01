import { useState } from "react";
import { NavLink } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import profileImage from "../assets/profile.png";

const tabs = [
  { to: "/overview", label: "Overview" },
  { to: "/experience", label: "Experience" },
  { to: "/projects", label: "Projects" },
  { to: "/skills", label: "Skills" },
  { to: "/volunteering", label: "Education / Other" },
  { to: "/resume", label: "Resume" },
  { to: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-3 px-6">
        
        {/* Profile */}
        <div className="flex items-center gap-3">
          <motion.img
            src={profileImage}
            alt="Profile"
            whileHover={{ scale: 1.15, rotate: 5 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="w-10 h-10 rounded-full border border-blue-400/60 shadow-[0_0_12px_rgba(59,130,246,0.6)]"
          />
          <span className="font-bold text-white text-lg tracking-wide">
            Jahnavi
          </span>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:block">
          <ul className="flex gap-8 text-sm">
            {tabs.map((t) => (
              <li key={t.to} className="relative group">
                <NavLink
                  to={t.to}
                  className={({ isActive }) =>
                    `transition-colors duration-300 ${
                      isActive
                        ? "text-blue-400 font-semibold"
                        : "text-gray-400 hover:text-white"
                    }`
                  }
                >
                  {({ isActive }) => (
                    <>
                      {t.label}
                      {isActive && (
                        <motion.div
                          layoutId="underline"
                          className="absolute -bottom-1 left-0 right-0 h-[2px] bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 rounded-full"
                        />
                      )}
                    </>
                  )}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Hamburger Button */}
        <button
          onClick={() => setMenuOpen(!menuOpen)}
          className="md:hidden text-gray-300 hover:text-white focus:outline-none"
        >
          {menuOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-7 h-7"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16m0 6H4" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile Menu (Animated) */}
      <AnimatePresence>
        {menuOpen && (
          <motion.nav
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="md:hidden bg-black/90 backdrop-blur-lg border-t border-white/10 shadow-lg"
          >
            <ul className="flex flex-col items-center gap-4 py-6 text-base text-gray-300">
              {tabs.map((t) => (
                <li key={t.to}>
                  <NavLink
                    to={t.to}
                    onClick={() => setMenuOpen(false)}
                    className={({ isActive }) =>
                      `block transition-colors duration-200 ${
                        isActive
                          ? "text-blue-400 font-semibold"
                          : "hover:text-white"
                      }`
                    }
                  >
                    {t.label}
                  </NavLink>
                </li>
              ))}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
