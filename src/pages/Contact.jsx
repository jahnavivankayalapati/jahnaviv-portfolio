import { useState } from "react";
import { motion } from "framer-motion";

export default function Contact() {
  const ENDPOINT =
    import.meta.env.VITE_FORMSPREE_ENDPOINT ||
    "https://formspree.io/f/mzzkaadr";

  const [form, setForm] = useState({ name: "", email: "", message: "", website: "" });
  const [status, setStatus] = useState({ loading: false, sent: false, error: false });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (form.website) return;
    setStatus({ loading: true, sent: false, error: false });

    try {
      const res = await fetch(ENDPOINT, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name: form.name, email: form.email, message: form.message }),
      });

      if (res.ok) {
        setStatus({ loading: false, sent: true, error: false });
        setForm({ name: "", email: "", message: "", website: "" });
      } else throw new Error("Formspree submission failed");
    } catch {
      setStatus({ loading: false, sent: false, error: true });
    }
  };

  const isDisabled =
    status.loading ||
    !form.name.trim() ||
    !form.email.trim() ||
    !form.message.trim();

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="max-w-xl mx-auto space-y-6"
    >
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Contact Me</h2>
        <p className="text-gray-400">
          Have a question or want to collaborate? Drop me a message.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        whileHover={{ scale: 1.01, y: -4 }}
        className="relative group"
      >
        <div className="absolute inset-0 rounded-lg bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <motion.form
          onSubmit={handleSubmit}
          className="relative gh-card p-6 space-y-4 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10"
        >
          <input
            type="text"
            name="website"
            value={form.website}
            onChange={handleChange}
            className="hidden"
            autoComplete="off"
            tabIndex={-1}
          />

          <label className="block">
            <input
              name="name"
              type="text"
              placeholder="Your Name"
              value={form.name}
              onChange={handleChange}
              required
              className="w-full bg-ghBg border border-ghBorder rounded p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all duration-200"
            />
          </label>

          <label className="block">
            <input
              name="email"
              type="email"
              placeholder="Your Email"
              value={form.email}
              onChange={handleChange}
              required
              className="w-full bg-ghBg border border-ghBorder rounded p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all duration-200"
            />
          </label>

          <label className="block">
            <textarea
              name="message"
              placeholder="Your Message"
              value={form.message}
              onChange={handleChange}
              required
              rows="5"
              className="w-full bg-ghBg border border-ghBorder rounded p-3 text-white focus:ring-2 focus:ring-blue-600 outline-none transition-all duration-200"
            />
          </label>

          <motion.button
            type="submit"
            disabled={isDisabled}
            whileHover={{ scale: isDisabled ? 1 : 1.05 }}
            whileTap={{ scale: isDisabled ? 1 : 0.98 }}
            className="pill bg-blue-600 text-white px-6 py-2 rounded transition disabled:opacity-60 disabled:cursor-not-allowed hover:bg-blue-500"
          >
            {status.loading ? "Sending..." : "Send Message"}
          </motion.button>

          {status.sent && (
            <div className="mt-2 rounded border border-green-700/50 bg-green-900/30 px-3 py-2 text-green-300 text-sm">
              ✅ Message sent successfully!
            </div>
          )}
          {status.error && (
            <div className="mt-2 rounded border border-red-700/50 bg-red-900/30 px-3 py-2 text-red-300 text-sm">
              ❌ Failed to send. Please try again.
            </div>
          )}
        </motion.form>
      </motion.div>

      <p className="gh-muted text-sm text-center">
        Or email me directly:{" "}
        <a
          className="gh-link text-blue-400 hover:underline"
          href="mailto:jahnavivch@gmail.com"
        >
          jahnavivch@gmail.com
        </a>
      </p>
    </motion.section>
  );
}
