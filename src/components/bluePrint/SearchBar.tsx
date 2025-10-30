"use client";
import { useState } from "react";

export default function SearchBar({
  onChange,
  placeholder = "Search blueprints…",
}: {
  onChange: (q: string) => void;
  placeholder?: string;
}) {
  const [q, setQ] = useState("");
  return (
    <div className="relative">
      <input
        value={q}
        onChange={(e) => {
          setQ(e.target.value);
          onChange(e.target.value);
        }}
        placeholder={placeholder}
        aria-label="Search blueprints"
        className="w-full rounded-xl border border-gray-200 bg-white px-4 py-3 pr-10 text-base ring-soft outline-none focus:border-sky-400 focus:ring-2 focus:ring-sky-100"
      />
      <svg
        className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 text-gray-400"
        width="20"
        height="20"
        viewBox="0 0 24 24"
      >
        <path
          fill="currentColor"
          d="M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79L20 21.5 21.5 20zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14"
        />
      </svg>
    </div>
  );
}
