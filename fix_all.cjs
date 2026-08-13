const fs = require('fs');

const content = `export interface Product {
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

export const products: Product[] = [
  {
    id: 'p1',
    name: 'Hộp Nguyệt Quế',
    slug: 'hop-nguyet-que',
    price: 1250000,
    oldPrice: 1400000,
    description: 'Tuyệt tác hộp gỗ sơn mài cao cấp, 6 bánh thượng hạng cùng trà Shan Tuyết.',
    category: 'corporate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Home_Made_Moon_Cake_2017_-_37248411940.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Mid_autumn_festival.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Different_flavours_of_Vietnamese_mid-Autumn_festival_moon_cakes_%282017%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Creative_mooncake.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/5/5c/HK_food_%E8%9B%8B%E9%BB%83_%E7%99%BD%E8%93%AE%E8%93%89_%E6%9C%88%E9%A4%85_moon_cake_%E4%B8%AD%E7%A7%8B%E7%AF%80_September_2024_R12S_18.jpg'
    ],
    rating: 5,
    reviewCount: 45,
    badge: 'PREMIUM',
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Different_flavours_of_Vietnamese_mid-Autumn_festival_moon_cakes_%282017%29.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.8,
    reviewCount: 92,
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
    image: 'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg'
    ],
    rating: 4.9,
    reviewCount: 110,
    badge: 'BEST SELLER',
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 200
  },
  {
    id: 'p12',
    name: 'Hộp Thu Bình An',
    slug: 'hop-thu-binh-an',
    price: 590000,
    oldPrice: 650000,
    description: 'Bộ quà tặng 4 bánh dành cho gia đình, mang thông điệp bình an, hạnh phúc mùa trăng.',
    category: 'gift-box',
    image: 'https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.7,
    reviewCount: 184,
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 150
  },
  {
    id: 'p13',
    name: 'Bánh Macadamia Tiramisu',
    slug: 'banh-macadamia-tiramisu',
    price: 195000,
    oldPrice: 220000,
    description: 'Sự giao thoa giữa bánh Trung Thu truyền thống và vị Tiramisu cà phê Ý nồng nàn.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kuih_Bulan_Telur_Masin_Mini.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/f/fa/Home_Made_Moon_Cake_2017_-_37248411940.jpg'
    ],
    rating: 5,
    reviewCount: 205,
    badge: 'NEW',
    ingredients: ['Bột mì', 'Đường', 'Hạt Macadamia', 'Cà phê', 'Cacao'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p14',
    name: 'Bánh Đậu Đỏ Hạt Macca',
    slug: 'banh-dau-do',
    price: 175000,
    oldPrice: null,
    description: 'Lớp nhân đậu đỏ mềm mịn cùng những hạt macca giòn tan mang lại trải nghiệm mới lạ.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Kuih_Bulan_Telur_Masin_Mini.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.6,
    reviewCount: 112,
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Trứng muối', 'Nguyên liệu đặc trưng'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p15',
    name: 'Bánh Chocolate Dung Nham',
    slug: 'banh-chocolate',
    price: 190000,
    oldPrice: 220000,
    description: 'Vỏ bánh mỏng mềm ẩn chứa lớp nhân chocolate tan chảy bên trong, đậm đà vị cacao.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Home_Made_Moon_Cake_2017_-_37248411940.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.9,
    reviewCount: 320,
    badge: 'NEW',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Trứng muối', 'Nguyên liệu đặc trưng'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p16',
    name: 'Bánh Mè Đen Óc Chó',
    slug: 'banh-me-den',
    price: 165000,
    oldPrice: null,
    description: 'Hương vị mè đen bùi béo kết hợp hạt óc chó bổ dưỡng, rất tốt cho sức khỏe.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Mid_autumn_festival.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.7,
    reviewCount: 105,
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Trứng muối', 'Nguyên liệu đặc trưng'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p17',
    name: 'Bánh Sầu Riêng Musang',
    slug: 'banh-sau-rieng',
    price: 250000,
    oldPrice: 280000,
    description: 'Nhân sầu riêng Musang King tươi xịn sò, dành riêng cho các tín đồ mê sầu riêng.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Food_Mooncake.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 5,
    reviewCount: 310,
    badge: 'PREMIUM',
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Trứng muối', 'Nguyên liệu đặc trưng'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
  {
    id: 'p18',
    name: 'Hộp Trăng Tinh Tú',
    slug: 'hop-trang-tinh-tu',
    price: 3200000,
    oldPrice: null,
    description: 'Phiên bản siêu giới hạn với 4 bánh vi cá, bào ngư, nấm truffle và yến sào.',
    category: 'corporate',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5c/HK_food_%E8%9B%8B%E9%BB%83_%E7%99%BD%E8%93%AE%E8%93%89_%E6%9C%88%E9%A4%85_moon_cake_%E4%B8%AD%E7%A7%8B%E7%AF%80_September_2024_R12S_18.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg'
    ],
    rating: 5,
    reviewCount: 15,
    badge: 'LIMITED',
    ingredients: ['Bào ngư', 'Vi cá', 'Yến sào', 'Truffle'],
    weight: 'Hộp siêu cao cấp',
    expiry: '30 ngày kể từ NSX',
    stock: 20
  },
  {
    id: 'p19',
    name: 'Bánh Dừa Dứa Trứng Muối',
    slug: 'banh-dua-dua',
    price: 145000,
    oldPrice: null,
    description: 'Hương lá dứa thơm lừng quyện cùng dừa non bào sợi giòn sần sật.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/ef/Creative_mooncake.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/1/17/Kue_Bulan_Sin_Hap_Hoat.jpg'
    ],
    rating: 4.6,
    reviewCount: 78,
    ingredients: ['Bột mì', 'Đường', 'Lá dứa', 'Dừa non', 'Trứng muối'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 200
  },
  {
    id: 'p20',
    name: 'Hộp Dạ Nguyệt',
    slug: 'hop-da-nguyet',
    price: 850000,
    oldPrice: null,
    description: 'Hộp quà 6 bánh thiết kế họa tiết ánh trăng đêm tinh xảo, thích hợp tặng gia đình.',
    category: 'gift-box',
    image: 'https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg'
    ],
    rating: 4.7,
    reviewCount: 98,
    ingredients: ['Các loại bánh nghệ nhân cao cấp'],
    weight: 'Hộp cao cấp kèm phụ kiện',
    expiry: '45 ngày kể từ NSX',
    stock: 150
  }
];
`;
fs.writeFileSync('src/data/products.ts', content);
