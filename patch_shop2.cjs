const fs = require('fs');
let content = fs.readFileSync('src/pages/Shop.tsx', 'utf-8');

// Title
content = content.replace(
  `className="font-serif text-4xl md:text-5xl text-ivory mb-4 drop-shadow-md"`,
  `className="font-serif text-4xl md:text-6xl text-gold-light mb-4 drop-shadow-lg tracking-wide"`
);
content = content.replace(
  `className="text-ivory/80 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/90 text-xl max-w-2xl mx-auto text-elegant"`
);

fs.writeFileSync('src/pages/Shop.tsx', content);
