import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faStar, faTruck } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';

export function Corporate() {
  return (
    <div className="pt-24 min-h-screen bg-cream">
      {/* Hero Section */}
      <section className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_Japanese_wrapping_cloth%2Churoshiki%2Ckatori-city%2Cjapan.JPG" 
            alt="Corporate Gifts" 
            className="w-full h-full object-cover object-center"
          />
          <div className="absolute inset-0 bg-black/50" />
        </div>
        <div className="relative z-10 container mx-auto px-4 text-center text-ivory">
          <span className="inline-block text-gold-light text-xs font-bold tracking-[0.2em] uppercase mb-4">
            Giải Pháp Quà Tặng
          </span>
          <h1 className="font-serif text-4xl md:text-6xl mb-6 drop-shadow-lg">QUÀ TRUNG THU DOANH NGHIỆP</h1>
          <p className="text-ivory/90 text-lg md:text-xl max-w-2xl mx-auto drop-shadow-md">
            Trao gửi lời tri ân đến khách hàng, đối tác và đội ngũ bằng những món quà tinh tế, được thiết kế riêng mang dấu ấn thương hiệu của bạn.
          </p>
        </div>
      </section>

      {/* Services */}
      <section className="py-24 bg-ivory bg-noise relative">
        <div className="container mx-auto px-4 md:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {[
              {
                icon: <Building2 className="w-8 h-8 text-gold" />,
                title: 'THIẾT KẾ ĐỘC QUYỀN',
                desc: 'Hỗ trợ in ấn logo, thiết kế thiệp và bao bì riêng biệt, mang đậm dấu ấn thương hiệu của doanh nghiệp.'
              },
              {
                icon: <Package className="w-8 h-8 text-gold" />,
                title: 'CHIẾT KHẤU ĐẶC QUYỀN',
                desc: 'Chính sách giá vô cùng ưu đãi dành riêng cho các đơn hàng số lượng lớn từ doanh nghiệp.'
              },
              {
                icon: <FontAwesomeIcon icon={faTruck}  className="w-8 h-8 text-gold" />,
                title: 'GIAO HÀNG LINH HOẠT',
                desc: 'Dịch vụ giao hàng đa điểm chuyên nghiệp, đảm bảo quà tặng đến tay từng người nhận đúng thời gian.'
              }
            ].map((item, idx) => (
              <div key={idx} className="flex flex-col items-center text-center p-8 bg-cream">
                <div className="mb-6">{item.icon}</div>
                <h3 className="font-medium text-brown-dark mb-4 tracking-wider">{item.title}</h3>
                <p className="text-brown-dark/70 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Corporate Collections */}
      <section className="py-24 bg-cream bg-noise relative border-t border-gold/10">
        <div className="container mx-auto px-4 md:px-8">
          <div className="text-center mb-16">
            <h2 className="font-serif text-3xl md:text-4xl text-brown-dark mb-4">GỢI Ý QUÀ TẶNG</h2>
            <p className="text-brown-dark/70 max-w-2xl mx-auto">Các bộ quà tặng được thiết kế riêng phù hợp với nhiều ngân sách và đối tượng người nhận.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <div className="bg-ivory p-8 flex flex-col md:flex-row gap-8 items-center border border-brown-dark/10">
              <div className="w-full md:w-1/2 aspect-square bg-cream">
                <img src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg" alt="Hộp Trăng Vàng" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-2xl text-brown-dark mb-2">Hộp Trăng Vàng</h3>
                <p className="text-primary font-medium mb-4">1.590.000đ</p>
                <p className="text-brown-dark/70 text-sm mb-6">Món quà hoàn hảo dành cho đối tác VIP. Hộp 8 bánh thượng hạng thiết kế mạ vàng sang trọng.</p>
                <Link to="/product/hop-trang-vang" className="text-sm font-medium uppercase tracking-widest text-brown-dark border-b border-brown-dark pb-1 hover:text-primary hover:border-primary transition-colors">Xem chi tiết</Link>
              </div>
            </div>
            
            <div className="bg-ivory p-8 flex flex-col md:flex-row gap-8 items-center border border-brown-dark/10">
              <div className="w-full md:w-1/2 aspect-square bg-cream">
                <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg" alt="Hộp Cát Tường" className="w-full h-full object-cover" />
              </div>
              <div className="w-full md:w-1/2">
                <h3 className="font-serif text-2xl text-brown-dark mb-2">Hộp Cát Tường</h3>
                <p className="text-primary font-medium mb-4">680.000đ</p>
                <p className="text-brown-dark/70 text-sm mb-6">Lựa chọn lý tưởng để gửi tặng nhân viên. Hộp 4 bánh thiết kế thanh lịch, ấm áp.</p>
                <Link to="/product/hop-cat-tuong" className="text-sm font-medium uppercase tracking-widest text-brown-dark border-b border-brown-dark pb-1 hover:text-primary hover:border-primary transition-colors">Xem chi tiết</Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 bg-brown-dark bg-noise-dark text-ivory relative shadow-inner">
        <div className="container mx-auto px-4 md:px-8 max-w-5xl">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-serif text-3xl md:text-4xl mb-6">NHẬN TƯ VẤN NGAY</h2>
              <p className="text-ivory/70 mb-10 leading-relaxed">
                Hãy để Trăng Đoàn Viên giúp bạn tạo nên những món quà Trung Thu ý nghĩa nhất. Đội ngũ của chúng tôi luôn sẵn sàng lắng nghe và tư vấn giải pháp phù hợp với doanh nghiệp của bạn.
              </p>
              <div className="space-y-6">
                <div>
                  <p className="text-sm text-ivory/50 uppercase tracking-widest mb-1">Hotline Doanh Nghiệp</p>
                  <a href="tel:0913337280" className="text-xl font-medium text-gold-light hover:text-ivory transition-colors">0913 337 280</a>
                </div>
                <div>
                  <p className="text-sm text-ivory/50 uppercase tracking-widest mb-1">Email</p>
                  <a href="mailto:phammhungg159@gmail.com" className="text-lg hover:text-gold-light transition-colors">phammhungg159@gmail.com</a>
                </div>
              </div>
            </div>
            
            <form className="space-y-6 bg-ivory/5 p-8 border border-ivory/10" onSubmit={(e) => e.preventDefault()}>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Tên doanh nghiệp</label>
                <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Người liên hệ</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Số lượng</label>
                  <input type="number" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Ngân sách dự kiến</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Ngày cần giao</label>
                <input type="date" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Ghi chú</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors resize-none"></textarea>
              </div>
              <button type="submit" className="w-full py-4 bg-gold text-brown-dark font-medium text-sm uppercase tracking-widest hover:bg-gold-light transition-colors mt-4">
                Gửi Yêu Cầu
              </button>
            </form>
          </div>
        </div>
      </section>
    </div>
  );
}
