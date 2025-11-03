/**
 * Seva Sahayak Mobile App Styles
 * Matching the web version's color palette and styling
 */

// Theme colors matching web version
export const colors = {
  templeGold: '#D8B06A',
  templeDarkGold: '#A87A2C',
  templeBrown: '#4E1500',
  templeHenna: '#8B3E00',
  templeGreen: '#2C3D19',
  templeCream: '#F0E6D2',
  templeDarkBrown: '#3F1100',
  mahogany: {
    700: '#5C160D',
    800: '#4E1500',
  },
  white: '#FFFFFF',
  black: '#000000',
  gray: {
    100: '#F7FAFC',
    200: '#EDF2F7',
    300: '#E2E8F0',
    400: '#CBD5E0',
    500: '#A0AEC0',
    600: '#718096',
    700: '#4A5568',
    800: '#2D3748',
    900: '#1A202C',
  },
  trafficLevels: {
    low: '#4ade80',    // Green
    moderate: '#facc15', // Yellow
    high: '#fb923c',   // Orange
    extreme: '#ef4444', // Red
  }
};

// Traffic level utilities
export const getTrafficLevelColor = (density: number): string => {
  if (density < 0.3) return colors.trafficLevels.low;
  if (density < 0.6) return colors.trafficLevels.moderate;
  if (density < 0.85) return colors.trafficLevels.high;
  return colors.trafficLevels.extreme;
};

export const getTrafficLevelText = (density: number): string => {
  if (density < 0.3) return 'Low';
  if (density < 0.6) return 'Moderate';
  if (density < 0.85) return 'High';
  return 'Extreme';
};

// Font families (we'll use close equivalents available in React Native)
export const fonts = {
  regular: 'System',
  medium: 'System',
  bold: 'System',
  devanagari: 'System',
  hindu: 'System',
  decorative: 'System',
};

// Spacing scale
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
};

// Border radius
export const borderRadius = {
  sm: 4,
  md: 8, 
  lg: 12,
  xl: 16,
  round: 9999,
};

// Shadows
export const shadows = {
  sm: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.18,
    shadowRadius: 1.0,
    elevation: 1,
  },
  md: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  lg: {
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.30,
    shadowRadius: 4.65,
    elevation: 8,
  },
};