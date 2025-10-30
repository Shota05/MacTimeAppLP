export default function BentoFeatures({
  items,
}: {
  items: { title: string; body: string }[];
}) {
  const icons = ["🔎", "📈", "⚡", "✅"];
  return (
    <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-4">
      {items.map((f, i) => (
        <div
          key={f.title}
          className="rounded-2xl border border-gray-700 bg-gray-700 p-4 shadow-soft"
        >
          <div className="text-2xl">{icons[i] ?? "🔹"}</div>
          <div className="mt-2 font-semibold">{f.title}</div>
          <p className="mt-1 text-sm text-gray-600">{f.body}</p>
        </div>
      ))}
    </div>
  );
}
