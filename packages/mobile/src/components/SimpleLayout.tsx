import React from 'react';
import { View, Text, StyleSheet, SafeAreaView, TouchableOpacity } from 'react-native';
import { colors, spacing, shadows, borderRadius } from '../styles/theme';

type SimpleLayoutProps = {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
  onBack?: () => void;
};

// A simplified screen layout without navigation dependencies
export default function SimpleLayout({ children, title, subtitle, onBack }: SimpleLayoutProps) {
  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.header}>
        {onBack && (
          <TouchableOpacity style={styles.backButton} onPress={onBack}>
            <Text style={styles.backButtonText}>← Back</Text>
          </TouchableOpacity>
        )}
        <View style={styles.titleContainer}>
          <Text style={styles.title}>{title}</Text>
          {subtitle && <Text style={styles.subtitle}>{subtitle}</Text>}
        </View>
      </View>
      
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
  header: {
    backgroundColor: colors.templeBrown,
    padding: spacing.md,
    borderBottomWidth: 1,
    borderBottomColor: colors.templeGold,
  },
  titleContainer: {
    marginTop: spacing.xs,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.white,
  },
  subtitle: {
    fontSize: 14,
    color: colors.templeCream,
    marginTop: 2,
  },
  backButton: {
    marginBottom: spacing.xs,
  },
  backButtonText: {
    color: colors.templeGold,
    fontSize: 16,
    fontWeight: '500',
  },
  content: {
    flex: 1,
    padding: spacing.md,
  },
});