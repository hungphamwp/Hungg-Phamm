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

// Ảnh local lưu trong /public/images/ - phù hợp theo từng sản phẩm
const IMG = {
  // === HỘP QUÀ TẶNG ===
  // Hộp Nguyệt Quế - hộp gỗ sơn mài cao cấp
  hopNguyetQue:     '/images/product-box-wood.jpg',
  // Hộp Trăng Đoàn Viên - hộp quà ấm áp
  hopTrangDoanVien: '/images/gift-box-2.jpg',
  // Hộp Kim Ngọc - luxury, tổ yến bào ngư
  hopKimNgoc:       '/images/product-fine-dining.jpg',
  // Hộp Trăng Vàng - mạ vàng sang trọng
  hopTrangVang:     '/images/product-box-gold.jpg',
  // Hộp Cát Tường - hộp nhỏ gọn
  hopCatTuong:      '/images/gift-box-3.jpg',
  // Hộp Nguyên Bảo - hộp vàng may mắn
  hopNguyenBao:     '/images/gift-box-4.jpg',
  // Hộp Hoàng Kim - mạ vàng 24K
  hopHoangKim:      '/images/product-box-red.jpg',
  // Hộp Trăng Ngọc Bích - màu xanh ngọc
  hopNgocBich:      '/images/luxury-3.jpg',
  // Hộp Phú Quý - luxury premium
  hopPhuQuy:        '/images/luxury-4.jpg',

  // === BÁNH TRUNG THU ===
  // Bánh Thập Cẩm Gà Quay - bánh nướng truyền thống
  banhThapCam:      '/images/mooncake-1.jpg',
  // Bánh Đậu Xanh Trứng Muối - bánh nhân đậu xanh
  banhDauXanh:      '/images/mooncake-2.jpg',
  // Bánh Hạt Sen Trà Xanh - matcha + hạt sen
  banhHatSen:       '/images/product-matcha.jpg',
  // Bánh Bào Ngư Vi Cá - hải sản hoàng gia
  banhBaoNgu:       '/images/product-seafood.jpg',
  // Bánh Dẻo Hạt Sen Trà Xanh - bánh dẻo matcha
  banhDeoMatcha:    '/images/product-matcha-2.jpg',
  // Bánh Dẻo Nhân Sữa Dừa - bánh dẻo trắng mềm
  banhDeoSuaDua:    '/images/product-cake-white.jpg',
  // Bánh Sầu Riêng Musang King - bánh vàng béo
  banhSauRieng:     '/images/product-food-luxury.jpg',

  // === ẢNH PHỤ (gallery) ===
  giftBox1: '/images/gift-box-1.jpg',
  giftBox2: '/images/gift-box-2.jpg',
  giftBox3: '/images/gift-box-3.jpg',
  luxury1:  '/images/luxury-1.jpg',
  luxury2:  '/images/luxury-2.jpg',
  tea1:     '/images/tea-1.jpg',
  tea2:     '/images/tea-2.jpg',
  hero1:    '/images/hero-1.jpg',
  banner1:  '/images/banner-1.jpg',
  cakeFancy: '/images/product-cake-fancy.jpg',
  cakeJelly: '/images/product-cake-jelly.jpg',
  cakeRound: '/images/product-cake-round.jpg',
  foodBowl:  '/images/product-food-bowl.jpg',
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
    image: IMG.hopNguyetQue,
    gallery: [IMG.hopNguyetQue, IMG.tea1, IMG.cakeRound],
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
    image: IMG.hopTrangDoanVien,
    gallery: [IMG.hopTrangDoanVien, IMG.banhThapCam, IMG.tea2],
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
    image: IMG.hopKimNgoc,
    gallery: [IMG.hopKimNgoc, IMG.banhBaoNgu, IMG.luxury2],
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
    image: IMG.hopTrangVang,
    gallery: [IMG.hopTrangVang, IMG.cakeFancy, IMG.luxury1],
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
    image: IMG.hopCatTuong,
    gallery: [IMG.hopCatTuong, IMG.banhDauXanh, IMG.tea1],
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
    image: IMG.banhThapCam,
    gallery: [IMG.banhThapCam, IMG.cakeRound, IMG.foodBowl],
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
    image: IMG.banhDauXanh,
    gallery: [IMG.banhDauXanh, IMG.cakeFancy, IMG.cakeJelly],
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
    image: IMG.banhHatSen,
    gallery: [IMG.banhHatSen, IMG.banhDeoMatcha, IMG.tea1],
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
    image: IMG.banhBaoNgu,
    gallery: [IMG.banhBaoNgu, IMG.hopKimNgoc, IMG.luxury1],
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
    image: IMG.banhDeoMatcha,
    gallery: [IMG.banhDeoMatcha, IMG.banhHatSen, IMG.tea2],
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
    image: IMG.hopNgocBich,
    gallery: [IMG.hopNgocBich, IMG.giftBox1, IMG.cakeJelly],
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
    image: IMG.hopPhuQuy,
    gallery: [IMG.hopPhuQuy, IMG.hopNguyetQue, IMG.tea1],
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
    image: IMG.hopNguyenBao,
    gallery: [IMG.hopNguyenBao, IMG.banhThapCam, IMG.banhDauXanh],
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
    image: IMG.banhDeoSuaDua,
    gallery: [IMG.banhDeoSuaDua, IMG.cakeJelly, IMG.banhDauXanh],
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
    image: IMG.hopHoangKim,
    gallery: [IMG.hopHoangKim, IMG.hopTrangVang, IMG.tea2],
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
    image: IMG.banhSauRieng,
    gallery: [IMG.banhSauRieng, IMG.banhThapCam, IMG.foodBowl],
    rating: 4.9,
    reviewCount: 98,
    badge: 'HOT',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Sầu riêng Musang King'],
    weight: '180g',
    expiry: '30 ngày kể từ NSX',
    stock: 75
  },
];
