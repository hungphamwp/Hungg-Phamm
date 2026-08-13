const fs = require('fs');

let content = fs.readFileSync('src/pages/Checkout.tsx', 'utf-8');

// Add Phường/Xã
const addressForm = `<div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Quận / Huyện *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>`;

const newAddressForm = `<div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Quận / Huyện *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-brown-dark/80">Phường / Xã *</label>
                  <input required type="text" className="w-full bg-cream border border-brown-dark/10 p-3 focus:outline-none focus:border-primary transition-colors" />
                </div>`;

content = content.replace(addressForm, newAddressForm);

// Add MoMo
const vnpay = `<label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="vnpay" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán qua VNPay</span>
                </label>`;

const newVnpay = `<label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="vnpay" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán qua VNPay</span>
                </label>
                <label className="flex items-center gap-4 p-4 border border-brown-dark/20 cursor-pointer hover:border-primary transition-colors">
                  <input type="radio" name="payment" value="momo" className="accent-primary w-4 h-4" />
                  <span className="font-medium text-brown-dark">Thanh toán qua Ví MoMo</span>
                </label>`;

content = content.replace(vnpay, newVnpay);

fs.writeFileSync('src/pages/Checkout.tsx', content);

