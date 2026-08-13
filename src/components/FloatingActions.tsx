import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPhone, faCommentDots } from '@fortawesome/free-solid-svg-icons';
import { faFacebookMessenger } from '@fortawesome/free-brands-svg-icons';
import { motion } from 'framer-motion';

export function FloatingActions() {
  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col items-end space-y-4">
      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="tel:0913337280"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-red-600 text-white shadow-lg relative group"
        title="Gọi điện"
      >
        <FontAwesomeIcon icon={faPhone} className="w-5 h-5 animate-pulse" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          0913 337 280
        </span>
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://zalo.me/0913337280"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-500 text-white shadow-lg relative group"
        title="Zalo"
      >
        <span className="font-bold text-lg leading-none">Zalo</span>
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Zalo
        </span>
      </motion.a>

      <motion.a
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        href="https://m.me/"
        target="_blank"
        rel="noopener noreferrer"
        className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-600 text-white shadow-lg relative group"
        title="Messenger"
      >
        <FontAwesomeIcon icon={faFacebookMessenger} className="w-6 h-6" />
        <span className="absolute right-full mr-4 bg-white text-gray-800 text-sm px-3 py-1.5 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap pointer-events-none">
          Chat Messenger
        </span>
      </motion.a>
    </div>
  );
}
