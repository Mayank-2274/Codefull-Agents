import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, StatusBar, SafeAreaView, ScrollView } from 'react-native';
import { colors, shadows, spacing, borderRadius } from '../styles/theme';

// Navigation item type
type NavItem = {
  label: string;
  screen: string;
  icon: React.ReactNode;
};

// Simple SVG icon components matching the web version
const DashboardIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>📊</Text>
);

const TemplesIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>🏯</Text>
);

const MapIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>🗺️</Text>
);

const VolunteersIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>👥</Text>
);

// Navigation items matching web version
const navItems: NavItem[] = [
  { label: 'Overview', screen: 'home', icon: <DashboardIcon color={colors.templeGold} /> },
  { label: 'Temples', screen: 'temples', icon: <TemplesIcon color={colors.templeGold} /> },
  { label: 'Map', screen: 'map', icon: <MapIcon color={colors.templeGold} /> },
  { label: 'Volunteers', screen: 'volunteers', icon: <VolunteersIcon color={colors.templeGold} /> },
];

// Function to get color based on menu item index (same as web)
const getMenuItemColor = (index: number): string => {
  const colors = ['#D8B06A', '#F8C15C', '#EFB366', '#D8B06A', '#EDCE72'];
  return colors[index % colors.length];
};

type MobileNavigationProps = {
  currentScreen: string;
  onNavigate: (screen: string) => void;
};

export default function MobileNavigation({ currentScreen, onNavigate }: MobileNavigationProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.mahogany[800]} barStyle="light-content" />
      
      {/* Header bar - similar to web header */}
      <View style={styles.header}>
        <View style={styles.headerGradient} />
        <Text style={styles.om}>ॐ</Text>
        <Text style={styles.headerTitle}>Seva Sahayak</Text>
      </View>
      
      {/* Navigation menu */}
      <ScrollView horizontal style={styles.navScroll} contentContainerStyle={styles.navContainer}>
        {navItems.map((item, index) => {
          const isActive = currentScreen === item.screen;
          
          return (
            <TouchableOpacity
              key={item.screen}
              style={[
                styles.navItem,
                isActive && { 
                  backgroundColor: colors.white,
                  ...shadows.md,
                }
              ]}
              onPress={() => onNavigate(item.screen)}
            >
              <View style={styles.iconContainer}>
                {item.icon}
              </View>
              <Text 
                style={[
                  styles.navLabel,
                  { color: isActive ? getMenuItemColor(index) : `rgba(216, 176, 106, 0.8)` }
                ]}
              >
                {item.label}
              </Text>
            </TouchableOpacity>
          );
        })}
      </ScrollView>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.mahogany[800],
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    position: 'relative',
    borderBottomWidth: 1,
    borderBottomColor: colors.templeGold,
  },
  headerGradient: {
    position: 'absolute',
    top: 0,
    left: 0,
    right: 0,
    height: 4,
    backgroundColor: colors.templeGold,
  },
  om: {
    fontSize: 22,
    color: '#9d0208',
    fontWeight: 'bold',
    marginRight: spacing.md,
  },
  headerTitle: {
    fontSize: 18,
    color: colors.templeGold,
    fontWeight: 'bold',
  },
  navScroll: {
    backgroundColor: colors.mahogany[800],
  },
  navContainer: {
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.md,
    flexDirection: 'row',
  },
  navItem: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    marginRight: spacing.md,
  },
  iconContainer: {
    marginRight: spacing.xs,
  },
  navLabel: {
    fontWeight: '500',
    fontSize: 14,
  },
});