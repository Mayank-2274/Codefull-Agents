import React from 'react';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { useRouter } from 'next/router';

// Function to get color based on menu item index
const getMenuItemColor = (index: number): string => {
  // Updated with brighter, more visible colors for all menu items
  const colors = ['#D8B06A', '#F8C15C', '#EFB366', '#D8B06A', '#EDCE72']; // gold variants with better visibility
  return colors[index % colors.length];
};

// Custom SVG Icons component
const DashboardIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <rect x="3" y="3" width="7" height="9" />
    <rect x="14" y="3" width="7" height="5" />
    <rect x="14" y="12" width="7" height="9" />
    <rect x="3" y="16" width="7" height="5" />
  </svg>
);

const TransportIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M5 17h-2v-11a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v11h-2" />
    <path d="M5 13h14" />
    <path d="M8 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M16 17m-2 0a2 2 0 1 0 4 0a2 2 0 1 0 -4 0" />
    <path d="M7 10h10" />
    <path d="M7 7h10" />
  </svg>
);

const MapIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <polygon points="3 6 9 3 15 6 21 3 21 18 15 21 9 18 3 21" />
    <line x1="9" x2="9" y1="3" y2="18" />
    <line x1="15" x2="15" y1="6" y2="21" />
  </svg>
);

const PeopleIcon = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
    <path d="M16 3.13a4 4 0 0 1 0 7.75" />
  </svg>
);

const items = [
  { label: 'Overview', href: '/', icon: DashboardIcon },
  { label: 'Transport', href: '/transport', icon: TransportIcon },
  { label: 'Heatmap', href: '/heatmap', icon: MapIcon },
  { label: 'Volunteers', href: '/volunteers', icon: PeopleIcon }
];

// Sidebar animation variants
const sidebarVariants = {
  hidden: { opacity: 0, x: -50 },
  visible: {
    opacity: 1,
    x: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.1
    }
  }
};

// Menu item animation variants
const itemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.3 }
  }
};

export default function Sidebar() {
  const router = useRouter();
  const currentPath = router.pathname;

  return (
    <motion.aside 
      className="w-56 border-r border-temple_gold-400 p-4 bg-mahogany-800 transition-colors duration-300 shadow-md relative overflow-hidden"
      initial="hidden"
      animate="visible"
      variants={sidebarVariants}
    >
      <div className="absolute inset-0 opacity-5 pointer-events-none" style={{ backgroundImage: "var(--temple-border-pattern)" }}></div>
      <motion.div 
        className="mb-8 flex flex-col items-center justify-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.5 }}
      >
        <div className="temple-border p-4 mb-2 temple-card">
          <div className="text-temple_gold-400 font-bold text-2xl hindu-english-font mb-1 tracking-wide text-center">
            Seva Sahayak
          </div>
          <div className="text-sm devanagari-font opacity-90 text-center flex items-center justify-center gap-1" style={{ color: '#ca6702' }}>
            <span>सेवा सहायक</span>
          </div>
        </div>
      </motion.div>
      <nav>
        <motion.ul className="flex flex-col gap-2">
          {items.map((item, index) => {
            const isActive = currentPath === item.href;
            
            return (
              <motion.li 
                key={item.href}
                variants={itemVariants}
                whileHover={{ x: 3 }}
                transition={{ duration: 0.2 }}
                className="relative"
              >
                <Link href={item.href} passHref legacyBehavior>
                  <motion.a 
                    className={`flex items-center gap-3 px-3 py-2.5 transition-all duration-200 relative rounded-md ${isActive ? 'font-medium' : ''}`}
                    initial={false}
                    animate={{ 
                      color: isActive ? getMenuItemColor(index) : 'rgba(216, 176, 106, 0.8)',
                      backgroundColor: isActive ? 'white' : 'transparent',
                      boxShadow: isActive ? '0 2px 8px rgba(0, 0, 0, 0.08)' : 'none',
                    }}
                    style={{
                      borderRadius: '8px'
                    }}
                  >
                    <span className="text-xl">
                      {React.createElement(item.icon, { className: "w-5 h-5" })}
                    </span>
                    <span>{item.label}</span>
                  </motion.a>
                </Link>
              </motion.li>
            );
          })}
        </motion.ul>
      </nav>
    </motion.aside>
  );
}