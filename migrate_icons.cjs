const fs = require('fs');
const path = require('path');

function walk(dir) {
  let results = [];
  const list = fs.readdirSync(dir);
  list.forEach(file => {
    file = path.join(dir, file);
    const stat = fs.statSync(file);
    if (stat && stat.isDirectory()) {
      results = results.concat(walk(file));
    } else if (file.endsWith('.tsx')) {
      results.push(file);
    }
  });
  return results;
}

const files = walk('src');
const iconMap = {
  Search: 'faMagnifyingGlass', User: 'faUser', Heart: 'faHeart', ShoppingBag: 'faBagShopping',
  Menu: 'faBars', X: 'faXmark', Facebook: 'faFacebook', Instagram: 'faInstagram',
  Twitter: 'faTwitter', Youtube: 'faYoutube', Star: 'faStar', Leaf: 'faLeaf',
  Award: 'faMedal', Gift: 'faGift', Truck: 'faTruck', Minus: 'faMinus', Plus: 'faPlus',
  Filter: 'faFilter', ChevronDown: 'faChevronDown'
};
const brands = ['faFacebook', 'faInstagram', 'faTwitter', 'faYoutube'];

files.forEach(file => {
  let content = fs.readFileSync(file, 'utf8');
  let changed = false;

  // Handle explicit emojis in Home.tsx
  if (file.includes('Home.tsx')) {
    const oldContent = content;
    content = content.replace(/<span className="text-gold mt-0\.5">📍<\/span>/g, '<FontAwesomeIcon icon={faLocationDot} className="text-gold mt-1 mr-2" />');
    content = content.replace(/<span className="text-gold mt-0\.5">🕒<\/span>/g, '<FontAwesomeIcon icon={faClock} className="text-gold mt-1 mr-2" />');
    content = content.replace(/<span className="text-gold mt-0\.5">📞<\/span>/g, '<FontAwesomeIcon icon={faPhone} className="text-gold mt-1 mr-2" />');
    if (oldContent !== content) changed = true;
  }

  const match = content.match(/import\s+\{([^}]+)\}\s+from\s+['"]lucide-react['"];/);
  if (match) {
    const imported = match[1].split(',').map(s => s.trim());
    const solid = [];
    const brand = [];
    
    imported.forEach(icon => {
      const fa = iconMap[icon];
      if (fa) {
        if (brands.includes(fa)) brand.push(fa);
        else solid.push(fa);
      }
    });

    if (file.includes('Home.tsx')) {
      if (!solid.includes('faLocationDot')) solid.push('faLocationDot', 'faClock', 'faPhone');
    }

    let imports = "import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';\n";
    if (solid.length > 0) imports += `import { ${solid.join(', ')} } from '@fortawesome/free-solid-svg-icons';\n`;
    if (brand.length > 0) imports += `import { ${brand.join(', ')} } from '@fortawesome/free-brands-svg-icons';\n`;

    content = content.replace(match[0], imports);

    imported.forEach(icon => {
      const fa = iconMap[icon];
      if (fa) {
        content = content.replace(new RegExp(`<${icon}\\b([^>]*?)\\s*/>`, 'g'), `<FontAwesomeIcon icon={${fa}} $1 />`);
        content = content.replace(new RegExp(`<${icon}\\b([^>]*)>`, 'g'), `<FontAwesomeIcon icon={${fa}} $1>`);
        content = content.replace(new RegExp(`</${icon}>`, 'g'), `</FontAwesomeIcon>`);
      }
    });
    
    content = content.replace(/\\sfill-current/g, '');
    content = content.replace(/\\sfill-primary/g, '');
    changed = true;
  }

  if (changed) fs.writeFileSync(file, content, 'utf8');
});
console.log('Migration complete');
