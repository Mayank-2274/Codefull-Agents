import dynamic from 'next/dynamic';
import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getHeatmapData, getTempleStats } from '../lib/api';
import { motion } from 'framer-motion';

// Import the map component dynamically to avoid SSR issues with Leaflet
const MapWithNoSSR = dynamic(() => import('../components/LeafletMap'), { ssr: false });

export default function Heatmap() {
  const [grid, setGrid] = React.useState<number[][]>([]);
  const [temples, setTemples] = React.useState<any[]>([]);
  const [loading, setLoading] = React.useState(true);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      // Load both heatmap data and temple information
      const [heatmapData, templeData] = await Promise.all([
        getHeatmapData(1),
        getTempleStats()
      ]);
      
      setGrid(heatmapData.grid);
      setTemples(templeData.templeStats);
      setLoading(false);
    })();
  }, []);

  return (
    <div className="flex h-screen bg-app-gradient text-rich_black-700 dark:text-white transition-colors duration-200 overflow-hidden">
      <Sidebar />
      <div className="flex-1 overflow-hidden flex flex-col">
        <Header />
        <motion.main 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          className="p-6 overflow-y-auto"
        >
          <div className="flex items-center justify-between mb-4">
            <h2 className="text-2xl font-bold" style={{ color: '#f7ede2' }}>Gujarat Temples Crowd Heatmap</h2>
            <div className="text-sm text-[#f2e8cf] dark:text-[#f2e8cf] drop-shadow-[0_0_0.5px_rgba(242,232,207,0.5)]">
              Real-time crowd density visualization
            </div>
          </div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="h-[500px] md:h-[600px] rounded-lg overflow-hidden border border-gray-200 dark:border-rich_black-400 shadow-lg bg-white dark:bg-rich_black-600 transition-colors duration-200"
          >
            {loading ? (
              <div className="h-full w-full flex items-center justify-center">
                <div className="animate-pulse text-tiffany_blue-500 dark:text-tiffany_blue-300">Loading map data...</div>
              </div>
            ) : (
              <MapWithNoSSR temples={temples} grid={grid} />
            )}
          </motion.div>
          
          <motion.div 
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="mt-4 p-4 rounded-md bg-white dark:bg-rich_black-600 shadow-md border border-gray-100 dark:border-rich_black-400 transition-colors duration-200"
          >
            <h3 className="text-lg font-semibold mb-2">Legend</h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-2">
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#2D6A4F' }}></div>
                <div className="text-sm">Very Low</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#74C69D' }}></div>
                <div className="text-sm">Low</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full" style={{ backgroundColor: '#FFECB3' }}></div>
                <div className="text-sm">Medium</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-alloy_orange-500"></div>
                <div className="text-sm">High</div>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-4 h-4 rounded-full bg-rufous-500"></div>
                <div className="text-sm">Very High</div>
              </div>
            </div>
          </motion.div>
        </motion.main>
      </div>
    </div>
  );
}
