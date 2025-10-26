import Link from "next/link";
import { site } from "../../../lib/site";
import Logo from "./Logo";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-white">
      <div className="mx-auto max-w-7xl px-4 py-10 sm:px-6 lg:px-8">
        <div className="flex flex-col items-start justify-between gap-6 sm:flex-row sm:items-center">
          <Logo />
          <div className="text-sm text-gray-600">
            お問い合わせ:{" "}
            <Link href={`mailto:${site.contactEmail}`} className="underline">
              {site.contactEmail}
            </Link>
          </div>
        </div>
        <div className="mt-8 text-xs text-gray-500">
          © {new Date().getFullYear()} {site.name}. All rights reserved.
        </div>
      </div>
    </footer>
  );
}
