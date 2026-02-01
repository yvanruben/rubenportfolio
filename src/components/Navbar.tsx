"use client";

import { useState, useEffect, type FormEvent, useRef } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Menu, X, ChevronDown, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Desktop dropdown
  const [isWorkOpen, setIsWorkOpen] = useState(false);

  // Mobile accordion
  const [isWorkMobileOpen, setIsWorkMobileOpen] = useState(false);

  // Search
  const [searchTerm, setSearchTerm] = useState("");

  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const workRef = useRef<HTMLDivElement | null>(null);
  const workCloseTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  const baseLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
  ];

  const workLinks = [
    { href: "/website", label: "Website" },
    { href: "/campaign", label: "Campaign" },
    { href: "/newsletter", label: "Newsletter" },
  ];

  const isWorkActive = workLinks.some((l) => pathname === l.href);

  const openWork = () => {
    if (workCloseTimer.current) clearTimeout(workCloseTimer.current);
    setIsWorkOpen(true);
  };

  const scheduleCloseWork = () => {
    if (workCloseTimer.current) clearTimeout(workCloseTimer.current);
    workCloseTimer.current = setTimeout(() => setIsWorkOpen(false), 140);
  };

  // Sync search input with URL params (?q=...)
  useEffect(() => {
    const q = searchParams.get("q") ?? "";
    setSearchTerm(q);
  }, [searchParams]);

  // Close dropdown on outside click / ESC
  useEffect(() => {
    const onClickOutside = (e: MouseEvent) => {
      if (!workRef.current) return;
      if (!workRef.current.contains(e.target as Node)) setIsWorkOpen(false);
    };

    const onEsc = (e: KeyboardEvent) => {
      if (e.key === "Escape") setIsWorkOpen(false);
    };

    document.addEventListener("mousedown", onClickOutside);
    document.addEventListener("keydown", onEsc);

    return () => {
      document.removeEventListener("mousedown", onClickOutside);
      document.removeEventListener("keydown", onEsc);
    };
  }, []);

  const handleSearch = (e: FormEvent) => {
    e.preventDefault();
    const trimmed = searchTerm.trim();
    router.push(trimmed ? `/?q=${encodeURIComponent(trimmed)}` : "/");

    if (isMenuOpen) setIsMenuOpen(false);
  };

  return (
    <nav className="fixed w-full z-50 bg-slate-900/90 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-16 grid grid-cols-2 md:grid-cols-3 items-center">
          {/* Logo */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
          >
            DevPortfolio
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-baseline space-x-8">
              {baseLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className={
                    pathname === item.href
                      ? "text-blue-400 font-medium"
                      : "text-gray-300 hover:text-white transition-colors"
                  }
                >
                  {item.label}
                </Link>
              ))}

              {/* Work Dropdown */}
              <div ref={workRef} className="relative">
                <button
                  type="button"
                  onMouseEnter={openWork}
                  onMouseLeave={scheduleCloseWork}
                  onClick={() => setIsWorkOpen((v) => !v)}
                  className={
                    (isWorkActive
                      ? "text-blue-400 font-medium "
                      : "text-gray-300 hover:text-white ") +
                    "inline-flex items-center gap-1 transition-colors"
                  }
                  aria-expanded={isWorkOpen}
                >
                  Work
                  <ChevronDown
                    size={16}
                    className={isWorkOpen ? "rotate-180 transition" : "transition"}
                  />
                </button>

                {isWorkOpen && (
                  <div
                    onMouseEnter={openWork}
                    onMouseLeave={scheduleCloseWork}
                    className="absolute left-0 mt-3 w-52 rounded-xl border border-slate-700 bg-slate-900 shadow-xl overflow-hidden"
                  >
                    {workLinks.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setIsWorkOpen(false)}
                        className={
                          "block px-4 py-3 text-sm " +
                          (pathname === item.href
                            ? "bg-slate-800 text-blue-400"
                            : "text-gray-200 hover:bg-slate-800/70")
                        }
                      >
                        {item.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>

              {/* Contact */}
              <Link
                href="/contact"
                className={
                  pathname === "/contact"
                    ? "text-blue-400 font-medium"
                    : "text-gray-300 hover:text-white transition-colors"
                }
              >
                Contact
              </Link>
            </div>
          </div>

          {/* Desktop Search */}
          <div className="hidden md:flex justify-end">
            <form onSubmit={handleSearch} className="relative">
              <input
                type="text"
                placeholder="Search case studies..."
                className="bg-slate-800 text-gray-200 text-sm rounded-full pl-10 pr-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500 w-72"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
              />
              <button
                type="submit"
                className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
                aria-label="Search"
              >
                <Search size={16} />
              </button>
            </form>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex justify-end md:hidden">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-gray-400 hover:text-white p-2"
              aria-label={isMenuOpen ? "Close menu" : "Open menu"}
            >
              {isMenuOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-800 border-b border-slate-700">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {baseLinks.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                onClick={() => setIsMenuOpen(false)}
                className={
                  "block px-3 py-2 rounded-lg text-base font-medium " +
                  (pathname === item.href
                    ? "text-blue-400 bg-slate-700/40"
                    : "text-gray-300 hover:bg-slate-700")
                }
              >
                {item.label}
              </Link>
            ))}

            {/* Work Accordion */}
            <button
              onClick={() => setIsWorkMobileOpen((v) => !v)}
              className={
                "w-full flex items-center justify-between px-3 py-2 rounded-lg text-base font-medium " +
                (isWorkActive
                  ? "text-blue-400 bg-slate-700/40"
                  : "text-gray-300 hover:bg-slate-700")
              }
            >
              <span>Work</span>
              <ChevronDown
                size={18}
                className={isWorkMobileOpen ? "rotate-180 transition" : "transition"}
              />
            </button>

            {isWorkMobileOpen && (
              <div className="ml-3 pl-3 border-l border-slate-700 space-y-1">
                {workLinks.map((item) => (
                  <Link
                    key={item.href}
                    href={item.href}
                    onClick={() => {
                      setIsMenuOpen(false);
                      setIsWorkMobileOpen(false);
                    }}
                    className={
                      "block px-3 py-2 rounded-lg text-base " +
                      (pathname === item.href
                        ? "text-blue-400 bg-slate-700/40"
                        : "text-gray-300 hover:bg-slate-700")
                    }
                  >
                    {item.label}
                  </Link>
                ))}
              </div>
            )}

            {/* Contact */}
            <Link
              href="/contact"
              onClick={() => setIsMenuOpen(false)}
              className={
                "block px-3 py-2 rounded-lg text-base font-medium " +
                (pathname === "/contact"
                  ? "text-blue-400 bg-slate-700/40"
                  : "text-gray-300 hover:bg-slate-700")
              }
            >
              Contact
            </Link>

            {/* Mobile Search */}
            <div className="mt-3 px-3">
              <form onSubmit={handleSearch} className="relative">
                <input
                  type="text"
                  placeholder="Search case studies..."
                  className="bg-slate-900 text-white text-sm rounded-full pl-10 pr-4 py-2 w-full focus:outline-none focus:ring-2 focus:ring-blue-500"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
                <button
                  type="submit"
                  className="absolute inset-y-0 left-0 pl-3 flex items-center text-gray-400"
                  aria-label="Search"
                >
                  <Search size={16} />
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
