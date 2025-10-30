export default function ScorePill({ score }: { score: number }) {
  const display = Math.round(score);
  const label =
    display >= 80
      ? "Excellent"
      : display >= 65
      ? "Good"
      : display >= 50
      ? "Fair"
      : "New";
  return (
    <div
      className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1 text-sm shadow-soft"
      aria-label={`Quality score ${display}/100 (${label})`}
    >
      <span className="font-semibold">{display}</span>
      <span className="text-gray-500">{label}</span>
    </div>
  );
}
