/*
 * Reviews Page — Thai Premium EV Design
 */

import { Star, Zap, ArrowRight } from "lucide-react";
import { REVIEWS, SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";

export default function Reviews() {
  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Star size={12} /> รีวิวลูกค้า
          </div>
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            ลูกค้าพูดถึงเรา
          </h1>
          <div className="flex items-center justify-center gap-1 mt-3">
            {[...Array(5)].map((_, i) => (
              <Star key={i} size={20} className="text-yellow-400 fill-yellow-400" />
            ))}
          </div>
          <p className="text-gray-500 mt-2 text-sm">
            5.0 คะแนนเต็ม จาก 15 รีวิว (Facebook)
          </p>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-3 gap-4 mb-10 max-w-lg mx-auto">
          {[
            { value: "5.0", label: "คะแนนเฉลี่ย" },
            { value: "15", label: "รีวิวทั้งหมด" },
            { value: "100%", label: "แนะนำร้าน" },
          ].map((stat, i) => (
            <div key={i} className="bg-white rounded-xl p-4 text-center border border-gray-100">
              <div className="text-2xl font-black text-pink-600" style={{ fontFamily: "Prompt, sans-serif" }}>
                {stat.value}
              </div>
              <div className="text-gray-500 text-xs mt-1">{stat.label}</div>
            </div>
          ))}
        </div>

        {/* Reviews Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-10">
          {REVIEWS.map((review) => (
            <div
              key={review.id}
              className="bg-white rounded-xl p-6 border border-gray-100 hover:border-pink-200 hover:shadow-md transition-all"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="w-11 h-11 rounded-full bg-pink-500/10 border border-pink-500/20 flex items-center justify-center text-pink-600 font-bold">
                  {review.avatar}
                </div>
                <div>
                  <div className="font-semibold text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
                    {review.name}
                  </div>
                  <div className="text-gray-400 text-xs">{review.date}</div>
                </div>
                <div className="ml-auto flex gap-0.5">
                  {[...Array(review.rating)].map((_, i) => (
                    <Star key={i} size={14} className="text-yellow-400 fill-yellow-400" />
                  ))}
                </div>
              </div>
              <p className="text-gray-600 text-sm leading-relaxed">{review.text}</p>
            </div>
          ))}
        </div>

        {/* CTA to Facebook */}
        <div className="text-center bg-white rounded-xl border border-gray-100 p-8">
          <Zap size={32} className="text-pink-500 mx-auto mb-3" />
          <h2 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Prompt, sans-serif" }}>
            ดูรีวิวเพิ่มเติมบน Facebook
          </h2>
          <p className="text-gray-500 text-sm mb-4">
            มีรีวิวจากลูกค้าจริงมากกว่า 15 รีวิวบนเพจ Facebook
          </p>
          <a
            href={SHOP_INFO.facebook}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 px-6 py-3 bg-blue-600 text-white text-sm font-bold rounded-lg hover:bg-blue-500 transition-colors"
            style={{ fontFamily: "Prompt, sans-serif" }}
          >
            ดูรีวิวบน Facebook <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </div>
  );
}
