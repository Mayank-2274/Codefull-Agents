import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import { getTransportStatus } from '../lib/api';
import { motion } from 'framer-motion';

// Traffic level color mapping
const getTrafficLevelColor = (level: number) => {
  if (level > 0.8) return 'bg-[#9b2226]'; // Very High - keeping original
  if (level > 0.5) return 'bg-[#ae2012]'; // High - keeping original
  if (level > 0.3) return 'bg-[#FFB703]'; // Medium - darker yellow
  if (level > 0.1) return 'bg-[#74C69D]'; // Low - light green
  return 'bg-[#2D6A4F]';                  // Very Low - green
};

// Parking status color mapping
const getParkingStatusColor = (status: string) => {
  switch(status) {
    case 'Available':
      return 'bg-[#c9e3b4] text-[#2c5f2d] dark:bg-[#c9e3b4] dark:text-[#2c5f2d] font-bold'; // Light green background, dark green text
    case 'Limited':
      return 'bg-[#ffecb3] text-[#b76e00] dark:bg-[#ffecb3] dark:text-[#b76e00] font-bold'; // Light yellow background, dark yellow text
    case 'Full':
      return 'bg-[#ffcfd2] text-[#9b2226] dark:bg-[#ffcfd2] dark:text-[#9b2226] font-bold'; // Light red background, dark red text
    default:
      return 'bg-gray-100 text-[#9b2226] dark:bg-gray-100 dark:text-[#9b2226] font-bold';
  }
};

// Traffic icons based on congestion level
const TrafficIcon = ({ congestionLevel }: { congestionLevel: number }) => {
  if (congestionLevel > 0.7) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-rufous-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M12 5v14M5 12h14" />
      </svg>
    );
  } else if (congestionLevel > 0.4) {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-alloy_orange-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14" />
      </svg>
    );
  } else {
    return (
      <svg xmlns="http://www.w3.org/2000/svg" className="w-5 h-5 text-tiffany_blue-500" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
        <path d="M5 12h14M12 5l7 7-7 7" />
      </svg>
    );
  }
};

// Function to get color for temple button based on temple ID
function getTempleButtonColor(templeId: number): string {
  const colors = [
    'bg-[#f2cc8f] text-[#370617] shadow-md font-semibold hover:bg-[#e9c46a] transition-colors',
    'bg-[#81b29a] text-[#370617] shadow-md font-semibold hover:bg-[#76a58c] transition-colors',
    'bg-[#e07a5f] text-[#370617] shadow-md font-semibold hover:bg-[#d1694c] transition-colors',
    'bg-[#3d405b] text-[#f7ede2] shadow-md font-semibold hover:bg-[#2e304a] transition-colors'
  ];
  return colors[(templeId - 1) % colors.length];
}

// Define types for temple traffic data
interface RoadData {
  name: string;
  congestionLevel: number;
  distanceKm: number;
  estimatedDelayMinutes: number;
}

interface TempleTraffic {
  templeId: number;
  templeName: string;
  location: [number, number];
  overallTrafficLevel: number;
  parkingAvailabilityPercent: number;
  parkingStatus: string;
  nearbyRoads: RoadData[];
  bestApproachRoute: string;
  lastUpdated: string;
}

export default function Transport() {
  const [templeTraffic, setTempleTraffic] = React.useState<TempleTraffic[]>([]);
  const [loading, setLoading] = React.useState(true);
  const [selectedTemple, setSelectedTemple] = React.useState<number | null>(null);

  React.useEffect(() => {
    (async () => {
      setLoading(true);
      const s = await getTransportStatus();
      setTempleTraffic(s.templeTraffic);
      
      // Auto-select the first temple
      if (s.templeTraffic && s.templeTraffic.length > 0) {
        setSelectedTemple(s.templeTraffic[0].templeId);
      }
      
      setLoading(false);
    })();
  }, []);

  // Animation variants
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
            <h2 className="text-2xl font-bold text-[#f7ede2] dark:text-[#f7ede2]">Temple Traffic Overview</h2>
            <div className="text-sm text-[#f2e8cf] dark:text-[#f2e8cf] drop-shadow-[0_0_0.5px_rgba(242,232,207,0.5)]">
              Real-time traffic monitoring
            </div>
          </div>

          <p className="mb-6 text-[#f7ede2] dark:text-[#f7ede2] max-w-3xl font-medium">
            Monitor real-time traffic conditions around Gujarat's major temples to plan your visit efficiently. Get updates on congestion levels, parking availability, and recommended approach routes.
          </p>

          {loading ? (
            <div className="flex justify-center items-center h-64">
              <div className="animate-pulse text-tiffany_blue-500 dark:text-tiffany_blue-300">
                Loading traffic data...
              </div>
            </div>
          ) : (
            <motion.div 
              variants={containerVariants}
              initial="hidden"
              animate="visible"
              className="max-w-4xl"
            >
              {/* Temple selector */}
              <div className="mb-6 flex flex-wrap gap-2">
                {templeTraffic.map((temple) => (
                  <button
                    key={temple.templeId}
                    onClick={() => setSelectedTemple(temple.templeId)}
                    className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-200 ${
                      selectedTemple === temple.templeId
                        ? getTempleButtonColor(temple.templeId)
                        : 'bg-[#eee1d5] dark:bg-[#483c32] text-[#370617] dark:text-[#f7ede2] hover:bg-[#e6d8c9] dark:hover:bg-[#5c4d3f] shadow-md border-[1px] border-[#d3c1ad]'
                    }`}
                  >
                    {temple.templeName}
                  </button>
                ))}
              </div>
              
              {/* Selected temple traffic details */}
              {selectedTemple && templeTraffic.map((temple) => {
                if (temple.templeId !== selectedTemple) return null;
                
                return (
                  <motion.div
                    key={temple.templeId}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.3 }}
                    className="space-y-6"
                  >
                    <div className="p-5 rounded-lg bg-white dark:bg-rich_black-600 shadow-md border border-gray-100 dark:border-rich_black-400">
                      <h2 className="text-xl font-black mb-3 text-[#9b2226] dark:text-[#9b2226] tracking-wide">{temple.templeName} Traffic Overview</h2>
                      
                      <div className="flex flex-wrap gap-4 mb-4">
                        <div className="flex-1 min-w-[200px]">
                          <div className="text-sm text-[#bb3e03] dark:text-[#bb3e03] mb-1 font-semibold">Overall Traffic</div>
                          <div className="flex items-center">
                            <div className="flex-1 h-3 bg-gray-200 dark:bg-rich_black-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getTrafficLevelColor(
                                  // Set specific traffic levels for each temple
                                  temple.templeId === 1 ? 0.45 : // Medium traffic for Somnath (45%)
                                  temple.templeId === 4 ? 0.15 : // Very low traffic for Ambaji (15%)
                                  temple.overallTrafficLevel
                                )}`}
                                style={{ width: `${
                                  // Set specific traffic levels for each temple
                                  temple.templeId === 1 ? 45 : // Medium traffic for Somnath (45%)
                                  temple.templeId === 4 ? 15 : // Very low traffic for Ambaji (15%)
                                  temple.overallTrafficLevel * 100
                                }%` }}
                              ></div>
                            </div>

                          </div>
                        </div>
                        
                        <div className="flex-1 min-w-[200px]">
                          <div className="text-sm text-[#9b2226] dark:text-[#9b2226] mb-1 font-semibold">Parking Availability</div>
                          <div className="flex items-center">
                            <div className="flex-1 h-3 bg-gray-200 dark:bg-rich_black-700 rounded-full overflow-hidden">
                              <div 
                                className={`h-full ${getParkingAvailabilityColor(
                                  // Custom availability percentages based on temple ID
                                  temple.templeId === 1 ? 50 :
                                  temple.templeId === 2 ? 45 :
                                  temple.templeId === 3 ? 15 :
                                  90 // Image 4: Full availability (maximum green)
                                )}`} 
                                style={{ width: `${
                                  // Custom availability percentages based on temple ID
                                  temple.templeId === 1 ? 50 :
                                  temple.templeId === 2 ? 45 :
                                  temple.templeId === 3 ? 15 :
                                  90 // Image 4: Full availability
                                }%` }}
                              ></div>
                            </div>
                            <span className="ml-2 font-medium text-sm">
                              {
                                // Custom availability percentages based on temple ID
                                temple.templeId === 1 ? 50 :
                                temple.templeId === 2 ? 45 :
                                temple.templeId === 3 ? 15 :
                                90 // Image 4: Full availability
                              }%
                            </span>
                          </div>
                          <div className="mt-1 text-xs text-[#bb3e03] dark:text-[#bb3e03] font-medium">
                            Status: 
                            <span className={`px-1.5 py-0.5 rounded ${getParkingStatusColor(
                              // Custom status based on temple ID as requested
                              temple.templeId === 1 || temple.templeId === 2 ? 'Limited' :
                              temple.templeId === 3 ? 'Full' : 'Available'
                            )}`}>
                              {/* Custom status based on temple ID as requested */}
                              {temple.templeId === 1 || temple.templeId === 2 ? 'Limited' :
                               temple.templeId === 3 ? 'Full' : 'Available'}
                            </span>
                          </div>
                        </div>
                      </div>
                      
                      <div className="text-sm text-[#bb3e03] dark:text-[#bb3e03]">
                        <div><span className="font-semibold">Best Approach:</span> {temple.bestApproachRoute}</div>
                        <div className="text-xs text-[#9b2226] dark:text-[#9b2226] mt-1">Last updated: {temple.lastUpdated}</div>
                      </div>
                    </div>
                    
                    <div className="p-5 rounded-lg bg-white dark:bg-rich_black-600 shadow-md border border-gray-100 dark:border-rich_black-400">
                      <h3 className="font-semibold mb-3 text-[#9b2226] dark:text-[#9b2226]">Nearby Roads Status</h3>
                      <div className="grid gap-3">
                        {temple.nearbyRoads.map((road) => (
                          <div 
                            key={road.name} 
                            className="p-3 rounded-md bg-gray-50 dark:bg-rich_black-700 border border-gray-100 dark:border-rich_black-500"
                          >
                            <div className="flex justify-between mb-1">
                              <div className="font-semibold text-[#bb3e03] dark:text-[#bb3e03]">{road.name}</div>
                              <div className={`text-xs px-2 py-0.5 rounded-full font-bold ${getRoadCongestionColor(road.congestionLevel)}`}>
                                {getRoadCongestionText(road.congestionLevel)}
                              </div>
                            </div>
                            <div className="text-xs text-[#9b2226] dark:text-[#9b2226] font-medium">
                              {road.distanceKm} km • {road.estimatedDelayMinutes} min delay
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>
                  </motion.div>
                );
              })}
            </motion.div>
          )}
        </motion.main>
      </div>
    </div>
  );
}

// Additional utility functions for traffic visualization
function getTrafficLevelText(level: number): string {
  if (level < 0.2) return 'Very Low';
  if (level < 0.4) return 'Low';
  if (level < 0.6) return 'Moderate';
  if (level < 0.8) return 'High';
  return 'Very High';
}

function getParkingAvailabilityColor(percent: number): string {
  // Green with varying intensity based on parking availability
  if (percent > 80) return 'bg-[#2d6a4f]'; // Very dark green for high availability
  if (percent > 60) return 'bg-[#40916c]'; // Dark green for good availability
  if (percent > 40) return 'bg-[#52b788]'; // Medium green for moderate availability
  if (percent > 20) return 'bg-[#74c69d]'; // Light green for limited availability
  return 'bg-[#95d5b2]'; // Very light green for low availability
}

function getRoadCongestionColor(level: number): string {
  if (level < 0.2) return 'bg-[#c9e3b4] text-[#2c5f2d] dark:bg-[#c9e3b4] dark:text-[#2c5f2d]';
  if (level < 0.4) return 'bg-[#c9e3b4] text-[#2c5f2d] dark:bg-[#c9e3b4] dark:text-[#2c5f2d]';
  if (level < 0.6) return 'bg-[#ffcfd2] text-[#9b2226] dark:bg-[#ffcfd2] dark:text-[#9b2226]';
  if (level < 0.8) return 'bg-[#ffcfd2] text-[#9b2226] dark:bg-[#ffcfd2] dark:text-[#9b2226]';
  return 'bg-[#ffcfd2] text-[#9b2226] dark:bg-[#ffcfd2] dark:text-[#9b2226]';
}

function getRoadCongestionText(level: number): string {
  if (level < 0.2) return 'Clear';
  if (level < 0.4) return 'Light';
  if (level < 0.6) return 'Moderate';
  if (level < 0.8) return 'Heavy';
  return 'Severe';
}
