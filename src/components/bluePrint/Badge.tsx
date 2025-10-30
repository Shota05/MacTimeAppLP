export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span className="inline-flex items-center rounded-md border border-gray-200 px-2 py-0.5 text-xs font-medium text-gray-700 bg-gray-50">
      {children}
    </span>
  );
}
