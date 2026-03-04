/*
 * FloatingChat — ปุ่มแชทลอยมุมขวาล่าง
 * Thai Premium EV Design
 */

import { useState } from "react";
import { MessageCircle, X, Phone, Facebook } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

export default function FloatingChat() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-3">
      {/* Expanded menu */}
      {isOpen && (
        <div className="flex flex-col gap-2 animate-fade-in-up">
          {/* Phone */}
          <a
            href={SHOP_INFO.phoneLink}
            className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white px-4 py-2.5 rounded-full text-sm font-medium hover:border-pink-500/50 hover:bg-[#222] transition-all shadow-lg"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            <div className="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center">
              <Phone size={14} className="text-pink-400" />
            </div>
            โทร {SHOP_INFO.phone}
          </a>

          {/* Facebook */}
          <a
            href={SHOP_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white px-4 py-2.5 rounded-full text-sm font-medium hover:border-blue-500/50 hover:bg-[#222] transition-all shadow-lg"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            <div className="w-7 h-7 rounded-full bg-blue-600/20 flex items-center justify-center">
              <Facebook size={14} className="text-blue-400" />
            </div>
            แชท Facebook
          </a>

          {/* Line */}
          <a
            href={SHOP_INFO.lineLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 bg-[#1a1a1a] border border-white/10 text-white px-4 py-2.5 rounded-full text-sm font-medium hover:border-pink-500/50 hover:bg-[#222] transition-all shadow-lg"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            <div className="w-7 h-7 rounded-full bg-pink-500/20 flex items-center justify-center">
              <span className="text-pink-400 text-xs font-bold">L</span>
            </div>
            Line: {SHOP_INFO.lineId}
          </a>
        </div>
      )}

      {/* Main toggle button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-2xl transition-all duration-300 pulse-green ${
          isOpen
            ? "bg-[#1a1a1a] border-2 border-pink-500/50 rotate-0"
            : "bg-pink-500 hover:bg-pink-400"
        }`}
        aria-label="ติดต่อเรา"
      >
        {isOpen ? (
          <X size={22} className="text-pink-400" />
        ) : (
          <MessageCircle size={22} className="text-black" />
        )}
      </button>

      {/* Tooltip */}
      {!isOpen && (
        <div className="absolute right-16 bottom-3 bg-[#1a1a1a] text-white text-xs px-3 py-1.5 rounded-full border border-white/10 whitespace-nowrap pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity">
          ติดต่อเรา
        </div>
      )}
    </div>
  );
}
