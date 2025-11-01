export default function RepoCard({ name, desc, tag, link }) {
  // Split the tag string into individual pills
  const techStack = tag ? tag.split(/•|,/).map((t) => t.trim()) : [];

  return (
    <div className="gh-card p-6 flex flex-col justify-between space-y-3">
      {/* Header: Project name (left) + GitHub link (right) */}
      <div className="flex justify-between items-center">
        <h3 className="text-lg font-semibold text-blue-400">{name}</h3>
        {link && (
          <a
            href={link}
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm text-blue-500 hover:text-blue-300 transition flex items-center gap-1"
          >
            🔗 View on GitHub
          </a>
        )}
      </div>

      {/* Description */}
      {desc && <p className="text-sm text-gray-300 leading-6">{desc}</p>}

      {/* Tech stack pills */}
      <div className="flex flex-wrap gap-2 mt-2">
        {techStack.map((tech, index) => (
          <span key={index} className="pill">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
