/*
 * Services Page — Thai Premium EV Design (Lion-EV style: clean, minimal)
 */

import { Zap, Phone, MessageCircle } from "lucide-react";
import { SERVICES, SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";

export default function Services() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Zap size={12} /> บริการของเรา
          </div>
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            บริการครบวงจร
          </h1>
          <p className="text-gray-500 mt-2 text-sm max-w-lg mx-auto">
            เราดูแลลูกค้าทุกขั้นตอน ตั้งแต่ให้คำปรึกษา จนถึงบริการหลังการขาย
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {SERVICES.map((service, i) => (
            <div
              key={i}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-pink-300 hover:shadow-lg transition-all"
            >
              <h2
                className="font-bold text-gray-900 text-lg mb-2"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                {service.title}
              </h2>
              <p className="text-gray-500 text-sm leading-relaxed">{service.description}</p>
            </div>
          ))}
        </div>

        {/* Warranty Section */}
        <div className="bg-[#0a0a0a] rounded-2xl p-8 text-center">
          <h2 className="text-2xl font-black text-white mb-3" style={{ fontFamily: "Prompt, sans-serif" }}>
            การรับประกันสินค้า
          </h2>
          <p className="text-gray-400 text-sm mb-6 max-w-lg mx-auto">
            สินค้าทุกชิ้นมีการรับประกัน สามารถสอบถามรายละเอียดการรับประกันของแต่ละรุ่นได้โดยตรงที่ร้าน
            หรือติดต่อผ่านช่องทางด้านล่าง
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SHOP_INFO.phoneLink}
              className="flex items-center gap-2 px-5 py-2.5 bg-pink-500 text-black text-sm font-bold rounded-lg hover:bg-pink-400 transition-colors"
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              <Phone size={14} />
              โทร {SHOP_INFO.phone}
            </a>
            <a
              href={SHOP_INFO.lineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-5 py-2.5 border border-white/20 text-white text-sm font-medium rounded-lg hover:border-pink-400 hover:text-pink-400 transition-colors"
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              <MessageCircle size={14} />
              แอดไลน์
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
