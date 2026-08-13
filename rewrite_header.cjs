const fs = require('fs');

let content = fs.readFileSync('src/components/Header.tsx', 'utf8');

// Change the logic for textColor and logoColor
content = content.replace(
  "const textColor = isHome && !isScrolled ? 'text-ivory hover:text-gold' : 'text-brown-dark hover:text-primary drop-shadow-[0_2px_4px_rgba(30,18,13,0.05)]';",
  "const textColor = 'text-brown-dark hover:text-primary drop-shadow-[0_2px_4px_rgba(30,18,13,0.05)]';"
);
content = content.replace(
  "const logoColor = isHome && !isScrolled ? 'text-gold drop-shadow-md' : 'text-primary drop-shadow-[0_2px_4px_rgba(138,26,36,0.1)]';",
  "const logoColor = 'text-primary drop-shadow-[0_2px_4px_rgba(138,26,36,0.1)]';"
);

content = content.replace(
  "isHome\n               ? 'bg-transparent border-b border-transparent'\n               : 'bg-ivory border-b border-brown-dark/10'",
  "'bg-ivory border-b border-brown-dark/10'"
);
// In case the above replace didn't match formatting exactly:
content = content.replace(/isHome\s*\?\s*'bg-transparent border-b border-transparent'\s*:\s*'bg-ivory border-b border-brown-dark\/10'/, "'bg-ivory border-b border-brown-dark/10'");

fs.writeFileSync('src/components/Header.tsx', content);
console.log('Header fixed');
