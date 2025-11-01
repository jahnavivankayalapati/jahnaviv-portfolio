export default function HighlightCard({ title, value, desc }) {
  return (
    <div className="gh-card p-5">
      <div className="text-sm gh-muted">{title}</div>
      <div className="text-2xl font-semibold mt-1">{value}</div>
      {desc && <p className="gh-muted mt-2">{desc}</p>}
    </div>
  );
}
