import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { products } from '../data/products';
import { formatPrice } from '../lib/utils';
import { useStore } from '../store/useStore';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faHeart, faStar } from '@fortawesome/free-solid-svg-icons';

import { Link } from 'react-router-dom';
import { ProductCard } from '../components/ProductCard';

export function ProductDetail() {
  const { slug } = useParams<{ slug: string }>();
  const navigate = useNavigate();
  const product = products.find(p => p.slug === slug);
  const [quantity, setQuantity] = useState(1);
  const [activeTab, setActiveTab] = useState<'desc' | 'ingredients' | 'shipping'>('desc');
  const [mainImage, setMainImage] = useState(product?.image || '');

  const { addToCart, toggleWishlist, wishlist } = useStore();
  
  if (!product) {
    return (
      <div className="pt-32 pb-24 text-center min-h-screen flex flex-col items-center justify-center">
        <h1 className="font-serif text-4xl text-brown-dark mb-4">KHÔNG TÌM THẤY SẢN PHẨM</h1>
        <button onClick={() => navigate('/shop')} className="text-primary hover:underline">Quay lại cửa hàng</button>
      </div>
    );
  }

  const isWishlisted = wishlist.some(item => item.id === product.id);

  const handleAddToCart = () => {
    addToCart(product, quantity);
  };

  const handleBuyNow = () => {
    addToCart(product, quantity);
    navigate('/checkout');
  };

  return (
    <div className="pt-24 pb-24 bg-ivory min-h-screen">
      {/* Breadcrumb */}
      <div className="container mx-auto px-4 md:px-8 py-6">
        <div className="flex items-center text-sm text-brown-dark/50 uppercase tracking-wider">
          <Link to="/" className="hover:text-brown-dark transition-colors">Trang chủ</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <Link to="/shop" className="hover:text-brown-dark transition-colors">Cửa hàng</Link>
          <ChevronRight className="w-4 h-4 mx-2" />
          <span className="text-brown-dark">{product.name}</span>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-24">
          
          {/* Product Images */}
          <div className="space-y-4">
            <div className="aspect-square bg-cream overflow-hidden">
              <img src={mainImage} alt={product.name} className="w-full h-full object-cover" />
            </div>
            {product.gallery && product.gallery.length > 1 && (
              <div className="grid grid-cols-4 gap-4">
                {product.gallery.map((img, idx) => (
                  <button 
                    key={idx}
                    onClick={() => setMainImage(img)}
                    className={`aspect-square bg-cream overflow-hidden border-2 transition-colors ${mainImage === img ? 'border-primary' : 'border-transparent'}`}
                  >
                    <img src={img} alt={`${product.name} ${idx + 1}`} className="w-full h-full object-cover" />
                  </button>
                ))}
              </div>
            )}
          </div>

          {/* Product Info */}
          <div className="flex flex-col">
            {product.badge && (
              <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
                {product.badge}
              </span>
            )}
            
            <h1 className="font-serif text-4xl lg:text-5xl text-brown-dark mb-4 leading-tight tracking-wide">{product.name}</h1>
            
            <div className="flex items-center gap-4 mb-6 pb-6 border-b border-brown-dark/10">
              <div className="flex items-center gap-1 text-gold-dark">
                {[...Array(5)].map((_, i) => <FontAwesomeIcon icon={faStar}  key={i} className="w-4 h-4 fill-current" />)}
              </div>
              <span className="text-sm text-brown-dark/50">{product.reviewCount} Đánh giá</span>
            </div>

            <div className="mb-6">
              <span className="text-2xl font-serif font-medium text-primary">{formatPrice(product.price)}</span>
              {product.oldPrice && (
                <span className="text-lg text-brown-dark/40 line-through ml-3">{formatPrice(product.oldPrice)}</span>
              )}
            </div>

            <p className="text-brown-dark/80 text-lg mb-8 leading-loose text-pretty">
              {product.description}
            </p>

            {/* Specs */}
            <div className="space-y-4 mb-10 text-sm">
              {product.pieces && (
                <div className="flex justify-between border-b border-brown-dark/5 pb-2">
                  <span className="text-brown-dark/60">Quy cách</span>
                  <span className="text-brown-dark font-medium">{product.pieces} bánh</span>
                </div>
              )}
              <div className="flex justify-between border-b border-brown-dark/5 pb-2">
                <span className="text-brown-dark/60">Khối lượng</span>
                <span className="text-brown-dark font-medium">{product.weight}</span>
              </div>
              <div className="flex justify-between border-b border-brown-dark/5 pb-2">
                <span className="text-brown-dark/60">Hạn sử dụng</span>
                <span className="text-brown-dark font-medium">{product.expiry}</span>
              </div>
            </div>

            {/* Actions */}
            <div className="space-y-6">
              <div className="flex items-center gap-4">
                <div className="flex items-center border border-brown-dark/20 h-14">
                  <button 
                    onClick={() => setQuantity(Math.max(1, quantity - 1))}
                    className="w-14 h-full flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                  >
                    <FontAwesomeIcon icon={faMinus}  className="w-4 h-4" />
                  </button>
                  <span className="w-14 text-center font-medium">{quantity}</span>
                  <button 
                    onClick={() => setQuantity(quantity + 1)}
                    className="w-14 h-full flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                  >
                    <FontAwesomeIcon icon={faPlus}  className="w-4 h-4" />
                  </button>
                </div>
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 h-14 bg-ivory border border-primary text-primary font-medium text-sm uppercase tracking-widest hover:bg-primary hover:text-ivory transition-all shadow-[0_4px_14px_0_rgba(138,26,36,0.1)]"
                >
                  Thêm vào giỏ
                </button>
                <button 
                  onClick={() => toggleWishlist(product)}
                  className="w-14 h-14 border border-brown-dark/20 flex items-center justify-center text-brown-dark hover:bg-cream transition-colors shrink-0"
                >
                  <FontAwesomeIcon icon={faHeart}  className={`w-5 h-5 transition-colors ${isWishlisted ? 'fill-primary text-primary' : ''}`} />
                </button>
              </div>
              <button 
                onClick={handleBuyNow}
                className="w-full h-14 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgba(138,26,36,0.39)]"
              >
                Mua ngay
              </button>
            </div>

          </div>
        </div>

        {/* Tabs */}
        <div className="mt-24 pt-16 border-t border-brown-dark/10">
          <div className="flex justify-center gap-8 mb-12 border-b border-brown-dark/10">
            {[
              { id: 'desc', label: 'Mô tả chi tiết' },
              { id: 'ingredients', label: 'Thành phần & Bảo quản' },
              { id: 'shipping', label: 'Chính sách vận chuyển' },
            ].map(tab => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id as any)}
                className={`pb-4 font-serif text-lg transition-colors relative ${activeTab === tab.id ? 'text-primary' : 'text-brown-dark/50 hover:text-brown-dark'}`}
              >
                {tab.label}
                {activeTab === tab.id && (
                  <span className="absolute bottom-0 left-0 right-0 h-[2px] bg-primary" />
                )}
              </button>
            ))}
          </div>

          <div className="max-w-3xl mx-auto text-brown-dark/80 text-lg leading-loose text-center text-pretty">
            {activeTab === 'desc' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p>Một món quà Trung Thu hoàn hảo không chỉ nằm ở hương vị bánh thơm ngon, mà còn ở cách thiết kế hộp tinh tế, sang trọng. Chúng tôi mang đến cho bạn những tuyệt tác bánh Trung Thu được nhào nặn từ đôi bàn tay của các nghệ nhân tài hoa, sử dụng những nguyên liệu tinh tuyển nhất.</p>
              </div>
            )}
            {activeTab === 'ingredients' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p className="mb-4"><strong>Thành phần:</strong> {product.ingredients?.join(', ')}.</p>
                <p><strong>Bảo quản:</strong> Để nơi khô ráo, thoáng mát, tránh ánh nắng trực tiếp. Ngon hơn khi thưởng thức cùng trà nóng.</p>
              </div>
            )}
            {activeTab === 'shipping' && (
              <div className="animate-in fade-in slide-in-from-bottom-4 duration-500">
                <p>Giao hàng tiêu chuẩn từ 2-4 ngày làm việc. Hỗ trợ giao hàng hỏa tốc trong nội thành TP.HCM và Hà Nội. Sản phẩm được đóng gói cẩn thận trong hộp carton chống sốc, đảm bảo nguyên vẹn khi đến tay người nhận.</p>
              </div>
            )}
          </div>
        </div>

      </div>

      {/* Related Products */}
      <div className="container mx-auto px-4 md:px-8 pb-24">
        <div className="text-center mb-12">
          <h2 className="font-serif text-3xl text-brown-dark mb-4">BẠN CÓ THỂ THÍCH</h2>
          <div className="w-12 h-[1px] bg-gold mx-auto"></div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
          {products.filter(p => p.id !== product.id && p.category === product.category).slice(0, 4).map(relatedProduct => (
            <ProductCard key={relatedProduct.id} product={relatedProduct} />
          ))}
        </div>
      </div>

    </div>
  );
}
