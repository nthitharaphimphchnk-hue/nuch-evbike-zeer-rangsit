/*
 * Home Page — Thai Premium EV Design (White & Pink)
 * Hero Slider + Product Categories + Featured Products + Services + Reviews + Contact CTA
 */

import { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "wouter";
import { HERO_SLIDES, PRODUCTS, SERVICES, REVIEWS, SHOP_INFO } from "@/lib/data";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function Home() {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % HERO_SLIDES.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? HERO_SLIDES.length - 1 : prev - 1
    );
  };

  const featuredProducts = PRODUCTS.slice(0, 4);
  const categories = [
    { id: "motorcycle", label: "มอเตอร์ไซค์ไฟฟ้า", href: "/products?cat=motorcycle" },
    { id: "bicycle", label: "จักรยานไฟฟ้า", href: "/products?cat=bicycle" },
    { id: "tricycle", label: "สามล้อไฟฟ้า", href: "/products?cat=tricycle" },
    { id: "accessories", label: "อะไหล่ & อุปกรณ์", href: "/products?cat=accessories" },
  ];

  return (
    <div className="min-h-screen bg-white">
      {/* Hero Slider */}
      <section className="relative h-screen bg-gray-100 overflow-hidden pt-24">
        <div className="absolute top-28 left-4 md:left-8 z-20">
          <BackButton variant="glass" />
        </div>
        {HERO_SLIDES.map((slide, idx) => (
          <div
            key={idx}
            className={`absolute inset-0 transition-opacity duration-1000 ${
              idx === currentSlide ? "opacity-100" : "opacity-0"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
              <div className="text-center text-white max-w-2xl px-4">
                <div className="inline-flex items-center justify-center px-3 py-1 rounded-full bg-white/10 border border-white/20 text-xs font-medium mb-3">
                  {SHOP_INFO.fullName}
                </div>
                <h1 className="font-bold text-4xl md:text-5xl mb-4" style={{ fontFamily: "Prompt, sans-serif" }}>
                  {slide.title}
                </h1>
                <p className="text-lg md:text-xl mb-2 text-gray-100">{slide.subtitle}</p>
                <p className="text-sm md:text-base text-white/90 mb-8">
                  {SHOP_INFO.slogan} • {SHOP_INFO.addressShort} • {SHOP_INFO.hours}
                </p>
                <div className="flex flex-wrap gap-3 justify-center">
                  <Link href="/products">
                    <a className="px-6 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
                      ดูสินค้า
                    </a>
                  </Link>
                  <Link href="/contact">
                    <a className="px-6 py-3 bg-white text-pink-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                      สอบถาม
                    </a>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}

        {/* Slider Controls */}
        <button
          onClick={prevSlide}
          className="absolute left-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
        >
          <ChevronLeft size={24} />
        </button>
        <button
          onClick={nextSlide}
          className="absolute right-4 top-1/2 -translate-y-1/2 z-10 bg-white/80 hover:bg-white text-gray-900 p-2 rounded-full transition-colors"
        >
          <ChevronRight size={24} />
        </button>

        {/* Dots */}
        <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-2 z-10">
          {HERO_SLIDES.map((_, idx) => (
            <button
              key={idx}
              onClick={() => setCurrentSlide(idx)}
              className={`w-2 h-2 rounded-full transition-all ${
                idx === currentSlide
                  ? "bg-pink-600 w-8"
                  : "bg-white/60 hover:bg-white"
              }`}
            />
          ))}
        </div>

        {/* Slide Counter */}
        <div className="absolute bottom-6 right-6 text-white text-base text-sm bg-black/40 px-3 py-1 rounded-full">
          {currentSlide + 1} / {HERO_SLIDES.length}
        </div>
      </section>

      {/* Category Navigation - LION EV style: clean, minimal */}
      <section className="bg-white border-b border-gray-100">
        <div className="container py-6">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {categories.map((cat) => (
              <Link key={cat.id} href={cat.href}>
                <a className="group bg-gray-50 rounded-xl p-4 text-center border border-gray-100 hover:border-pink-400 hover:shadow-md transition-all">
                  <h3 className="text-sm font-semibold text-gray-900 group-hover:text-pink-500 transition-colors uppercase tracking-wide">
                    {cat.label}
                  </h3>
                </a>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Promotion Banner Section */}
      <section className="py-8 bg-white">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {/* Main Promo Banner */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/promo_banner_main-Vhi4yBfv3XE8DDFHKXWAPX.webp"
                alt="ผ่อนชำระ 0% นาน 12 เดือน"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                <Link href="/contact">
                  <a className="px-8 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors text-lg">
                    สอบถามเลย
                  </a>
                </Link>
              </div>
            </div>

            {/* Secondary Promo Banner */}
            <div className="relative rounded-lg overflow-hidden shadow-lg hover:shadow-xl transition-shadow">
              <img
                src="https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/promo_banner_secondary-5kTAhEJ8Aa4bW5GLsMTL4W.webp"
                alt="ซื้อแบตเตอรี่ได้ฟรี บริการซ่อมฟรี 1 ปี"
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-black/20 hover:bg-black/10 transition-colors flex items-center justify-center">
                <Link href="/products">
                  <a className="px-8 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors text-lg">
                    ดูสินค้า
                  </a>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Products */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              สินค้าแนะนำ
            </h2>
            <p className="text-base text-gray-600">
              สินค้าหลากหลายรุ่น พร้อมให้คำปรึกษาเลือกให้เหมาะกับการใช้งาน
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
            {featuredProducts.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center">
            <Link href="/products">
              <a className="inline-block px-8 py-3 bg-pink-600 text-white rounded-lg font-medium hover:bg-pink-700 transition-colors">
                ดูสินค้าทั้งหมด
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="bg-gray-900 text-white py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl mb-2">
              ประหยัด คุ้มค่า รักษ์โลก
            </h2>
            <p className="text-base text-gray-300">
              เลือกรถไฟฟ้า เลือกอนาคตที่ดี
            </p>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="font-bold font-bold text-4xl text-pink-600 mb-2">
                0
              </div>
              <p className="text-base text-gray-300">ค่าน้ำมัน</p>
              <p className="text-base text-xs text-gray-400 mt-1">
                ประหยัดค่าใช้งาน 100%
              </p>
            </div>
            <div className="text-center">
              <div className="font-bold font-bold text-4xl text-pink-600 mb-2">
                80+
              </div>
              <p className="text-base text-gray-300">กม./ชาร์จ</p>
              <p className="text-base text-xs text-gray-400 mt-1">
                ไปไหนก็ได้ไม่ห่วง
              </p>
            </div>
            <div className="text-center">
              <div className="font-bold font-bold text-4xl text-pink-600 mb-2">{SHOP_INFO.rating.toFixed(1)}</div>
              <p className="text-base text-gray-300">คะแนนรีวิว</p>
              <p className="text-base text-xs text-gray-400 mt-1">จากลูกค้าจริงบน Facebook</p>
            </div>
            <div className="text-center">
              <div className="font-bold font-bold text-4xl text-pink-600 mb-2">
                100%
              </div>
              <p className="text-base text-gray-300">พอใจลูกค้า</p>
              <p className="text-base text-xs text-gray-400 mt-1">
                บริการหลังการขายดี
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              บริการของเรา
            </h2>
            <p className="text-base text-gray-600">
              บริการครบครัน ดูแลลูกค้าจริงใจ
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {SERVICES.map((service, idx) => (
              <div
                key={idx}
                className="bg-white rounded-lg p-6 border border-gray-200 hover:shadow-lg hover:border-pink-300 transition-all"
              >
                <h3 className="font-bold font-bold text-lg text-gray-900 mb-2">
                  {service.title}
                </h3>
                <p className="text-base text-gray-600 text-sm">
                  {service.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Reviews */}
      <section className="py-16">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="font-bold font-bold text-3xl md:text-4xl text-gray-900 mb-2">
              ลูกค้าพูดถึงเรา
            </h2>
            <div className="flex items-center justify-center gap-1 mb-2">
              {[...Array(5)].map((_, i) => (
                <span key={i} className="text-yellow-400 text-xl">
                  ★
                </span>
              ))}
              <span className="text-base text-gray-600 ml-2">
                {SHOP_INFO.rating.toFixed(1)} ({SHOP_INFO.reviewCount} รีวิว)
              </span>
            </div>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {REVIEWS.slice(0, 4).map((review, idx) => (
              <div
                key={idx}
                className="bg-gray-50 rounded-lg p-6 border border-gray-200"
              >
                <div className="flex items-center gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <span key={i} className="text-yellow-400">
                      ★
                    </span>
                  ))}
                </div>
                <p className="text-base text-gray-700 text-sm mb-4">
                  "{review.text}"
                </p>
                <p className="text-base font-medium text-gray-900">
                  {review.name}
                </p>
                <p className="text-base text-xs text-gray-500">
                  {review.date}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center mt-8">
            <Link href="/reviews">
              <a className="inline-block text-pink-600 font-medium hover:text-pink-700">
                ดูรีวิวทั้งหมดบน Facebook →
              </a>
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="bg-gradient-to-r from-pink-600 to-pink-700 text-white py-16">
        <div className="container text-center">
          <h2 className="font-bold font-bold text-3xl md:text-4xl mb-4">
            พร้อมเปลี่ยนไปรถไฟฟ้าแล้วหรือ?
          </h2>
          <p className="text-base text-lg text-white/90 mb-8 max-w-2xl mx-auto">
            ติดต่อ{SHOP_INFO.name}วันนี้ เพื่อสอบถามรุ่นที่เหมาะกับคุณและรับโปรโมชันหน้าร้าน
          </p>
          <div className="flex flex-wrap gap-4 justify-center">
            <Link href="/contact">
              <a className="inline-flex items-center justify-center min-w-[200px] px-8 py-3 bg-white text-pink-600 rounded-lg font-medium hover:bg-gray-100 transition-colors">
                ติดต่อเรา
              </a>
            </Link>
            <a
              href={SHOP_INFO.phoneLink}
              className="inline-flex items-center justify-center min-w-[200px] px-8 py-3 border-2 border-white text-white rounded-lg font-medium hover:bg-white/10 transition-colors"
            >
              โทร {SHOP_INFO.phone}
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
