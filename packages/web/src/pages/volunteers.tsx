import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getVolunteers } from '../lib/api';
import { motion } from 'framer-motion';

// Define skills icon mapping
const skillIcons = {
  'first-aid': '🩺',
  'guide': '🧭',
  'logistics': '📦'
};

export default function Volunteers() {
  const [vols, setVols] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const d = await getVolunteers();
      setVols(d.volunteers);
      setLoading(false);
    })();
  }, []);

  // Stagger animation for list items
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.4 }
    }
  };

  return (
    <div className="flex h-screen bg-app-gradient text-rich_black-700 dark:text-white transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 flex flex-col overflow-hidden">
        <Header />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="flex-1 p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold" style={{ color: '#f7ede2' }}>Volunteers</h2>
            <div className="text-sm text-[#f2e8cf] dark:text-[#f2e8cf] drop-shadow-[0_0_0.5px_rgba(242,232,207,0.5)]">
              Seva Sahayak Team Members
            </div>
          </div>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-tiffany_blue-500 dark:text-tiffany_blue-300">
                Loading volunteers...
              </div>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4"
            >
              {vols.map((v) => (
                <motion.div 
                  key={v.id} 
                  variants={itemVariants}
                  whileHover={{ scale: 1.02, transition: { duration: 0.2 } }}
                  className="p-4 rounded-lg bg-white dark:bg-rich_black-600 shadow-md border border-gray-100 dark:border-rich_black-400 transition-colors duration-200"
                >
                  <div className="flex items-center justify-between mb-2">
                    <div className="font-semibold text-lg">{v.name}</div>
                    <div className={`px-2 py-1 rounded-full text-xs font-medium ${
                      v.available 
                        ? 'bg-[#c9e3b4] text-[#2c5f2d] dark:bg-[#c9e3b4] dark:text-[#2c5f2d]' // Light green bg, dark green text for Available
                        : 'bg-[#ffcfd2] text-[#9b2226] dark:bg-[#ffcfd2] dark:text-[#9b2226]' // Light red bg, dark red text for Busy
                    }`}>
                      {v.available ? 'Available' : 'Busy'}
                    </div>
                  </div>
                  <div className="flex items-center text-gray-600 dark:text-gray-300">
                    <span className="mr-2 text-lg">
                      {skillIcons[v.skills as keyof typeof skillIcons] || '🔧'}
                    </span>
                    <span className="text-sm">{v.skills}</span>
                  </div>
                </motion.div>
              ))}
            </motion.div>
          )}
        </motion.main>
      </div>
    </div>
  );
}
