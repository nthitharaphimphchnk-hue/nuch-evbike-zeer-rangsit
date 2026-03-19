/*
 * Products Page — Multi-product e-commerce catalog
 */

import { useState } from "react";
import { useSearch } from "wouter";
import { Zap, Filter } from "lucide-react";
import { PRODUCTS, PRODUCT_CATEGORIES } from "@/data/products";
import ProductCard from "@/components/ProductCard";
import BackButton from "@/components/BackButton";

export default function Products() {
  const search = useSearch();
  const params = new URLSearchParams(search);
  const initialCat = params.get("cat") || "all";
  const [activeCategory, setActiveCategory] = useState(initialCat);

  const filtered =
    activeCategory === "all"
      ? PRODUCTS
      : PRODUCTS.filter((p) => p.category === activeCategory);

  const allCategories = [{ id: "all", name: "ทั้งหมด" }, ...PRODUCT_CATEGORIES];

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="mb-8 rounded-3xl bg-white border border-gray-100 shadow-sm p-6 md:p-8">
          <div className="inline-flex items-center gap-1.5 text-[#ff2d7a] text-xs font-medium mb-2">
            <Zap size={12} /> สินค้าทั้งหมด
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            รถไฟฟ้าทุกประเภท
          </h1>
          <p className="text-gray-500 mt-2 text-sm md:text-base max-w-2xl">
            เลือกดูสินค้าจริงจากหลายรุ่น หลายหมวด เหมือน mini store พร้อมคลิกดูรายละเอียดแต่ละรุ่นได้ทันที
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          <Filter size={14} className="text-gray-400 shrink-0" />
          {allCategories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all ${
                activeCategory === cat.id
                  ? "bg-[#ff2d7a] text-white shadow-sm"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-[#ff2d7a] hover:text-[#ff2d7a]"
              }`}
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filtered.map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        ) : (
          <div className="text-center py-20 text-gray-400">
            <Zap size={40} className="mx-auto mb-3 opacity-30" />
            <p>ไม่พบสินค้าในหมวดนี้</p>
          </div>
        )}
      </div>
    </div>
  );
}
