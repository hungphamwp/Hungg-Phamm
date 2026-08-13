const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

// I'll just write a script to re-create the file to be safe. It's safer to just fetch it or clean it up.
// Wait, I can find the corrupted part.
console.log(content.substring(0, 100));
