import { create } from 'zustand';
import { persist } from 'zustand/middleware';
import { Product } from '../data/products';

type CartItem = Product & { quantity: number };

interface Toast {
  message: string;
  show: boolean;
}

interface StoreState {
  cart: CartItem[];
  wishlist: Product[];
  isCartOpen: boolean;
  isSearchOpen: boolean;
  toast: Toast;
  addToCart: (product: Product, quantity?: number) => void;
  removeFromCart: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  toggleWishlist: (product: Product) => void;
  setIsCartOpen: (isOpen: boolean) => void;
  setIsSearchOpen: (isOpen: boolean) => void;
  showToast: (message: string) => void;
  hideToast: () => void;
  clearCart: () => void;
  getCartTotal: () => number;
  getCartCount: () => number;
}

export const useStore = create<StoreState>()(
  persist(
    (set, get) => ({
      cart: [],
      wishlist: [],
      isCartOpen: false,
      isSearchOpen: false,
      toast: { message: '', show: false },

      addToCart: (product, quantity = 1) => {
        set((state) => {
          const existingItem = state.cart.find((item) => item.id === product.id);
          const newState = existingItem
            ? {
                cart: state.cart.map((item) =>
                  item.id === product.id
                    ? { ...item, quantity: item.quantity + quantity }
                    : item
                ),
              }
            : { cart: [...state.cart, { ...product, quantity }] };
            
          return {
            ...newState,
            isCartOpen: true,
          };
        });
        
        get().showToast(`Đã thêm ${product.name} vào giỏ hàng.`);
      },

      removeFromCart: (productId) => {
        set((state) => ({
          cart: state.cart.filter((item) => item.id !== productId),
        }));
      },

      updateQuantity: (productId, quantity) => {
        set((state) => ({
          cart: state.cart.map((item) =>
            item.id === productId ? { ...item, quantity } : item
          ),
        }));
      },

      toggleWishlist: (product) => {
        set((state) => {
          const exists = state.wishlist.some((item) => item.id === product.id);
          if (exists) {
            get().showToast(`Đã xóa ${product.name} khỏi danh sách yêu thích.`);
            return {
              wishlist: state.wishlist.filter((item) => item.id !== product.id),
            };
          }
          get().showToast(`Đã thêm ${product.name} vào danh sách yêu thích.`);
          return { wishlist: [...state.wishlist, product] };
        });
      },

      setIsCartOpen: (isOpen) => set({ isCartOpen: isOpen }),
      setIsSearchOpen: (isOpen) => set({ isSearchOpen: isOpen }),
      
      showToast: (message) => {
        set({ toast: { message, show: true } });
        setTimeout(() => {
          set({ toast: { message: '', show: false } });
        }, 3000);
      },
      
      hideToast: () => set({ toast: { message: '', show: false } }),

      clearCart: () => set({ cart: [] }),

      getCartTotal: () => {
        return get().cart.reduce((total, item) => total + item.price * item.quantity, 0);
      },
      
      getCartCount: () => {
        return get().cart.reduce((count, item) => count + item.quantity, 0);
      }
    }),
    {
      name: 'trang-doan-vien-storage',
      partialize: (state) => ({ cart: state.cart, wishlist: state.wishlist }),
    }
  )
);
