"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "./Logo";
import { site } from "../../../lib/site";

export default function Header() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-gray-200 bg-white/70 backdrop-blur">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <nav
          className="flex h-16 items-center justify-between"
          aria-label="Primary"
        >
          <Logo />
          <button
            className="inline-flex items-center gap-2 rounded-md px-3 py-2 text-sm ring-1 ring-gray-300 sm:hidden"
            aria-label="メニューを開閉"
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            <span>メニュー</span>
            <span aria-hidden>▾</span>
          </button>

          <ul className="hidden items-center gap-6 sm:flex">
            {site.nav.map(({ label, href }) => (
              <li key={href}>
                <Link
                  href={href}
                  className="text-sm font-medium text-gray-700 hover:text-gray-900"
                >
                  {label}
                </Link>
              </li>
            ))}
            <li>
              <Link
                href="#contact"
                className="inline-flex items-center rounded-md bg-gray-900 px-4 py-2 text-sm font-semibold text-white hover:bg-gray-800"
              >
                相談する
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      {/* Mobile */}
      <div
        id="mobile-menu"
        className={`sm:hidden ${
          open ? "block" : "hidden"
        } border-t border-gray-200 bg-white`}
      >
        <ul className="mx-auto max-w-7xl px-4 py-3">
          {site.nav.map(({ label, href }) => (
            <li key={href}>
              <Link
                href={href}
                className="block rounded-md px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-50"
                onClick={() => setOpen(false)}
              >
                {label}
              </Link>
            </li>
          ))}
          <li className="mt-1">
            <Link
              href="#contact"
              className="block rounded-md bg-gray-900 px-3 py-2 text-center text-sm font-semibold text-white hover:bg-gray-800"
              onClick={() => setOpen(false)}
            >
              相談する
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
