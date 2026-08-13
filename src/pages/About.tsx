import React from 'react';

export function About() {
  return (
    <div className="pt-24 min-h-screen bg-ivory">
      {/* Hero */}
      <section className="py-20 text-center container mx-auto px-4 max-w-4xl">
        <span className="text-primary text-xs font-bold tracking-widest uppercase mb-4 block">
          Câu Chuyện Thương Hiệu
        </span>
        <h1 className="font-serif text-4xl md:text-6xl text-brown-dark mb-8 leading-tight">
          HÀNH TRÌNH TẠO NÊN<br />NHỮNG MÙA TRĂNG TRỌN VẸN
        </h1>
        <p className="text-brown-dark/70 text-lg md:text-xl leading-relaxed text-pretty">
          Khởi nguồn từ một căn bếp nhỏ với niềm đam mê lưu giữ những giá trị truyền thống, Trăng Đoàn Viên đã vươn mình trở thành một thương hiệu bánh Trung Thu cao cấp, nơi giao thoa giữa di sản ẩm thực Việt Nam và nghệ thuật quà tặng hiện đại.
        </p>
      </section>

      {/* Image Gallery */}
      <section className="container mx-auto px-4 mb-24">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 h-[60vh] min-h-[500px]">
          <div className="relative h-full overflow-hidden group">
             <img src="https://upload.wikimedia.org/wikipedia/commons/7/79/Traditional_Japanese_wrapping_cloth%2Churoshiki%2Ckatori-city%2Cjapan.JPG" alt="Nguyên liệu truyền thống" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative h-full overflow-hidden group">
             <img src="https://upload.wikimedia.org/wikipedia/commons/d/d5/Mid-Autumn_Festival-beijing.jpg" alt="Nghệ thuật làm bánh" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
          <div className="relative h-full overflow-hidden group">
             <img src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Wrapped_fruit_basket.jpg" alt="Tinh hoa quà tặng" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-24 bg-cream">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="text-center mb-16">
             <h2 className="font-serif text-3xl md:text-4xl text-brown-dark">DẤU ẤN THỜI GIAN</h2>
          </div>
          <div className="space-y-20 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-transparent before:via-gold/30 before:to-transparent">
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-brown-dark/10 bg-ivory shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-serif text-2xl text-primary">2018</h3>
                </div>
                <h4 className="font-medium text-brown-dark mb-2 uppercase tracking-wide text-sm">Khởi Nguồn Từ Căn Bếp Nhỏ</h4>
                <p className="text-brown-dark/70 leading-relaxed text-sm">Những mẻ bánh đầu tiên ra lò với hương vị thập cẩm truyền thống, được làm hoàn toàn thủ công bằng công thức gia truyền để dành tặng người thân và bạn bè.</p>
              </div>
            </div>
            
            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-brown-dark/10 bg-ivory shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-serif text-2xl text-primary">2020</h3>
                </div>
                <h4 className="font-medium text-brown-dark mb-2 uppercase tracking-wide text-sm">Ra Mắt Dòng Bánh Đầu Tiên</h4>
                <p className="text-brown-dark/70 leading-relaxed text-sm">Thương hiệu Trăng Đoàn Viên chính thức ra mắt bộ sưu tập đầu tiên, gây ấn tượng mạnh bởi lớp vỏ mềm mịn và phần nhân đậm đà, tròn vị.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-brown-dark/10 bg-ivory shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-serif text-2xl text-primary">2023</h3>
                </div>
                <h4 className="font-medium text-brown-dark mb-2 uppercase tracking-wide text-sm">Bước Tiến Quà Tặng Cao Cấp</h4>
                <p className="text-brown-dark/70 leading-relaxed text-sm">Đầu tư mạnh mẽ vào khâu thiết kế bao bì, cho ra đời những bộ sưu tập hộp gỗ, hộp da sang trọng, định vị vững chắc trong phân khúc quà tặng doanh nghiệp.</p>
              </div>
            </div>

            <div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
              <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-cream bg-gold shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 shadow"></div>
              <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-4 rounded border border-brown-dark/10 bg-ivory shadow-sm">
                <div className="flex items-center justify-between space-x-2 mb-1">
                  <h3 className="font-serif text-2xl text-primary">2026</h3>
                </div>
                <h4 className="font-medium text-brown-dark mb-2 uppercase tracking-wide text-sm">Mang Tinh Hoa Đến Mọi Nhà</h4>
                <p className="text-brown-dark/70 leading-relaxed text-sm">Tiếp tục hành trình đổi mới với các hương vị hiện đại, nhưng vẫn giữ vững triết lý "Trao vị ngon - Gửi tình thân", trở thành lựa chọn hàng đầu cho mùa trăng rằm.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
