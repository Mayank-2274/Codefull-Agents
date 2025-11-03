/**
 * Shared types for the Seva Sahayak mobile application
 */

// Temple statistics type
export type TempleStat = {
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

// Temple pass type
export type PassDetails = {
  passId: number;
  name: string;
  phone: string;
  email: string;
  templeId?: number;
  templeName?: string;
  date: Date;
  time?: string;
  visitorsCount?: number;
};

// Prediction type for crowd forecasting
export type Prediction = {
  time: string;
  densityIndex: number;
};

// Registration form data
export type RegistrationFormData = {
  name: string;
  email: string;
  phone: string;
  visitDate: Date;
  visitTime?: string;
  templeId?: number;
  visitorsCount: number;
};