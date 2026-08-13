import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXmark } from '@fortawesome/free-solid-svg-icons';

import { useStore } from '../store/useStore';
import { products } from '../data/products';

export function SearchModal() {
  const { isSearchOpen, setIsSearchOpen } = useStore();
  const [query, setQuery] = useState('');
  const navigate = useNavigate();

  // Reset query when modal closes
  useEffect(() => {
    if (!isSearchOpen) {
      setTimeout(() => setQuery(''), 300);
    }
  }, [isSearchOpen]);

  const searchResults = query.trim() === '' 
    ? [] 
    : products.filter(p => 
        p.name.toLowerCase().includes(query.toLowerCase()) || 
        p.category.toLowerCase().includes(query.toLowerCase()) ||
        p.description.toLowerCase().includes(query.toLowerCase())
      ).slice(0, 5);

  const handleSelect = (slug: string) => {
    setIsSearchOpen(false);
    navigate(`/product/${slug}`);
  };

  return (
    <AnimatePresence>
      {isSearchOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[100] bg-ivory flex flex-col"
        >
          {/* Header */}
          <div className="container mx-auto px-4 md:px-8 py-6 flex items-center justify-end">
            <button 
              onClick={() => setIsSearchOpen(false)}
              className="text-brown-dark/60 hover:text-brown-dark transition-colors flex items-center gap-2 uppercase tracking-widest text-sm font-medium"
            >
              Đóng <FontAwesomeIcon icon={faXmark}  className="w-5 h-5" />
            </button>
          </div>

          {/* Search Input */}
          <div className="flex-1 container mx-auto px-4 md:px-8 max-w-4xl flex flex-col pt-10 md:pt-20">
            <div className="relative mb-12">
              <input 
                type="text" 
                placeholder="Tìm kiếm bánh Trung Thu..." 
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                className="w-full bg-transparent border-b-2 border-brown-dark/20 text-3xl md:text-5xl font-serif text-brown-dark py-4 focus:outline-none focus:border-primary transition-colors placeholder:text-brown-dark/20"
                autoFocus
              />
              <SearchIcon className="absolute right-0 bottom-6 w-8 h-8 text-brown-dark/20" />
            </div>

            {/* Results */}
            <div className="flex-1 overflow-y-auto pb-20">
              {query.trim() !== '' && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-brown-dark/60 mb-6">
                    Kết quả tìm kiếm ({searchResults.length})
                  </h3>
                  
                  {searchResults.length > 0 ? (
                    <div className="space-y-6">
                      {searchResults.map(product => (
                        <div 
                          key={product.id}
                          onClick={() => handleSelect(product.slug)}
                          className="flex items-center gap-6 group cursor-pointer"
                        >
                          <div className="w-20 h-20 bg-cream overflow-hidden shrink-0">
                            <img 
                              src={product.image} 
                              alt={product.name} 
                              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                            />
                          </div>
                          <div>
                            <h4 className="font-serif text-xl text-brown-dark group-hover:text-primary transition-colors mb-1">
                              {product.name}
                            </h4>
                            <p className="text-brown-dark/60 text-sm line-clamp-1">{product.description}</p>
                          </div>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p className="text-brown-dark/60 font-serif text-xl">Không tìm thấy sản phẩm phù hợp.</p>
                  )}
                </div>
              )}

              {/* Suggestions */}
              {query.trim() === '' && (
                <div>
                  <h3 className="text-sm font-medium uppercase tracking-widest text-brown-dark/60 mb-6">
                    Gợi ý tìm kiếm
                  </h3>
                  <div className="flex flex-wrap gap-3">
                    {['Bánh Thập Cẩm', 'Hộp Quà', 'Đậu Xanh Trứng Muối', 'Signature'].map(suggestion => (
                      <button 
                        key={suggestion}
                        onClick={() => setQuery(suggestion)}
                        className="px-6 py-3 border border-brown-dark/20 text-brown-dark hover:border-primary hover:text-primary transition-colors text-sm rounded-full"
                      >
                        {suggestion}
                      </button>
                    ))}
                  </div>
                </div>
              )}
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
