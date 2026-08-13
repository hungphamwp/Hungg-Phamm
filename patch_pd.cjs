const fs = require('fs');
let content = fs.readFileSync('src/pages/ProductDetail.tsx', 'utf-8');

// Title
content = content.replace(
  `className="font-serif text-4xl lg:text-5xl text-brown-dark mb-4 leading-tight"`,
  `className="font-serif text-4xl lg:text-5xl text-brown-dark mb-4 leading-tight tracking-wide"`
);

// Description
content = content.replace(
  `className="text-brown-dark/70 text-lg mb-8 leading-relaxed"`,
  `className="text-brown-dark/80 text-lg mb-8 leading-loose text-pretty"`
);

// Tab content descriptions
content = content.replace(
  `className="max-w-3xl mx-auto text-brown-dark/70 text-lg leading-relaxed text-center"`,
  `className="max-w-3xl mx-auto text-brown-dark/80 text-lg leading-loose text-center text-pretty"`
);

// Tabs themselves
content = content.replace(
  `className=\`pb-4 font-serif text-lg transition-colors relative`,
  `className=\`pb-4 font-serif text-xl tracking-wide transition-colors relative`
);

fs.writeFileSync('src/pages/ProductDetail.tsx', content);
