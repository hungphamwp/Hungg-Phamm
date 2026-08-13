const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// About Section
content = content.replace(
  `className="py-24 bg-ivory"`,
  `className="py-24 bg-ivory bg-noise relative"`
);

// Featured Section (Make it dark for depth)
content = content.replace(
  `className="py-24 bg-cream"`,
  `className="py-24 bg-brown-dark bg-noise-dark relative text-ivory"`
);
// In featured section, adjust text colors since background is now dark
content = content.replace(
  `className="text-brown-dark/70 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/70 text-lg max-w-2xl mx-auto"`
);
content = content.replace(
  `className="font-serif text-3xl md:text-4xl text-brown-dark mb-4"`,
  `className="font-serif text-3xl md:text-4xl text-gold-light mb-4 drop-shadow-md"`
);

// Gifting Section (Keep light, but elegant)
content = content.replace(
  `className="py-24 bg-ivory"`,
  `className="py-24 bg-ivory bg-noise border-t border-gold/10"`
);

// Testimonials Section
content = content.replace(
  `className="py-24 bg-cream"`,
  `className="py-32 bg-cream bg-noise relative border-t border-b border-gold/20 shadow-inner"`
);

content = content.replace(
  `className="bg-ivory p-10 flex flex-col items-center text-center"`,
  `className="bg-ivory p-10 flex flex-col items-center text-center shadow-[0_10px_40px_-10px_rgba(30,18,13,0.08)] rounded-sm border border-gold/10 relative z-10"`
);

// Store Locator
content = content.replace(
  `className="py-24 bg-cream"`,
  `className="py-24 bg-brown-dark bg-noise-dark relative text-ivory"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/70 text-lg max-w-2xl mx-auto"`
);
content = content.replace(
  `className="font-serif text-3xl md:text-4xl text-brown-dark mb-4"`,
  `className="font-serif text-3xl md:text-4xl text-gold-light mb-4"`
);

content = content.replace(
  `className="bg-ivory border border-gold/10 p-8 hover:shadow-lg hover:border-gold/30 transition-all duration-300"`,
  `className="bg-brown border border-gold/20 p-8 hover:shadow-[0_10px_30px_-10px_rgba(212,175,55,0.15)] hover:-translate-y-1 transition-all duration-300"`
);
content = content.replace(
  `className="font-serif text-xl text-brown-dark mb-3"`,
  `className="font-serif text-xl text-gold-light mb-3"`
);
content = content.replace(
  `className="space-y-2 text-sm text-brown-dark/70"`,
  `className="space-y-2 text-sm text-ivory/70"`
);

// Newsletter
content = content.replace(
  `className="py-24 bg-primary text-ivory text-center px-4"`,
  `className="py-32 bg-primary bg-noise-dark text-ivory text-center px-4 relative shadow-inner overflow-hidden"`
);
// Add a subtle decorative element behind the newsletter
content = content.replace(
  `<div className="max-w-2xl mx-auto">`,
  `<div className="absolute inset-0 bg-gradient-to-b from-black/20 to-transparent pointer-events-none"></div>\n        <div className="max-w-2xl mx-auto relative z-10">`
);


fs.writeFileSync('src/pages/Home.tsx', content);
