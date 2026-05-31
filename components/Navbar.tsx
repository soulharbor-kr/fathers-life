"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";

const links = [
  { href: "/about", label: "소개" },
  { href: "/telecom", label: "통신의 역사" },
  { href: "/family", label: "가족" },
  { href: "/cosmos", label: "우주 이야기" },
  { href: "/values", label: "가치관" },
  { href: "/gallery", label: "갤러리" },
  { href: "/repair", label: "🔧 수리 서비스", isRepair: true },
];

export default function Navbar() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 backdrop-blur-xl shadow-sm"
          : "bg-white/80 backdrop-blur-xl"
      } border-b border-black/5`}
    >
      <div className="max-w-[1100px] mx-auto px-6 flex items-center justify-between h-16">
        <Link
          href="/"
          className="font-serif text-xl font-bold text-navy tracking-tight"
        >
          성의경
        </Link>

        {/* Desktop links */}
        <ul className="hidden md:flex gap-8">
          {links.map((link) => (
            <li key={link.href}>
              {(link as { isRepair?: boolean }).isRepair ? (
                <Link
                  href={link.href}
                  className={`text-sm font-medium transition-colors px-3 py-1.5 rounded-full ${
                    pathname === link.href
                      ? "bg-amber text-white"
                      : "bg-amber/10 text-amber hover:bg-amber/20"
                  }`}
                >
                  {link.label}
                </Link>
              ) : (
                <Link
                  href={link.href}
                  className={`text-sm transition-colors relative pb-1 ${
                    pathname === link.href
                      ? "text-navy font-medium"
                      : "text-text-light hover:text-navy"
                  }`}
                >
                  {link.label}
                  {pathname === link.href && (
                    <span className="absolute bottom-0 left-0 w-full h-0.5 bg-brown rounded" />
                  )}
                </Link>
              )}
            </li>
          ))}
        </ul>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-navy"
          onClick={() => setOpen(!open)}
          aria-label="메뉴"
        >
          <span className="material-symbols-outlined">
            {open ? "close" : "menu"}
          </span>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden bg-white/98 backdrop-blur-xl border-b border-black/5 px-6 pb-4">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setOpen(false)}
              className={`block py-2 text-sm ${
                (link as { isRepair?: boolean }).isRepair
                  ? pathname === link.href
                    ? "text-amber font-medium"
                    : "text-amber"
                  : pathname === link.href
                  ? "text-navy font-medium"
                  : "text-text-light"
              }`}
            >
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  );
}
