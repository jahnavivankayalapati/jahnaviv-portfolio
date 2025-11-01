import { motion } from "framer-motion";
import { skills } from "../data/content";

export default function Skills() {
  const coreCompetencies = [
    "Generative AI",
    "Data Engineering",
    "ETL Pipelines",
    "Data Analytics",
    "Cloud Architecture (Azure, AWS)",
    "Data Warehousing (Snowflake, BigQuery)",
    "Machine Learning",
    "Large Language Models (LLMs)",
    "Natural Language Processing (NLP)",
    "RAG Pipelines",
    "Data Modeling",
    "API Integration",
    "Data Visualization (Power BI, Tableau)",
    "Automation & Orchestration (Airflow, AWS Glue)",
    "Data Governance",
    "Data Quality & Security",
    "Agile & Cross-Functional Collaboration",
    "Problem Solving",
    "Mentoring & Knowledge Sharing",
  ];

  const certifications = [
    {
      name: "Java for Cloud",
      org: "StackRoute (NIIT)",
      issued: "Aug 2022",
      url: "https://verifyawards.stackroute.in/verify?url=https://awards.stackroute.in/public/assertions/k16Gr6DlSMe01TSYYmXFZA.json?v=2_0",
    },
    {
      name: "AI for Everyone: Master the Basics",
      org: "IBM",
      issued: "Sep 2025",
      url: "https://courses.edx.org/certificates/dbc81770338f43e5bbebbc94bd438b61?_gl=1*1moowhv*_gcl_au*MTQ5OTkzNTEwNS4xNzU0NDk3MTkw*_ga*MTE2NjkxMzI4Mi4xNzU0NDk3MTY2*_ga_D3KS4KMDT0*czE3NTY5MTU3NDUkbzI4JGcxJHQxNzU2OTE2NDA5JGoxMiRsMCRoMA..",
    },
    {
      name: "Human Research – Social & Behavioral Research",
      org: "CITI Program",
      issued: "Jan 2024",
      url: "https://www.citiprogram.org/verify/?w91bc1d5d-cf6e-461f-af6c-d3c1f418e9c7-60864221",
    },
    {
      name: "AWS Certified AI Practitioner",
      org: "Amazon Web Services (AWS)",
      issued: "Jun 2025",
      credentialId: "a589971f859a4aac8ecb656d4c1f0aaf",
      url: "https://aws.amazon.com/verification",
    },
  ];

  return (
    <motion.section
      initial={{ opacity: 0, y: 40 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      className="space-y-16"
    >
      {/* Core Competencies */}
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Core Competencies</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          My foundational strengths across data, AI, and cloud engineering that
          empower me to deliver scalable, intelligent solutions.
        </p>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="relative group"
      >
        {/* Glowing gradient background */}
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

        <div className="relative gh-card p-6 flex flex-wrap gap-2 justify-center transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
          {coreCompetencies.map((skill, i) => (
            <motion.span
              key={skill}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: i * 0.03, duration: 0.4 }}
              className="pill hover:scale-105 transition-transform duration-200"
            >
              {skill}
            </motion.span>
          ))}
        </div>
      </motion.div>

      {/* Technical Skills */}
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Technical Skills</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Technologies and frameworks I use to design, optimize, and automate
          intelligent data-driven systems.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {Object.entries(skills).map(([cat, items], idx) => (
          <motion.div
            key={cat}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative group"
          >
            {/* Glowing layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 via-purple-600/20 to-blue-600/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative gh-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
              <h3 className="font-semibold text-white mb-2">{cat}</h3>
              <div className="mt-3 flex flex-wrap gap-2">
                {items.map((s) => (
                  <span
                    key={s}
                    className="pill hover:scale-105 transition-transform duration-200"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Certifications */}
      <div className="text-center">
        <h2 className="gh-section-title mb-2">Certifications</h2>
        <p className="text-gray-400 max-w-2xl mx-auto">
          Recognitions and credentials highlighting my expertise in cloud,
          AI/ML, and applied data science.
        </p>
      </div>

      <div className="grid md:grid-cols-2 gap-6">
        {certifications.map((c, idx) => (
          <motion.div
            key={c.name}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: idx * 0.1, duration: 0.6 }}
            whileHover={{ scale: 1.02, y: -6 }}
            className="relative group"
          >
            {/* Glow border layer */}
            <div className="absolute inset-0 bg-gradient-to-r from-blue-500/20 via-purple-600/20 to-blue-500/20 blur-md rounded-lg opacity-0 group-hover:opacity-100 transition-all duration-500" />

            <div className="relative gh-card p-5 transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/10 z-10">
              <div className="flex justify-between items-start mb-1">
                <h3 className="text-lg font-semibold max-w-[75%] text-white">
                  {c.name}
                </h3>
                <a
                  href={c.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-blue-400 hover:underline text-sm whitespace-nowrap"
                >
                  View
                </a>
              </div>
              <p className="gh-muted text-sm">
                {c.org} · {c.issued}
              </p>
              {c.credentialId && (
                <p className="gh-muted text-xs mt-1">
                  Credential ID: {c.credentialId}
                </p>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
