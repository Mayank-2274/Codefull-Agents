import React from 'react';
import { motion } from 'framer-motion';

export default function Header() {

  return (
    <motion.header 
      initial={{ opacity: 0, y: -10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      className="flex items-center justify-between px-6 py-3 border-b border-temple_gold-500 bg-mahogany-700 shadow-md transition-colors duration-200 relative overflow-hidden temple-header"
    >
      <div className="absolute inset-0 bg-temple-border-pattern opacity-10"></div>
      <div className="absolute left-0 top-0 w-full h-1 bg-gradient-to-r from-temple_gold-400 to-temple_gold-600"></div>
      
      <div className="flex items-center z-10">
        <span 
          className="devanagari-font text-2xl"
          style={{ 
            color: '#9d0208',
            fontWeight: 'bold'
          }}
        >
          ॐ
        </span>
      </div>
      <div className="flex items-center gap-4">
        <motion.button 
          className="text-xs text-temple_gold-300 bg-mahogany-700 hover:bg-mahogany-800 px-3 py-1 rounded-md shadow-md transition-colors duration-200 z-10 border border-temple_gold-500"
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.4 }}
        >
          <span className="font-medium whitespace-nowrap">Admin panel</span>
        </motion.button>
      </div>
    </motion.header>
  );
}
