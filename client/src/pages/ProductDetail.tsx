/*
 * ProductDetail Page — Thai Premium EV Design
 */

import { useParams, Link } from "wouter";
import { Phone, MessageCircle, Zap, CheckCircle, Shield } from "lucide-react";
import { PRODUCTS, SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 flex items-center justify-center">
        <div className="text-center">
          <Zap size={48} className="text-gray-300 mx-auto mb-3" />
          <h1 className="text-xl font-bold text-gray-900 mb-2" style={{ fontFamily: "Prompt, sans-serif" }}>
            ไม่พบสินค้า
          </h1>
          <Link href="/products">
          <a className="inline-flex items-center gap-2 text-sm font-medium text-pink-600 hover:text-pink-700">
            ← กลับไปหน้าสินค้า
          </a>
        </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-8">
        <div className="mb-6">
          <BackButton />
        </div>
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/" className="hover:text-pink-600">หน้าแรก</Link>
          <span>›</span>
          <Link href="/products" className="hover:text-pink-600">สินค้า</Link>
          <span>›</span>
          <span className="text-gray-900">{product.name}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
          {/* Image */}
          <div>
            <div className="rounded-2xl overflow-hidden bg-white border border-gray-100 shadow-sm aspect-[4/3]">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          {/* Details */}
          <div>
            {product.badge && (
              <div className="inline-flex items-center gap-1 bg-pink-500/10 text-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                {product.isHot && <Zap size={10} />}
                {product.badge}
              </div>
            )}

            <h1 className="text-3xl font-black text-gray-900 mb-3" style={{ fontFamily: "Prompt, sans-serif" }}>
              {product.name}
            </h1>

            <p className="text-gray-600 text-sm leading-relaxed mb-6">{product.description}</p>

            {/* Highlights */}
            <div className="mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Prompt, sans-serif" }}>
                จุดเด่น
              </h3>
              <ul className="space-y-2">
                {product.highlights.map((h, i) => (
                  <li key={i} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle size={16} className="text-pink-500 mt-0.5 shrink-0" />
                    {h}
                  </li>
                ))}
              </ul>
            </div>

            {/* Specs */}
            <div className="bg-gray-50 rounded-xl p-5 mb-6">
              <h3 className="font-bold text-gray-900 text-sm mb-3" style={{ fontFamily: "Prompt, sans-serif" }}>
                สเปคเบื้องต้น
              </h3>
              <div className="grid grid-cols-2 gap-3">
                {Object.entries(product.specs).map(([key, value]) => {
                  const labels: Record<string, string> = {
                    power: "กำลังมอเตอร์",
                    battery: "แบตเตอรี่",
                    range: "ระยะทาง/ชาร์จ",
                    speed: "ความเร็วสูงสุด",
                    weight: "น้ำหนักรถ",
                  };
                  return (
                    <div key={key} className="bg-white rounded-lg p-3 border border-gray-100">
                      <div className="text-gray-500 text-xs">{labels[key] || key}</div>
                      <div className="text-gray-900 font-bold text-sm mt-0.5" style={{ fontFamily: "Prompt, sans-serif" }}>
                        {value}
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Price */}
            <div className="mb-6">
              <div className="text-2xl font-black text-pink-600" style={{ fontFamily: "Prompt, sans-serif" }}>
                {product.price}
              </div>
              {product.priceNote && (
                <div className="text-gray-400 text-sm mt-1">{product.priceNote}</div>
              )}
            </div>

            {/* CTA */}
            <div className="flex flex-col gap-3">
              <a
                href={SHOP_INFO.phoneLink}
                className="flex items-center justify-center gap-2 py-3 bg-pink-500 hover:bg-pink-400 text-black font-bold rounded-xl transition-all text-sm"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                <Phone size={16} />
                โทรสอบถามราคา {SHOP_INFO.phone}
              </a>
              <a
                href={`${SHOP_INFO.facebook}?message=สนใจสินค้า: ${encodeURIComponent(product.name)}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all text-sm"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                <MessageCircle size={16} />
                แชท Facebook
              </a>
              <a
                href={SHOP_INFO.lineLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2 py-3 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-black font-bold rounded-xl transition-all text-sm"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                แอดไลน์ {SHOP_INFO.lineId}
              </a>
            </div>

            {/* Warranty badge */}
            <div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
              <Shield size={14} className="text-pink-500" />
              มีการรับประกันสินค้า สอบถามรายละเอียดได้ที่ร้าน
            </div>
          </div>
        </div>

        {/* Back button */}
        <div className="mt-10">
          <Link
            href="/products"
            className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition-colors"
          >
            <ArrowLeft size={14} />
            กลับไปหน้าสินค้าทั้งหมด
          </Link>
        </div>
      </div>
    </div>
  );
}
