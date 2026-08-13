import React from 'react';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBagShopping, faHeart } from '@fortawesome/free-solid-svg-icons';

import { Product } from '../data/products';
import { formatPrice, cn } from '../lib/utils';
import { useStore } from '../store/useStore';
import { motion } from 'framer-motion';

interface ProductCardProps {
  product: Product;
  key?: React.Key;
}

export function ProductCard({ product }: ProductCardProps) {
  const { addToCart, toggleWishlist, wishlist } = useStore();
  const isWishlisted = wishlist.some(item => item.id === product.id);

  return (
    <div className="group relative flex flex-col bg-ivory shadow-[0_4px_20px_-4px_rgba(30,18,13,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(138,26,36,0.15)] hover:-translate-y-2 transition-all duration-500 rounded-sm border border-gold/10 overflow-hidden">
      {/* Image Container */}
      <div className="relative aspect-[4/5] overflow-hidden bg-brown-dark/5 mb-4">
        {product.badge && (
          <span className="absolute top-4 left-4 z-10 bg-primary text-ivory text-[10px] font-bold px-2 py-1 uppercase tracking-widest">
            {product.badge}
          </span>
        )}
        
        <Link to={`/product/${product.slug}`} className="absolute inset-0 z-0">
          <motion.img 
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.6, ease: [0.25, 0.46, 0.45, 0.94] }}
            src={product.image} 
            alt={product.name}
            className="w-full h-full object-cover"
          />
        </Link>

        {/* Quick Actions (Hover) */}
        <div className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex gap-2 z-10 bg-gradient-to-t from-brown-dark/90 via-brown-dark/50 to-transparent">
          <button 
            onClick={() => addToCart(product)}
            className="flex-1 bg-primary text-ivory font-medium text-sm py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg"
          >
            <FontAwesomeIcon icon={faBagShopping}  className="w-4 h-4" />
            <span>THÊM VÀO GIỎ</span>
          </button>
          <button 
            onClick={() => toggleWishlist(product)}
            className="w-12 bg-ivory text-primary hover:bg-cream transition-colors flex items-center justify-center shrink-0 shadow-lg"
          >
            <FontAwesomeIcon icon={faHeart}  className={cn("w-4 h-4 transition-colors", isWishlisted && "fill-primary text-primary")} />
          </button>
        </div>
      </div>

      {/* Content */}
      <div className="flex flex-col flex-1 px-5 pb-5 pt-2">
        <div className="flex items-center gap-1 mb-1 text-gold">
          {/* Star rating simple mock */}
          <span className="text-xs">★</span>
          <span className="text-xs">★</span>
          <span className="text-xs">★</span>
          <span className="text-xs">★</span>
          <span className="text-xs">★</span>
          <span className="text-[10px] text-brown-dark/50 ml-1">({product.reviewCount})</span>
        </div>
        <Link to={`/product/${product.slug}`}>
          <h3 className="font-serif text-lg font-medium text-brown-dark mb-1 hover:text-primary transition-colors line-clamp-1">
            {product.name}
          </h3>
        </Link>
        <p className="text-sm text-brown-dark/60 mb-3 line-clamp-2 text-pretty">
          {product.description}
        </p>
        <div className="mt-auto flex items-center gap-3">
          <span className="text-primary font-medium tracking-wide">
            {formatPrice(product.price)}
          </span>
          {product.oldPrice && (
            <span className="text-sm text-brown-dark/40 line-through">
              {formatPrice(product.oldPrice)}
            </span>
          )}
        </div>
      </div>
    </div>
  );
}
