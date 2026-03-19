export type ProductCategory = "motorcycle" | "tricycle" | "utility";

export type CatalogProduct = {
  id: string;
  name: string;
  category: ProductCategory;
  price: number | null;
  subtitle?: string;
  image: string;
  images?: string[];
  badge?: "ขายดี" | "แนะนำ" | "ยอดนิยม";
  isHot?: boolean;
  highlights?: string[];
  specs?: Record<string, string>;
  description?: string;
  sellingPoints?: string[];
};

export const PRODUCT_CATEGORIES: { id: ProductCategory; name: string }[] = [
  { id: "motorcycle", name: "มอเตอร์ไซค์ไฟฟ้า" },
  { id: "tricycle", name: "สามล้อไฟฟ้า" },
  { id: "utility", name: "รถไฟฟ้าอเนกประสงค์" },
];

export const PRODUCTS: CatalogProduct[] = [
  {
    id: "jnt-s15",
    name: "JNT-S15 รถไฟฟ้า",
    category: "motorcycle",
    price: 39900,
    subtitle: "รวมจดทะเบียน (ไม่รวมส่ง)",
    image: "/images/jnt-s15-main.jpg",
    badge: "ขายดี",
    isHot: true,
    highlights: [
      "มอเตอร์ 850W",
      "แบตเตอรี่ 48V 12Ah",
      "วิ่งได้ 40 กม.",
    ],
    specs: {
      battery: "48V 12Ah",
      motor: "850W",
      speed: "45 กม./ชม.",
      range: "40 กม./ชาร์จ",
      chargeTime: "5-6 ชั่วโมง",
      brake: "ดรัมเบรก หน้า-หลัง",
      tire: "Tubeless 14x2.50",
    },
    description:
      "รถไฟฟ้า JNT-S15 สำหรับใช้งานในเมือง ขับง่าย ประหยัดไฟ พร้อม Smart Key และดีไซน์ที่เหมาะกับการใช้งานทุกวัน",
    sellingPoints: [
      "ประหยัดค่าน้ำมัน",
      "ดูแลง่าย",
      "เหมาะกับใช้งานทุกวัน",
      "รับประกัน + มีบริการหลังการขาย",
    ],
  },
  {
    id: "lion-alpha",
    name: "LION ALPHA EV",
    category: "motorcycle",
    price: null,
    subtitle: "มีหลายสี",
    image: "/images/lion-alpha-red.jpg",
    images: [
      "/images/lion-alpha-red.jpg",
      "/images/lion-alpha-blue.jpg",
      "/images/lion-alpha-purple.jpg",
      "/images/lion-alpha-white.jpg",
    ],
    badge: "แนะนำ",
    highlights: ["ดีไซน์สวย", "ใช้งานในเมือง", "ประหยัดไฟ"],
    description:
      "LION ALPHA EV รถไฟฟ้าดีไซน์โมเดิร์น มีหลายสีให้เลือก เหมาะกับการใช้งานในเมืองและการเดินทางระยะใกล้",
  },
  {
    id: "lion-s11",
    name: "LION S11",
    category: "motorcycle",
    price: null,
    subtitle: "รถไฟฟ้าใช้งานในเมือง",
    image: "/images/lion-s11.jpg",
    badge: "ยอดนิยม",
    highlights: ["แบตเตอรี่ 48V12Ah", "วิ่งได้ประมาณ 40 กม.", "ดีไซน์คลาสสิก"],
    description: "LION S11 เหมาะสำหรับคนที่ต้องการรถไฟฟ้าขนาดกะทัดรัด ใช้งานง่าย และประหยัดค่าเดินทาง",
  },
  {
    id: "lne-6602",
    name: "LNE-6602-3 สามล้อไฟฟ้า",
    category: "tricycle",
    price: null,
    subtitle: "สามล้อไฟฟ้าขนาดกะทัดรัด",
    image: "/images/lne-6602.jpg",
    highlights: ["มอเตอร์ 1000W", "แบตเตอรี่ 48V20Ah", "เหมาะกับรับส่งระยะใกล้"],
  },
  {
    id: "lion-x01",
    name: "LION X01",
    category: "tricycle",
    price: null,
    subtitle: "สามล้อไฟฟ้าดีไซน์พรีเมียม",
    image: "/images/lion-x01.jpg",
    highlights: ["มอเตอร์ 600W", "วิ่งได้ประมาณ 40 กม.", "มีพื้นที่เก็บของด้านหลัง"],
  },
  {
    id: "lion-p27",
    name: "LION P27",
    category: "utility",
    price: null,
    subtitle: "รถไฟฟ้าอเนกประสงค์โดยสาร",
    image: "/images/lion-p27.jpg",
    highlights: ["มอเตอร์ 1500W", "รองรับผู้โดยสาร", "เหมาะกับธุรกิจบริการ"],
  },
  {
    id: "lion-care",
    name: "LION CARE",
    category: "utility",
    price: null,
    subtitle: "รถไฟฟ้าสำหรับผู้สูงอายุ / งานดูแล",
    image: "/images/lion-care.jpg",
    highlights: ["มอเตอร์ 1200W", "นั่งสบาย", "ใช้งานคล่องตัว"],
  },
  {
    id: "jnt-801",
    name: "JNT-801 MAX",
    category: "tricycle",
    price: null,
    subtitle: "สามล้อไฟฟ้าสำหรับโดยสาร",
    image: "/images/jnt-801.jpg",
    highlights: ["มอเตอร์ 800W", "วิ่งได้ 60 กม.", "เหมาะกับงานโดยสาร"],
  },
  {
    id: "lne-6720",
    name: "LNE-6720",
    category: "utility",
    price: null,
    subtitle: "รถไฟฟ้าอเนกประสงค์แบบปิด",
    image: "/images/lne-6720.jpg",
    highlights: ["มอเตอร์ 1500W", "ห้องโดยสารปิด", "เหมาะกับใช้งานเชิงพาณิชย์"],
  },
  {
    id: "lne-6822",
    name: "LNE-6822",
    category: "utility",
    price: null,
    subtitle: "รถบรรทุกไฟฟ้าอเนกประสงค์",
    image: "/images/lne-6822.jpg",
    highlights: ["มอเตอร์ 1500W", "กระบะท้ายขนาดใหญ่", "เหมาะกับงานขนของ"],
  },
  {
    id: "ln-s8",
    name: "LN-S8",
    category: "utility",
    price: null,
    subtitle: "รถไฟฟ้าอเนกประสงค์พร้อมหลังคา",
    image: "/images/ln-s8.jpg",
    highlights: ["มอเตอร์ 1200W", "เหมาะกับโดยสาร", "โครงสร้างแข็งแรง"],
  },
  {
    id: "s-a15",
    name: "S-A15 MAX",
    category: "utility",
    price: null,
    subtitle: "รถบรรทุกไฟฟ้า",
    image: "/images/s-a15.jpg",
    highlights: ["มอเตอร์ 1500W", "บรรทุกได้เยอะ", "เหมาะกับงานขนส่ง"],
  },
  {
    id: "s-a16",
    name: "S-A16 MAX",
    category: "utility",
    price: null,
    subtitle: "รถบรรทุกไฟฟ้ารุ่นใหญ่",
    image: "/images/s-a16.jpg",
    highlights: ["มอเตอร์ 1500W", "โครงสร้างแข็งแรง", "เหมาะกับงานอเนกประสงค์"],
  },
];
