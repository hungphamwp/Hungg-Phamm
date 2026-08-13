const fs = require('fs');
let content = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');

// Page Background
content = content.replace(
  `className="pt-24 bg-ivory min-h-screen"`,
  `className="pt-24 bg-ivory bg-noise min-h-screen"`
);

// Buttons depth
content = content.replace(
  `className="flex-1 h-14 border border-primary text-primary font-medium text-sm uppercase tracking-widest hover:bg-primary hover:text-ivory transition-colors"`,
  `className="flex-1 h-14 bg-ivory border border-primary text-primary font-medium text-sm uppercase tracking-widest hover:bg-primary hover:text-ivory transition-all shadow-[0_4px_14px_0_rgba(138,26,36,0.1)]"`
);
content = content.replace(
  `className="w-full h-14 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark transition-colors"`,
  `className="w-full h-14 bg-primary text-ivory font-medium text-sm uppercase tracking-widest hover:bg-primary-dark hover:-translate-y-0.5 transition-all shadow-[0_4px_14px_0_rgba(138,26,36,0.39)]"`
);

fs.writeFileSync('src/pages/ProductDetail.tsx', content);
