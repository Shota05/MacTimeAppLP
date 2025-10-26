import Link from "next/link";

export default function Logo() {
  return (
    <Link
      href="/"
      aria-label="Anco Platform Home"
      className="inline-flex items-center gap-2"
    >
      <span
        aria-hidden
        className="grid h-8 w-8 place-items-center rounded-md bg-gradient-to-br from-indigo-600 to-blue-500 text-white font-bold"
      >
        AP
      </span>
      <span className="text-lg font-semibold tracking-tight">
        Anco Platform
      </span>
    </Link>
  );
}
