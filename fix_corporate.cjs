const fs = require('fs');
let content = fs.readFileSync('src/pages/Corporate.tsx', 'utf-8');

// Replace phone
content = content.replace(/1900 0000/g, '0913 337 280');
content = content.replace(/tel:19000000/g, 'tel:0913337280');
content = content.replace('corporate@trangdoanvien.com', 'phammhungg159@gmail.com');
content = content.replace('corporate@trangdoanvien.com', 'phammhungg159@gmail.com');

// Replace form fields
const oldForm = `              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Tên công ty</label>
                <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Người liên hệ</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Số lượng dự kiến</label>
                <select className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors [&>option]:text-brown-dark">
                  <option value="50-100">50 - 100 hộp</option>
                  <option value="100-500">100 - 500 hộp</option>
                  <option value="500+">Trên 500 hộp</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Yêu cầu thêm</label>
                <textarea rows={3} className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors resize-none"></textarea>
              </div>`;

const newForm = `              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Tên doanh nghiệp</label>
                <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Người liên hệ</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Số điện thoại</label>
                  <input type="tel" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Email</label>
                <input type="email" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div className="grid grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Số lượng</label>
                  <input type="number" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
                <div>
                  <label className="block text-sm font-medium text-ivory/80 mb-2">Ngân sách dự kiến</label>
                  <input type="text" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
                </div>
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Ngày cần giao</label>
                <input type="date" className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors" />
              </div>
              <div>
                <label className="block text-sm font-medium text-ivory/80 mb-2">Ghi chú</label>
                <textarea rows={2} className="w-full bg-transparent border-b border-ivory/30 py-2 text-ivory focus:outline-none focus:border-gold-light transition-colors resize-none"></textarea>
              </div>`;

content = content.replace(oldForm, newForm);

fs.writeFileSync('src/pages/Corporate.tsx', content);
