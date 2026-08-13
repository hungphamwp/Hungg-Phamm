import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebook, faInstagram, faTwitter, faYoutube } from '@fortawesome/free-brands-svg-icons';


export function Footer() {
  return (
    <footer className="bg-brown-dark bg-noise-dark text-ivory/80 pt-20 pb-10 shadow-inner relative border-t border-gold/10">
      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand */}
          <div className="space-y-6">
            <Link to="/" className="inline-block font-serif text-3xl font-bold text-gold-light tracking-wider uppercase">
              Trăng Đoàn Viên
            </Link>
            <p className="text-sm leading-relaxed max-w-xs text-pretty">
              Mang tinh hoa ẩm thực truyền thống Việt Nam kết hợp cùng nét đẹp hiện đại, tạo nên những hộp quà Trung Thu trọn vẹn ý nghĩa.
            </p>
            <div className="flex items-center space-x-4 pt-2">
              <a href="#" className="hover:text-gold-light transition-colors"><FontAwesomeIcon icon={faFacebook}  className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-light transition-colors"><FontAwesomeIcon icon={faInstagram}  className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-light transition-colors"><FontAwesomeIcon icon={faTwitter}  className="w-5 h-5" /></a>
              <a href="#" className="hover:text-gold-light transition-colors"><FontAwesomeIcon icon={faYoutube}  className="w-5 h-5" /></a>
            </div>
          </div>

          {/* About */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6 tracking-wide">THƯƠNG HIỆU</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/about" className="hover:text-gold-light transition-colors">Về chúng tôi</Link></li>
              <li><Link to="/story" className="hover:text-gold-light transition-colors">Câu chuyện thương hiệu</Link></li>
              <li><Link to="/ingredients" className="hover:text-gold-light transition-colors">Nguyên liệu tinh tuyển</Link></li>
              <li><Link to="/corporate" className="hover:text-gold-light transition-colors">Khách hàng doanh nghiệp</Link></li>
              <li><Link to="/blog" className="hover:text-gold-light transition-colors">Cẩm nang Trung Thu</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6 tracking-wide">HỖ TRỢ</h4>
            <ul className="space-y-4 text-sm">
              <li><Link to="/faq" className="hover:text-gold-light transition-colors">Câu hỏi thường gặp</Link></li>
              <li><Link to="/shipping" className="hover:text-gold-light transition-colors">Chính sách giao hàng</Link></li>
              <li><Link to="/returns" className="hover:text-gold-light transition-colors">Chính sách đổi trả</Link></li>
              <li><Link to="/privacy" className="hover:text-gold-light transition-colors">Chính sách bảo mật</Link></li>
              <li><Link to="/terms" className="hover:text-gold-light transition-colors">Điều khoản dịch vụ</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-serif text-lg text-ivory mb-6 tracking-wide">LIÊN HỆ</h4>
            <ul className="space-y-4 text-sm">
              <li className="flex flex-col">
                <span className="text-xs text-ivory/50 mb-1 uppercase tracking-wider">Người liên hệ</span>
                <span className="text-ivory font-medium">Hưng Phạm</span>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-ivory/50 mb-1 uppercase tracking-wider">Điện thoại</span>
                <a href="tel:0913337280" className="text-gold-light font-medium text-lg hover:text-ivory transition-colors">0913 337 280</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-ivory/50 mb-1 uppercase tracking-wider">Email</span>
                <a href="mailto:phammhungg159@gmail.com" className="hover:text-gold-light transition-colors">phammhungg159@gmail.com</a>
              </li>
              <li className="flex flex-col">
                <span className="text-xs text-ivory/50 mb-1 uppercase tracking-wider">Địa chỉ</span>
                <span>123 Nguyễn Huệ, Quận 1<br />TP. Hồ Chí Minh, Việt Nam</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-ivory/10 pt-8 flex flex-col md:flex-row items-center justify-between text-xs text-ivory/50">
          <p>© 2026 Trăng Đoàn Viên. All Rights Reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5e/Visa_Inc._logo.svg/2560px-Visa_Inc._logo.svg.png" alt="Visa" className="h-4 opacity-50 grayscale" />
            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2a/Mastercard-logo.svg/1280px-Mastercard-logo.svg.png" alt="Mastercard" className="h-4 opacity-50 grayscale" />
          </div>
        </div>
      </div>
    </footer>
  );
}
