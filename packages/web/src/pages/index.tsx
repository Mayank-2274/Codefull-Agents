import React from 'react';
import Header from '../components/Header';
import Sidebar from '../components/Sidebar';
import StatCard from '../components/StatCard';
import PredictionCard from '../components/PredictionCard';
import { getTempleStats, getCrowdPredictions } from '../lib/api';

export default function Home() {
  const [stats, setStats] = React.useState<any>(null);
  const [predictions, setPredictions] = React.useState<any[]>([]);

  React.useEffect(() => {
    (async () => {
      const s = await getTempleStats();
      setStats(s);
      const p = await getCrowdPredictions(1);
      setPredictions(p.predictions);
    })();
  }, []);

  return (
    <div className="flex h-screen bg-app-gradient text-mahogany-700 dark:text-temple_gold-400 transition-colors duration-200">
      <Sidebar />
      <div className="flex-1 flex flex-col">
        <Header />
        <main className="p-6">
          <section className="grid grid-cols-3 gap-4">
            <StatCard title="Total Temples" value={stats?.temples ?? '—'} />
            <StatCard title="Visitors Now" value={stats?.visitorsNow ?? '—'} />
            <StatCard title="Events Today" value={stats?.eventsToday ?? '—'} />
          </section>

          <section className="mt-5 grid grid-cols-3 gap-4">
            <div className="col-span-2 p-4 rounded-lg temple-card temple-border min-h-[260px] transition-colors duration-200 relative overflow-hidden temple-header temple-corner">
              <h3 className="text-lg font-semibold mb-3 text-mahogany-700">Temple Stats</h3>
              <div className="grid grid-cols-2 gap-3">
                {stats?.templeStats?.map((t: any) => (
                  <div key={t.id} className="p-3 rounded-md border-2 border-temple_gold-400 bg-cream-500 hover:shadow-md flex flex-col hover-lift">
                    <div className="h-24 rounded-md overflow-hidden mb-2 relative">
                      <div className="bg-temple_gold-50 w-full h-full flex items-center justify-center">
                        <img 
                          src={t.imageUrl} 
                          alt={t.name} 
                          className={`w-full h-full ${t.id === 3 ? 'object-top' : 'object-cover'}`}
                          style={t.id === 3 ? { objectPosition: 'center top' } : {}}
                          onError={(e) => {
                            e.currentTarget.onerror = null;
                            e.currentTarget.src = '/images/temples/default-temple.jpg';
                          }} 
                        />
                        <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent text-white px-2 py-1">
                          <div className="font-semibold text-sm">{t.name}</div>
                        </div>
                      </div>
                    </div>
                    <div className="text-henna-600 dark:text-temple_gold-500 font-medium">{t.visitorsNow} visitors</div>
                    <div className="mt-2 h-2 bg-gray-200 rounded-full overflow-hidden transition-colors duration-200">
                      <div className={`h-full ${t.density > 0.7 ? 'bg-mahogany-600' : (t.density > 0.4 ? 'bg-henna-500' : 'bg-temple_green-500')}`} style={{ width: `${Math.round(t.density * 100)}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <PredictionCard title="Crowd Forecast" predictions={predictions} />
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
