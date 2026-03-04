/*
 * ProductCard — Thai Premium EV Design (White & Pink)
 * Product showcase with image, name, specs, and CTA
 */

import { Link } from "wouter";
import { MessageCircle, Eye } from "lucide-react";
import { SHOP_INFO } from "@/lib/data";

interface Product {
  id: string;
  category?: string;
  name: string;
  badge?: string;
  image: string;
  price: string;
  priceNote?: string;
  specs?: Record<string, string>;
  highlights?: string[];
  description?: string;
  isHot?: boolean;
}

interface ProductCardProps {
  product: Product;
}

export default function ProductCard({ product }: ProductCardProps) {
  return (
    <div className="group bg-white rounded-lg overflow-hidden border-2 border-gray-200 hover:border-pink-600 hover:shadow-lg transition-all duration-300">
      {/* Image Container */}
      <div className="relative overflow-hidden bg-gray-100 h-48">
        <img
          src={product.image}
          alt={product.name}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          loading="lazy"
        />

        {/* Badge */}
        {product.badge && (
          <div className="absolute top-3 right-3 bg-pink-600 text-white px-3 py-1 rounded-full text-xs font-medium font-prompt">
            {product.badge}
          </div>
        )}

        {/* Hot Badge */}
        {product.isHot && (
          <div className="absolute top-3 left-3 bg-red-500 text-white px-3 py-1 rounded-full text-xs font-bold font-prompt animate-pulse">
            ขายดี
          </div>
        )}
      </div>

      {/* Content */}
      <div className="p-4">
        {/* Category */}
        {product.category && (
          <p className="text-xs font-sarabun text-gray-500 uppercase tracking-wide mb-1">
            {product.category}
          </p>
        )}

        {/* Name */}
        <h3 className="font-prompt font-bold text-lg text-gray-900 mb-2 group-hover:text-pink-600 transition-colors line-clamp-2">
          {product.name}
        </h3>

        {/* Price */}
        <div className="mb-3">
          <p className="font-prompt font-bold text-pink-600 text-lg">
            {product.price}
          </p>
          {product.priceNote && (
            <p className="text-xs font-sarabun text-gray-500">
              {product.priceNote}
            </p>
          )}
        </div>

        {/* Highlights */}
        {product.highlights && (
          <ul className="mb-4 space-y-1">
            {product.highlights.slice(0, 2).map((highlight, idx) => (
              <li
                key={idx}
                className="text-xs font-sarabun text-gray-600 flex items-start gap-2"
              >
                <span className="text-pink-600 font-bold shrink-0">✓</span>
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        )}

        {/* CTA Buttons */}
        <div className="grid grid-cols-2 gap-2">
          <Link href={`/products/${product.id}`}>
            <a className="flex items-center justify-center gap-1 px-3 py-2 bg-gray-900 text-white rounded-lg text-xs font-medium font-prompt hover:bg-gray-800 transition-colors">
              <Eye size={14} />
              ดูรายละเอียด
            </a>
          </Link>
          <a
            href={`${SHOP_INFO.facebook}?message=สอบถามรุ่น: ${encodeURIComponent(product.name)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center gap-1 px-3 py-2 border-2 border-pink-600 text-pink-600 rounded-lg text-xs font-medium font-prompt hover:bg-pink-50 transition-colors"
          >
            <MessageCircle size={14} />
            สอบถาม
          </a>
        </div>
      </div>
    </div>
  );
}
