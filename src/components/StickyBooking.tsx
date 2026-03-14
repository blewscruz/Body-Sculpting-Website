import React, { useState, useEffect } from 'react';
import { Calendar } from 'lucide-react';
import { motion, AnimatePresence } from 'motion/react';

export const StickyBooking = ({ onBook }: { onBook?: () => void }) => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 500) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          className="fixed bottom-8 left-0 right-0 z-50 flex justify-center px-6 pointer-events-none"
        >
          <button
            onClick={onBook}
            className="pointer-events-auto bg-brand-dark text-white px-8 py-4 rounded-full shadow-2xl flex items-center gap-3 hover:bg-brand-gold transition-colors duration-300 group"
          >
            <Calendar className="w-5 h-5 group-hover:scale-110 transition-transform" />
            <span className="text-xs font-bold uppercase tracking-widest">Book Appointment</span>
          </button>
        </motion.div>
      )}
    </AnimatePresence>
  );
};
