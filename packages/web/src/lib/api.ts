type TempleStat = { 
  id: number; 
  name: string; 
  visitorsNow: number; 
  density: number;
  location: [number, number]; // [latitude, longitude]
  maxCapacity: number;
  description: string;
  imageUrl?: string;
  facts: string[];
  bestTimeToVisit: string;
  averageVisitDuration: string; // in hours
  facilities: string[];
};

const MOCK_TEMPLE_STATS: TempleStat[] = [
  { 
    id: 1, 
    name: 'Somnath Temple', 
    visitorsNow: 2874, 
    density: 0.72, 
    location: [20.8880, 70.4004],
    maxCapacity: 4000,
    description: "One of the 12 Jyotirlingas of Lord Shiva, located on the western coast of Gujarat.",
    imageUrl: "/images/temples/Somnath-temple.jpg",
    facts: [
      "Reconstructed several times after repeated destruction",
      "Located where the Saraswati River meets the Arabian Sea",
      "The current structure was completed in 1951"
    ],
    bestTimeToVisit: "October to March",
    averageVisitDuration: "2-3 hours",
    facilities: ["Parking", "Rest rooms", "Prasad", "Accommodation"]
  },
  { 
    id: 2, 
    name: 'Dwarkadhish Temple', 
    visitorsNow: 1635, 
    density: 0.55, 
    location: [22.2376, 68.9674],
    maxCapacity: 3000,
    description: "Ancient temple dedicated to Lord Krishna, located in the holy city of Dwarka.",
    imageUrl: "/images/temples/Dwarka-temple.jpg",
    facts: [
      "Built over 2000 years ago",
      "Also known as Jagat Mandir",
      "Five-storied structure supported on 72 pillars"
    ],
    bestTimeToVisit: "November to February",
    averageVisitDuration: "1-2 hours",
    facilities: ["Parking", "Rest rooms", "Boat rides", "Guided tours"]
  },
  { 
    id: 3, 
    name: 'Mahakali Temple, Pavgadh', 
    visitorsNow: 3240, 
    density: 0.81, 
    location: [22.4601, 73.5292],
    maxCapacity: 4000,
    description: "Ancient temple dedicated to Goddess Kalika, situated on Pavagadh Hill.",
    imageUrl: "/images/temples/MaaKaali-temple.jpg",
    facts: [
      "One of the Shakti Peethas",
      "Reached by climbing 250 steps or via ropeway",
      "Offers panoramic view of the surrounding area"
    ],
    bestTimeToVisit: "September to February",
    averageVisitDuration: "3-4 hours including climb",
    facilities: ["Ropeway", "Food stalls", "Resting areas", "Souvenir shops"]
  },
  { 
    id: 4, 
    name: 'Ambaji Temple', 
    visitorsNow: 1950, 
    density: 0.65, 
    location: [24.3315, 72.8574],
    maxCapacity: 3000,
    description: "Sacred Shakti Peeth dedicated to Goddess Amba, located in the Arasur hills.",
    imageUrl: "/images/temples/Ambaji-temple.jpg",
    facts: [
      "One of the 51 Shakti Peethas in Hindu mythology",
      "Famous for Bhadon Purnima fair",
      "Known for its intricate marble architecture"
    ],
    bestTimeToVisit: "October to March",
    averageVisitDuration: "1-2 hours",
    facilities: ["Parking", "Rest rooms", "Prasad counter", "Meditation hall"]
  }
];

export async function getTempleStats() {
  // if API_URL available, call real endpoint — omitted here for starter
  return {
    temples: MOCK_TEMPLE_STATS.length,
    visitorsNow: MOCK_TEMPLE_STATS.reduce((s, t) => s + t.visitorsNow, 0),
    eventsToday: 2,
    templeStats: MOCK_TEMPLE_STATS
  };
}

export async function getCrowdPredictions(templeId: number) {
  // return next 6 hours predictions
  const now = Date.now();
  const predictions = Array.from({ length: 6 }).map((_, i) => ({
    time: new Date(now + i * 60 * 60 * 1000).toISOString(),
    densityIndex: Math.max(0.1, Math.min(0.95, Math.random()))
  }));
  return { templeId, predictions };
}

export async function getTransportStatus() {
  // Generate traffic data for each temple
  const templeTraffic = MOCK_TEMPLE_STATS.map(temple => {
    const trafficLevel = Math.random();
    const parkingAvailability = Math.max(0, Math.min(100, Math.floor(100 - (temple.density * 80) - (Math.random() * 20))));
    
    // Generate nearby road congestion data
    const roads = [
      {
        name: `${temple.name} Main Entrance Road`,
        congestionLevel: Math.random(),
        distanceKm: 0.2,
        estimatedDelayMinutes: Math.floor(Math.random() * 15)
      },
      {
        name: `${temple.name} Parking Access Road`,
        congestionLevel: Math.random() * 0.7 + 0.3, // Higher congestion for parking
        distanceKm: 0.5,
        estimatedDelayMinutes: Math.floor(Math.random() * 20) + 5
      },
      {
        name: `Highway to ${temple.name}`,
        congestionLevel: Math.random() * 0.6,
        distanceKm: 2.5,
        estimatedDelayMinutes: Math.floor(Math.random() * 10)
      }
    ];
    
    return {
      templeId: temple.id,
      templeName: temple.name,
      location: temple.location,
      overallTrafficLevel: trafficLevel,
      parkingAvailabilityPercent: parkingAvailability,
      parkingStatus: parkingAvailability > 50 ? 'Available' : parkingAvailability > 20 ? 'Limited' : 'Full',
      nearbyRoads: roads,
      bestApproachRoute: `Via ${roads[Math.floor(Math.random() * roads.length)].name}`,
      lastUpdated: new Date().toISOString()
    };
  });
  
  return { templeTraffic };
}

export async function getHeatmapData(templeId: number) {
  // simple grid of density values
  const grid = Array.from({ length: 6 }).map(() => Array.from({ length: 6 }).map(() => Math.random()));
  return { templeId, grid };
}

export async function getVolunteers() {
  const volunteers = Array.from({ length: 8 }).map((_, i) => ({
    id: i + 1,
    name: `Sevak ${i + 1}`,
    available: Math.random() > 0.3,
    skills: ['first-aid', 'guide', 'logistics'][i % 3]
  }));
  return { volunteers };
}
