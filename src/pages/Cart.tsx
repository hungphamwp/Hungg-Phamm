import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { formatPrice } from '../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMinus, faPlus, faXmark } from '@fortawesome/free-solid-svg-icons';


export function Cart() {
  const { cart, updateQuantity, removeFromCart, getCartTotal } = useStore();
  const navigate = useNavigate();

  if (cart.length === 0) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-ivory flex flex-col items-center justify-center text-center">
        <h1 className="font-serif text-4xl text-brown-dark mb-4">GIỎ HÀNG ĐANG TRỐNG</h1>
        <p className="text-brown-dark/70 mb-8 max-w-md mx-auto">Những chiếc bánh ngon vẫn đang chờ bạn. Khám phá ngay bộ sưu tập Trung Thu của chúng tôi.</p>
        <Link to="/shop" className="px-8 py-4 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors">
          Khám phá bộ sưu tập
        </Link>
      </div>
    );
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 1500000 ? 0 : 35000;
  const total = subtotal + shipping;

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 md:px-8">
        <h1 className="font-serif text-4xl md:text-5xl text-brown-dark mb-12 text-center">GIỎ HÀNG</h1>
        
        <div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1">
            <div className="hidden md:grid grid-cols-12 gap-4 pb-4 border-b border-brown-dark/10 text-sm font-medium text-brown-dark/60 uppercase tracking-widest">
              <div className="col-span-6">Sản phẩm</div>
              <div className="col-span-2 text-center">Giá</div>
              <div className="col-span-2 text-center">Số lượng</div>
              <div className="col-span-2 text-right">Thành tiền</div>
            </div>

            <div className="divide-y divide-brown-dark/10">
              {cart.map(item => (
                <div key={item.id} className="py-8 flex flex-col md:grid md:grid-cols-12 gap-4 items-center">
                  <div className="col-span-6 w-full flex items-center gap-6">
                    <button onClick={() => removeFromCart(item.id)} className="text-brown-dark/40 hover:text-primary transition-colors hidden md:block">
                      <FontAwesomeIcon icon={faXmark}  className="w-5 h-5" />
                    </button>
                    <div className="w-24 h-24 bg-cream shrink-0">
                      <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                    </div>
                    <div>
                      <Link to={`/product/${item.slug}`} className="font-serif text-lg font-medium text-brown-dark hover:text-primary transition-colors block mb-1">
                        {item.name}
                      </Link>
                      <button onClick={() => removeFromCart(item.id)} className="text-sm text-brown-dark/50 hover:text-primary md:hidden">
                        Xóa
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-2 text-primary font-medium md:text-center w-full md:w-auto flex justify-between md:block">
                    <span className="md:hidden text-brown-dark/60">Giá:</span>
                    {formatPrice(item.price)}
                  </div>
                  
                  <div className="col-span-2 w-full md:w-auto flex justify-center">
                    <div className="flex items-center border border-brown-dark/20 h-10 w-full max-w-[120px] md:max-w-none">
                      <button 
                        onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                        className="flex-1 h-full flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                      >
                        <FontAwesomeIcon icon={faMinus}  className="w-3 h-3" />
                      </button>
                      <span className="w-10 text-center font-medium text-sm">{item.quantity}</span>
                      <button 
                        onClick={() => updateQuantity(item.id, item.quantity + 1)}
                        className="flex-1 h-full flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                      >
                        <FontAwesomeIcon icon={faPlus}  className="w-3 h-3" />
                      </button>
                    </div>
                  </div>
                  
                  <div className="col-span-2 font-serif text-lg font-medium text-brown-dark text-right w-full flex justify-between md:block">
                    <span className="md:hidden text-brown-dark/60 font-sans text-base">Tổng:</span>
                    {formatPrice(item.price * item.quantity)}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="w-full lg:w-96 shrink-0">
            <div className="bg-cream p-8">
              <h2 className="font-serif text-2xl text-brown-dark mb-6">Tóm Tắt Đơn Hàng</h2>
              
              <div className="space-y-4 mb-8 border-b border-brown-dark/10 pb-8">
                <div className="flex justify-between text-brown-dark">
                  <span className="text-brown-dark/70">Tạm tính</span>
                  <span className="font-medium">{formatPrice(subtotal)}</span>
                </div>
                <div className="flex justify-between text-brown-dark">
                  <span className="text-brown-dark/70">Phí vận chuyển</span>
                  <span className="font-medium">{shipping === 0 ? 'Miễn phí' : formatPrice(shipping)}</span>
                </div>
              </div>

              <div className="flex justify-between items-center mb-8">
                <span className="text-brown-dark font-medium uppercase tracking-widest text-sm">Tổng cộng</span>
                <span className="font-serif text-3xl text-primary font-medium">{formatPrice(total)}</span>
              </div>

              <button 
                onClick={() => navigate('/checkout')}
                className="w-full py-4 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"
              >
                Tiến hành thanh toán
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
