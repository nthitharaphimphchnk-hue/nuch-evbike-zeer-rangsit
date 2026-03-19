/*
 * ProductCard — Catalog card for multi-product e-commerce grid
 */

import { Link } from "wouter";
import { MessageCircle, Eye } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

interface ProductCardProps {
  product: {
    id: string;
    category?: string;
    name: string;
    badge?: string;
    image: string;
    price: string | number | null;
    subtitle?: string;
    highlights?: string[];
  };
}

export default function ProductCard({ product }: ProductCardProps) {
  const displayPrice =
    product.price == null
      ? "ติดต่อสอบถาม"
      : typeof product.price === "number"
      ? `${product.price.toLocaleString("th-TH")} บาท`
      : product.price;

  const categoryLabels: Record<string, string> = {
    motorcycle: "มอเตอร์ไซค์ไฟฟ้า",
    tricycle: "สามล้อไฟฟ้า",
    utility: "รถไฟฟ้าอเนกประสงค์",
  };

  return (
    <div className="group bg-white rounded-2xl overflow-hidden border border-gray-200 hover:border-[#ff2d7a] hover:shadow-[0_18px_45px_rgba(17,24,39,0.10)] transition-all duration-300">
      {/* Image Container */}
      <Link href={`/product/${product.id}`}>
        <a className="block">
          <div className="relative overflow-hidden bg-gray-100 h-56 md:h-60">
            <img
              src={product.image}
              alt={product.name}
              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
              loading="lazy"
            />

            {product.badge && (
              <div className="absolute top-3 left-3 bg-[#ff2d7a] text-white px-3 py-1 rounded-full text-xs font-semibold">
                {product.badge}
              </div>
            )}
          </div>
        </a>
      </Link>

      {/* Content */}
      <div className="p-5">
        {/* Category */}
        {product.category && (
          <p className="text-xs text-gray-500 tracking-wide mb-1">
            {categoryLabels[product.category] || product.category}
          </p>
        )}

        {/* Name */}
        <Link href={`/product/${product.id}`}>
          <a className="block">
            <h3 className="font-prompt font-bold text-lg text-gray-900 mb-2 group-hover:text-[#ff2d7a] transition-colors line-clamp-2">
              {product.name}
            </h3>
          </a>
        </Link>

        {product.subtitle && (
          <p className="text-sm text-gray-500 mb-3 line-clamp-1">{product.subtitle}</p>
        )}

        {/* Price */}
        <div className="mb-4">
          <p className="font-prompt font-black text-[#ff2d7a] text-xl">
            {displayPrice}
          </p>
        </div>

        {/* Highlights */}
        {product.highlights && product.highlights.length > 0 && (
          <ul className="mb-5 space-y-2 min-h-[3.5rem]">
            {product.highlights.slice(0, 3).map((highlight, idx) => (
              <li
                key={idx}
                className="text-sm text-gray-600 flex items-start gap-2"
              >
                <span className="text-[#ff2d7a] font-bold shrink-0">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/product/${product.id}`}>
            <a className="flex items-center justify-center gap-1 px-3 py-3 bg-gray-900 text-white rounded-xl text-sm font-medium font-prompt hover:bg-gray-800 transition-colors">
              <Eye size={14} />
              ดูรายละเอียด
            </a>
          </Link>
          <a
            href={`${SHOP_INFO.facebook}?message=สอบถามรุ่น: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-3 py-3 border border-[#ff2d7a] text-[#ff2d7a] rounded-xl text-sm font-medium font-prompt hover:bg-pink-50 transition-colors"
          >
            <MessageCircle size={14} />
            สอบถาม
          </a>
        </div>
      </div>
    </div>
  );
}
