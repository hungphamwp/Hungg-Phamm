const fs = require('fs');

const homeContent = `
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faClock, faPhone, faStar, faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';
import { useState } from 'react';

export function Home() {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  
  const categories = [
    { id: 'all', name: 'Tất cả' },
    { id: 'mooncake', name: 'Bánh Trung Thu' },
    { id: 'gift-box', name: 'Hộp Quà' },
    { id: 'corporate', name: 'Quà Doanh Nghiệp' }
  ];

  const filteredProducts = activeCategory === 'all' 
    ? products 
    : products.filter(p => p.category === activeCategory);

  return (
    <div className="bg-[#FCFBF8] min-h-screen font-sans">
      {/* 1. Hero / Intro Section */}
      <section className="relative pt-32 pb-16 overflow-hidden">
        <div className="container mx-auto px-4 md:px-8 text-center relative z-10">
          <h2 className="font-serif italic text-2xl md:text-3xl text-brown mb-2 font-light">Maison Luxury</h2>
          <h1 className="font-serif text-3xl md:text-5xl text-[#001D4A] mb-8 font-bold leading-tight uppercase tracking-wider">
            QUÀ TRUNG THU <br/> SANG TRỌNG, Ý NGHĨA
          </h1>
          
          <div className="max-w-3xl mx-auto space-y-4 text-brown-dark/80 text-sm md:text-base leading-relaxed">
            <p>
              "Ngôi nhà sành ăn" của chúng tôi là nơi hội tụ những sản phẩm nông sản, đặc sản đạt tiêu chuẩn xuất khẩu vào những thị trường khó tính nhất.
            </p>
            <p>
              <strong>Trăng Đoàn Viên</strong> - Thương Hiệu Quà Tặng Sang Trọng, Ý Nghĩa, Là Nơi Chúng Tôi Gửi Đến Khách Hàng Những Xu Hướng & Bộ Sản Phẩm Quà Tặng Mới Nhất.
            </p>
            <p>
              Mỗi Sản Phẩm Đều Được Lựa Chọn Kỹ Càng Để Đảm Bảo Chất Lượng. Mỗi Thiết Kế Đều Được Chăm Chút, Sáng Tạo Để Đưa Đến Những Câu Chuyện Ý Nghĩa.
            </p>
          </div>
        </div>
        
        {/* Subtle decorative elements */}
        <div className="absolute top-0 left-0 w-64 h-64 bg-gold/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl translate-x-1/3 translate-y-1/3"></div>
      </section>

      {/* 2. Products Section with Filters */}
      <section className="py-12 bg-white relative">
        <div className="container mx-auto px-4 md:px-8">
          <h2 className="text-center font-serif text-3xl md:text-4xl font-bold text-brown-dark mb-10 tracking-widest uppercase">
            TRUNG THU 2026
          </h2>
          
          {/* Category Pills */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={\`px-6 py-2 rounded-full border transition-all duration-300 \${
                  activeCategory === cat.id 
                    ? 'bg-[#001D4A] border-[#001D4A] text-white shadow-md' 
                    : 'bg-white border-gray-300 text-gray-600 hover:border-[#001D4A] hover:text-[#001D4A]'
                }\`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 12).map((product) => (
              <div key={product.id} className="bg-white border border-gray-100 rounded-xl overflow-hidden hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 group flex flex-col">
                <Link to={\`/product/\${product.slug}\`} className="relative block aspect-[4/5] overflow-hidden bg-[#F5EFE6]">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded-sm shadow-md">
                      {product.badge}
                    </div>
                  )}
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="p-5 flex flex-col flex-grow">
                  <Link to={\`/product/\${product.slug}\`}>
                    <h3 className="font-serif text-lg font-bold text-brown-dark mb-2 line-clamp-2 hover:text-[#8A1A24] transition-colors">{product.name}</h3>
                  </Link>
                  
                  {/* HA Food style ingredients list */}
                  {product.ingredients && product.ingredients.length > 0 && (
                    <div className="mb-4 text-xs text-gray-600 bg-gray-50/50 p-3 rounded-lg border border-gray-100">
                      <div className="font-semibold text-brown-dark mb-1 flex items-center gap-1">
                        <span className="text-gold">❀</span> Nhân bánh bao gồm:
                      </div>
                      <ul className="list-none pl-1 space-y-1">
                        {product.ingredients.slice(0, 4).map((ing, idx) => (
                          <li key={idx} className="flex items-start gap-1.5">
                            <span className="text-primary mt-0.5">•</span>
                            <span className="line-clamp-1">{ing}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  )}
                  
                  <div className="mt-auto">
                    <div className="flex flex-col mb-4">
                      {product.oldPrice && (
                        <span className="text-gray-400 line-through text-sm font-medium">
                          {product.oldPrice.toLocaleString('vi-VN')}₫
                        </span>
                      )}
                      <span className="text-2xl font-bold text-[#C8102E]">
                        {product.price.toLocaleString('vi-VN')}₫
                      </span>
                    </div>
                    
                    <Link 
                      to={\`/product/\${product.slug}\`}
                      className="block w-full py-3 bg-gradient-to-r from-gold-dark to-gold text-white text-center font-bold uppercase tracking-wider text-sm rounded hover:shadow-lg transition-shadow"
                    >
                      ĐẶT HÀNG NGAY
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-12">
            <Link to="/shop" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#001D4A] text-white font-medium uppercase tracking-widest rounded-full hover:bg-brown-dark transition-colors">
              Xem tất cả bộ sưu tập <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Promotional Consultation Form Section (HA FOOD style) */}
      <section className="py-20 relative overflow-hidden bg-[#8A1A24]">
        {/* Decorative background for the red section */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 1px, transparent 1px)', backgroundSize: '24px 24px' }}></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-12 items-center">
            
            {/* Form Side */}
            <div className="w-full lg:w-1/3">
              <div className="bg-[#FEF5E7] rounded-2xl border-2 border-gold p-6 md:p-8 shadow-2xl relative">
                {/* Floating Badge */}
                <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-dark to-gold text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider shadow-lg whitespace-nowrap text-sm flex items-center gap-2 border-2 border-white">
                  <span className="text-red-600 bg-white px-1.5 py-0.5 rounded text-[10px]">HOT</span> Ưu Đãi Miễn Phí In Logo
                </div>
                
                <div className="text-center mt-4 mb-6">
                  <h3 className="text-xl font-bold text-brown-dark uppercase mb-1">Đăng Ký Nhận Tư Vấn</h3>
                  <p className="text-sm text-gray-600">Chỉ dành cho <strong className="text-primary">20 khách hàng</strong> đầu tiên</p>
                  
                  <div className="flex items-center justify-center gap-2 mt-3 text-sm">
                    <span className="bg-red-100 text-red-600 px-2 py-0.5 rounded text-[10px] font-bold">HOT</span>
                    <span>Ưu đãi sắp hết: <strong className="text-red-600 text-xl">15</strong> <span className="text-gray-500">/20</span></span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2 bg-gray-200 rounded-full mt-2 overflow-hidden">
                    <div className="h-full bg-red-600 w-[75%] rounded-full"></div>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Họ và tên (*)" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gold" required />
                  <input type="tel" placeholder="Số điện thoại (*)" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gold" required />
                  <input type="text" placeholder="Địa chỉ nhận hàng (*)" className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gold" required />
                  <select className="w-full px-4 py-3 bg-white border border-gray-200 rounded-lg focus:outline-none focus:border-gold text-gray-600">
                    <option value="">Chọn bộ sưu tập quan tâm</option>
                    <option value="corporate">Quà tặng doanh nghiệp (In Logo)</option>
                    <option value="gift-box">Hộp quà biếu tặng</option>
                    <option value="mooncake">Bánh lẻ các vị</option>
                  </select>
                  <button className="w-full py-4 bg-gradient-to-r from-gold-dark to-gold text-white font-bold uppercase tracking-wider rounded-lg shadow-[0_4px_15px_rgba(212,175,55,0.4)] hover:shadow-[0_6px_20px_rgba(212,175,55,0.6)] hover:-translate-y-0.5 transition-all">
                    ĐẶT HÀNG NGAY
                  </button>
                </form>
              </div>
            </div>

            {/* Banner Graphic Side */}
            <div className="w-full lg:w-2/3 relative">
              <div className="aspect-[16/9] md:aspect-[2/1] rounded-2xl overflow-hidden shadow-2xl border-4 border-gold/30">
                <img src="https://images.unsplash.com/photo-1558961363038-f53826b00b46?auto=format&fit=crop&w=1200&q=80" alt="Trung Thu Banner" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent flex flex-col justify-center p-8 md:p-12">
                  <h3 className="font-serif text-3xl md:text-5xl text-gold-light mb-4 font-bold drop-shadow-lg leading-tight">
                    BỘ SƯU TẬP NÀY <br/>ÁP DỤNG MỨC CHIẾT KHẤU <br/><span className="text-white">LÊN TỚI 25%</span>
                  </h3>
                  <p className="text-white/90 text-lg max-w-md">
                    Chính sách giá đặc biệt dành cho khách hàng doanh nghiệp đặt mua số lượng lớn. Hỗ trợ in logo nhũ kim sang trọng.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* 4. Footer Information Section (Mimicking Maison footer logic) */}
      <section className="py-16 bg-[#F8F9FA] border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div>
              <h3 className="font-serif text-2xl font-bold text-brown-dark mb-4">TRĂNG ĐOÀN VIÊN</h3>
              <p className="text-sm text-gray-600 mb-4">Nhãn hiệu đã được đăng ký và bảo hộ độc quyền tại Việt Nam.</p>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-2"><FontAwesomeIcon icon={faLocationDot} className="text-primary mt-1" /> 123 Lê Lợi, P. Bến Thành, Quận 1, HCM</p>
                <p className="flex items-start gap-2"><FontAwesomeIcon icon={faPhone} className="text-primary mt-1" /> 0913 337 280</p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-4 tracking-wider">Về chúng tôi</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-primary">Giới thiệu</Link></li>
                <li><Link to="/blog" className="hover:text-primary">Tin tức</Link></li>
                <li><Link to="/corporate" className="hover:text-primary">Chính sách bán sỉ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-4 tracking-wider">Chính sách</h4>
              <ul className="space-y-2 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-primary">Chính sách thanh toán</Link></li>
                <li><Link to="/" className="hover:text-primary">Chính sách vận chuyển</Link></li>
                <li><Link to="/" className="hover:text-primary">Chính sách đổi trả</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-4 tracking-wider">Đăng ký nhận tin</h4>
              <p className="text-sm text-gray-600 mb-4">Nhận thông tin ưu đãi mới nhất.</p>
              <div className="flex">
                <input type="email" placeholder="Email" className="flex-1 bg-white border border-gray-300 px-4 py-2 rounded-l-md focus:outline-none focus:border-primary" />
                <button className="bg-[#001D4A] text-white px-4 py-2 rounded-r-md hover:bg-primary transition-colors font-medium text-sm">
                  Đăng ký
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-[#001D4A] text-white/80 text-center py-4 text-xs">
        <p>Công ty Cổ Phần Giải pháp Quà tặng Trăng Đoàn Viên | ĐKKD số: 0110302853. Cấp ngày 29.3.2023. Nơi cấp: Sở KH&ĐT thành phố HCM</p>
      </div>

    </div>
  );
}
`;

fs.writeFileSync('src/pages/Home.tsx', homeContent);
console.log('Home.tsx updated completely');
