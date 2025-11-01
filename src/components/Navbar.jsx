import { NavLink } from "react-router-dom";
import { motion } from "framer-motion";
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
  return (
    <header className="sticky top-0 z-50 bg-black/30 backdrop-blur-md border-b border-white/10 shadow-[0_0_25px_rgba(59,130,246,0.15)]">
      <div className="gh-container flex items-center justify-between py-3 px-6">
        
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

        {/* Navigation */}
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
      </div>
    </header>
  );
}
