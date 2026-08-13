import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark, faMinus, faPlus, faBagShopping } from '@fortawesome/free-solid-svg-icons';

import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';
import { formatPrice } from '../lib/utils';
import { Link } from 'react-router-dom';

export function CartDrawer() {
  const { isCartOpen, setIsCartOpen, cart, updateQuantity, removeFromCart, getCartTotal } = useStore();

  return (
    <AnimatePresence>
      {isCartOpen && (
        <>
          {/* Backdrop */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsCartOpen(false)}
            className="fixed inset-0 bg-brown-dark/50 backdrop-blur-sm z-[60]"
          />

          {/* Drawer */}
          <motion.div
            initial={{ x: '100%' }}
            animate={{ x: 0 }}
            exit={{ x: '100%' }}
            transition={{ type: 'spring', damping: 25, stiffness: 200 }}
            className="fixed inset-y-0 right-0 w-full max-w-md bg-ivory z-[70] shadow-2xl flex flex-col"
          >
            {/* Header */}
            <div className="flex items-center justify-between p-6 border-b border-brown-dark/10">
              <h2 className="font-serif text-xl font-medium tracking-wide flex items-center gap-2">
                <FontAwesomeIcon icon={faBagShopping}  className="w-5 h-5" />
                GIỎ HÀNG
              </h2>
              <button 
                onClick={() => setIsCartOpen(false)}
                className="p-2 hover:bg-brown-dark/5 rounded-full transition-colors text-brown-dark/60 hover:text-brown-dark"
              >
                <FontAwesomeIcon icon={faXmark}  className="w-5 h-5" />
              </button>
            </div>

            {/* Cart Items */}
            <div className="flex-1 overflow-y-auto p-6">
              {cart.length === 0 ? (
                <div className="h-full flex flex-col items-center justify-center text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-cream flex items-center justify-center text-brown-dark/20">
                    <FontAwesomeIcon icon={faBagShopping}  className="w-8 h-8" />
                  </div>
                  <div>
                    <p className="font-serif text-lg text-brown-dark mb-1">Giỏ hàng đang trống</p>
                    <p className="text-sm text-brown-dark/60">Những chiếc bánh ngon vẫn đang chờ bạn.</p>
                  </div>
                  <button 
                    onClick={() => setIsCartOpen(false)}
                    className="mt-4 px-6 py-3 bg-primary text-ivory text-sm font-medium uppercase tracking-widest hover:bg-primary-dark transition-colors"
                  >
                    Khám phá bộ sưu tập
                  </button>
                </div>
              ) : (
                <div className="space-y-6">
                  {cart.map((item) => (
                    <div key={item.id} className="flex gap-4">
                      <div className="w-24 h-24 bg-cream shrink-0">
                        <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                      </div>
                      <div className="flex flex-col flex-1">
                        <div className="flex justify-between items-start mb-1">
                          <Link 
                            to={`/product/${item.slug}`} 
                            onClick={() => setIsCartOpen(false)}
                            className="font-serif font-medium text-brown-dark hover:text-primary transition-colors line-clamp-1 pr-4"
                          >
                            {item.name}
                          </Link>
                          <button 
                            onClick={() => removeFromCart(item.id)}
                            className="text-brown-dark/40 hover:text-primary transition-colors shrink-0"
                          >
                            <FontAwesomeIcon icon={faXmark}  className="w-4 h-4" />
                          </button>
                        </div>
                        <p className="text-primary font-medium mb-3">
                          {formatPrice(item.price)}
                        </p>
                        
                        <div className="flex items-center justify-between mt-auto">
                          <div className="flex items-center border border-brown-dark/20">
                            <button 
                              onClick={() => updateQuantity(item.id, Math.max(1, item.quantity - 1))}
                              className="w-8 h-8 flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                            >
                              <FontAwesomeIcon icon={faMinus}  className="w-3 h-3" />
                            </button>
                            <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                            <button 
                              onClick={() => updateQuantity(item.id, item.quantity + 1)}
                              className="w-8 h-8 flex items-center justify-center text-brown-dark/60 hover:text-brown-dark hover:bg-cream transition-colors"
                            >
                              <FontAwesomeIcon icon={faPlus}  className="w-3 h-3" />
                            </button>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>

            {/* Footer */}
            {cart.length > 0 && (
              <div className="p-6 border-t border-brown-dark/10 bg-cream/50">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-medium text-brown-dark/60 uppercase tracking-wider text-sm">Tạm tính</span>
                  <span className="font-serif text-xl text-primary font-medium">{formatPrice(getCartTotal())}</span>
                </div>
                <p className="text-xs text-brown-dark/50 mb-6 text-center text-pretty">
                  Phí vận chuyển và thuế sẽ được tính khi thanh toán.
                </p>
                <div className="space-y-3">
                  <Link 
                    to="/cart"
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full py-4 text-center border border-brown-dark text-brown-dark font-medium text-sm uppercase tracking-widest hover:bg-brown-dark hover:text-ivory transition-colors"
                  >
                    Xem giỏ hàng
                  </Link>
                  <Link 
                    to="/checkout"
                    onClick={() => setIsCartOpen(false)}
                    className="block w-full py-4 text-center bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"
                  >
                    Tiến hành thanh toán
                  </Link>
                </div>
              </div>
            )}
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}
