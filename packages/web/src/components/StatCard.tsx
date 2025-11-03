import React from 'react';
import { motion } from 'framer-motion';

export default function StatCard({ title, value }: { title: string; value: React.ReactNode }) {
  return (
    <motion.div 
      className="p-4 rounded-lg temple-card temple-border relative overflow-hidden temple-header"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.02, 
        boxShadow: "0 8px 16px rgba(139, 62, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-sm font-medium text-white mb-1 bg-mahogany-600 px-2 py-0.5 rounded-sm inline-block"
      >
        {title}
      </motion.div>
      <motion.div 
        initial={{ opacity: 0, y: 5 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.4 }}
        className="text-3xl font-bold text-mahogany-700"
      >
        {value}
      </motion.div>
    </motion.div>
  );
}
