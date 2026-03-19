/*
 * Blog Listing Page — เจ้นุชรถไฟฟ้า SEO Articles
 */

import { useEffect } from "react";
import { Link } from "wouter";
import { Zap, Calendar, FolderOpen } from "lucide-react";
import { BLOG_POSTS } from "@/lib/blogData";
import BackButton from "@/components/BackButton";

const BLOG_META = {
  title: "บทความรถไฟฟ้า | มอเตอร์ไซค์ไฟฟ้า จักรยานไฟฟ้า สามล้อไฟฟ้า | เจ้นุชรถไฟฟ้า",
  description:
    "รวมบทความความรู้รถไฟฟ้า มอเตอร์ไซค์ไฟฟ้า จักรยานไฟฟ้า สามล้อไฟฟ้า วิธีดูแล แนะนำการเลือกซื้อ เซียร์รังสิต รังสิต เจ้นุชรถไฟฟ้า",
};

export default function Blog() {
  useEffect(() => {
    document.title = BLOG_META.title;
    const metaDesc = document.querySelector('meta[name="description"]');
    if (metaDesc) metaDesc.setAttribute("content", BLOG_META.description);
  }, []);

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>

        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Zap size={12} /> บทความ
          </div>
          <h1 className="text-3xl md:text-4xl font-black text-gray-900 mb-3" style={{ fontFamily: "Prompt, sans-serif" }}>
            บทความรถไฟฟ้า
          </h1>
          <p className="text-gray-500 text-sm max-w-2xl mx-auto">
            รวมบทความความรู้ มอเตอร์ไซค์ไฟฟ้า จักรยานไฟฟ้า สามล้อไฟฟ้า วิธีดูแล แนะนำการเลือกซื้อ จากเจ้นุชรถไฟฟ้า เซียร์รังสิต
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {BLOG_POSTS.map((post) => (
            <Link key={post.slug} href={`/blog/${post.slug}`}>
              <a className="block bg-white rounded-xl border border-gray-100 overflow-hidden hover:shadow-lg hover:border-pink-100 transition-all group">
                <div className="p-6">
                  <div className="flex items-center gap-2 text-xs text-gray-500 mb-2">
                    <span className="flex items-center gap-1">
                      <FolderOpen size={12} />
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1">
                      <Calendar size={12} />
                      {post.date}
                    </span>
                  </div>
                  <h2 className="font-bold text-gray-900 text-lg mb-2 group-hover:text-pink-600 transition-colors line-clamp-2" style={{ fontFamily: "Prompt, sans-serif" }}>
                    {post.title}
                  </h2>
                  <p className="text-gray-600 text-sm leading-relaxed line-clamp-3">{post.excerpt}</p>
                </div>
              </a>
            </Link>
          ))}
        </div>

        <div className="mt-12 text-center">
          <Link href="/products">
            <a className="inline-flex items-center gap-2 px-6 py-3 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-colors">
              ดูสินค้าทั้งหมด
            </a>
          </Link>
        </div>
      </div>
    </div>
  );
}
