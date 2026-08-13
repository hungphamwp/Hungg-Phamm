import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function NotFound() {
  return (
    <div className="min-h-screen pt-32 pb-24 bg-ivory flex flex-col items-center justify-center text-center px-4">
      <Moon className="w-24 h-24 text-gold-light mb-8" />
      <h1 className="font-serif text-5xl md:text-7xl text-brown-dark mb-6">TRĂNG ĐANG Ở ĐÂU?</h1>
      <p className="text-brown-dark/70 text-lg mb-10 max-w-md mx-auto">
        Có vẻ như trang bạn tìm kiếm đã lạc khỏi mùa trăng. Hãy quay lại trang chủ để tiếp tục khám phá.
      </p>
      <Link 
        to="/"
        className="px-10 py-4 border border-brown-dark text-brown-dark text-sm font-medium uppercase tracking-widest hover:bg-brown-dark hover:text-ivory transition-colors"
      >
        Về trang chủ
      </Link>
    </div>
  );
}
