const fs = require('fs');
let content = fs.readFileSync('src/pages/Home.tsx', 'utf-8');

// Update Hero Section
const oldHero = `<section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/1/19/Mooncake1.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover scale-105 transform hover:scale-100 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-brown-dark/40" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto">
          <h2 className="font-serif text-5xl md:text-7xl lg:text-8xl text-ivory mb-6 font-bold tracking-wider leading-tight drop-shadow-lg">
            VỊ THU <br /> <span className="text-gold-light italic font-normal">Trọn Vẹn</span>
          </h2>
          <p className="text-ivory/90 text-lg md:text-xl mb-10 tracking-wide font-light max-w-2xl mx-auto">
            Hòa quyện giữa công thức gia truyền và nguyên liệu thượng hạng, mang đến những hộp bánh Trung Thu đậm đà bản sắc Việt.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/shop?category=gift-box"
              className="px-8 py-4 bg-primary text-ivory text-sm font-medium uppercase tracking-widest hover:bg-primary-dark transition-colors backdrop-blur-sm"
            >
              Đặt quà ngay
            </Link>
            <Link 
              to="/shop?category=mooncake"
              className="px-8 py-4 border border-ivory text-ivory text-sm font-medium uppercase tracking-widest hover:bg-ivory hover:text-brown-dark transition-colors backdrop-blur-sm"
            >
              Khám phá hương vị
            </Link>
          </div>
        </div>
      </section>`;

const newHero = `<section className="relative h-screen flex items-center justify-center overflow-hidden bg-brown-dark">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://upload.wikimedia.org/wikipedia/commons/a/a8/Food_Series_%28Home-made%29_of_Mooncake_%28Mid-autumn%29_Festival_-_5th_Little_Yellow_Moons_born_from_water.jpg" 
            alt="Hero Background" 
            className="w-full h-full object-cover opacity-60 scale-105 transform hover:scale-100 transition-transform duration-10000"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-brown-dark/70 via-brown-dark/40 to-brown-dark/90" />
        </div>
        
        <div className="relative z-10 text-center px-4 max-w-4xl mx-auto mt-16">
          <p className="text-gold uppercase tracking-[0.4em] text-sm mb-6 font-medium drop-shadow-md">Bộ Sưu Tập Trung Thu 2026</p>
          <h2 className="font-serif text-6xl md:text-8xl lg:text-9xl text-ivory mb-6 tracking-wide leading-none drop-shadow-2xl">
            VỊ THU <br /> <span className="text-gold-light italic font-normal text-5xl md:text-7xl lg:text-8xl">Trọn Vẹn</span>
          </h2>
          <div className="w-24 h-[1px] bg-gold mx-auto mb-8 opacity-50"></div>
          <p className="text-ivory/80 text-lg md:text-xl mb-12 tracking-wide font-light max-w-2xl mx-auto leading-relaxed">
            Hòa quyện giữa công thức gia truyền và nguyên liệu thượng hạng, mang đến những hộp bánh Trung Thu đậm đà bản sắc Việt.
          </p>
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/shop?category=gift-box"
              className="px-10 py-5 bg-primary/90 text-ivory text-sm font-medium uppercase tracking-[0.2em] hover:bg-primary transition-all duration-300 border border-primary-light/30 shadow-[0_0_20px_rgba(138,26,36,0.3)]"
            >
              Đặt Quà Ngay
            </Link>
            <Link 
              to="/shop?category=mooncake"
              className="px-10 py-5 border border-gold/40 text-gold-light text-sm font-medium uppercase tracking-[0.2em] hover:bg-gold/10 transition-colors"
            >
              Khám Phá Hương Vị
            </Link>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center animate-bounce z-10">
          <span className="text-gold/60 text-xs tracking-widest uppercase mb-2">Khám phá</span>
          <div className="w-[1px] h-12 bg-gradient-to-b from-gold/60 to-transparent"></div>
        </div>
      </section>`;

if (content.includes('VỊ THU <br /> <span className="text-gold-light italic font-normal">Trọn Vẹn</span>')) {
  content = content.replace(oldHero, newHero);
}

fs.writeFileSync('src/pages/Home.tsx', content);
