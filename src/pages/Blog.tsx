import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


const POSTS = [
  {
    id: 1,
    title: 'Cách Chọn Bánh Trung Thu Ngon Dành Tặng Đối Tác',
    category: 'Gợi Ý Quà Tặng',
    date: '12 Tháng 8, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_Japanese_wrapping_cloth%2Churoshiki%2Ckatori-city%2Cjapan.JPG',
    desc: 'Lựa chọn quà Trung Thu cho đối tác không chỉ cần sự tinh tế trong hương vị mà còn đòi hỏi sự sang trọng ở hình thức bao bì.'
  },
  {
    id: 2,
    title: 'Ý Nghĩa Của Những Chiếc Bánh Trung Thu Truyền Thống',
    category: 'Văn Hoá',
    date: '08 Tháng 8, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mid-Autumn_Festival-beijing.jpg',
    desc: 'Từ nhân thập cẩm mặn mòi đến hạt sen thanh tao, mỗi hương vị đều mang một câu chuyện văn hóa sâu sắc của người Việt.'
  },
  {
    id: 3,
    title: 'Nghệ Thuật Thưởng Trà Cùng Bánh Trung Thu',
    category: 'Phong Vị',
    date: '05 Tháng 8, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/5/5f/Wrapped_fruit_basket.jpg',
    desc: 'Bánh ngọt phải có trà thanh. Tìm hiểu cách kết hợp các loại trà khác nhau để tôn lên hương vị tuyệt hảo của chiếc bánh nướng.'
  },
  {
    id: 4,
    title: 'Cách Bảo Quản Bánh Trung Thu Đúng Chuẩn',
    category: 'Mẹo Hay',
    date: '01 Tháng 8, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Taiwanese_Pineapple_Cake_001.jpg',
    desc: 'Bánh nướng, bánh dẻo tự nhiên không chứa chất bảo quản cần có điều kiện lưu trữ đặc biệt để giữ được độ ngon lâu nhất.'
  },
  {
    id: 5,
    title: 'Khám Phá Hương Vị Bánh Trung Thu Hiện Đại',
    category: 'Xu Hướng',
    date: '28 Tháng 7, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mooncake_3-4%2C_lotus_seed_paste.jpg',
    desc: 'Sự kết hợp táo bạo giữa socola, matcha, tiramisu và nhân trứng muối tạo nên những trải nghiệm vị giác đầy mới mẻ.'
  },
  {
    id: 6,
    title: 'Quy Trình Tạo Nên Hộp Quà "Kim Ngọc" Thượng Hạng',
    category: 'Sau Hậu Trường',
    date: '20 Tháng 7, 2026',
    image: 'https://upload.wikimedia.org/wikipedia/commons/2/2b/Mooncake_with_double_yolk_and_lotus_seed_paste.jpg',
    desc: 'Từng công đoạn chọn gỗ, điêu khắc, dát vàng và bọc lót được thực hiện tỉ mỉ như thế nào để tạo ra một tuyệt tác quà tặng.'
  }
];

export function Blog() {
  return (
    <div className="pt-24 pb-24 min-h-screen bg-cream">
      {/* Header */}
      <div className="bg-ivory py-16 mb-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4">CẨM NANG TRUNG THU</h1>
          <p className="text-brown-dark/70 text-lg max-w-2xl mx-auto">
            Khám phá những câu chuyện văn hoá, bí quyết thưởng thức và các xu hướng quà tặng mới nhất trong mùa trăng rằm.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">
          {POSTS.map(post => (
            <article key={post.id} className="group cursor-pointer">
              <div className="aspect-[4/3] bg-brown-dark/10 overflow-hidden mb-6 relative">
                <img 
                  src={post.image} 
                  alt={post.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                />
              </div>
              <div className="flex items-center gap-4 text-xs font-medium uppercase tracking-widest text-brown-dark/60 mb-3">
                <span className="text-primary">{post.category}</span>
                <span>•</span>
                <span>{post.date}</span>
              </div>
              <h2 className="font-serif text-2xl text-brown-dark mb-3 group-hover:text-primary transition-colors line-clamp-2">
                {post.title}
              </h2>
              <p className="text-brown-dark/70 mb-5 line-clamp-3 text-pretty">
                {post.desc}
              </p>
              <span className="inline-flex items-center gap-2 text-sm font-medium uppercase tracking-widest text-brown-dark group-hover:text-primary transition-colors">
                Đọc tiếp <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </span>
            </article>
          ))}
        </div>
        
        <div className="mt-20 text-center">
          <button className="px-10 py-4 border border-brown-dark text-brown-dark font-medium text-sm uppercase tracking-widest hover:bg-brown-dark hover:text-ivory transition-colors">
            Tải thêm bài viết
          </button>
        </div>
      </div>
    </div>
  );
}
