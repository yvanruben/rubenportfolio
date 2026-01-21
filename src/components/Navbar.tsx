"use client";

import { useState, useEffect, type FormEvent } from "react";
import Link from "next/link";
import { useSearchParams, useRouter, usePathname } from "next/navigation";
import { Menu, X, Search } from "lucide-react";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();
  const pathname = usePathname();

  const navLinks = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/contact", label: "Contact" },
  ];

  // Sync search input with URL params
  useEffect(() => {
    const query = searchParams.get("q") ?? "";
    setSearchTerm(query);
  }, [searchParams]);

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
          {/* Logo (Left) */}
          <Link
            href="/"
            className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent"
          >
            DevPortfolio
          </Link>

          {/* Desktop Menu (Center) */}
          <div className="hidden md:flex justify-center">
            <div className="flex items-baseline space-x-8">
              {navLinks.map((item) => {
                const active = pathname === item.href;
                return (
                  <Link
                    key={item.href}
                    href={item.href}
                    className={
                      active
                        ? "text-blue-400 font-medium"
                        : "text-gray-300 hover:text-white transition-colors"
                    }
                  >
                    {item.label}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Search Bar (Right / Desktop) */}
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
          <div className="-mr-2 flex md:hidden justify-end">
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
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navLinks.map((item) => {
              const active = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className={
                    "block px-3 py-2 text-base font-medium rounded-lg " +
                    (active
                      ? "text-blue-400 bg-slate-700/40"
                      : "text-gray-300 hover:bg-slate-700")
                  }
                >
                  {item.label}
                </Link>
              );
            })}

            <div className="mt-4 px-3">
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
