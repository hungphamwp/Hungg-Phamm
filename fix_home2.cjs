const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Replace the image block for ingredients
const oldIngredients = `            {[
              { name: 'Hạt sen', desc: 'Tuyển chọn từ Huế, vị bùi thanh, mềm mịn.', img: 'https://upload.wikimedia.org/wikipedia/commons/b/ba/Mooncake_3-4%2C_lotus_seed_paste.jpg' },
              { name: 'Đậu xanh', desc: 'Hạt mẩy, vàng ươm, xay nhuyễn béo ngậy.', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3f/Red_bean_paste_anko.JPG' },
              { name: 'Trứng muối', desc: 'Chín đỏ âu, mặn mòi, tươm mỡ óng ánh.', img: 'https://upload.wikimedia.org/wikipedia/commons/e/e2/Taiwanese_Pineapple_Cake_001.jpg' },
              { name: 'Hạt dưa', desc: 'Rang mộc, giòn tan, lưu giữ vị tự nhiên.', img: 'https://upload.wikimedia.org/wikipedia/commons/6/68/Taro_Pastry.jpg' },
            ]`;

const newIngredients = `            {[
              { name: 'Hạt sen', desc: 'Tuyển chọn từ Huế, vị bùi thanh, mềm mịn.', img: 'https://upload.wikimedia.org/wikipedia/commons/4/4c/070915_moon_cake.JPG' },
              { name: 'Đậu xanh', desc: 'Hạt mẩy, vàng ươm, xay nhuyễn béo ngậy.', img: 'https://upload.wikimedia.org/wikipedia/commons/2/2a/Different_flavours_of_Vietnamese_mid-Autumn_festival_moon_cakes_%282017%29.jpg' },
              { name: 'Trứng muối', desc: 'Chín đỏ âu, mặn mòi, tươm mỡ óng ánh.', img: 'https://upload.wikimedia.org/wikipedia/commons/3/3c/Food_Mooncake.jpg' },
              { name: 'Hạt dưa', desc: 'Rang mộc, giòn tan, lưu giữ vị tự nhiên.', img: 'https://upload.wikimedia.org/wikipedia/commons/1/17/Kue_Bulan_Sin_Hap_Hoat.jpg' },
            ]`;
content = content.replace(oldIngredients, newIngredients);

// Replace Corporate Section Images
const oldCorpImages = `<div className="relative group overflow-hidden">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_Japanese_wrapping_cloth%2Churoshiki%2Ckatori-city%2Cjapan.JPG" alt="Corporate Box" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative group overflow-hidden translate-y-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/cb/A_homemade_nian_gao_from_old_woman_in_yuen_long.jpg" alt="Corporate Box Detail" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>`;

const newCorpImages = `<div className="relative group overflow-hidden border-[6px] border-cream shadow-xl">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/c/c9/Home_Made_Moon_Cake_2017.jpg" alt="Corporate Box" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>
                <div className="relative group overflow-hidden translate-y-12 border-[6px] border-cream shadow-xl z-10 -ml-8">
                  <img src="https://upload.wikimedia.org/wikipedia/commons/1/10/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_1st._Snacks_Table.jpg" alt="Corporate Box Detail" className="w-full aspect-[4/5] object-cover group-hover:scale-105 transition-transform duration-700" />
                </div>`;
content = content.replace(oldCorpImages, newCorpImages);

fs.writeFileSync('src/pages/Home.tsx', content);
