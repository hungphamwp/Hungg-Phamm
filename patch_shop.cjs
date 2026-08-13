const fs = require('fs');
let content = fs.readFileSync('src/pages/Shop.tsx', 'utf-8');

// Page Header
content = content.replace(
  `className="bg-ivory py-16 mb-12"`,
  `className="bg-brown-dark bg-noise-dark py-24 mb-12 border-b border-gold/20 shadow-inner relative"`
);
content = content.replace(
  `className="font-serif text-4xl md:text-5xl text-brown-dark mb-4"`,
  `className="font-serif text-4xl md:text-5xl text-ivory mb-4 drop-shadow-md"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/80 text-lg max-w-2xl mx-auto"`
);

// Main background
content = content.replace(
  `className="pt-24 pb-24 bg-cream min-h-screen"`,
  `className="pt-24 pb-24 bg-cream bg-noise min-h-screen"`
);

fs.writeFileSync('src/pages/Shop.tsx', content);
