"use client";

import Link from "next/link";

export default function FloatingContactButton() {
  return (
    <Link
      href="/contact"
      className="fixed bottom-6 left-1/2 -translate-x-1/2 z-50 flex items-center gap-2 rounded-full bg-black/80 px-4 py-2 text-white shadow-xl transition hover:bg-black dark:bg-white/10 dark:text-white"
    >
      <span className="relative flex h-3 w-3">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
        <span className="relative inline-flex h-3 w-3 rounded-full bg-green-500 shadow-[0_0_6px_2px_rgba(34,197,94,0.8)]"></span>
      </span>
      Contact
    </Link>
  );
}
