export default function Header() {
  return (
    <header className="sticky top-0 z-40 bg-white/70 backdrop-blur supports-[backdrop-filter]:bg-white/60 border-b border-gray-200">
      <div className="mx-auto max-w-7xl px-4 py-3 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <svg
            width="28"
            height="28"
            viewBox="0 0 24 24"
            className="text-sky-500"
          >
            <path
              fill="currentColor"
              d="M12 2l9 7v11a2 2 0 0 1-2 2h-5v-7H10v7H5a2 2 0 0 1-2-2V9z"
            />
          </svg>
          <span className="font-semibold tracking-tight">
            HA Blueprints Hub
          </span>
        </div>
        <a href="#top10" className="text-sm text-gray-600 hover:text-gray-900">
          Top 10
        </a>
      </div>
    </header>
  );
}
