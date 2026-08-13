const fs = require('fs');

const images = [
  "https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_Japanese_wrapping_cloth%2Churoshiki%2Ckatori-city%2Cjapan.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/d/d5/Mid-Autumn_Festival-beijing.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/5/5f/Wrapped_fruit_basket.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/e/e2/Taiwanese_Pineapple_Cake_001.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/ba/Mooncake_3-4%2C_lotus_seed_paste.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/2/2b/Mooncake_with_double_yolk_and_lotus_seed_paste.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/6/68/Taro_Pastry.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/36/Green_tea_3_appearances.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/b/bc/HK_SSP_%E9%95%B7%E6%B2%99%E7%81%A3_Cheung_Sha_Wan_%E6%B7%B1%E7%9B%9B%E8%B7%AF_Sham_Shing_Road_%E6%B3%93%E6%99%AF%E6%BB%99%E5%95%86%E5%A0%B4_Banyan_Mall_shop_%E8%9B%8B%E6%92%BB%E7%8E%8B_King_Bakery_Studio_December_2019_SS2_egg_tarts.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/3/3f/Red_bean_paste_anko.JPG",
  "https://upload.wikimedia.org/wikipedia/commons/4/42/Zongzi.jpg",
  "https://upload.wikimedia.org/wikipedia/commons/c/cb/A_homemade_nian_gao_from_old_woman_in_yuen_long.jpg"
];

let content = fs.readFileSync('src/data/products.ts', 'utf-8');

let imgIndex = 0;
content = content.replace(/image:\s*'[^']+'/g, () => {
    return `image: '${images[imgIndex++ % images.length]}'`;
});

let galIndex = 0;
content = content.replace(/gallery:\s*\[\s*'[^']+'(?:\,\s*'[^']+')*\s*\]/g, () => {
    return `gallery: ['${images[galIndex++ % images.length]}']`;
});

fs.writeFileSync('src/data/products.ts', content);
