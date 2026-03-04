/*
 * Navbar — LION EV Style (Orange accent, clean sans-serif)
 * Top bar: Orange with white links | Main nav: White, logo + categories
 */

import { useState, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { Menu, X, MapPin } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

const TOP_LINKS = [
  { href: "/", label: "เกี่ยวกับเรา" },
  { href: "/reviews", label: "บทความ" },
  { href: "/contact", label: "ติดต่อเรา" },
  { href: "/faq", label: "FAQ" },
];

const CATEGORY_LINKS = [
  { href: "/products?cat=motorcycle", label: "MOTORCYCLE" },
  { href: "/products?cat=bicycle", label: "BICYCLE" },
  { href: "/products?cat=tricycle", label: "UTILITY CART" },
  { href: "/products?cat=accessories", label: "อะไหล่ & อุปกรณ์" },
];

const NAV_LINKS = [
  { href: "/", label: "หน้าแรก" },
  { href: "/products", label: "สินค้า" },
  { href: "/services", label: "บริการ" },
  { href: "/reviews", label: "รีวิว" },
  { href: "/contact", label: "ติดต่อ" },
  { href: "/faq", label: "FAQ" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [location]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50">
      {/* Top bar - Orange (LION EV style) */}
      <div className="bg-pink-500 hidden md:block">
        <div className="container flex items-center justify-end gap-6 py-2">
          {TOP_LINKS.map((link) => (
            <Link key={link.href} href={link.href}>
              <a className="text-white text-sm font-medium hover:text-white/90 transition-colors">
                {link.label}
              </a>
            </Link>
          ))}
        </div>
      </div>

      {/* Main navbar - White */}
      <nav
        className={`transition-all duration-300 ${
          scrolled
            ? "bg-white shadow-md border-b border-gray-200"
            : "bg-white border-b border-gray-100"
        }`}
      >
        <div className="container flex items-center justify-between py-4">
          {/* Logo */}
          <Link href="/">
            <a className="flex items-center gap-2 hover:opacity-80 transition-opacity">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/logo_nuch_ev_260c7284.png"
                alt="เจ้นุชรถไฟฟ้า"
                className="h-10 w-auto"
              />
              <span className="hidden sm:block font-bold text-lg text-gray-900 tracking-tight">
                เจ้นุชรถไฟฟ้า
              </span>
            </a>
          </Link>

          {/* Category links - Center (LION EV style) */}
          <div className="hidden md:flex items-center gap-8">
            {CATEGORY_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <a
                  className={`text-sm font-semibold uppercase tracking-wide transition-colors ${
                    location === link.href
                      ? "text-pink-500"
                      : "text-gray-900 hover:text-pink-500"
                  }`}
                >
                  {link.label}
                </a>
              </Link>
            ))}
          </div>

          {/* Right: Location / Contact */}
          <div className="hidden md:flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-sm text-gray-600">
              <MapPin size={14} className="text-pink-500" />
              <span>TH</span>
              <span className="text-gray-300">|</span>
              <span>EN</span>
            </span>
            <a
              href={SHOP_INFO.phoneLink}
              className="text-sm font-medium text-gray-900 hover:text-pink-500 transition-colors"
            >
              {SHOP_INFO.phone}
            </a>
          </div>

          {/* Mobile menu button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden p-2 text-gray-700 hover:text-pink-500"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-b border-gray-200">
          <div className="container py-4 space-y-3">
            {NAV_LINKS.map((link) => (
              <Link key={link.href} href={link.href}>
                <a className="block py-2 font-medium text-gray-700 hover:text-pink-500">
                  {link.label}
                </a>
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-200 space-y-2">
              {CATEGORY_LINKS.map((link) => (
                <Link key={link.href} href={link.href}>
                  <a className="block py-1 text-sm text-gray-600 hover:text-pink-500">
                    {link.label}
                  </a>
                </Link>
              ))}
            </div>
            <div className="pt-3 border-t border-gray-200">
              <a
                href={SHOP_INFO.phoneLink}
                className="block py-2 text-pink-500 font-medium"
              >
                โทร {SHOP_INFO.phone}
              </a>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
