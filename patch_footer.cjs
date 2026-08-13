const fs = require('fs');
let content = fs.readFileSync('src/components/Footer.tsx', 'utf-8');

content = content.replace(
  `className="bg-brown-dark text-ivory/80 pt-20 pb-10"`,
  `className="bg-brown-dark bg-noise-dark text-ivory/80 pt-20 pb-10 shadow-inner relative border-t border-gold/10"`
);

fs.writeFileSync('src/components/Footer.tsx', content);
