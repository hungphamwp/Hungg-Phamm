const fs = require('fs');
let content = fs.readFileSync('src/components/ProductCard.tsx', 'utf-8');

// Replace standard bg with a slightly textured one and add rich shadows on hover
content = content.replace(
  `className="group relative flex flex-col bg-ivory"`,
  `className="group relative flex flex-col bg-ivory shadow-[0_4px_20px_-4px_rgba(30,18,13,0.05)] hover:shadow-[0_20px_40px_-12px_rgba(138,26,36,0.15)] hover:-translate-y-2 transition-all duration-500 rounded-sm border border-gold/10 overflow-hidden"`
);

// Image container bg
content = content.replace(
  `className="relative aspect-[4/5] overflow-hidden bg-cream mb-4"`,
  `className="relative aspect-[4/5] overflow-hidden bg-brown-dark/5 mb-4"`
);

// Gradient overlay (Make it richer)
content = content.replace(
  `className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out flex gap-2 z-10 bg-gradient-to-t from-black/50 to-transparent"`,
  `className="absolute inset-x-0 bottom-0 p-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 ease-out flex gap-2 z-10 bg-gradient-to-t from-brown-dark/90 via-brown-dark/50 to-transparent"`
);

// Primary action button inside card
content = content.replace(
  `className="flex-1 bg-ivory text-brown-dark font-medium text-sm py-3 hover:bg-gold-light hover:text-brown-dark transition-colors flex items-center justify-center gap-2"`,
  `className="flex-1 bg-primary text-ivory font-medium text-sm py-3 hover:bg-primary-dark transition-colors flex items-center justify-center gap-2 shadow-lg"`
);

// Heart button inside card
content = content.replace(
  `className="w-12 bg-ivory text-brown-dark hover:bg-gold-light transition-colors flex items-center justify-center shrink-0"`,
  `className="w-12 bg-ivory text-primary hover:bg-cream transition-colors flex items-center justify-center shrink-0 shadow-lg"`
);

// Content padding
content = content.replace(
  `className="flex flex-col flex-1 px-1"`,
  `className="flex flex-col flex-1 px-5 pb-5 pt-2"`
);

// Star rating color
content = content.replace(
  `text-gold-dark`,
  `text-gold`
);

fs.writeFileSync('src/components/ProductCard.tsx', content);
