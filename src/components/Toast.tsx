import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useStore } from '../store/useStore';

export function Toast() {
  const { toast } = useStore();

  return (
    <AnimatePresence>
      {toast.show && (
        <motion.div
          initial={{ opacity: 0, y: 50, scale: 0.95 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          exit={{ opacity: 0, y: 20, scale: 0.95 }}
          className="fixed bottom-8 left-1/2 -translate-x-1/2 z-[100]"
        >
          <div className="bg-brown-dark text-ivory px-6 py-4 rounded-md shadow-2xl flex items-center gap-3">
            <span className="w-2 h-2 rounded-full bg-gold-light" />
            <p className="text-sm font-medium tracking-wide">{toast.message}</p>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
