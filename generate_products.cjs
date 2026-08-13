const fs = require('fs');

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/2/2a/Different_flavours_of_Vietnamese_mid-Autumn_festival_moon_cakes_%282017%29.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Food_Mooncake.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/ef/Creative_mooncake.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5c/HK_food_%E8%9B%8B%E9%BB%83_%E7%99%BD%E8%93%AE%E8%93%89_%E6%9C%88%E9%A4%85_moon_cake_%E4%B8%AD%E7%A7%8B%E7%AF%80_September_2024_R12S_18.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/17/Kue_Bulan_Sin_Hap_Hoat.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3c/Kuih_Bulan_Telur_Masin_Mini.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/f/fa/Home_Made_Moon_Cake_2017_-_37248411940.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Mid_autumn_festival.jpg"
];

const boxImages = [
  "https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg"
];

const products = [
  { id: 'p1', name: 'Hộp Nguyệt Quế', slug: 'hop-nguyet-que', price: 1250000, oldPrice: 1400000, desc: 'Tuyệt tác hộp gỗ sơn mài cao cấp, 6 bánh thượng hạng cùng trà Shan Tuyết.', cat: 'corporate', img: boxImages[0], rating: 5.0, count: 128, badge: 'SIGNATURE' },
  { id: 'p2', name: 'Hộp Trăng Đoàn Viên', slug: 'hop-trang-doan-vien', price: 890000, oldPrice: 990000, desc: '4 bánh Trung Thu mang hương vị tinh tế, là món quà ấm áp dành tặng gia đình.', cat: 'gift-box', img: boxImages[1], rating: 4.9, count: 86, badge: 'BEST SELLER' },
  { id: 'p3', name: 'Hộp Kim Ngọc', slug: 'hop-kim-ngoc', price: 2490000, oldPrice: null, desc: 'Tuyệt tác quà tặng Trung Thu cao cấp với tổ yến, bào ngư, vi cá.', cat: 'corporate', img: boxImages[2], rating: 5.0, count: 42, badge: 'LIMITED' },
  { id: 'p4', name: 'Hộp Trăng Vàng', slug: 'hop-trang-vang', price: 1590000, oldPrice: 1800000, desc: 'Thiết kế hộp mạ vàng sang trọng, chứa đựng 8 hương vị tinh hoa nhất của nghệ nhân.', cat: 'gift-box', img: boxImages[0], rating: 4.9, count: 150, badge: '' },
  { id: 'p5', name: 'Hộp Cát Tường', slug: 'hop-cat-tuong', price: 680000, oldPrice: 750000, desc: 'Hộp 4 bánh nhỏ gọn, thiết kế tinh giản, thích hợp làm quà tặng bạn bè và đồng nghiệp.', cat: 'gift-box', img: boxImages[1], rating: 4.8, count: 55, badge: '' },
  { id: 'p6', name: 'Hộp Song Nguyệt', slug: 'hop-song-nguyet', price: 420000, oldPrice: null, desc: 'Cặp bánh tròn đầy ý nghĩa, phù hợp làm quà tặng nhỏ gọn nhưng tinh tế.', cat: 'gift-box', img: boxImages[2], rating: 4.6, count: 65, badge: '' },
  
  { id: 'p7', name: 'Bánh Thập Cẩm Gà Quay', slug: 'banh-thap-cam-ga-quay', price: 210000, oldPrice: 240000, desc: 'Hương vị truyền thống đậm đà với lạp xưởng, mỡ đường, hạt dưa và gà quay.', cat: 'mooncake', img: images[0], rating: 4.8, count: 320, badge: 'BEST SELLER' },
  { id: 'p8', name: 'Bánh Đậu Xanh 2 Trứng', slug: 'banh-dau-xanh-2-trung', price: 170000, oldPrice: null, desc: 'Lớp nhân đậu xanh nhuyễn mịn ôm trọn hai lòng đỏ trứng muối muối mặn mà.', cat: 'mooncake', img: images[1], rating: 4.9, count: 215, badge: 'HOT' },
  { id: 'p9', name: 'Bánh Hạt Sen 1 Trứng', slug: 'banh-hat-sen', price: 160000, oldPrice: 180000, desc: 'Hạt sen thơm bùi kết hợp cùng vị mặn nhẹ nhàng của lòng đỏ trứng muối.', cat: 'mooncake', img: images[2], rating: 4.7, count: 104, badge: '' },
  { id: 'p10', name: 'Bánh Sữa Dừa Hạt Dưa', slug: 'banh-sua-dua', price: 150000, oldPrice: null, desc: 'Hương vị sữa dừa béo ngậy, ngọt thanh đặc trưng hòa quyện cùng hạt dưa giòn rụm.', cat: 'mooncake', img: images[3], rating: 4.6, count: 85, badge: '' },
  { id: 'p11', name: 'Bánh Trà Xanh Matcha', slug: 'banh-matcha', price: 180000, oldPrice: 195000, desc: 'Sự kết hợp hoàn hảo giữa vị chát nhẹ của trà xanh và vị mặn của trứng muối.', cat: 'mooncake', img: images[4], rating: 4.8, count: 167, badge: 'NEW' },
  { id: 'p12', name: 'Bánh Khoai Môn Trứng Muối', slug: 'banh-khoai-mon', price: 160000, oldPrice: null, desc: 'Khoai môn dẻo ngọt, thơm bùi kết hợp trứng muối mặn nhẹ.', cat: 'mooncake', img: images[5], rating: 4.5, count: 94, badge: '' },
  { id: 'p13', name: 'Bánh Đậu Đỏ Hạt Macca', slug: 'banh-dau-do', price: 175000, oldPrice: null, desc: 'Lớp nhân đậu đỏ mềm mịn cùng những hạt macca giòn tan mang lại trải nghiệm mới lạ.', cat: 'mooncake', img: images[6], rating: 4.6, count: 112, badge: '' },
  { id: 'p14', name: 'Bánh Chocolate Dung Nham', slug: 'banh-chocolate', price: 190000, oldPrice: 220000, desc: 'Vỏ bánh mỏng mềm ẩn chứa lớp nhân chocolate tan chảy bên trong, đậm đà vị cacao.', cat: 'mooncake', img: images[7], rating: 4.9, count: 320, badge: 'NEW' },
  { id: 'p15', name: 'Bánh Mè Đen Óc Chó', slug: 'banh-me-den', price: 165000, oldPrice: null, desc: 'Hương vị mè đen bùi béo kết hợp hạt óc chó bổ dưỡng, rất tốt cho sức khỏe.', cat: 'mooncake', img: images[8], rating: 4.7, count: 105, badge: '' },
  { id: 'p16', name: 'Bánh Dẻo Thập Cẩm', slug: 'banh-deo-thap-cam', price: 180000, oldPrice: null, desc: 'Lớp vỏ bánh dẻo trắng ngần ôm trọn nhân thập cẩm truyền thống đậm đà.', cat: 'mooncake', img: images[0], rating: 4.5, count: 77, badge: '' },
  { id: 'p17', name: 'Bánh Dẻo Đậu Xanh', slug: 'banh-deo-dau-xanh', price: 150000, oldPrice: null, desc: 'Bánh dẻo ngọt thanh, nhân đậu xanh hạt sen bùi bùi, thơm lừng hương hoa bưởi.', cat: 'mooncake', img: images[1], rating: 4.8, count: 143, badge: '' },
  { id: 'p18', name: 'Bánh Sầu Riêng Musang', slug: 'banh-sau-rieng', price: 250000, oldPrice: 280000, desc: 'Nhân sầu riêng Musang King tươi xịn sò, dành riêng cho các tín đồ mê sầu riêng.', cat: 'mooncake', img: images[2], rating: 5.0, count: 310, badge: 'PREMIUM' },
  { id: 'p19', name: 'Bánh Trà Ô Long', slug: 'banh-tra-o-long', price: 170000, oldPrice: null, desc: 'Hương trà Ô Long thanh mát quyện cùng hạt chia giòn sần sật.', cat: 'mooncake', img: images[3], rating: 4.6, count: 88, badge: '' },
  { id: 'p20', name: 'Bánh Xá Xíu Bát Bửu', slug: 'banh-xa-xiu', price: 200000, oldPrice: 230000, desc: 'Sự hội tụ của 8 loại nguyên liệu trân quý, xá xíu đậm đà, mặn ngọt tròn vị.', cat: 'mooncake', img: images[4], rating: 4.7, count: 154, badge: '' }
];

let output = `export interface Product {
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
`;

for (let p of products) {
    let ing = p.cat === 'mooncake' ? "['Bột mì', 'Đường', 'Dầu ăn', 'Trứng muối', 'Nguyên liệu đặc trưng']" : "['Các loại bánh nghệ nhân cao cấp']";
    let w = p.cat === 'mooncake' ? "'150g'" : "'Hộp cao cấp kèm phụ kiện'";
    
    output += `  {
    id: '${p.id}',
    name: '${p.name}',
    slug: '${p.slug}',
    price: ${p.price},
    ${p.oldPrice ? `oldPrice: ${p.oldPrice},` : `oldPrice: null,`}
    description: '${p.desc}',
    category: '${p.cat}',
    image: '${p.img}',
    gallery: [
      '${p.img === images[0] ? images[1] : images[0]}',
      '${p.img === boxImages[0] ? boxImages[1] : boxImages[0]}'
    ],
    rating: ${p.rating},
    reviewCount: ${p.count},
    ${p.badge ? `badge: '${p.badge}',` : ``}
    ingredients: ${ing},
    weight: ${w},
    expiry: '45 ngày kể từ NSX',
    stock: 100
  },
`;
}

output += `];\n`;

fs.writeFileSync('src/data/products.ts', output);
