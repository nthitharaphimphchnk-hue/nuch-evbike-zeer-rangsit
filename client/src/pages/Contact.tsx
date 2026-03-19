/*
 * Contact Page — Thai Premium EV Design
 */

import { useState } from "react";
import { Phone, MessageCircle, MapPin, Clock, Mail, Zap, Facebook, CheckCircle } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";

export default function Contact() {
  const [formData, setFormData] = useState({ name: "", phone: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(SHOP_INFO.address)}&output=embed`;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Redirect to Facebook with message
    const msg = `ชื่อ: ${formData.name}\nโทร: ${formData.phone}\n\n${formData.message}`;
    window.open(`${SHOP_INFO.facebook}?message=${encodeURIComponent(msg)}`, "_blank");
    setSubmitted(true);
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>
        {/* Header */}
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Zap size={12} /> ติดต่อเรา
          </div>
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            ติดต่อร้านเจ้นุชรถไฟฟ้า
          </h1>
          <p className="text-gray-500 mt-2 text-sm">ยินดีให้คำปรึกษาฟรี ไม่มีค่าใช้จ่าย</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Contact Info */}
          <div className="space-y-6">
            {/* Quick contact buttons */}
            <div className="grid grid-cols-1 gap-3">
              <a
                href={SHOP_INFO.phoneLink}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-pink-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <Phone size={20} className="text-pink-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Prompt, sans-serif" }}>
                    โทรศัพท์
                  </div>
                  <div className="text-pink-600 font-bold">{SHOP_INFO.phone}</div>
                  <div className="text-gray-400 text-xs">คลิกเพื่อโทรได้เลย</div>
                </div>
              </a>

              <a
                href={SHOP_INFO.lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-pink-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-pink-500/10 flex items-center justify-center group-hover:bg-pink-500/20 transition-colors">
                  <MessageCircle size={20} className="text-pink-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Prompt, sans-serif" }}>
                    Line Official
                  </div>
                  <div className="text-pink-600 font-bold">{SHOP_INFO.lineId}</div>
                  <div className="text-gray-400 text-xs">แอดไลน์เพื่อสอบถาม</div>
                </div>
              </a>

              <a
                href={SHOP_INFO.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-blue-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center group-hover:bg-blue-500/20 transition-colors">
                  <Facebook size={20} className="text-blue-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Prompt, sans-serif" }}>
                    Facebook
                  </div>
                  <div className="text-blue-600 font-bold text-sm">เจ้นุชรถไฟฟ้าร้านคอมโก้เซียร์รังสิต</div>
                  <div className="text-gray-400 text-xs">ส่งข้อความผ่าน Facebook</div>
                </div>
              </a>

              <a
                href={`mailto:${SHOP_INFO.email}`}
                className="flex items-center gap-4 p-4 bg-white rounded-xl border border-gray-100 hover:border-gray-300 hover:shadow-md transition-all group"
              >
                <div className="w-12 h-12 rounded-full bg-gray-100 flex items-center justify-center">
                  <Mail size={20} className="text-gray-500" />
                </div>
                <div>
                  <div className="font-semibold text-gray-900 text-sm" style={{ fontFamily: "Prompt, sans-serif" }}>
                    อีเมล
                  </div>
                  <div className="text-gray-600 font-medium text-sm">{SHOP_INFO.email}</div>
                </div>
              </a>
            </div>

            {/* Location & Hours */}
            <div className="bg-white rounded-xl border border-gray-100 p-5 space-y-4">
              <div className="flex items-start gap-3">
                <MapPin size={18} className="text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: "Prompt, sans-serif" }}>
                    ที่อยู่ร้าน
                  </div>
                  <div className="text-gray-600 text-sm">{SHOP_INFO.address}</div>
                  <a
                    href={SHOP_INFO.googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-pink-600 text-xs hover:underline mt-1 inline-block"
                  >
                    เปิดใน Google Maps →
                  </a>
                </div>
              </div>
              <div className="border-t border-gray-100 pt-4 flex items-start gap-3">
                <Clock size={18} className="text-pink-500 mt-0.5 shrink-0" />
                <div>
                  <div className="font-semibold text-gray-900 text-sm mb-1" style={{ fontFamily: "Prompt, sans-serif" }}>
                    เวลาทำการ
                  </div>
                  <div className="text-gray-600 text-sm">{SHOP_INFO.hours}</div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-white rounded-xl border border-gray-100 p-6">
            <h2 className="font-bold text-gray-900 text-lg mb-4" style={{ fontFamily: "Prompt, sans-serif" }}>
              ส่งข้อความหาเรา
            </h2>

            {submitted ? (
              <div className="text-center py-10">
                <CheckCircle size={48} className="text-pink-500 mx-auto mb-3" />
                <h3 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Prompt, sans-serif" }}>
                  ส่งข้อความสำเร็จ!
                </h3>
                <p className="text-gray-500 text-sm">เราจะติดต่อกลับโดยเร็วที่สุด</p>
                <button
                  onClick={() => setSubmitted(false)}
                  className="mt-4 text-pink-600 text-sm hover:underline"
                >
                  ส่งข้อความอีกครั้ง
                </button>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: "Prompt, sans-serif" }}>
                    ชื่อ-นามสกุล *
                  </label>
                  <input
                    type="text"
                    required
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                    placeholder="กรอกชื่อของคุณ"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: "Prompt, sans-serif" }}>
                    เบอร์โทรศัพท์ *
                  </label>
                  <input
                    type="tel"
                    required
                    value={formData.phone}
                    onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors"
                    placeholder="0xx-xxx-xxxx"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-700 mb-1" style={{ fontFamily: "Prompt, sans-serif" }}>
                    ข้อความ / สิ่งที่ต้องการสอบถาม *
                  </label>
                  <textarea
                    required
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-pink-400 focus:ring-1 focus:ring-pink-400 transition-colors resize-none"
                    placeholder="สอบถามเรื่องสินค้า ราคา หรืออื่นๆ..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full py-3 bg-[#0a0a0a] text-white font-bold rounded-lg hover:bg-pink-600 transition-colors text-sm"
                  style={{ fontFamily: "Prompt, sans-serif" }}
                >
                  ส่งข้อความ
                </button>
                <p className="text-xs text-gray-400 text-center">
                  ข้อความจะถูกส่งผ่าน Facebook Messenger
                </p>
              </form>
            )}
          </div>
        </div>

        {/* Map */}
        <div className="mt-10 rounded-xl overflow-hidden border border-gray-200 shadow-md h-72">
          <iframe
            src={mapsEmbedUrl}
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="แผนที่ร้านเจ้นุชรถไฟฟ้า"
          />
        </div>
      </div>
    </div>
  );
}
