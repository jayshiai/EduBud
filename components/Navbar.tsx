"use client";

import { usePathname } from "next/navigation";

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav className="mb-4">
      <a
        className={`mr-4 ${pathname === "/" ? "text-white border-b" : ""}`}
        href="/"
      >
        🤖 AI Agent
      </a>
      <a
        className={`mr-4 ${pathname === "/about" ? "text-white border-b" : ""}`}
        href="/about"
      >
        🏴‍☠️ About Us
      </a>
    </nav>
  );
}
