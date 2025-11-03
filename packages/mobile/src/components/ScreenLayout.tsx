import React from 'react';
import { View, Text, StyleSheet, ScrollView, SafeAreaView, StatusBar, TouchableOpacity } from 'react-native';
import { colors } from '../styles/theme';
import MobileNavigation from './MobileNavigation';

export type ScreenLayoutProps = {
  children: React.ReactNode;
  currentScreen: string;
  onNavigate: (screen: string) => void;
  title?: string;
  subtitle?: string;
  showBackButton?: boolean;
  onBack?: () => void;
};

export default function ScreenLayout({ 
  children, 
  currentScreen, 
  onNavigate,
  title,
  subtitle,
  showBackButton,
  onBack
}: ScreenLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <StatusBar backgroundColor={colors.templeBrown} barStyle="light-content" />
      
      {/* Navigation at the top - mobile friendly version of sidebar */}
      <MobileNavigation currentScreen={currentScreen} onNavigate={onNavigate} />
      
      {/* Page header if title is provided */}
      {title && (
        <View style={styles.pageHeader}>
          {showBackButton && onBack && (
            <TouchableOpacity style={styles.backButton} onPress={onBack}>
              <Text style={styles.backButtonText}>← Back</Text>
            </TouchableOpacity>
          )}
          <View>
            <Text style={styles.pageTitle}>{title}</Text>
            {subtitle && <Text style={styles.pageSubtitle}>{subtitle}</Text>}
          </View>
        </View>
      )}
      
      {/* Main content area */}
      <View style={styles.content}>
        {children}
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.templeCream,
  },
  content: {
    flex: 1,
    backgroundColor: colors.templeCream,
    padding: 16,
  },
  contentContainer: {
    padding: 16,
  },
  pageHeader: {
    backgroundColor: colors.white,
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[200],
  },
  backButton: {
    marginBottom: 8,
  },
  backButtonText: {
    color: colors.templeBrown,
    fontWeight: '600',
    fontSize: 16,
  },
  pageTitle: {
    fontSize: 24,
    fontWeight: 'bold',
    color: colors.templeBrown,
  },
  pageSubtitle: {
    fontSize: 16,
    color: colors.gray[600],
    marginTop: 4,
  },
});