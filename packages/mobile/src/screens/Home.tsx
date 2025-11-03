import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image } from 'react-native';
import { BottomTabScreenProps } from '@react-navigation/bottom-tabs';
import { colors, spacing, shadows, borderRadius } from '../styles/theme';
import { RootTabParamList } from '../navigation/AppNavigator';

type Props = BottomTabScreenProps<RootTabParamList, 'Home'>;

// Home screen displaying overview of the application
export default function HomeScreen({ navigation }: Props) {
  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <Text style={styles.om}>ॐ</Text>
        <Text style={styles.title}>Seva Sahayak</Text>
      </View>
      
      <Text style={styles.subtitle}>Temple Visit Management</Text>
      
      <Image 
        source={require('../assets/temples/Somnath-temple.jpg')} 
        style={styles.heroImage}
        resizeMode="cover"
      />
      
      <View style={styles.statsContainer}>
        <View style={styles.statCard}>
          <Text style={styles.statValue}>4</Text>
          <Text style={styles.statLabel}>Temples</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>9,699</Text>
          <Text style={styles.statLabel}>Visitors Today</Text>
        </View>
        
        <View style={styles.statCard}>
          <Text style={styles.statValue}>2</Text>
          <Text style={styles.statLabel}>Events</Text>
        </View>
      </View>
      
      <View style={styles.actionsContainer}>
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Temples')}
        >
          <Text style={styles.actionIcon}>🏯</Text>
          <Text style={styles.actionText}>Browse Temples</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.actionIcon}>📝</Text>
          <Text style={styles.actionText}>Register Visit</Text>
        </TouchableOpacity>
        
        <TouchableOpacity 
          style={styles.actionButton}
          onPress={() => navigation.navigate('Pass')}
        >
          <Text style={styles.actionIcon}>🎫</Text>
          <Text style={styles.actionText}>View Pass</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.templeCream,
    padding: spacing.md,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: spacing.lg,
    marginBottom: spacing.xs,
  },
  om: {
    fontSize: 28,
    color: colors.templeHenna,
    marginRight: spacing.xs,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: colors.templeBrown,
  },
  subtitle: {
    fontSize: 16,
    color: colors.gray[600],
    textAlign: 'center',
    marginBottom: spacing.lg,
  },
  heroImage: {
    width: '100%',
    height: 180,
    borderRadius: borderRadius.md,
    marginBottom: spacing.lg,
    ...shadows.md,
  },
  statsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xl,
  },
  statCard: {
    backgroundColor: colors.white,
    paddingVertical: spacing.md,
    paddingHorizontal: spacing.sm,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    width: '30%',
    ...shadows.sm,
    borderLeftWidth: 3,
    borderLeftColor: colors.templeGold,
  },
  statValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: 4,
  },
  statLabel: {
    fontSize: 12,
    color: colors.gray[600],
  },
  actionsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  actionButton: {
    backgroundColor: colors.white,
    width: '48%',
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    marginBottom: spacing.md,
    ...shadows.sm,
    borderBottomWidth: 3,
    borderBottomColor: colors.templeGold,
  },
  actionIcon: {
    fontSize: 24,
    marginBottom: spacing.xs,
  },
  actionText: {
    color: colors.templeBrown,
    fontWeight: '500',
  },
});