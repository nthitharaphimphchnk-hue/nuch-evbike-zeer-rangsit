/*
 * Products Page — Thai Premium EV Design
 * All products with category filter
 */

import { useState } from "react";
import { useSearch } from "wouter";
import { Zap, Filter } from "lucide-react";
import { PRODUCTS, CATEGORIES } from "@/lib/data";
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

  const allCategories = [{ id: "all", name: "ทั้งหมด" }, ...CATEGORIES];

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>
        {/* Header */}
        <div className="mb-8">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Zap size={12} /> สินค้าทั้งหมด
          </div>
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            รถไฟฟ้าทุกประเภท
          </h1>
          <p className="text-gray-500 mt-1 text-sm">
            มอเตอร์ไซค์ไฟฟ้า จักรยานไฟฟ้า สามล้อไฟฟ้า อะไหล่และอุปกรณ์เสริม
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
                  ? "bg-[#0a0a0a] text-white"
                  : "bg-white border border-gray-200 text-gray-600 hover:border-pink-400 hover:text-pink-600"
              }`}
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              {cat.name}
            </button>
          ))}
        </div>

        {/* Products Grid */}
        {filtered.length > 0 ? (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
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
