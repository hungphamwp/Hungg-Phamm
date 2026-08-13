const fs = require('fs');

let content = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');

const relatedProductsSection = `
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
`;

if (!content.includes('ProductCard key={relatedProduct.id}')) {
    // We need to import ProductCard and products if they aren't imported
    if (!content.includes("import { ProductCard }")) {
        content = content.replace("import { ChevronRight, Minus, Plus, Heart, Star } from 'lucide-react';", "import { ChevronRight, Minus, Plus, Heart, Star } from 'lucide-react';\nimport { ProductCard } from '../components/ProductCard';");
    }
    content = content.replace('      </div>\n    </div>', '      </div>\n' + relatedProductsSection + '\n    </div>');
}

fs.writeFileSync('src/pages/ProductDetail.tsx', content);
