const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

const newProducts = `
  {
    id: 'p21',
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
    id: 'p22',
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
    id: 'p23',
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
    id: 'p24',
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
    id: 'p25',
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
    id: 'p26',
    name: 'Bánh Đậu Xanh Trứng Muối',
    slug: 'banh-dau-xanh-trung-muoi',
    price: 130000,
    oldPrice: null,
    description: 'Hương vị cổ truyền mộc mạc nhất với đậu xanh sên mịn màng và lòng đỏ trứng muối.',
    category: 'mooncake',
    image: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG',
    gallery: [
      'https://upload.wikimedia.org/wikipedia/commons/2/2a/Different_flavours_of_Vietnamese_mid-Autumn_festival_moon_cakes_%282017%29.jpg'
    ],
    rating: 4.8,
    reviewCount: 420,
    ingredients: ['Bột mì', 'Đường', 'Dầu ăn', 'Đậu xanh', 'Trứng muối'],
    weight: '150g',
    expiry: '45 ngày kể từ NSX',
    stock: 300
  }
];
`;

content = content.replace('];\n', newProducts + '\n];\n');

fs.writeFileSync('src/data/products.ts', content);
