import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { cn } from '../../lib/utils';

export default function ScrollToTop() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 200) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
  };

  return (
    <AnimatePresence>
      {isVisible && (
        <motion.button
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          exit={{ opacity: 0, scale: 0.8 }}
          transition={{ duration: 0.2, ease: 'easeOut' }}
          onClick={scrollToTop}
          className={cn(
            'fixed right-6 bottom-6 z-50',
            'w-12 h-12 rounded-full',
            'bg-black text-white',
            'dark:bg-white dark:text-black',
            'border border-neutral-200 dark:border-neutral-800',
            'shadow-lg hover:shadow-xl',
            'flex items-center justify-center',
            'hover:scale-110 transition-transform duration-200',
            'focus:outline-none focus:ring-2 focus:ring-neutral-400 focus:ring-offset-2',
            'dark:focus:ring-neutral-600 dark:focus:ring-offset-black'
          )}
          aria-label="Scroll to top"
        >
          <ArrowUp className="w-5 h-5" />
        </motion.button>
      )}
    </AnimatePresence>
  );
}
