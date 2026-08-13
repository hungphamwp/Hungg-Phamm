const fs = require('fs');
let content = fs.readFileSync('src/pages/Corporate.tsx', 'utf-8');

// Page Header
content = content.replace(
  `className="py-24 md:py-32 bg-ivory text-center"`,
  `className="py-24 md:py-32 bg-brown-dark bg-noise-dark text-center border-b border-gold/20 shadow-inner relative"`
);
content = content.replace(
  `className="font-serif text-4xl md:text-5xl lg:text-6xl text-brown-dark mb-6"`,
  `className="font-serif text-4xl md:text-5xl lg:text-6xl text-ivory mb-6 drop-shadow-md"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/80 text-lg max-w-2xl mx-auto"`
);

// Form Section
content = content.replace(
  `className="py-24 bg-brown-dark text-ivory"`,
  `className="py-24 bg-brown-dark bg-noise-dark text-ivory relative shadow-inner"`
);

// First "Why Choose Us" section
content = content.replace(
  `className="py-24 bg-ivory"`,
  `className="py-24 bg-ivory bg-noise relative"`
);

// Suggestions section
content = content.replace(
  `className="py-24 bg-cream"`,
  `className="py-24 bg-cream bg-noise relative border-t border-gold/10"`
);

fs.writeFileSync('src/pages/Corporate.tsx', content);
