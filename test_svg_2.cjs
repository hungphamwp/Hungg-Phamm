const fs = require('fs');

function generateLuxurySVG(title, category) {
  const isCorporate = category === 'corporate';
  const isGiftBox = category === 'gift-box';
  
  // Luxury color palettes
  const bg = isCorporate ? '#18100C' : isGiftBox ? '#221511' : '#2A1C16';
  const bgEnd = '#000000';
  const accent = isCorporate ? '#E5C158' : '#D4AF37';
  const text = isCorporate ? '#FFFFFF' : '#F9F6F0';
  const subtitle = isCorporate ? 'CORPORATE GIFT' : isGiftBox ? 'PREMIUM BOX' : 'ARTISAN MOONCAKE';

  const svg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="${bg}" />
      <stop offset="100%" stop-color="${bgEnd}" />
    </radialGradient>
    <pattern id="noise" viewBox="0 0 200 200" width="20%" height="20%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.08"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#noise)" />
  
  <rect x="40" y="40" width="720" height="920" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.4" />
  <rect x="55" y="55" width="690" height="890" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.2" />
  
  <!-- Minimalist emblem -->
  <path d="M 400 320 L 440 360 L 400 400 L 360 360 Z" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.8"/>
  <circle cx="400" cy="360" r="12" fill="${accent}" opacity="0.5" />
  
  <text x="400" y="530" font-family="Georgia, serif" font-size="44" font-weight="normal" fill="${text}" text-anchor="middle" letter-spacing="3">${title}</text>
  <text x="400" y="590" font-family="'Palatino Linotype', Palatino, serif" font-size="14" font-style="italic" fill="${accent}" text-anchor="middle" letter-spacing="10">${subtitle}</text>
</svg>
`;
  return `data:image/svg+xml;base64,${Buffer.from(svg.trim()).toString('base64')}`;
}

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

// We need to parse the products and update the image and gallery.
// Because parsing TS is hard with regex, we can just run a JS script that imports the file if we compile it,
// OR we can just write a regex to replace image: '...' and gallery: [...]
// Since the file is uniformly formatted, we can replace it carefully.

const lines = content.split('\n');
let currentName = '';
let currentCategory = '';

for (let i = 0; i < lines.length; i++) {
  const nameMatch = lines[i].match(/name:\s*'([^']+)'/);
  if (nameMatch) currentName = nameMatch[1];
  
  const catMatch = lines[i].match(/category:\s*'([^']+)'/);
  if (catMatch) currentCategory = catMatch[1];
  
  if (lines[i].includes('image:')) {
    const svg = generateLuxurySVG(currentName, currentCategory);
    lines[i] = \`    image: '\${svg}',\`;
  }
  
  if (lines[i].includes('gallery: [')) {
    const svg1 = generateLuxurySVG(currentName + ' - Angle 1', currentCategory);
    const svg2 = generateLuxurySVG(currentName + ' - Angle 2', currentCategory);
    lines[i] = \`    gallery: [\`;
    lines[i+1] = \`      '\${svg1}',\`;
    lines[i+2] = \`      '\${svg2}'\`;
    // Skip to closing bracket
    let j = i + 3;
    while (!lines[j].includes('],')) {
      lines[j] = ''; // clear out any extra images
      j++;
    }
  }
}

fs.writeFileSync('src/data/products.ts', lines.filter(l => l !== '').join('\n'));
