const fs = require('fs');
let content = fs.readFileSync('src/pages/Corporate.tsx', 'utf-8');

const oldImgs = [
  'https://upload.wikimedia.org/wikipedia/commons/d/d5/Mid-Autumn_Festival-beijing.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/5/5f/Wrapped_fruit_basket.jpg'
];

const newImgs = [
  'https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg',
  'https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg'
];

content = content.replace(oldImgs[0], newImgs[0]);
content = content.replace(oldImgs[1], newImgs[1]);

fs.writeFileSync('src/pages/Corporate.tsx', content);
