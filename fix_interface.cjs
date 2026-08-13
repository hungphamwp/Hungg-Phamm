const fs = require('fs');

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

// I'll just write the entire content out to be safe since I can easily recreate it.
// Actually, it's easier to just do a string replacement to fix the top.
const newInterface = `export interface Product {
  id: string;
  name: string;
  slug: string;
  price: number;
  oldPrice?: number | null;
  description: string;
  category: 'mooncake' | 'gift-box' | 'corporate';
  image: string;
  gallery: string[];
  rating: number;
  reviewCount: number;
  badge?: string;
  flavor?: string;
  ingredients?: string[];
  weight?: string;
  expiry?: string;
  stock?: number;
  pieces?: number;
}`;

// I'll just replace everything from export interface Product { to export const products: Product[] = [
content = content.replace(/export interface Product \{[\s\S]*?export const products: Product\[\] = \[/, newInterface + '\n\nexport const products: Product[] = [');

// And remove the extra closing bracket at the end if I added it multiple times.
// Let's just fix the end of the file.
content = content.replace(/\];\n[\s\S]*$/, '];\n');
fs.writeFileSync('src/data/products.ts', content);
