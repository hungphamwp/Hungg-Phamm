const fs = require('fs');

async function run() {
  const titles = [
    'Mooncake_3-4,_lotus_seed_paste.jpg',
    'Mooncake_with_double_yolk_and_lotus_seed_paste.jpg',
    'Snowskin_cake_truffle_mooncakes_-_48601590197.jpg',
    'Mooncake_filling.jpg',
    'A_cut_of_mooncake.jpg',
    'Homemade_mooncake_with_Lotus_paste_and_salted_egg_yolks.jpg',
    'Mid-Autumn_Festival_Mooncake.jpg',
    'Taro_Pastry.jpg',
    'Taiwanese_Pineapple_Cake_001.jpg',
    'Mooncake_1.jpg',
    'Banh_trung_thu_nuong.jpg',
    'Mooncakes_in_a_box.jpg'
  ];

  let images = [];
  
  for (let title of titles) {
     const url = `https://en.wikipedia.org/w/api.php?action=query&prop=imageinfo&iiprop=url&titles=File:${title}&format=json`;
     const res = await fetch(url);
     const data = await res.json();
     try {
       const pages = data.query.pages;
       const pageId = Object.keys(pages)[0];
       const imgUrl = pages[pageId].imageinfo[0].url;
       images.push(imgUrl);
     } catch (e) {
       images.push("https://upload.wikimedia.org/wikipedia/commons/b/ba/Mooncake_3-4%2C_lotus_seed_paste.jpg");
     }
  }

  const content = fs.readFileSync('src/data/products.ts', 'utf-8');
  let newContent = content;
  
  const imgPattern = /image:\s*'[^']+'/g;
  let matches = newContent.match(imgPattern);
  if (matches) {
    for (let i = 0; i < matches.length; i++) {
        const replacement = `image: '${images[i % images.length]}'`;
        newContent = newContent.replace(matches[i], replacement);
    }
  }
  
  const galPattern = /gallery:\s*\[\s*'[^']+'(?:\,\s*'[^']+')*\s*\]/g;
  let galMatches = newContent.match(galPattern);
  if (galMatches) {
    for (let i = 0; i < galMatches.length; i++) {
        const replacement = `gallery: ['${images[i % images.length]}']`;
        newContent = newContent.replace(galMatches[i], replacement);
    }
  }
  
  fs.writeFileSync('src/data/products.ts', newContent);
}

run();
