/*
 * Blog Post Page — Individual article with SEO, FAQ, Schema
 */

import { useEffect } from "react";
import { useParams, Link } from "wouter";
import { Zap, ArrowRight, Phone } from "lucide-react";
import { getBlogPost, type BlogPost } from "@/lib/blogData";
import { PRODUCTS, SHOP_INFO } from "@/lib/data";
import BackButton from "@/components/BackButton";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const SITE_URL = "https://jaonuch-ev.com";

function renderBlogContent(content: string) {
  const lines = content.trim().split("\n").filter(Boolean);
  const elements: React.ReactNode[] = [];
  let key = 0;

  for (let i = 0; i < lines.length; i++) {
    const line = lines[i];
    if (line.startsWith("## ")) {
      elements.push(
        <h2
          key={key++}
          className="text-xl font-bold text-gray-900 mt-8 mb-3"
          style={{ fontFamily: "Prompt, sans-serif" }}
        >
          {line.replace("## ", "")}
        </h2>
      );
    } else if (line.startsWith("### ")) {
      elements.push(
        <h3
          key={key++}
          className="text-lg font-bold text-gray-900 mt-6 mb-2"
          style={{ fontFamily: "Prompt, sans-serif" }}
        >
          {line.replace("### ", "")}
        </h3>
      );
    } else if (line.startsWith("|") && line.includes("|")) {
      const rows = [line];
      while (i + 1 < lines.length && lines[i + 1].startsWith("|")) {
        i++;
        rows.push(lines[i]);
      }
      const [header, sep, ...dataRows] = rows;
      const headers = header.split("|").filter(Boolean).map((h) => h.trim());
      const rowsData = dataRows.map((r) => r.split("|").filter(Boolean).map((c) => c.trim()));
      elements.push(
        <div key={key++} className="overflow-x-auto my-4">
          <table className="min-w-full border border-gray-200 rounded-lg text-sm">
            <thead>
              <tr className="bg-gray-50">
                {headers.map((h, j) => (
                  <th key={j} className="px-4 py-2 text-left font-bold text-gray-900 border-b border-gray-200">
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {rowsData.map((row, ri) => (
                <tr key={ri} className="border-b border-gray-100">
                  {row.map((cell, ci) => (
                    <td key={ci} className="px-4 py-2 text-gray-700">
                      {cell}
                    </td>
                  ))}
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      );
    } else if (line.startsWith("- ")) {
      const items = [line.replace("- ", "")];
      while (i + 1 < lines.length && lines[i + 1].startsWith("- ")) {
        i++;
        items.push(lines[i].replace("- ", ""));
      }
      elements.push(
        <ul key={key++} className="list-disc list-inside space-y-1 my-3 text-gray-700">
          {items.map((item, j) => (
            <li key={j}>{item}</li>
          ))}
        </ul>
      );
    } else if (line.trim()) {
      const parts = line.split(/(\[([^\]]+)\]\(([^)]+)\))/g);
      const parsed: React.ReactNode[] = [];
      for (let p = 0; p < parts.length; p++) {
        if (p % 4 === 1 && parts[p + 1] !== undefined && parts[p + 2] !== undefined) {
          const text = parts[p + 1];
          const href = parts[p + 2];
          parsed.push(
            <Link key={p} href={href}>
              <a className="text-pink-600 hover:text-pink-700 font-medium underline">
                {text}
              </a>
            </Link>
          );
          p += 2;
        } else if (parts[p]) {
          parsed.push(parts[p]);
        }
      }
      elements.push(
        <p key={key++} className="text-gray-700 leading-relaxed my-2">
          {parsed}
        </p>
      );
    }
  }
  return elements;
}

export default function BlogPostPage() {
  const { slug } = useParams<{ slug: string }>();
  const post = slug ? getBlogPost(slug) : undefined;

  useEffect(() => {
    if (post) {
      document.title = post.metaTitle;
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) metaDesc.setAttribute("content", post.metaDescription);
    }
  }, [post]);

  if (!post) {
    return (
      <div className="min-h-screen bg-gray-50 pt-28 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-xl font-bold text-gray-900 mb-2">ไม่พบบทความ</h1>
          <Link href="/blog">
            <a className="text-pink-600 hover:underline">← กลับไปหน้าบทความ</a>
          </Link>
        </div>
      </div>
    );
  }

  const relatedProducts = post.relatedProductIds
    .map((id) => PRODUCTS.find((p) => p.id === id))
    .filter(Boolean);

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: post.faqs.map((faq) => ({
      "@type": "Question",
      name: faq.question,
      acceptedAnswer: {
        "@type": "Answer",
        text: faq.answer,
      },
    })),
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "หน้าแรก", item: `${SITE_URL}/` },
      { "@type": "ListItem", position: 2, name: "บทความ", item: `${SITE_URL}/blog` },
      { "@type": "ListItem", position: 3, name: post.title, item: `${SITE_URL}/blog/${post.slug}` },
    ],
  };

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.date,
    dateModified: post.date,
    author: { "@type": "Organization", name: SHOP_INFO.name },
    publisher: { "@type": "Organization", name: SHOP_INFO.fullName, url: SITE_URL },
  };

  return (
    <div className="min-h-screen bg-gray-50 pt-28">
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }} />
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(articleSchema) }} />

      <div className="container py-8 max-w-3xl mx-auto">
        <div className="mb-6">
          <BackButton />
        </div>

        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-gray-500 mb-6">
          <Link href="/">
            <a className="hover:text-pink-600">หน้าแรก</a>
          </Link>
          <span>›</span>
          <Link href="/blog">
            <a className="hover:text-pink-600">บทความ</a>
          </Link>
          <span>›</span>
          <span className="text-gray-900 truncate max-w-[200px]">{post.title}</span>
        </nav>

        <article className="bg-white rounded-2xl border border-gray-100 shadow-sm overflow-hidden">
          <div className="p-6 md:p-10">
            <div className="text-xs text-pink-600 font-medium mb-2">{post.category}</div>
            <h1 className="text-2xl md:text-3xl font-black text-gray-900 mb-4" style={{ fontFamily: "Prompt, sans-serif" }}>
              {post.title}
            </h1>
            <p className="text-gray-600 leading-relaxed mb-6">{post.excerpt}</p>

            <div className="prose prose-gray max-w-none">
              {renderBlogContent(post.content)}
            </div>

            {/* FAQ Section */}
            <section className="mt-10 pt-8 border-t border-gray-100">
              <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Prompt, sans-serif" }}>
                คำถามที่พบบ่อย
              </h2>
              <Accordion type="single" collapsible className="space-y-2">
                {post.faqs.map((faq, i) => (
                  <AccordionItem key={i} value={`faq-${i}`} className="border border-gray-100 rounded-lg px-4">
                    <AccordionTrigger className="hover:no-underline text-left font-semibold text-gray-900">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-600">{faq.answer}</AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </section>

            {/* Related Products */}
            {relatedProducts.length > 0 && (
              <section className="mt-10 pt-8 border-t border-gray-100">
                <h2 className="text-xl font-bold text-gray-900 mb-4" style={{ fontFamily: "Prompt, sans-serif" }}>
                  สินค้าที่เกี่ยวข้อง
                </h2>
                <div className="flex flex-wrap gap-2">
                  {relatedProducts.map((p) => (
                    <Link key={p!.id} href={`/products/${p!.id}`}>
                      <a className="inline-flex items-center gap-1 px-4 py-2 bg-gray-100 hover:bg-pink-50 text-gray-800 hover:text-pink-600 rounded-lg text-sm font-medium transition-colors">
                        {p!.name}
                        <ArrowRight size={14} />
                      </a>
                    </Link>
                  ))}
                </div>
              </section>
            )}

            {/* CTA Buttons */}
            <div className="mt-10 pt-8 border-t border-gray-100 flex flex-col sm:flex-row gap-3">
              <Link href="/contact">
                <a className="flex items-center justify-center gap-2 py-3 px-6 bg-pink-500 hover:bg-pink-600 text-white font-bold rounded-xl transition-colors">
                  <Phone size={18} />
                  ติดต่อสอบถาม
                </a>
              </Link>
              <Link href="/products">
                <a className="flex items-center justify-center gap-2 py-3 px-6 border-2 border-pink-500 text-pink-600 hover:bg-pink-500 hover:text-white font-bold rounded-xl transition-colors">
                  ดูสินค้าทั้งหมด
                  <ArrowRight size={18} />
                </a>
              </Link>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
}
