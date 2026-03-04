// ข้อมูลร้านเจ้นุชรถไฟฟ้า ร้านคอมโก้ เซียร์รังสิต
// ดึงจาก Facebook เพจ: https://www.facebook.com/NUCH.EVbike

export const SHOP_INFO = {
  name: "เจ้นุชรถไฟฟ้า",
  fullName: "เจ้นุชรถไฟฟ้า ร้านคอมโก้ เซียร์รังสิต",
  slogan: "รถไฟฟ้าคุณภาพดี ราคาเป็นกันเอง ใกล้รังสิต",
  phone: "081-687-7249",
  phoneLink: "tel:+66816877249",
  lineId: "@324ewmll",
  lineLink: "https://lin.ee/TuQorFP",
  facebook: "https://www.facebook.com/NUCH.EVbike",
  email: "nuch.western@gmail.com",
  address: "ร้านคอมโก้ เซียร์รังสิตชั้นใต้ดิน(B) 99 ม.8 ถ.พหลโยธิน อ.ลำลูกกา จ.ปทุมธานี 12130",
  addressShort: "คอมโก้ เซียร์รังสิต ชั้น B",
  googleMapsUrl: "https://maps.google.com/?q=เซียร์รังสิต+ลำลูกกา+ปทุมธานี",
  hours: "เปิดทุกวัน 10:00 - 20:00 น.",
  rating: 5.0,
  reviewCount: 15,
  followers: "5.5 หมื่น",
};

export const HERO_SLIDES = [
  {
    id: 1,
    image: "/hero/hero-evbikes-1.png",
    title: "จักรยานไฟฟ้า",
    subtitle: "เบา ประหยัด สะดวก เหมาะกับทุกเส้นทาง",
    badge: "จักรยานไฟฟ้า",
  },
  {
    id: 2,
    image: "/hero/hero-evbikes-2.png",
    title: "จักรยานไฟฟ้า",
    subtitle: "เบา ประหยัด สะดวก เหมาะกับทุกเส้นทาง",
    badge: "จักรยานไฟฟ้า",
  },
];

export const CATEGORIES = [
  {
    id: "motorcycle",
    name: "มอเตอร์ไซค์ไฟฟ้า",
    description: "สมรรถนะสูง ดีไซน์เท่ ขับขี่สนุก",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_q1_max_motorcycle_bc81e9de.webp",
  },
  {
    id: "bicycle",
    name: "จักรยานไฟฟ้า",
    description: "เบา ประหยัด เหมาะทุกเส้นทาง",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_candy_bicycle_d31cbef7.webp",
  },
  {
    id: "tricycle",
    name: "สามล้อไฟฟ้า",
    description: "รับน้ำหนักมาก เหมาะธุรกิจ",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/product_tricycle2_cacee120.jpg",
  },
  {
    id: "accessories",
    name: "อะไหล่ & อุปกรณ์",
    description: "อะไหล่แท้ อุปกรณ์เสริมครบ",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/product_bikes_collection_da11e8e8.jpg",
  },
];

export const PRODUCTS = [
  {
    id: "motor-2500w",
    category: "motorcycle",
    name: "มอเตอร์ไซค์ไฟฟ้า 2500W",
    badge: "ขายดี",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_q1_max_motorcycle_bc81e9de.webp",
    price: "ติดต่อสอบถาม",
    priceNote: "ราคาพิเศษ ผ่อนได้",
    specs: {
      power: "2500W",
      battery: "72V 30Ah",
      range: "60-80 กม.",
      speed: "60 กม./ชม.",
      weight: "150 กก.",
    },
    highlights: [
      "มอเตอร์ 2500W แรงบิดสูง",
      "แบตเตอรี่ 72V 30Ah ทนทาน",
      "วิ่งได้ 60-80 กม./ชาร์จ",
    ],
    description: "มอเตอร์ไซค์ไฟฟ้าสมรรถนะสูง เหมาะสำหรับการใช้งานในเมืองและทางไกล แบตเตอรี่ 72 โวลต์ 30 แอมป์ มอเตอร์ 2500 วัตต์",
    isHot: true,
  },
  {
    id: "motor-1500w",
    category: "motorcycle",
    name: "มอเตอร์ไซค์ไฟฟ้า 1500W",
    badge: "แนะนำ",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_sks_z2_motorcycle_2804e18c.webp",
    price: "ติดต่อสอบถาม",
    priceNote: "ราคาพิเศษ ผ่อนได้",
    specs: {
      power: "1500W",
      battery: "60V 20Ah",
      range: "50-70 กม.",
      speed: "55 กม./ชม.",
      weight: "120 กก.",
    },
    highlights: [
      "มอเตอร์ 1500W เงียบ ประหยัด",
      "แบตเตอรี่ 60V ชาร์จเร็ว",
      "ดีไซน์ทันสมัย สวยงาม",
    ],
    description: "มอเตอร์ไซค์ไฟฟ้าสำหรับใช้งานทั่วไป ประหยัดพลังงาน เงียบ ไม่มีมลพิษ เหมาะสำหรับการเดินทางในเมือง",
    isHot: false,
  },
  {
    id: "bicycle-ev",
    category: "bicycle",
    name: "จักรยานไฟฟ้า",
    badge: "ยอดนิยม",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_candy_bicycle_d31cbef7.webp",
    price: "ติดต่อสอบถาม",
    priceNote: "ราคาเริ่มต้น ผ่อนได้",
    specs: {
      power: "350-500W",
      battery: "48V 12Ah",
      range: "40-60 กม.",
      speed: "35 กม./ชม.",
      weight: "25 กก.",
    },
    highlights: [
      "น้ำหนักเบา พกพาสะดวก",
      "ชาร์จง่าย ประหยัดไฟ",
      "มีตะกร้าหน้า-หลัง",
    ],
    description: "จักรยานไฟฟ้าเหมาะสำหรับการเดินทางระยะสั้น ออกกำลังกาย และสันทนาการ น้ำหนักเบา พับเก็บได้",
    isHot: false,
  },
  {
    id: "tricycle-ev",
    category: "tricycle",
    name: "สามล้อไฟฟ้าโดยสาร",
    badge: "ขายดี",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/product_tricycle2_cacee120.jpg",
    price: "ติดต่อสอบถาม",
    priceNote: "ราคาพิเศษ ผ่อนได้",
    specs: {
      power: "1000-3000W",
      battery: "72V 40Ah",
      range: "80-100 กม.",
      speed: "45 กม./ชม.",
      weight: "300 กก.",
    },
    highlights: [
      "รับน้ำหนักได้ 300+ กก.",
      "หลังคากันแดดกันฝน",
      "เหมาะสำหรับธุรกิจ",
    ],
    description: "สามล้อไฟฟ้าโดยสาร เหมาะสำหรับธุรกิจขนส่ง รับส่งผู้โดยสาร หรือใช้งานในชุมชน รับน้ำหนักได้มาก",
    isHot: true,
  },
  {
    id: "tricycle-cargo",
    category: "tricycle",
    name: "สามล้อไฟฟ้าบรรทุก",
    badge: "ใหม่",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/product_tricycle3_c03953d6.jpg",
    price: "ติดต่อสอบถาม",
    priceNote: "ราคาพิเศษ",
    specs: {
      power: "1500W",
      battery: "60V 30Ah",
      range: "60-80 กม.",
      speed: "40 กม./ชม.",
      weight: "250 กก.",
    },
    highlights: [
      "กระบะบรรทุกขนาดใหญ่",
      "แข็งแรง ทนทาน",
      "เหมาะสำหรับขนของ",
    ],
    description: "สามล้อไฟฟ้าบรรทุก เหมาะสำหรับการขนส่งสินค้า เกษตรกรรม หรือธุรกิจที่ต้องการพื้นที่บรรทุก",
    isHot: false,
  },
  {
    id: "bikes-collection",
    category: "motorcycle",
    name: "มอเตอร์ไซค์ไฟฟ้าหลายรุ่น",
    badge: "มีให้เลือกหลายรุ่น",
    image: "https://d2xsxph8kpxj0f.cloudfront.net/310519663396596744/nkqkxCeBxXHUq3EHdfggnF/lion_ev_alpha_ev_motorcycle_32572d6e.webp",
    price: "ติดต่อสอบถาม",
    priceNote: "มีหลายรุ่น หลายราคา",
    specs: {
      power: "500-3000W",
      battery: "48-72V",
      range: "40-100 กม.",
      speed: "35-70 กม./ชม.",
      weight: "80-200 กก.",
    },
    highlights: [
      "มีให้เลือกหลายรุ่น",
      "ราคาหลากหลาย",
      "บริการหลังการขาย",
    ],
    description: "เรามีรถไฟฟ้าหลายรุ่นให้เลือก ตั้งแต่รุ่นประหยัดจนถึงรุ่นพรีเมียม สามารถสอบถามได้โดยตรง",
    isHot: false,
  },
];

export const SERVICES = [
  {
    title: "ซ่อมบำรุง",
    description: "บริการซ่อมและบำรุงรักษารถไฟฟ้าทุกรุ่น โดยช่างผู้เชี่ยวชาญ",
  },
  {
    title: "เปลี่ยนแบตเตอรี่",
    description: "บริการเปลี่ยนแบตเตอรี่ทุกประเภท แบตเตอรี่คุณภาพดี",
  },
  {
    title: "รับประกันสินค้า",
    description: "รับประกันสินค้าทุกชิ้น มีบริการหลังการขายที่ดี",
  },
  {
    title: "จัดส่งทั่วประเทศ",
    description: "บริการจัดส่งสินค้าทั่วประเทศ รวดเร็ว ปลอดภัย",
  },
  {
    title: "ผ่อนชำระ",
    description: "บริการผ่อนชำระ 0% สูงสุด 12 เดือน (เงื่อนไขตามที่กำหนด)",
  },
  {
    title: "ปรึกษาฟรี",
    description: "ให้คำปรึกษาในการเลือกรถไฟฟ้าที่เหมาะกับคุณ ฟรี ไม่มีค่าใช้จ่าย",
  },
];

export const REVIEWS = [
  {
    id: 1,
    name: "คุณสมชาย",
    rating: 5,
    text: "ร้านดีมาก เจ้าของใจดี ให้คำแนะนำดีมาก ซื้อมอเตอร์ไซค์ไฟฟ้าไป ใช้งานได้ดีมาก ประหยัดค่าน้ำมันไปเยอะเลย",
    date: "2 เดือนที่แล้ว",
    avatar: "ส",
  },
  {
    id: 2,
    name: "คุณนภา",
    rating: 5,
    text: "ซื้อจักรยานไฟฟ้ามาใช้ขับไปทำงาน ดีมากเลย ไม่ต้องเสียค่าน้ำมัน ร้านบริการดี แนะนำเลย",
    date: "1 เดือนที่แล้ว",
    avatar: "น",
  },
  {
    id: 3,
    name: "คุณวิชัย",
    rating: 5,
    text: "ซื้อสามล้อไฟฟ้ามาใช้ในธุรกิจ คุ้มมากเลย ประหยัดค่าน้ำมันได้เยอะ เจ้าของร้านดูแลดีมาก",
    date: "3 สัปดาห์ที่แล้ว",
    avatar: "ว",
  },
  {
    id: 4,
    name: "คุณมาลี",
    rating: 5,
    text: "100% แนะนำ ร้านอยู่ในเซียร์รังสิต หาง่ายมาก สินค้าหลากหลาย ราคาเป็นกันเอง",
    date: "1 สัปดาห์ที่แล้ว",
    avatar: "ม",
  },
];

export const FAQS = [
  {
    question: "ร้านเจ้นุชรถไฟฟ้าอยู่ที่ไหน?",
    answer: "ร้านอยู่ที่ คอมโก้ เซียร์รังสิตชั้นใต้ดิน(B) 99 ม.8 ถ.พหลโยธิน อ.ลำลูกกา จ.ปทุมธานี ใกล้รังสิต สะดวกเดินทาง",
  },
  {
    question: "มีบริการผ่อนชำระไหม?",
    answer: "มีบริการผ่อนชำระ สามารถสอบถามรายละเอียดและเงื่อนไขได้โดยตรงที่ร้าน หรือโทร 081-687-7249",
  },
  {
    question: "รับประกันสินค้านานแค่ไหน?",
    answer: "มีการรับประกันสินค้า สามารถสอบถามรายละเอียดการรับประกันของแต่ละรุ่นได้ที่ร้าน",
  },
  {
    question: "มีบริการซ่อมรถไฟฟ้าไหม?",
    answer: "มีบริการซ่อมและบำรุงรักษารถไฟฟ้าทุกรุ่น โดยช่างผู้เชี่ยวชาญ สามารถนำรถมาซ่อมได้ที่ร้าน",
  },
  {
    question: "จัดส่งสินค้าได้ไหม?",
    answer: "มีบริการจัดส่งสินค้าทั่วประเทศ สอบถามค่าจัดส่งได้โดยตรง",
  },
  {
    question: "ติดต่อสอบถามได้ทางไหนบ้าง?",
    answer: "โทร 081-687-7249 | Line: @324ewmll | Facebook: เจ้นุชรถไฟฟ้าร้านคอมโก้เซียร์รังสิต",
  },
];
