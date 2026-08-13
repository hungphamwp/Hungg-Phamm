import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useStore } from '../store/useStore';
import { formatPrice } from '../lib/utils';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


export function Checkout() {
  const { cart, getCartTotal, clearCart } = useStore();
  const navigate = useNavigate();
  const [isSuccess, setIsSuccess] = useState(false);

  if (cart.length === 0 && !isSuccess) {
    navigate('/cart');
    return null;
  }

  const subtotal = getCartTotal();
  const shipping = subtotal > 1500000 ? 0 : 35000;
  const total = subtotal + shipping;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSuccess(true);
    clearCart();
    window.scrollTo(0, 0);
  };

  if (isSuccess) {
    return (
      <div className="pt-32 pb-24 min-h-screen bg-ivory flex flex-col items-center justify-center text-center px-4">
        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
          <Check className="w-10 h-10 text-green-600" />
        </div>
        <h1 className="font-serif text-4xl text-brown-dark mb-4">ĐẶT HÀNG THÀNH CÔNG</h1>
        <p className="text-brown-dark/70 mb-8 max-w-md mx-auto leading-relaxed">
          Cảm ơn bạn đã lựa chọn Trăng Đoàn Viên. Mã đơn hàng của bạn là <strong>#TDV{Math.floor(Math.random() * 10000)}</strong>.<br/>
          Chúng tôi sẽ sớm liên hệ để xác nhận đơn hàng.
        </p>
        <button 
          onClick={() => navigate('/')}
          className="px-8 py-4 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"
        >
          Trở về trang chủ
        </button>
      </div>
    );
  }

  return (
    <div className="pt-32 pb-24 bg-ivory min-h-screen">
      <div className="container mx-auto px-4 md:px-8 max-w-6xl">
        <h1 className="font-serif text-4xl text-brown-dark mb-12 text-center">THANH TOÁN</h1>
        
        <form onSubmit={handleSubmit} className="flex flex-col lg:flex-row gap-12 lg:gap-24">
          <div className="flex-1 space-y-12">
            
            {/* Contact Info */}
            <section>
              <h2 className="font-serif text-2xl text-brown-dark mb-6 pb-2 border-b border-brown-dark/10">1. Thông tin liên hệ</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Họ và tên *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Số điện thoại *</label>
                  <input required type="tel" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-brown-dark/80">Email *</label>
                  <input required type="email" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
              </div>
            </section>

            {/* Shipping Info */}
            <section>
              <h2 className="font-serif text-2xl text-brown-dark mb-6 pb-2 border-b border-brown-dark/10">2. Địa chỉ giao hàng</h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-brown-dark/80">Địa chỉ cụ thể *</label>
                  <input required type="text" placeholder="Số nhà, tên đường..." className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Tỉnh / Thành phố *</label>
                  <select required className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors">
                    <option value="">Chọn Tỉnh/Thành</option>
                    <option value="sg">TP. Hồ Chí Minh</option>
                    <option value="hn">Hà Nội</option>
                    <option value="other">Khác</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Quận / Huyện *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Phường / Xã *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2 md:col-span-2">
                  <label className="text-sm font-medium text-brown-dark/80">Ghi chú đơn hàng (Không bắt buộc)</label>
                  <textarea rows={3} className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors resize-none" />
                </div>
              </div>
            </section>

            {/* Payment Method */}
            <section>
              <h2 className="font-serif text-2xl text-brown-dark mb-6 pb-2 border-b border-brown-dark/10">3. Phương thức thanh toán</h2>
              <div className="space-y-4">
                <label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="cod" defaultChecked className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán khi nhận hàng (COD)</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="transfer" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Chuyển khoản ngân hàng</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="vnpay" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán qua VNPay</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="momo" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán qua Ví MoMo</span>
                </label>
              </div>
            </section>
          </div>

          <div className="w-full lg:w-[400px] shrink-0">
            <div className="bg-cream p-8 sticky top-32">
              <h2 className="font-serif text-2xl text-brown-dark mb-6">Đơn Hàng Của Bạn</h2>
              
              <div className="space-y-4 mb-6 border-b border-brown-dark/10 pb-6">
                {cart.map(item => (
                  <div key={item.id} className="flex gap-4">
                    <div className="relative">
                      <img src={item.image} alt={item.name} className="w-16 h-16 object-cover border border-brown-dark/10" />
                      <span className="absolute -top-2 -right-2 w-5 h-5 bg-primary text-ivory text-xs flex items-center justify-center rounded-full">
                        {item.quantity}
                      </span>
                    </div>
                    <div className="flex-1 pt-1">
                      <h4 className="text-sm font-medium text-brown-dark line-clamp-1 mb-1">{item.name}</h4>
                      <p className="text-primary text-sm font-medium">{formatPrice(item.price * item.quantity)}</p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="space-y-4 mb-8 border-b border-brown-dark/10 pb-8 text-sm">
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
                type="submit"
                className="w-full py-4 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"
              >
                Hoàn tất đặt hàng
              </button>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
