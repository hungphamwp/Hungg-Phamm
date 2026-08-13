const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Hero Section Enhancements
content = content.replace(
  `className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-wider"`,
  `className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 tracking-wider drop-shadow-lg"`
);
content = content.replace(
  `className="text-lg md:text-xl text-ivory/90 mb-10 max-w-2xl font-light tracking-wide"`,
  `className="text-xl md:text-2xl text-ivory/90 mb-10 max-w-2xl font-light tracking-wide text-elegant drop-shadow-md"`
);

// Section Titles (make them more artistic)
content = content.replace(
  `className="font-serif text-3xl md:text-4xl text-brown-dark mb-4"`,
  `className="font-serif text-3xl md:text-5xl text-brown-dark mb-4 tracking-wide"`
);
content = content.replace(
  `className="font-serif text-3xl md:text-4xl text-gold-light mb-4 drop-shadow-md"`,
  `className="font-serif text-3xl md:text-5xl text-gold-light mb-4 tracking-wide drop-shadow-md"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg max-w-2xl mx-auto"`,
  `className="text-brown-dark/80 text-xl max-w-2xl mx-auto text-elegant"`
);
content = content.replace(
  `className="text-ivory/70 text-lg max-w-2xl mx-auto"`,
  `className="text-ivory/80 text-xl max-w-2xl mx-auto text-elegant"`
);

// "Câu Chuyện Mùa Trăng" text
content = content.replace(
  `className="text-brown-dark/70 text-lg leading-relaxed mb-6"`,
  `className="text-brown-dark/80 text-lg leading-loose mb-6 text-pretty"`
);
content = content.replace(
  `className="text-brown-dark/70 text-lg leading-relaxed mb-10"`,
  `className="text-brown-dark/80 text-lg leading-loose mb-10 text-pretty"`
);

// Blockquote / Tagline styling
content = content.replace(
  `className="font-serif text-2xl text-brown-dark italic border-l-4 border-gold pl-6 py-2 mb-10"`,
  `className="font-display text-3xl text-primary italic border-l-4 border-gold pl-8 py-2 mb-10 tracking-wide text-balance"`
);

// Corporate section title
content = content.replace(
  `className="font-serif text-3xl md:text-5xl text-ivory mb-6 leading-tight drop-shadow-md"`,
  `className="font-serif text-4xl md:text-6xl text-gold-light mb-6 leading-tight drop-shadow-lg"`
);

// Testimonial styling
content = content.replace(
  `className="text-brown-dark/80 italic leading-relaxed mb-8 grow"`,
  `className="font-display text-xl text-brown-dark/90 italic leading-loose mb-8 grow text-pretty"`
);

fs.writeFileSync('src/pages/Home.tsx', content);
