import { useEffect, useState } from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Navbar from "./components/Navbar";
import Overview from "./pages/Overview";
import Projects from "./pages/Projects";
import Experience from "./pages/Experience";
import Skills from "./pages/Skills";
import Volunteering from "./pages/Volunteering";
import Contact from "./pages/Contact";
import Resume from "./pages/Resume";

export default function App() {
  // 🟦 Fade-in control
  const [isReady, setIsReady] = useState(false);

  useEffect(() => {
    const id = setTimeout(() => setIsReady(true), 80); // quick & smooth
    return () => clearTimeout(id);
  }, []);

  return (
    // 🟩 Global fade wrapper
    <div
      style={{
        opacity: isReady ? 1 : 0,
        transition: "opacity 420ms ease-out",
      }}
      className="min-h-screen text-ghText"
    >
      <Navbar />
      <main className="gh-container py-8">
        <Routes>
          <Route path="/" element={<Navigate to="/overview" replace />} />
          <Route path="/overview" element={<Overview />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/experience" element={<Experience />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/volunteering" element={<Volunteering />} />
          <Route path="/resume" element={<Resume />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>
    </div>
  );
}
