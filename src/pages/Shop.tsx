import React, { useState } from 'react';
import { useSearchParams } from 'react-router-dom';
import { products } from '../data/products';
import { ProductCard } from '../components/ProductCard';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFilter, faXmark } from '@fortawesome/free-solid-svg-icons';

import { AnimatePresence, motion } from 'framer-motion';

export function Shop() {
  const [searchParams] = useSearchParams();
  const initialCategory = searchParams.get('category') || 'all';
  
  const [activeFilter, setActiveFilter] = useState(initialCategory);
  const [activeSort, setActiveSort] = useState('newest');
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  const filters = [
    { id: 'all', label: 'Tất cả' },
    { id: 'mooncake', label: 'Bánh Trung Thu' },
    { id: 'gift-box', label: 'Hộp quà' },
    { id: 'corporate', label: 'Quà doanh nghiệp' },
  ];

  let filteredProducts = products;
  
  if (activeFilter !== 'all') {
    filteredProducts = products.filter(p => p.category === activeFilter);
  }

  // Sorting
  if (activeSort === 'price-asc') {
    filteredProducts.sort((a, b) => a.price - b.price);
  } else if (activeSort === 'price-desc') {
    filteredProducts.sort((a, b) => b.price - a.price);
  } else if (activeSort === 'bestseller') {
    filteredProducts.sort((a, b) => b.reviewCount - a.reviewCount);
  } else {
    // Newest / Default - assume current array order is correct for demo
    filteredProducts.sort((a, b) => (b.badge === 'NEW' ? 1 : -1));
  }

  return (
    <div className="pt-24 pb-24 bg-cream bg-noise min-h-screen">
      {/* Page Header */}
      <div className="bg-brown-dark bg-noise-dark py-24 mb-12 border-b border-gold/20 shadow-inner relative">
        <div className="container mx-auto px-4 md:px-8 text-center">
          <h1 className="font-serif text-4xl md:text-6xl text-gold-light mb-4 drop-shadow-lg tracking-wide">KHÁM PHÁ BỘ SƯU TẬP</h1>
          <p className="text-ivory/90 text-xl max-w-2xl mx-auto text-elegant">
            Trọn vẹn hương vị tinh hoa mùa Trăng với những tuyệt tác bánh Trung Thu và hộp quà sang trọng.
          </p>
        </div>
      </div>

      <div className="container mx-auto px-4 md:px-8">
        <div className="flex flex-col lg:flex-row gap-12">
          
          {/* Sidebar / Filters */}
          
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-8 bg-ivory p-4 border border-brown-dark/10">
            <span className="font-medium text-brown-dark">{filteredProducts.length} Sản phẩm</span>
            <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 text-brown-dark font-medium uppercase tracking-widest text-sm">
              <FontAwesomeIcon icon={faFilter}  className="w-4 h-4" /> Lọc
            </button>
          </div>

          {/* Desktop Sidebar / Filters */}
          <aside className="hidden lg:block w-64 shrink-0">
            <div className="sticky top-32">
              <div className="mb-10">
                <h3 className="font-serif text-xl text-brown-dark mb-6">Danh Mục</h3>
                <ul className="space-y-4">
                  {filters.map((filter) => (
                    <li key={filter.id}>
                      <button
                        onClick={() => setActiveFilter(filter.id)}
                        className={`text-sm tracking-wide uppercase transition-colors ${
                          activeFilter === filter.id 
                            ? 'text-primary font-medium' 
                            : 'text-brown-dark/60 hover:text-brown-dark'
                        }`}
                      >
                        {filter.label}
                      </button>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="font-serif text-xl text-brown-dark mb-6">Sắp Xếp</h3>
                <select 
                  className="w-full bg-ivory border border-brown-dark/20 text-brown-dark text-sm p-3 focus:outline-none focus:border-primary cursor-pointer"
                  value={activeSort}
                  onChange={(e) => setActiveSort(e.target.value)}
                >
                  <option value="newest">Mới nhất</option>
                  <option value="bestseller">Bán chạy nhất</option>
                  <option value="price-asc">Giá: Thấp → Cao</option>
                  <option value="price-desc">Giá: Cao → Thấp</option>
                </select>
              </div>
            </div>
          </aside>

          {/* Mobile Filter Drawer */}
          <AnimatePresence>
            {isFilterOpen && (
              <>
                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  className="fixed inset-0 bg-brown-dark/50 z-50 lg:hidden"
                  onClick={() => setIsFilterOpen(false)}
                />
                <motion.div
                  initial={{ x: '-100%' }}
                  animate={{ x: 0 }}
                  exit={{ x: '-100%' }}
                  transition={{ type: 'spring', damping: 25, stiffness: 200 }}
                  className="fixed top-0 left-0 bottom-0 w-4/5 max-w-sm bg-ivory z-50 p-6 lg:hidden overflow-y-auto"
                >
                  <div className="flex items-center justify-between mb-10">
                    <h3 className="font-serif text-2xl font-bold text-brown-dark uppercase">Bộ Lọc</h3>
                    <button onClick={() => setIsFilterOpen(false)} className="text-brown-dark">
                      <FontAwesomeIcon icon={faXmark}  className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="font-medium text-brown-dark mb-6 tracking-widest uppercase text-sm border-b border-brown-dark/10 pb-2">Danh Mục</h3>
                    <ul className="space-y-4">
                      {filters.map((filter) => (
                        <li key={filter.id}>
                          <button
                            onClick={() => { setActiveFilter(filter.id); setIsFilterOpen(false); }}
                            className={`text-sm tracking-wide uppercase transition-colors ${
                              activeFilter === filter.id 
                                ? 'text-primary font-medium' 
                                : 'text-brown-dark/60 hover:text-brown-dark'
                            }`}
                          >
                            {filter.label}
                          </button>
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div>
                    <h3 className="font-medium text-brown-dark mb-6 tracking-widest uppercase text-sm border-b border-brown-dark/10 pb-2">Sắp Xếp</h3>
                    <select 
                      className="w-full bg-white border border-brown-dark/20 text-brown-dark text-sm p-3 focus:outline-none focus:border-primary"
                      value={activeSort}
                      onChange={(e) => { setActiveSort(e.target.value); setIsFilterOpen(false); }}
                    >
                      <option value="newest">Mới nhất</option>
                      <option value="bestseller">Bán chạy nhất</option>
                      <option value="price-asc">Giá: Thấp → Cao</option>
                      <option value="price-desc">Giá: Cao → Thấp</option>
                    </select>
                  </div>
                </motion.div>
              </>
            )}
          </AnimatePresence>


          {/* Product Grid */}
          <div className="flex-1">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-x-6 gap-y-12">
              {filteredProducts.map(product => (
                <ProductCard key={product.id} product={product} />
              ))}
            </div>

            {filteredProducts.length === 0 && (
              <div className="text-center py-20">
                <p className="text-brown-dark/60">Không tìm thấy sản phẩm nào.</p>
              </div>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
