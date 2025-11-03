/**
 * Preview utility for SevaSahayak Mobile App
 * This file generates preview images of the app components for demo purposes
 */

import React from 'react';
import { StyleSheet, ScrollView, View, Text } from 'react-native';
import { colors } from '../styles/theme';

// Import screens for preview
import App from '../App';
import TempleList from '../screens/TempleList';
import TempleDetail from '../screens/TempleDetail';
import Registration from '../screens/Registration';
import Pass from '../screens/Pass';
import TempleCard from '../components/TempleCard';

// Define types for mock data
type MockTemple = {
  id: number;
  name: string;
  visitorsNow: number;
  density: number;
  location: [number, number];
  maxCapacity: number;
  description: string;
  imageUrl?: string;
  facts: string[];
  bestTimeToVisit: string;
  averageVisitDuration: string;
  facilities: string[];
};

type MockPass = {
  passId: number;
  name: string;
  phone: string;
  email: string;
  templeId?: number;
  date: Date;
};

// Mock data for previews
const mockTemple: MockTemple = {
  id: 1,
  name: "Somnath Temple",
  visitorsNow: 248,
  density: 0.7,
  location: [20.8885, 70.4021],
  maxCapacity: 500,
  description: "One of the twelve Jyotirlingas, Somnath temple is an important pilgrimage site for Hindus.",
  imageUrl: "Somnath-temple.jpg",
  facts: [
    "The present temple was reconstructed in the Chaulukya style of Hindu temple architecture",
    "It is the seventh reconstruction of the temple",
    "The temple is illuminated every evening with a light show"
  ],
  bestTimeToVisit: "October to March",
  averageVisitDuration: "1-2 hours",
  facilities: ["Wheelchair accessible", "Guided tours", "Prayer hall", "Restrooms"]
};

const mockPass: MockPass = {
  passId: 123456,
  name: "Rahul Sharma",
  phone: "9876543210",
  email: "rahul@example.com",
  templeId: 1,
  date: new Date()
};

export default function Preview(): React.ReactElement {
  return (
    <ScrollView style={styles.container}>
      <Text style={styles.header}>SevaSahayak Mobile App Previews</Text>
      
      <Text style={styles.sectionTitle}>Temple Card Component</Text>
      <TempleCard 
        temple={mockTemple} 
        onPress={() => console.log('Temple card pressed')} 
      />
      
      <Text style={styles.sectionTitle}>Temple List Screen</Text>
      <View style={styles.screenPreview}>
        <TempleList 
          onSelectTemple={() => console.log('Temple selected')}
          onBack={() => console.log('Back pressed')}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Temple Detail Screen</Text>
      <View style={styles.screenPreview}>
        <TempleDetail
          temple={mockTemple}
          onBack={() => console.log('Back pressed')}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Registration Screen</Text>
      <View style={styles.screenPreview}>
        <Registration
          onComplete={() => console.log('Registration complete')}
          onBack={() => console.log('Back pressed')}
          templeId={1}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Pass Screen</Text>
      <View style={styles.screenPreview}>
        <Pass
          pass={mockPass}
          onBack={() => console.log('Back pressed')}
        />
      </View>
      
      <Text style={styles.sectionTitle}>Main App Flow</Text>
      <View style={styles.screenPreview}>
        <App />
      </View>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f5f5f5',
    padding: 20,
  },
  header: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: 20,
    textAlign: 'center',
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginTop: 30,
    marginBottom: 10,
  },
  screenPreview: {
    borderWidth: 1,
    borderColor: colors.templeGold,
    borderRadius: 8,
    overflow: 'hidden',
    marginBottom: 20,
  }
});