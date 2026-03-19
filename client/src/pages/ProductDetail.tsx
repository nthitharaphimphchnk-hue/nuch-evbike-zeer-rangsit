/*
 * ProductDetail Page — E-commerce layout for real product sales
 */

import { useEffect, useMemo, useState } from "react";
import { useParams, Link } from "wouter";
import {
  Phone,
  MessageCircle,
  Zap,
  CheckCircle2,
  Shield,
  ArrowLeft,
  CreditCard,
  Truck,
} from "lucide-react";
import { PRODUCTS } from "@/data/products";
import BackButton from "@/components/BackButton";

const PHONE_CTA = "tel:0816877249";
const LINE_CTA = "https://line.me/ti/p/@324ewmll";
const JNT_S15_ID = "jnt-s15";
const JNT_S15_META_TITLE = "JNT-S15 รถไฟฟ้า ราคา 39,900 บาท | เจ้นุชรถไฟฟ้า";
const JNT_S15_META_DESCRIPTION =
  "รถไฟฟ้า JNT-S15 ราคา 39,900 บาท รวมจดทะเบียน วิ่งได้ 40 กม. ประหยัดไฟ เหมาะใช้งานในเมือง พร้อมบริการหลังการขาย";

const SPEC_LABELS: Record<string, string> = {
  battery: "แบตเตอรี่",
  motor: "มอเตอร์",
  power: "กำลังมอเตอร์",
  speed: "ความเร็ว",
  range: "ระยะทาง",
  chargeTime: "เวลาชาร์จ",
  brake: "เบรก",
  tire: "ยาง",
  weight: "น้ำหนัก",
};

const SPEC_PRIORITY = [
  "battery",
  "motor",
  "speed",
  "range",
  "chargeTime",
  "brake",
  "tire",
];

function formatPrice(value: string | number | null) {
  if (value == null) {
    return "ติดต่อสอบถาม";
  }
  if (typeof value === "number") {
    return `${value.toLocaleString("th-TH")} บาท`;
  }
  return value;
}

export default function ProductDetail() {
  const { id } = useParams<{ id: string }>();
  const product = PRODUCTS.find((p) => p.id === id);

  const galleryImages = useMemo(() => {
    if (!product) return [];
    if (product.images && product.images.length > 0) return product.images;
    return [product.image];
  }, [product]);

  const [selectedImage, setSelectedImage] = useState(0);

  useEffect(() => {
    setSelectedImage(0);
  }, [id]);

  useEffect(() => {
    if (!product) return;
    if (product.id !== JNT_S15_ID) return;

    document.title = JNT_S15_META_TITLE;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) {
      metaDesc.setAttribute("content", JNT_S15_META_DESCRIPTION);
    }
  }, [product]);

  if (!product) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 flex items-center justify-center">
        <div className="text-center">
          <Zap size={48} className="text-gray-300 mx-auto mb-3" />
          <h1
            className="text-xl font-bold text-gray-900 mb-2"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
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

  const orderedSpecs = SPEC_PRIORITY.map((key) => ({
    key,
    label: SPEC_LABELS[key] || key,
    value: product.specs?.[key],
  })).filter((item) => Boolean(item.value));

  const sellingPoints = product.sellingPoints ?? [
    "ประหยัดค่าน้ำมัน",
    "ดูแลง่าย",
    "เหมาะกับใช้งานทุกวัน",
    "รับประกัน + มีบริการหลังการขาย",
  ];

  const productDescription =
    product.description ??
    `${product.name} เป็น${product.category === "utility" ? "รถไฟฟ้าอเนกประสงค์" : product.category === "tricycle" ? "สามล้อไฟฟ้า" : "รถไฟฟ้า"}ที่เหมาะกับการใช้งานจริง สามารถสอบถามรายละเอียดเพิ่มเติมได้ที่ร้าน`;

  const productHighlights =
    product.highlights && product.highlights.length > 0
      ? product.highlights
      : [
          "มีหลายรุ่นให้เลือก",
          "สามารถสอบถามสเปกเพิ่มเติมได้",
          "มีบริการหลังการขาย",
        ];

  return (
    <div className="min-h-screen bg-gray-50 pt-24 pb-24 md:pb-0">
      <div className="container py-8">
        <div className="mb-6">
          <BackButton />
        </div>

        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">
            <a className="hover:text-pink-600">หน้าแรก</a>
          </Link>
          <span>›</span>
          <Link href="/products">
            <a className="hover:text-pink-600">สินค้า</a>
          </Link>
          <span>›</span>
          <span className="text-gray-900">{product.name}</span>
        </nav>

        <section className="bg-white rounded-2xl border border-gray-100 shadow-sm p-4 md:p-6 lg:p-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-10">
            <div>
              <div className="rounded-xl md:rounded-2xl overflow-hidden bg-gray-100 border border-gray-100 aspect-square md:aspect-[4/3]">
                <img
                  src={galleryImages[selectedImage]}
                  alt={`${product.name} ${selectedImage + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>

              <div className="grid grid-cols-3 gap-2 mt-3">
                {galleryImages.map((image, index) => (
                  <button
                    key={`${image}-${index}`}
                    type="button"
                    onClick={() => setSelectedImage(index)}
                    className={`rounded-lg overflow-hidden border transition-all ${
                      selectedImage === index
                        ? "border-pink-500 ring-2 ring-pink-200"
                        : "border-gray-200 hover:border-pink-300"
                    }`}
                    aria-label={`ดูรูปสินค้า ${index + 1}`}
                  >
                    <img
                      src={image}
                      alt={`${product.name} thumbnail ${index + 1}`}
                      className="w-full h-20 md:h-24 object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            <div>
              {product.badge && (
                <div className="inline-flex items-center gap-1 bg-pink-50 text-pink-600 text-xs font-bold px-3 py-1 rounded-full mb-3">
                  {product.isHot && <Zap size={10} />}
                  {product.badge}
                </div>
              )}

              <h1
                className="text-3xl md:text-4xl font-black text-gray-900 mb-2"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                {product.name}
              </h1>

              <div
                className="text-3xl md:text-4xl font-black text-red-600 mb-2"
                style={{ fontFamily: "Prompt, sans-serif" }}
              >
                {formatPrice(product.price)}
              </div>

              {product.subtitle && (
                <p className="text-sm md:text-base text-gray-600 mb-4">{product.subtitle}</p>
              )}

              <p className="text-gray-600 text-sm leading-relaxed mb-6">{productDescription}</p>

              <ul className="space-y-2 mb-6">
                {productHighlights.map((item, idx) => (
                  <li key={idx} className="flex items-start gap-2 text-sm text-gray-700">
                    <CheckCircle2 size={16} className="text-green-600 mt-0.5 shrink-0" />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 mb-5">
                <a
                  href={PHONE_CTA}
                  className="inline-flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors text-sm"
                  style={{ fontFamily: "Prompt, sans-serif" }}
                >
                  <Phone size={16} />
                  โทรเลย
                </a>
                <a
                  href={LINE_CTA}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors text-sm"
                  style={{ fontFamily: "Prompt, sans-serif" }}
                >
                  <MessageCircle size={16} />
                  แชท LINE
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2 text-xs">
                <div className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-100 p-2.5 text-gray-700">
                  <CreditCard size={14} className="text-pink-600 shrink-0" />
                  ผ่อน 0% ได้
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-100 p-2.5 text-gray-700">
                  <Truck size={14} className="text-pink-600 shrink-0" />
                  ส่งทั่วประเทศ
                </div>
                <div className="flex items-center gap-2 rounded-lg bg-gray-50 border border-gray-100 p-2.5 text-gray-700">
                  <Shield size={14} className="text-pink-600 shrink-0" />
                  มีบริการหลังการขาย
                </div>
              </div>
            </div>
          </div>
        </section>

        {orderedSpecs.length > 0 && (
          <section className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
            <h2
              className="text-xl md:text-2xl font-black text-gray-900 mb-4"
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              SPEC
            </h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              {orderedSpecs.map((item) => (
                <div key={item.key} className="rounded-xl border border-gray-100 bg-gray-50 p-4">
                  <div className="text-sm text-gray-500">{item.label}</div>
                  <div className="text-base font-bold text-gray-900 mt-1">{item.value}</div>
                </div>
              ))}
            </div>
          </section>
        )}

        <section className="mt-8 bg-white rounded-2xl border border-gray-100 shadow-sm p-5 md:p-6">
          <h2
            className="text-xl md:text-2xl font-black text-gray-900 mb-3"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            ทำไมต้องรุ่นนี้?
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            {sellingPoints.map((point, index) => (
              <div
                key={index}
                className="flex items-start gap-2 rounded-xl border border-pink-100 bg-pink-50/40 p-4"
              >
                <CheckCircle2 size={18} className="text-green-600 mt-0.5 shrink-0" />
                <p className="text-sm md:text-base text-gray-800">{point}</p>
              </div>
            ))}
          </div>
        </section>

        <div className="mt-10">
          <Link href="/products">
            <a className="inline-flex items-center gap-2 text-sm text-gray-500 hover:text-pink-600 transition-colors">
              <ArrowLeft size={14} />
              กลับไปหน้าสินค้าทั้งหมด
            </a>
          </Link>
        </div>
      </div>

      <div className="md:hidden fixed bottom-0 inset-x-0 z-50 border-t border-gray-200 bg-white/95 backdrop-blur">
        <div className="container py-3 grid grid-cols-2 gap-3">
          <a
            href={PHONE_CTA}
            className="inline-flex items-center justify-center gap-2 py-3 bg-green-600 hover:bg-green-700 text-white font-bold rounded-xl transition-colors text-sm"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            <Phone size={16} />
            โทรเลย
          </a>
          <a
            href={LINE_CTA}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center justify-center gap-2 py-3 bg-pink-600 hover:bg-pink-700 text-white font-bold rounded-xl transition-colors text-sm"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            <MessageCircle size={16} />
            แชท LINE
          </a>
        </div>
      </div>
    </div>
  );
}
