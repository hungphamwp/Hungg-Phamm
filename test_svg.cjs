const fs = require('fs');

function generateLuxurySVG(title, category) {
  const isCorporate = category === 'corporate';
  const isGiftBox = category === 'gift-box';
  
  // Luxury color palettes
  const bg = isCorporate ? '#1A110D' : isGiftBox ? '#2A1C16' : '#2A1C16';
  const accent = isCorporate ? '#D4AF37' : '#C5A059';
  const text = isCorporate ? '#F9F6F0' : '#F9F6F0';
  const subtitle = isCorporate ? 'CORPORATE GIFT' : isGiftBox ? 'PREMIUM BOX' : 'ARTISAN MOONCAKE';

  const svg = `
<svg width="800" height="1000" viewBox="0 0 800 1000" xmlns="http://www.w3.org/2000/svg">
  <defs>
    <radialGradient id="grad" cx="50%" cy="50%" r="70%" fx="50%" fy="50%">
      <stop offset="0%" stop-color="${bg}" stop-opacity="0.8" />
      <stop offset="100%" stop-color="#0a0705" />
    </radialGradient>
    <pattern id="noise" viewBox="0 0 200 200" width="20%" height="20%">
      <filter id="noiseFilter">
        <feTurbulence type="fractalNoise" baseFrequency="0.8" numOctaves="3" stitchTiles="stitch"/>
      </filter>
      <rect width="100%" height="100%" filter="url(#noiseFilter)" opacity="0.05"/>
    </pattern>
  </defs>
  <rect width="100%" height="100%" fill="url(#grad)" />
  <rect width="100%" height="100%" fill="url(#noise)" />
  
  <rect x="40" y="40" width="720" height="920" fill="none" stroke="${accent}" stroke-width="2" stroke-opacity="0.5" />
  <rect x="55" y="55" width="690" height="890" fill="none" stroke="${accent}" stroke-width="1" stroke-opacity="0.3" />
  
  <path d="M 400 350 L 450 400 L 400 450 L 350 400 Z" fill="none" stroke="${accent}" stroke-width="1.5" opacity="0.8"/>
  <circle cx="400" cy="400" r="15" fill="${accent}" opacity="0.5" />
  
  <text x="400" y="550" font-family="'Playfair Display', serif" font-size="42" font-weight="600" fill="${text}" text-anchor="middle" letter-spacing="4">${title}</text>
  <text x="400" y="600" font-family="'Cormorant Garamond', serif" font-size="16" font-style="italic" fill="${accent}" text-anchor="middle" letter-spacing="8">${subtitle}</text>
</svg>
`;
  return `data:image/svg+xml;base64,${Buffer.from(svg.trim()).toString('base64')}`;
}

const dataURI = generateLuxurySVG('Hộp Nguyệt Quế', 'corporate');
console.log(dataURI.substring(0, 50) + "...");
