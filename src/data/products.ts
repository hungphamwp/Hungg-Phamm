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

// Bộ ảnh Unsplash đẹp phù hợp với bánh Trung Thu & quà tặng cao cấp
const IMAGES = {
  // Hộp quà sang trọng
  corporateBox1: 'https://images.unsplash.com/photo-1549465220-1a8b9238cd48?auto=format&fit=crop&w=800&q=80',
  corporateBox2: 'https://images.unsplash.com/photo-1607344645866-009c320b63e0?auto=format&fit=crop&w=800&q=80',
  corporateBox3: 'https://images.unsplash.com/photo-1558961363038-f53826b00b46?auto=format&fit=crop&w=800&q=80',
  giftBox1: 'https://images.unsplash.com/photo-1608571423902-eed4a5ad8108?auto=format&fit=crop&w=800&q=80',
  giftBox2: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=800&q=80',
  giftBox3: 'https://images.unsplash.com/photo-1574181611642-892b5f96f9ee?auto=format&fit=crop&w=800&q=80',
  giftBox4: 'https://images.unsplash.com/photo-1519167758481-83f550bb49b3?auto=format&fit=crop&w=800&q=80',
  // Bánh trung thu
  mooncake1: 'https://images.unsplash.com/photo-1605807646983-377112959fd7?auto=format&fit=crop&w=800&q=80',
  mooncake2: 'https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?auto=format&fit=crop&w=800&q=80',
  mooncake3: 'https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=800&q=80',
  mooncake4: 'https://images.unsplash.com/photo-1464305795204-6f5bbfc7fb81?auto=format&fit=crop&w=800&q=80',
  mooncake5: 'https://images.unsplash.com/photo-1621955964441-c173e01c135b?auto=format&fit=crop&w=800&q=80',
  mooncake6: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?auto=format&fit=crop&w=800&q=80',
  // Hộp quà doanh nghiệp cao cấp
  luxury1: 'https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?auto=format&fit=crop&w=800&q=80',
  luxury2: 'https://images.unsplash.com/photo-1513885535751-8b9238bd345a?auto=format&fit=crop&w=800&q=80',
  luxury3: 'https://images.unsplash.com/photo-1531525645387-7f14be1bdbbd?auto=format&fit=crop&w=800&q=80',
  luxury4: 'https://images.unsplash.com/photo-1542291026-7eec264c27ff?auto=format&fit=crop&w=800&q=80',
  // Tea & Trà
  tea1: 'https://images.unsplash.com/photo-1544787219-7f47ccb76574?auto=format&fit=crop&w=800&q=80',
  tea2: 'https://images.unsplash.com/photo-1556679343-c7306c1976bc?auto=format&fit=crop&w=800&q=80',
  // Bánh dẻo / bánh nướng
  pastry1: 'https://images.unsplash.com/photo-1504754524776-8f4f37790ca0?auto=format&fit=crop&w=800&q=80',
  pastry2: 'https://images.unsplash.com/photo-1606101827023-a0fb1fa5e0e9?auto=format&fit=crop&w=800&q=80',
  pastry3: 'https://images.unsplash.com/photo-1587334285547-ab6a42b44c94?auto=format&fit=crop&w=800&q=80',
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
    image: IMAGES.corporateBox1,
    gallery: [
      IMAGES.corporateBox1,
      IMAGES.luxury1,
      IMAGES.tea1,
    ],
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
    image: IMAGES.giftBox1,
    gallery: [
      IMAGES.giftBox1,
      IMAGES.mooncake1,
      IMAGES.tea2,
    ],
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
    image: IMAGES.luxury2,
    gallery: [
      IMAGES.luxury2,
      IMAGES.corporateBox2,
      IMAGES.mooncake2,
    ],
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
    image: IMAGES.giftBox2,
    gallery: [
      IMAGES.giftBox2,
      IMAGES.mooncake3,
      IMAGES.luxury3,
    ],
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
    image: IMAGES.giftBox3,
    gallery: [
      IMAGES.giftBox3,
      IMAGES.mooncake4,
      IMAGES.pastry1,
    ],
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
    image: IMAGES.mooncake1,
    gallery: [
      IMAGES.mooncake1,
      IMAGES.pastry2,
      IMAGES.mooncake5,
    ],
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
    image: IMAGES.mooncake2,
    gallery: [
      IMAGES.mooncake2,
      IMAGES.pastry3,
      IMAGES.mooncake6,
    ],
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
    image: IMAGES.mooncake3,
    gallery: [
      IMAGES.mooncake3,
      IMAGES.tea1,
      IMAGES.pastry1,
    ],
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
    image: IMAGES.mooncake4,
    gallery: [
      IMAGES.mooncake4,
      IMAGES.luxury4,
      IMAGES.mooncake5,
    ],
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
    image: IMAGES.mooncake5,
    gallery: [
      IMAGES.mooncake5,
      IMAGES.tea2,
      IMAGES.pastry2,
    ],
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
    image: IMAGES.luxury3,
    gallery: [
      IMAGES.luxury3,
      IMAGES.corporateBox3,
      IMAGES.mooncake6,
    ],
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
    image: IMAGES.luxury4,
    gallery: [
      IMAGES.luxury4,
      IMAGES.corporateBox1,
      IMAGES.tea1,
    ],
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
    image: IMAGES.giftBox4,
    gallery: [
      IMAGES.giftBox4,
      IMAGES.mooncake1,
      IMAGES.pastry3,
    ],
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
    image: IMAGES.mooncake6,
    gallery: [
      IMAGES.mooncake6,
      IMAGES.pastry1,
      IMAGES.mooncake2,
    ],
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
    image: IMAGES.corporateBox2,
    gallery: [
      IMAGES.corporateBox2,
      IMAGES.luxury1,
      IMAGES.tea2,
    ],
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
    image: IMAGES.pastry2,
    gallery: [
      IMAGES.pastry2,
      IMAGES.mooncake3,
      IMAGES.pastry3,
    ],
    rating: 4.9,
    reviewCount: 98,
    badge: 'HOT',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Sầu riêng Musang King'],
    weight: '180g',
    expiry: '30 ngày kể từ NSX',
    stock: 75
  },
];