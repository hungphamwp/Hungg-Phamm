export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  description: string;
  category: 'mooncake' | 'gift-box' | 'corporate';
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  flavor?: string;
  ingredients?: string[];
  weight?: string;
  expiry?: string;
  stock?: number;
  pieces?: number;
}

// Ảnh local lưu trong /public/images/ - không bao giờ bị lỗi
const IMG = {
  // Bánh trung thu - food photos
  mooncake1: '/images/mooncake-1.jpg',  // Bánh nướng thập cẩm
  mooncake2: '/images/mooncake-2.jpg',  // Bánh macaron/pastry sang
  mooncake3: '/images/mooncake-3.jpg',  // Bánh burger/bun tròn
  mooncake4: '/images/mooncake-4.jpg',  // Bánh ngọt đẹp
  mooncake5: '/images/mooncake-5.jpg',  // Bánh cupcake
  mooncake6: '/images/mooncake-6.jpg',  // Bánh kem trang trí

  // Hộp quà tặng
  giftBox1: '/images/gift-box-1.jpg',   // Hộp quà hồng vàng
  giftBox2: '/images/gift-box-2.jpg',   // Hộp quà sang trọng
  giftBox3: '/images/gift-box-3.jpg',   // Hộp quà ruy băng
  giftBox4: '/images/gift-box-4.jpg',   // Hộp quà vàng nơ

  // Quà doanh nghiệp cao cấp
  luxury1: '/images/luxury-1.jpg',      // Đồ trang sức/cao cấp
  luxury2: '/images/luxury-2.jpg',      // Hộp đựng cao cấp
  luxury3: '/images/luxury-3.jpg',      // Quà tặng premium
  luxury4: '/images/luxury-4.jpg',      // Bao bì luxury

  // Trà & phụ kiện
  tea1: '/images/tea-1.jpg',
  tea2: '/images/tea-2.jpg',

  // Hero & Banner
  hero1: '/images/hero-1.jpg',
  hero2: '/images/hero-2.jpg',
  banner1: '/images/banner-1.jpg',
  banner2: '/images/banner-2.jpg',
};

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Hộp Nguyệt Quế',
    slug: 'hop-nguyet-que',
    price: 1250000,
    oldPrice: 1400000,
    description: 'Tuyệt tác hộp gỗ sơn mài cao cấp, 6 bánh thượng hạng cùng trà Shan Tuyết.',
    category: 'corporate',
    image: IMG.giftBox1,
    gallery: [IMG.giftBox1, IMG.luxury1, IMG.tea1],
    rating: 5,
    reviewCount: 128,
    badge: 'SIGNATURE',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p2',
    name: 'Hộp Trăng Đoàn Viên',
    slug: 'hop-trang-doan-vien',
    price: 890000,
    oldPrice: 990000,
    description: '4 bánh Trung Thu mang hương vị tinh tế, là món quà ấm áp dành tặng gia đình.',
    category: 'gift-box',
    image: IMG.giftBox2,
    gallery: [IMG.giftBox2, IMG.mooncake1, IMG.tea2],
    rating: 4.9,
    reviewCount: 86,
    badge: 'BEST SELLER',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p3',
    name: 'Hộp Kim Ngọc',
    slug: 'hop-kim-ngoc',
    price: 2490000,
    oldPrice: null,
    description: 'Tuyệt tác quà tặng Trung Thu cao cấp với tổ yến, bào ngư, vi cá.',
    category: 'corporate',
    image: IMG.luxury2,
    gallery: [IMG.luxury2, IMG.giftBox3, IMG.mooncake2],
    rating: 5,
    reviewCount: 42,
    badge: 'LIMITED',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p4',
    name: 'Hộp Trăng Vàng',
    slug: 'hop-trang-vang',
    price: 1590000,
    oldPrice: 1800000,
    description: 'Thiết kế hộp mạ vàng sang trọng, chứa đựng 8 hương vị tinh hoa nhất của nghệ nhân.',
    category: 'gift-box',
    image: IMG.giftBox3,
    gallery: [IMG.giftBox3, IMG.mooncake3, IMG.luxury3],
    rating: 4.9,
    reviewCount: 150,
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p5',
    name: 'Hộp Cát Tường',
    slug: 'hop-cat-tuong',
    price: 680000,
    oldPrice: 750000,
    description: 'Hộp 4 bánh nhỏ gọn, thiết kế tinh giản, thích hợp làm quà tặng bạn bè và đồng nghiệp.',
    category: 'gift-box',
    image: IMG.giftBox4,
    gallery: [IMG.giftBox4, IMG.mooncake4, IMG.luxury4],
    rating: 4.8,
    reviewCount: 210,
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p6',
    name: 'Bánh Thập Cẩm Gà Quay',
    slug: 'banh-thap-cam-ga-quay',
    price: 185000,
    oldPrice: null,
    description: 'Hương vị truyền thống đậm đà với gà quay xé sợi, lạp xưởng, mứt bí và các loại hạt.',
    category: 'mooncake',
    image: IMG.mooncake1,
    gallery: [IMG.mooncake1, IMG.mooncake5, IMG.mooncake6],
    rating: 4.7,
    reviewCount: 342,
    badge: 'TRUYỀN THỐNG',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Gà quay', 'Mứt bí', 'Lạp xưởng'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p7',
    name: 'Bánh Đậu Xanh Trứng Muối',
    slug: 'banh-dau-xanh-trung-muoi',
    price: 150000,
    oldPrice: 165000,
    description: 'Nhân đậu xanh sên nhuyễn mịn màng, ôm trọn lòng đỏ trứng muối mặn mà, béo ngậy.',
    category: 'mooncake',
    image: IMG.mooncake2,
    gallery: [IMG.mooncake2, IMG.mooncake4, IMG.mooncake6],
    rating: 4.8,
    reviewCount: 512,
    badge: 'BEST SELLER',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Đậu xanh', 'Trứng muối'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p8',
    name: 'Bánh Hạt Sen Trà Xanh',
    slug: 'banh-hat-sen-tra-xanh',
    price: 160000,
    oldPrice: null,
    description: 'Sự kết hợp hoàn hảo giữa vị chát nhẹ của matcha và bùi bùi của hạt sen.',
    category: 'mooncake',
    image: IMG.mooncake3,
    gallery: [IMG.mooncake3, IMG.tea1, IMG.mooncake5],
    rating: 4.6,
    reviewCount: 231,
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Trà xanh matcha', 'Hạt sen'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p9',
    name: 'Bánh Bào Ngư Vi Cá',
    slug: 'banh-bao-ngu-vi-ca',
    price: 350000,
    oldPrice: 380000,
    description: 'Nguyên liệu hoàng gia thượng hạng, mang ý nghĩa sung túc và phú quý.',
    category: 'mooncake',
    image: IMG.mooncake4,
    gallery: [IMG.mooncake4, IMG.luxury4, IMG.mooncake5],
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Bào ngư', 'Vi cá', 'Trứng muối'],
    weight: '200g',
    expiry: '30 ngày kể từ NSX',
    stock: 50
  },
  {
    id: 'p10',
    name: 'Bánh Dẻo Hạt Sen Trà Xanh',
    slug: 'banh-deo-hat-sen-tra-xanh',
    price: 155000,
    oldPrice: null,
    description: 'Vỏ bánh dẻo thanh tao quyện cùng hương trà xanh matcha Nhật Bản thơm mát.',
    category: 'mooncake',
    image: IMG.mooncake5,
    gallery: [IMG.mooncake5, IMG.tea2, IMG.mooncake6],
    ingredients: ['Bột nếp', 'Đường', 'Hạt sen', 'Bột matcha'],
    weight: '150g',
    expiry: '20 ngày kể từ NSX',
    stock: 120
  },
  {
    id: 'p11',
    name: 'Hộp Trăng Ngọc Bích',
    slug: 'hop-trang-ngoc-bich',
    price: 1150000,
    oldPrice: null,
    description: 'Hộp bánh tông màu xanh ngọc bích sang trọng, bao gồm 6 bánh hương vị tuyển chọn.',
    category: 'corporate',
    image: IMG.luxury3,
    gallery: [IMG.luxury3, IMG.giftBox1, IMG.mooncake6],
    rating: 4.9,
    reviewCount: 67,
    badge: 'NEW',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 80
  },
  {
    id: 'p12',
    name: 'Hộp Phú Quý',
    slug: 'hop-phu-quy',
    price: 3200000,
    oldPrice: null,
    description: 'Bộ quà tặng đỉnh cao với hộp gỗ mun khắc rồng phụng, 8 bánh nghệ nhân và rượu vang đỏ cao cấp.',
    category: 'corporate',
    image: IMG.luxury4,
    gallery: [IMG.luxury4, IMG.giftBox2, IMG.tea1],
    rating: 5,
    reviewCount: 21,
    badge: 'PREMIUM',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Bộ quà VIP kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 30
  },
  {
    id: 'p13',
    name: 'Hộp Nguyên Bảo',
    slug: 'hop-nguyen-bao',
    price: 780000,
    oldPrice: 850000,
    description: 'Thiết kế hộp hình thuyền vàng may mắn, gồm 6 bánh trung thu nhân thập cẩm và nhân sữa.',
    category: 'gift-box',
    image: IMG.giftBox4,
    gallery: [IMG.giftBox4, IMG.mooncake1, IMG.mooncake3],
    rating: 4.7,
    reviewCount: 134,
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 90
  },
  {
    id: 'p14',
    name: 'Bánh Dẻo Nhân Sữa Dừa',
    slug: 'banh-deo-nhan-sua-dua',
    price: 145000,
    oldPrice: null,
    description: 'Vỏ bánh dẻo mịn màng, nhân sữa dừa thơm béo ngậy khiến bạn không thể cưỡng lại.',
    category: 'mooncake',
    image: IMG.mooncake6,
    gallery: [IMG.mooncake6, IMG.mooncake2, IMG.mooncake4],
    rating: 4.5,
    reviewCount: 189,
    ingredients: ['Bột nếp', 'Đường', 'Sữa dừa', 'Dừa nạo'],
    weight: '120g',
    expiry: '20 ngày kể từ NSX',
    stock: 150
  },
  {
    id: 'p15',
    name: 'Hộp Hoàng Kim',
    slug: 'hop-hoang-kim',
    price: 1890000,
    oldPrice: 2100000,
    description: 'Hộp quà cao cấp mạ vàng 24K, bao gồm 8 bánh nghệ nhân và set trà shan tuyết thượng hạng.',
    category: 'corporate',
    image: IMG.luxury1,
    gallery: [IMG.luxury1, IMG.giftBox2, IMG.tea2],
    rating: 4.9,
    reviewCount: 53,
    badge: 'HOT',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 60
  },
  {
    id: 'p16',
    name: 'Bánh Nhân Sầu Riêng Musang King',
    slug: 'banh-nhan-sau-rieng-musang-king',
    price: 280000,
    oldPrice: 310000,
    description: 'Nhân sầu riêng Musang King Malaysia 100%, hương vị đậm đà, béo thơm quyến rũ.',
    category: 'mooncake',
    image: IMG.mooncake3,
    gallery: [IMG.mooncake3, IMG.mooncake1, IMG.mooncake5],
    rating: 4.9,
    reviewCount: 98,
    badge: 'HOT',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Sầu riêng Musang King'],
    weight: '180g',
    expiry: '30 ngày kể từ NSX',
    stock: 75
  },
];