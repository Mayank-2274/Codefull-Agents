import React from 'react';
import { motion } from 'framer-motion';

export default function PredictionCard({ title, predictions }: { title: string; predictions: Array<{ time: string; densityIndex: number }> }) {
  return (
    <motion.div 
      className="p-4 rounded-lg temple-card temple-border relative overflow-hidden temple-header"
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeOut" }}
      whileHover={{ 
        scale: 1.01, 
        boxShadow: "0 8px 16px rgba(139, 62, 0, 0.15)",
        transition: { duration: 0.2 } 
      }}
    >
      <motion.div 
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.2, duration: 0.3 }}
        className="text-sm font-semibold text-mahogany-900 mb-3"
      >
        {title}
      </motion.div>
      <motion.ul 
        className="mt-2 space-y-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.4 }}
      >
        {predictions.map((p, index) => (
          <motion.li 
            key={p.time} 
            className="flex justify-between border-b border-temple_gold-200 pb-1 last:border-0"
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ 
              delay: 0.4 + (index * 0.1),
              duration: 0.3,
              ease: "easeOut"
            }}
          >
            <div className="text-sm font-bold" style={{ color: '#ca6702' }}>
              {new Date(p.time).toLocaleTimeString()}
            </div>
            <motion.div 
              className="font-bold"
              style={{ color: '#ca6702' }}
              initial={{ width: "0%" }}
              animate={{ width: "auto" }}
              transition={{ delay: 0.5 + (index * 0.1), duration: 0.4 }}
            >
              {Math.round(p.densityIndex * 100)}%
            </motion.div>
          </motion.li>
        ))}
      </motion.ul>
    </motion.div>
  );
}
