/*
 * Footer — Thai Premium EV Design (White & Pink)
 * Dark background, Pink accents
 */

import { Link } from "wouter";
import { Phone, Mail, MapPin, Clock, Facebook, MessageCircle } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-gray-900 text-gray-400 border-t border-gray-800">
      {/* Main footer */}
      <div className="container py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/logo_nuch_ev_260c7284.png"
                alt="เจ้นุชรถไฟฟ้า"
                className="h-10 w-auto"
              />
              <div>
                <div className="font-prompt font-bold text-white text-sm">
                  เจ้นุชรถไฟฟ้า
                </div>
                <div className="text-xs text-pink-600">ร้านคอมโก้ เซียร์รังสิต</div>
              </div>
            </div>
            <p className="font-sarabun text-sm leading-relaxed mb-4">
              ศูนย์รวมรถไฟฟ้าครบวงจร มอเตอร์ไซค์ไฟฟ้า จักรยานไฟฟ้า สามล้อไฟฟ้า อะไหล่และอุปกรณ์เสริม ใกล้รังสิต
            </p>
            <div className="flex items-center gap-3">
              <a
                href={SHOP_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-blue-600/20 border border-blue-600/30 flex items-center justify-center hover:bg-blue-600/40 transition-colors"
                aria-label="Facebook"
              >
                <Facebook size={14} className="text-blue-400" />
              </a>
              <a
                href={SHOP_INFO.lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="w-8 h-8 rounded-full bg-pink-500/20 border border-pink-500/30 flex items-center justify-center hover:bg-pink-500/40 transition-colors"
                aria-label="Line"
              >
                <MessageCircle size={14} className="text-pink-400" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-prompt font-bold text-white text-sm mb-4">
              เมนูหลัก
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/", label: "หน้าแรก" },
                { href: "/products", label: "สินค้าทั้งหมด" },
                { href: "/blog", label: "บทความ" },
                { href: "/services", label: "บริการ" },
                { href: "/reviews", label: "รีวิวลูกค้า" },
                { href: "/contact", label: "ติดต่อเรา" },
                { href: "/faq", label: "คำถามที่พบบ่อย" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="font-sarabun text-sm hover:text-pink-600 transition-colors flex items-center gap-1">
                      <span className="text-pink-600/50">›</span> {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Categories */}
          <div>
            <h3 className="font-prompt font-bold text-white text-sm mb-4">
              หมวดสินค้า
            </h3>
            <ul className="space-y-2">
              {[
                { href: "/products?cat=motorcycle", label: "มอเตอร์ไซค์ไฟฟ้า" },
                { href: "/products?cat=bicycle", label: "จักรยานไฟฟ้า" },
                { href: "/products?cat=tricycle", label: "สามล้อไฟฟ้า" },
                { href: "/products?cat=accessories", label: "อะไหล่ & อุปกรณ์เสริม" },
              ].map((link) => (
                <li key={link.href}>
                  <Link href={link.href}>
                    <a className="font-sarabun text-sm hover:text-pink-600 transition-colors flex items-center gap-1">
                      <span className="text-pink-600/50">›</span> {link.label}
                    </a>
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-prompt font-bold text-white text-sm mb-4">
              ติดต่อเรา
            </h3>
            <ul className="space-y-3">
              <li>
                <a
                  href={SHOP_INFO.phoneLink}
                  className="font-sarabun flex items-start gap-2 text-sm hover:text-pink-600 transition-colors"
                >
                  <Phone size={14} className="text-pink-600 mt-0.5 shrink-0" />
                  {SHOP_INFO.phone}
                </a>
              </li>
              <li>
                <a
                  href={`mailto:${SHOP_INFO.email}`}
                  className="font-sarabun flex items-start gap-2 text-sm hover:text-pink-600 transition-colors"
                >
                  <Mail size={14} className="text-pink-600 mt-0.5 shrink-0" />
                  {SHOP_INFO.email}
                </a>
              </li>
              <li>
                <div className="font-sarabun flex items-start gap-2 text-sm">
                  <MapPin size={14} className="text-pink-600 mt-0.5 shrink-0" />
                  <span>{SHOP_INFO.address}</span>
                </div>
              </li>
              <li>
                <div className="font-sarabun flex items-start gap-2 text-sm">
                  <Clock size={14} className="text-pink-600 mt-0.5 shrink-0" />
                  <span>{SHOP_INFO.hours}</span>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-gray-800">
        <div className="container py-4 flex flex-col md:flex-row items-center justify-between gap-2">
          <p className="font-sarabun text-xs text-gray-600">
            © {currentYear} เจ้นุชรถไฟฟ้า ร้านคอมโก้ เซียร์รังสิต สงวนลิขสิทธิ์
          </p>
          <p className="font-sarabun text-xs text-gray-600">
            รถไฟฟ้า | มอเตอร์ไซค์ไฟฟ้า | จักรยานไฟฟ้า | สามล้อไฟฟ้า | เซียร์รังสิต | รังสิต | ลำลูกกา
          </p>
        </div>
      </div>
    </footer>
  );
}
