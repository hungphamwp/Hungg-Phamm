const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// There's a section with Corporate Gifting that I should also make pop more
content = content.replace(
  `className="py-24 bg-cream"`,
  `className="py-32 bg-brown-dark bg-noise-dark relative border-t border-gold/10"`
);
content = content.replace(
  `className="font-serif text-3xl md:text-5xl text-brown-dark mb-6 leading-tight"`,
  `className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight drop-shadow-md"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg mb-10 max-w-md"`,
  `className="text-ivory/80 text-lg mb-10 max-w-md"`
);
content = content.replace(
  `className="space-y-4 mb-10 text-brown-dark"`,
  `className="space-y-4 mb-10 text-ivory/90"`
);

// The buttons in Corporate
content = content.replace(
  `className="px-8 py-4 bg-primary text-ivory text-sm font-medium uppercase tracking-widest hover:bg-primary-dark transition-colors text-center"`,
  `className="px-8 py-4 bg-primary text-ivory text-sm font-medium uppercase tracking-widest hover:bg-primary-dark transition-colors text-center shadow-[0_4px_20px_-4px_rgba(138,26,36,0.4)]"`
);
content = content.replace(
  `className="px-8 py-4 border border-brown-dark text-brown-dark text-sm font-medium uppercase tracking-widest hover:bg-brown-dark hover:text-ivory transition-colors text-center"`,
  `className="px-8 py-4 border border-gold/50 text-gold-light text-sm font-medium uppercase tracking-widest hover:bg-gold/10 transition-colors text-center"`
);

fs.writeFileSync('src/pages/Home.tsx', content);
