import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass, faUser, faHeart, faBagShopping, faBars, faXmark } from '@fortawesome/free-solid-svg-icons';

import { useStore } from '../store/useStore';
import { cn } from '../lib/utils';
import { AnimatePresence, motion } from 'framer-motion';

const NAV_LINKS = [
  { name: 'Trang chủ', href: '/' },
  { name: 'Bánh Trung Thu', href: '/shop?category=mooncake' },
  { name: 'Hộp quà', href: '/shop?category=gift-box' },
  { name: 'Bộ sưu tập', href: '/shop?collection=all' },
  { name: 'Quà doanh nghiệp', href: '/corporate' },
  { name: 'Về chúng tôi', href: '/about' },
  { name: 'Cẩm nang', href: '/blog' },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();
  const isHome = location.pathname === '/';
  
  const cartCount = useStore(state => state.getCartCount());
  const setIsCartOpen = useStore(state => state.setIsCartOpen);
  const setIsSearchOpen = useStore(state => state.setIsSearchOpen);
  const wishlist = useStore(state => state.wishlist);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const textColor = 'text-brown-dark hover:text-primary drop-shadow-[0_2px_4px_rgba(30,18,13,0.05)]';
  const logoColor = 'text-primary drop-shadow-[0_2px_4px_rgba(138,26,36,0.1)]';

  return (
    <>
      <header
        className={cn(
          'fixed top-0 left-0 right-0 z-50 transition-all duration-500 ease-in-out',
          isScrolled 
            ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-brown-dark/10' 
            : 'bg-ivory border-b border-brown-dark/10'
        )}
      >
        {/* Announcement Bar */}
        <div className={cn(
          "bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-ivory/90 shadow-inner text-xs font-medium py-2 px-4 text-center tracking-widest uppercase transition-all duration-500 overflow-hidden",
          isScrolled ? "h-0 py-0 opacity-0" : "h-auto opacity-100"
        )}>
          Đặt bánh trước 20/09 để nhận ưu đãi miễn phí vận chuyển
        </div>

        <div className="container mx-auto px-4 md:px-8 py-4">
          <div className="flex items-center justify-between">
            {/* Mobile Menu Button */}
            <button
              className={cn('md:hidden', textColor)}
              onClick={() => setIsMobileMenuOpen(true)}
            >
              <FontAwesomeIcon icon={faBars}  className="w-6 h-6" />
            </button>

            {/* Logo */}
            <Link 
              to="/" 
              className={cn(
                'group flex flex-col items-center justify-center transition-colors',
                logoColor
              )}
            >
              <span className="font-serif text-2xl md:text-3xl font-bold tracking-[0.15em] uppercase leading-none">
                Trăng
              </span>
              <span className="font-sans text-[10px] md:text-xs tracking-[0.3em] uppercase mt-1 opacity-80 group-hover:opacity-100 transition-opacity">
                Đoàn Viên
              </span>
            </Link>

            {/* Desktop Navigation */}
            <nav className="hidden md:flex items-center space-x-8">
              {NAV_LINKS.map((link) => (
                <Link
                  key={link.name}
                  to={link.href}
                  className={cn(
                    'text-xs lg:text-sm font-medium uppercase tracking-widest transition-colors',
                    textColor
                  )}
                >
                  {link.name}
                </Link>
              ))}
            </nav>

            {/* Actions */}
            <div className="flex items-center space-x-4 md:space-x-6">
              <button 
                onClick={() => setIsSearchOpen(true)}
                className={cn('hidden md:block transition-colors', textColor)}
              >
                <FontAwesomeIcon icon={faMagnifyingGlass}  className="w-5 h-5" />
              </button>
              <button className={cn('hidden md:block transition-colors', textColor)}>
                <FontAwesomeIcon icon={faUser}  className="w-5 h-5" />
              </button>
              <Link to="/wishlist" className={cn('hidden md:block relative transition-colors', textColor)}>
                <FontAwesomeIcon icon={faHeart}  className="w-5 h-5" />
                {wishlist.length > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-ivory text-[10px] flex items-center justify-center rounded-full">
                    {wishlist.length}
                  </span>
                )}
              </Link>
              <button 
                className={cn('relative transition-colors', textColor)}
                onClick={() => setIsCartOpen(true)}
              >
                <FontAwesomeIcon icon={faBagShopping}  className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-primary text-ivory text-[10px] flex items-center justify-center rounded-full">
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>
      </header>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 bg-brown-dark/50 z-50 md:hidden"
              onClick={() => setIsMobileMenuOpen(false)}
            />
            <motion.div
              initial={{ x: '-100%' }}
              animate={{ x: 0 }}
              exit={{ x: '-100%' }}
              transition={{ type: 'spring', damping: 25, stiffness: 200 }}
              className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-ivory z-50 p-6 md:hidden overflow-y-auto"
            >
              <div className="flex items-center justify-between mb-10">
                <Link to="/" className="font-serif text-2xl font-bold text-primary tracking-wider uppercase">
                  Trăng Đoàn Viên
                </Link>
                <button onClick={() => setIsMobileMenuOpen(false)} className="text-brown-dark">
                  <FontAwesomeIcon icon={faXmark}  className="w-6 h-6" />
                </button>
              </div>
              
              <nav className="flex flex-col space-y-6">
                {NAV_LINKS.map((link) => (
                  <Link
                    key={link.name}
                    to={link.href}
                    className="text-lg font-medium text-brown-dark uppercase tracking-wider"
                  >
                    {link.name}
                  </Link>
                ))}
              </nav>

              <div className="mt-12 flex items-center space-x-6 border-t border-brown-dark/10 pt-6">
                <button 
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsSearchOpen(true);
                  }}
                  className="text-brown-dark"
                >
                  <FontAwesomeIcon icon={faMagnifyingGlass}  className="w-6 h-6" />
                </button>
                <button className="text-brown-dark">
                  <FontAwesomeIcon icon={faUser}  className="w-6 h-6" />
                </button>
                <Link to="/wishlist" className="relative text-brown-dark">
                  <FontAwesomeIcon icon={faHeart}  className="w-6 h-6" />
                  {wishlist.length > 0 && (
                    <span className="absolute -top-1 -right-2 w-4 h-4 bg-primary text-ivory text-[10px] flex items-center justify-center rounded-full">
                      {wishlist.length}
                    </span>
                  )}
                </Link>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
