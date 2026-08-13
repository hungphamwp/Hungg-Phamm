import React from 'react';
import { useStore } from '../store/useStore';
import { ProductCard } from '../components/ProductCard';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHeart } from '@fortawesome/free-solid-svg-icons';


export function Wishlist() {
  const wishlist = useStore(state => state.wishlist);

  return (
    <div className="pt-32 pb-24 min-h-screen bg-cream">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-brown-dark mb-4 text-center">DANH SÁCH YÊU THÍCH</h1>
        
        {wishlist.length === 0 ? (
          <div className="text-center py-20 flex flex-col items-center">
            <FontAwesomeIcon icon={faHeart}  className="w-16 h-16 text-brown-dark/20 mb-6" />
            <p className="text-brown-dark/70 mb-8 max-w-md mx-auto">Bạn chưa lưu sản phẩm nào. Hãy tym những sản phẩm bạn yêu thích nhé.</p>
            <Link to="/shop" className="px-8 py-4 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors">
              Khám phá bộ sưu tập
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-12 mt-16">
            {wishlist.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
