const fs = require('fs');
let content = fs.readFileSync('src/components/Header.tsx', 'utf-8');

content = content.replace(
  `isScrolled 
             ? 'bg-ivory/95 backdrop-blur-md shadow-sm border-b border-brown-dark/10'`,
  `isScrolled 
             ? 'bg-ivory/95 backdrop-blur-md shadow-[0_10px_30px_-10px_rgba(30,18,13,0.1)] border-b border-gold/20'`
);

content = content.replace(
  `!isScrolled ? 'text-ivory hover:text-gold-light' : 'text-brown-dark hover:text-primary'`,
  `!isScrolled ? 'text-ivory hover:text-gold' : 'text-brown-dark hover:text-primary drop-shadow-[0_2px_4px_rgba(30,18,13,0.05)]'`
);

content = content.replace(
  `!isScrolled ? 'text-gold-light' : 'text-primary'`,
  `!isScrolled ? 'text-gold drop-shadow-md' : 'text-primary drop-shadow-[0_2px_4px_rgba(138,26,36,0.1)]'`
);

// Add a slight gradient to the announcement bar to give it depth
content = content.replace(
  `bg-primary-dark text-ivory/90`,
  `bg-gradient-to-r from-primary-dark via-primary to-primary-dark text-ivory/90 shadow-inner`
);

fs.writeFileSync('src/components/Header.tsx', content);
