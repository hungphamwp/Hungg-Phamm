
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLocationDot, faPhone, faChevronRight, faPlay, faShoppingBag } from '@fortawesome/free-solid-svg-icons';
import { products } from '../data/products';
import { useState } from 'react';
import { motion } from 'framer-motion';

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
      {/* 1. Hero / Intro Section (Maison Style) */}
      <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden bg-white">
        <div className="container mx-auto px-4 md:px-8">
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left: Arched Image */}
            <div className="w-full lg:w-5/12 flex justify-center lg:justify-end relative">
              {/* Decorative circle behind */}
              <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[110%] aspect-square bg-[#FEF5E7] rounded-full -z-10"></div>
              
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative rounded-t-full overflow-hidden border-8 border-white shadow-2xl w-4/5 lg:w-full aspect-[2/3] max-w-md"
              >
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10 flex flex-col justify-end p-8 text-center pb-12">
                  <h3 className="text-gold font-serif text-2xl lg:text-3xl font-bold uppercase tracking-widest drop-shadow-md">Bộ Sưu Tập</h3>
                  <h2 className="text-white font-serif text-4xl lg:text-5xl italic mt-2 drop-shadow-md">Trung Thu</h2>
                  <p className="text-gold text-xl tracking-[0.2em] mt-2 font-light">2026</p>
                </div>
                <img 
                  src="/images/hero-1.jpg"
                  alt="Trung Thu 2026 Collection" 
                  className="w-full h-full object-cover"
                />
              </motion.div>
            </div>

            {/* Right: Text Content */}
            <div className="w-full lg:w-7/12 text-center lg:text-left">
              <motion.div
                initial={{ opacity: 0, x: 30 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
              >
                <h2 className="font-serif text-2xl md:text-3xl text-gray-500 mb-2 font-light italic">Trăng Đoàn Viên</h2>
                <h1 className="font-serif text-3xl md:text-4xl lg:text-5xl text-[#001D4A] mb-8 font-bold leading-tight uppercase tracking-wider">
                  QUÀ TẾT - QUÀ TRUNG THU <br/>SANG TRỌNG, Ý NGHĨA
                </h1>
                
                <div className="space-y-5 text-gray-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto lg:mx-0">
                  <p>
                    <strong className="text-brown-dark">"Ngôi nhà sành ăn"</strong> của chúng tôi là nơi hội tụ những sản phẩm nông sản, đặc sản đạt tiêu chuẩn xuất khẩu vào những thị trường khó tính nhất.
                  </p>
                  <p>
                    <strong className="text-brown-dark">Trăng Đoàn Viên</strong> - Thương Hiệu Quà Tặng Sang Trọng, Ý Nghĩa, Là Nơi Chúng Tôi Gửi Đến Khách Hàng Những Xu Hướng & Bộ Sản Phẩm Quà Tặng Mới Nhất.
                  </p>
                  <p>
                    Tại Trăng Đoàn Viên, Mỗi Sản Phẩm Đều Được Lựa Chọn Kỹ Càng Để Đảm Bảo Chất Lượng. Mỗi Thiết Kế Đều Được Chăm Chút, Sáng Tạo Để Đưa Đến Những Câu Chuyện Ý Nghĩa. Chúng Tôi Tin Rằng, Trăng Đoàn Viên Sẽ Đưa Đến Thị Trường Những Giải Pháp Quà Tặng Ấn Tượng, Độc Đáo Phù Hợp Với Yêu Cầu Của Khách Hàng.
                  </p>
                </div>
              </motion.div>

              {/* 3 small images row */}
              <motion.div 
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.4 }}
                className="grid grid-cols-3 gap-4 mt-12 max-w-2xl mx-auto lg:mx-0"
              >
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img src="/images/mooncake-1.jpg" alt="Bánh Trung Thu" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img src="/images/gift-box-2.jpg" alt="Hộp Quà Cao Cấp" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
                <div className="aspect-square rounded-lg overflow-hidden shadow-md">
                  <img src="/images/tea-1.jpg" alt="Trà Thượng Hạng" className="w-full h-full object-cover hover:scale-110 transition-transform duration-500" />
                </div>
              </motion.div>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Products Section with Filters */}
      <section className="py-16 bg-[#F9F7F3] relative border-t border-gray-200">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-12">
            <h2 className="font-serif text-3xl md:text-4xl font-bold text-brown-dark mb-8 tracking-widest uppercase inline-block relative">
              TRUNG THU 2026
              <div className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-16 h-1 bg-gold"></div>
            </h2>
          </div>
          
          {/* Category Pills (Maison Style) */}
          <div className="flex flex-wrap justify-center gap-3 mb-12">
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveCategory(cat.id)}
                className={`px-6 py-2 rounded-full border transition-all duration-300 font-medium ${
                  activeCategory === cat.id 
                    ? 'bg-[#001D4A] border-[#001D4A] text-white shadow-md' 
                    : 'bg-white border-gray-300 text-gray-600 hover:border-[#001D4A] hover:text-[#001D4A]'
                }`}
              >
                {cat.name}
              </button>
            ))}
          </div>

          {/* Product Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {filteredProducts.slice(0, 12).map((product) => (
              <div key={product.id} className="bg-white rounded-xl overflow-hidden shadow-[0_5px_15px_rgba(0,0,0,0.05)] hover:shadow-[0_15px_40px_rgba(0,0,0,0.12)] transition-all duration-500 group flex flex-col border border-gray-100">
                <Link to={`/product/${product.slug}`} className="relative block aspect-[4/5] overflow-hidden bg-[#2A1C16]">
                  {product.badge && (
                    <div className="absolute top-4 left-4 z-10 bg-gradient-to-r from-red-600 to-red-500 text-white text-[10px] font-bold px-3 py-1.5 uppercase tracking-widest rounded shadow-md">
                      {product.badge}
                    </div>
                  )}
                  {/* Hover Overlay Actions */}
                  <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10 flex items-center justify-center gap-4">
                    <button className="w-10 h-10 rounded-full bg-white text-brown-dark flex items-center justify-center hover:bg-gold hover:text-white transition-colors shadow-lg">
                      <FontAwesomeIcon icon={faShoppingBag} />
                    </button>
                    <button className="w-10 h-10 rounded-full bg-white text-brown-dark flex items-center justify-center hover:bg-gold hover:text-white transition-colors shadow-lg">
                      <FontAwesomeIcon icon={faPlay} className="w-3 h-3 ml-0.5" />
                    </button>
                  </div>
                  <img 
                    src={product.image} 
                    alt={product.name}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                </Link>
                <div className="p-6 flex flex-col flex-grow items-center text-center">
                  <Link to={`/product/${product.slug}`}>
                    <h3 className="font-serif text-lg font-bold text-brown-dark mb-3 line-clamp-2 hover:text-[#8A1A24] transition-colors">{product.name}</h3>
                  </Link>
                  
                  <div className="mt-auto w-full">
                    <div className="flex flex-col items-center justify-center mb-5">
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
                      to={`/product/${product.slug}`}
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
            <Link to="/shop" className="inline-flex items-center justify-center gap-2 px-8 py-3 bg-[#001D4A] text-white font-medium uppercase tracking-widest rounded-full hover:bg-[#8A1A24] transition-colors">
              Xem tất cả bộ sưu tập <FontAwesomeIcon icon={faChevronRight} className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 3. Promotional Consultation Form Section (HA FOOD style) */}
      <section className="py-20 relative overflow-hidden bg-[#8A1A24]">
        {/* Decorative background for the red section */}
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(#D4AF37 2px, transparent 2px)', backgroundSize: '32px 32px' }}></div>
        <div className="absolute top-0 right-0 w-full h-full bg-gradient-to-l from-black/40 to-transparent"></div>
        
        <div className="container mx-auto px-4 md:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-stretch">
            
            {/* Form Side */}
            <div className="w-full lg:w-1/3 flex">
              <div className="bg-[#FEF5E7] rounded-2xl border-4 border-gold/40 p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] relative w-full flex flex-col justify-between">
                {/* Floating Badge */}
                <div className="absolute -top-5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-gold-dark to-gold text-white px-6 py-2 rounded-full font-bold uppercase tracking-wider shadow-lg whitespace-nowrap text-sm flex items-center gap-2 border border-white/50">
                  <span className="text-red-600 bg-white px-1.5 py-0.5 rounded text-[10px] animate-pulse">HOT</span> Ưu Đãi Miễn Phí In Logo
                </div>
                
                <div className="text-center mt-6 mb-8">
                  <h3 className="text-2xl font-bold text-brown-dark uppercase mb-2 font-serif tracking-wider">Đăng Ký Nhận Tư Vấn</h3>
                  <p className="text-sm text-gray-700">Chỉ dành cho <strong className="text-red-600 text-lg">20 khách hàng</strong> đầu tiên</p>
                  
                  <div className="flex items-center justify-center gap-2 mt-4 text-sm bg-red-50 py-2 rounded-lg border border-red-100">
                    <span className="bg-red-600 text-white px-2 py-0.5 rounded text-[10px] font-bold">HOT</span>
                    <span className="text-gray-700">Ưu đãi sắp hết: <strong className="text-red-600 text-2xl mx-1">15</strong> <span className="text-gray-500">/20</span></span>
                  </div>
                  {/* Progress bar */}
                  <div className="w-full h-2.5 bg-gray-200 rounded-full mt-3 overflow-hidden shadow-inner">
                    <div className="h-full bg-gradient-to-r from-red-500 to-red-700 w-[75%] rounded-full relative">
                      <div className="absolute inset-0 bg-white/20" style={{ backgroundImage: 'repeating-linear-gradient(45deg, transparent, transparent 10px, rgba(255,255,255,0.2) 10px, rgba(255,255,255,0.2) 20px)' }}></div>
                    </div>
                  </div>
                </div>

                <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
                  <input type="text" placeholder="Họ và tên (*)" className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold shadow-sm" required />
                  <input type="tel" placeholder="Số điện thoại (*)" className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold shadow-sm" required />
                  <select className="w-full px-4 py-3.5 bg-white border border-gray-300 rounded-lg focus:outline-none focus:border-gold focus:ring-1 focus:ring-gold text-gray-600 shadow-sm">
                    <option value="">Chọn bộ sưu tập quan tâm</option>
                    <option value="corporate">Quà tặng doanh nghiệp (In Logo)</option>
                    <option value="gift-box">Hộp quà biếu tặng</option>
                  </select>
                  <button className="w-full py-4 mt-2 bg-gradient-to-r from-gold-dark via-gold to-gold-dark text-white font-bold uppercase tracking-wider rounded-lg shadow-[0_5px_15px_rgba(212,175,55,0.5)] hover:shadow-[0_8px_25px_rgba(212,175,55,0.6)] hover:-translate-y-1 transition-all text-lg">
                    ĐẶT HÀNG NGAY
                  </button>
                </form>
              </div>
            </div>

            {/* Banner Graphic Side */}
            <div className="w-full lg:w-2/3 relative flex">
              <div className="w-full rounded-2xl overflow-hidden shadow-[0_20px_50px_rgba(0,0,0,0.5)] border-4 border-gold/40 relative group">
                <img 
                  src="/images/banner-1.jpg" 
                  alt="Trung Thu Banner" 
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000" 
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#8A1A24]/90 via-[#8A1A24]/40 to-transparent flex flex-col justify-end p-8 md:p-12">
                  <div className="max-w-xl">
                    <h3 className="font-serif text-3xl md:text-4xl lg:text-5xl text-gold-light mb-4 font-bold drop-shadow-[0_2px_4px_rgba(0,0,0,0.8)] leading-tight uppercase">
                      BỘ SƯU TẬP NÀY <br/>ÁP DỤNG MỨC CHIẾT KHẤU <br/><span className="text-white text-4xl md:text-5xl lg:text-6xl mt-2 block">LÊN TỚI 25%</span>
                    </h3>
                    <p className="text-white/90 text-lg md:text-xl drop-shadow-md">
                      Chính sách giá đặc biệt dành cho khách hàng doanh nghiệp đặt mua số lượng lớn. Hỗ trợ in logo nhũ kim sang trọng theo yêu cầu.
                    </p>
                  </div>
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
              <div className="flex flex-col mb-4">
                <span className="font-serif text-2xl font-bold tracking-[0.15em] uppercase leading-none text-[#8A1A24]">Trăng</span>
                <span className="font-sans text-xs tracking-[0.3em] uppercase mt-1 text-[#8A1A24]">Đoàn Viên</span>
              </div>
              <p className="text-sm text-gray-600 mb-4 font-medium">Nhãn hiệu đã được đăng ký và bảo hộ độc quyền tại Việt Nam.</p>
              <div className="space-y-3 text-sm text-gray-600">
                <p className="flex items-start gap-3"><FontAwesomeIcon icon={faLocationDot} className="text-[#8A1A24] mt-1 w-4" /> 123 Lê Lợi, Phường Bến Thành, Quận 1, TP.HCM</p>
                <p className="flex items-center gap-3"><FontAwesomeIcon icon={faPhone} className="text-[#8A1A24] w-4" /> <a href="tel:0913337280" className="hover:text-[#8A1A24] font-bold">0913 337 280</a></p>
              </div>
            </div>
            
            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-5 tracking-wider border-b border-gray-200 pb-2 inline-block">Về chúng tôi</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/about" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Giới thiệu</Link></li>
                <li><Link to="/blog" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Tin tức & Cẩm nang</Link></li>
                <li><Link to="/corporate" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Chính sách bán sỉ</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-5 tracking-wider border-b border-gray-200 pb-2 inline-block">Chính sách</h4>
              <ul className="space-y-3 text-sm text-gray-600">
                <li><Link to="/" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Chính sách thanh toán</Link></li>
                <li><Link to="/" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Chính sách vận chuyển</Link></li>
                <li><Link to="/" className="hover:text-[#8A1A24] transition-colors flex items-center gap-2"><FontAwesomeIcon icon={faChevronRight} className="text-[10px] text-gray-400" /> Chính sách đổi trả</Link></li>
              </ul>
            </div>

            <div>
              <h4 className="font-bold text-brown-dark uppercase mb-5 tracking-wider border-b border-gray-200 pb-2 inline-block">Đăng ký nhận tin</h4>
              <p className="text-sm text-gray-600 mb-4 leading-relaxed">Nhận thông tin ưu đãi mới nhất và các bộ sưu tập giới hạn từ chúng tôi.</p>
              <form className="flex shadow-sm" onSubmit={(e) => e.preventDefault()}>
                <input type="email" placeholder="Email của bạn..." className="flex-1 bg-white border border-gray-300 px-4 py-2.5 rounded-l-md focus:outline-none focus:border-[#001D4A] text-sm" required />
                <button type="submit" className="bg-[#001D4A] text-white px-5 py-2.5 rounded-r-md hover:bg-[#8A1A24] transition-colors font-bold text-sm tracking-wide">
                  GỬI
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>
      
      <div className="bg-[#001D4A] text-white/70 text-center py-4 text-[11px] uppercase tracking-wider">
        <p>Công ty Cổ Phần Giải pháp Quà tặng Trăng Đoàn Viên | ĐKKD số: 0110302853. Cấp ngày 29.3.2023. Nơi cấp: Sở KH&ĐT thành phố HCM</p>
      </div>

    </div>
  );
}
