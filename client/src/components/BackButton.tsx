/*
 * BackButton — ปุ่มกลับสไตล์เท่
 */

import { ArrowLeft } from "lucide-react";

interface BackButtonProps {
  className?: string;
  label?: string;
  variant?: "default" | "glass" | "minimal";
}

export default function BackButton({
  className = "",
  label = "กลับ",
  variant = "default",
}: BackButtonProps) {
  const baseStyles =
    "inline-flex items-center gap-2 text-sm font-semibold rounded-full transition-all duration-300 group";

  const variants = {
    default:
      "bg-white/90 backdrop-blur-sm text-gray-700 hover:bg-pink-500 hover:text-white shadow-lg hover:shadow-pink-500/25 hover:scale-105 px-4 py-2.5 border border-gray-200/50 hover:border-pink-400",
    glass:
      "bg-black/20 backdrop-blur-md text-white/90 hover:bg-white/25 hover:text-white shadow-lg px-4 py-2.5 border border-white/20",
    minimal:
      "text-gray-500 hover:text-pink-600 hover:bg-pink-50 px-3 py-2 rounded-lg",
  };

  return (
    <button
      onClick={() => window.history.back()}
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <ArrowLeft
        size={18}
        className="transition-transform duration-300 group-hover:-translate-x-0.5"
      />
      <span>{label}</span>
    </button>
  );
}
