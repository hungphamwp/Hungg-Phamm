const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');
content = content.replace(/'\n    ingredients:/g, "'\n    ],\n    ingredients:");
content = content.replace(/'\n    rating:/g, "'\n    ],\n    rating:");
fs.writeFileSync('src/data/products.ts', content);
