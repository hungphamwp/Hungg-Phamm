const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const newProducts2 = `
  {
    id: 'p27',
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
    id: 'p28',
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
    id: 'p29',
    name: 'Bánh Sen Nhuyễn Hạt Dưa',
    slug: 'banh-sen-nhuyen',
    price: 150000,
    oldPrice: 170000,
    description: 'Hạt sen Huế sên nhuyễn mịn màng kết hợp hạt dưa rang giòn tan.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/f/fa/Home_Made_Moon_Cake_2017_-_37248411940.jpg',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG'
    ],
    rating: 4.9,
    reviewCount: 305,
    badge: 'BEST SELLER',
    ingredients: ['Bột mì', 'Đường', 'Hạt sen', 'Hạt dưa'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 150
  },
  {
    id: 'p30',
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
  },
`;

content = content.replace('];\n', newProducts2 + '\n];\n');

fs.writeFileSync('src/data/products.ts', content);
