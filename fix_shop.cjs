const fs = require('fs');

let content = fs.readFileSync('src/pages/Shop.tsx', 'utf-8');

if (!content.includes('Filter className=')) {
    content = content.replace("import { ProductCard } from '../components/ProductCard';", "import { ProductCard } from '../components/ProductCard';\nimport { Filter, X } from 'lucide-react';\nimport { AnimatePresence, motion } from 'framer-motion';");
    content = content.replace("const [activeSort, setActiveSort] = useState('newest');", "const [activeSort, setActiveSort] = useState('newest');\n  const [isFilterOpen, setIsFilterOpen] = useState(false);");

    const newSidebar = `
          {/* Mobile Filter Toggle */}
          <div className="lg:hidden flex items-center justify-between mb-8 bg-ivory p-4 border border-brown-dark/10">
            <span className="font-medium text-brown-dark">{filteredProducts.length} Sản phẩm</span>
            <button onClick={() => setIsFilterOpen(true)} className="flex items-center gap-2 text-brown-dark font-medium uppercase tracking-widest text-sm">
              <Filter className="w-4 h-4" /> Lọc
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
                        className={\`text-sm tracking-wide uppercase transition-colors \${
                          activeFilter === filter.id 
                            ? 'text-primary font-medium' 
                            : 'text-brown-dark/60 hover:text-brown-dark'
                        }\`}
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
                      <X className="w-6 h-6" />
                    </button>
                  </div>
                  
                  <div className="mb-10">
                    <h3 className="font-medium text-brown-dark mb-6 tracking-widest uppercase text-sm border-b border-brown-dark/10 pb-2">Danh Mục</h3>
                    <ul className="space-y-4">
                      {filters.map((filter) => (
                        <li key={filter.id}>
                          <button
                            onClick={() => { setActiveFilter(filter.id); setIsFilterOpen(false); }}
                            className={\`text-sm tracking-wide uppercase transition-colors \${
                              activeFilter === filter.id 
                                ? 'text-primary font-medium' 
                                : 'text-brown-dark/60 hover:text-brown-dark'
                            }\`}
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
`;
    // We want to replace the aside tag.
    const asideRegex = /<aside className="w-full lg:w-64 shrink-0">[\s\S]*?<\/aside>/;
    content = content.replace(asideRegex, newSidebar);
    fs.writeFileSync('src/pages/Shop.tsx', content);
}
