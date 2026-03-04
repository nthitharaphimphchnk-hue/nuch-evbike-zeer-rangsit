/*
 * FAQ Page — Thai Premium EV Design
 */

import { useState } from "react";
import { ChevronDown, Zap } from "lucide-react";
import { FAQS, SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <div className="container py-10 max-w-3xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>
        <div className="text-center mb-10">
          <div className="inline-flex items-center gap-1.5 text-pink-600 text-xs font-medium mb-2">
            <Zap size={12} /> FAQ
          </div>
          <h1 className="text-3xl font-black text-gray-900" style={{ fontFamily: "Prompt, sans-serif" }}>
            คำถามที่พบบ่อย
          </h1>
          <p className="text-gray-500 mt-2 text-sm">รวมคำถามและคำตอบที่ลูกค้าถามบ่อย</p>
        </div>

        <div className="space-y-3">
          {FAQS.map((faq, i) => (
            <div
              key={i}
              className="bg-white rounded-xl border border-gray-100 overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === i ? null : i)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-gray-50 transition-colors"
              >
                <span className="font-semibold text-gray-900 text-sm pr-4" style={{ fontFamily: "Prompt, sans-serif" }}>
                  {faq.question}
                </span>
                <ChevronDown
                  size={18}
                  className={`text-gray-400 shrink-0 transition-transform ${
                    openIndex === i ? "rotate-180 text-pink-500" : ""
                  }`}
                />
              </button>
              {openIndex === i && (
                <div className="px-5 pb-5">
                  <div className="border-t border-gray-100 pt-4 text-gray-600 text-sm leading-relaxed">
                    {faq.answer}
                  </div>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center bg-white rounded-xl border border-gray-100 p-8">
          <h2 className="font-bold text-gray-900 mb-2" style={{ fontFamily: "Prompt, sans-serif" }}>
            ยังมีคำถามอื่น?
          </h2>
          <p className="text-gray-500 text-sm mb-4">ติดต่อเราได้โดยตรง ยินดีตอบทุกคำถาม</p>
          <div className="flex flex-wrap justify-center gap-3">
            <a
              href={SHOP_INFO.phoneLink}
              className="px-5 py-2.5 bg-[#0a0a0a] text-white text-sm font-medium rounded-lg hover:bg-pink-600 transition-colors"
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              โทร {SHOP_INFO.phone}
            </a>
            <a
              href={SHOP_INFO.lineLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-2.5 border border-pink-500 text-pink-600 text-sm font-medium rounded-lg hover:bg-pink-500 hover:text-black transition-colors"
              style={{ fontFamily: "Prompt, sans-serif" }}
            >
              แอดไลน์
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
