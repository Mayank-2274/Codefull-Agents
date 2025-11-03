import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ImageSourcePropType } from 'react-native';
import { colors, shadows, spacing, borderRadius, getTrafficLevelColor, getTrafficLevelText } from '../styles/theme';
import { templeImages } from '../assets';

type TempleCardProps = {
  temple: {
    id: number;
    name: string;
    visitorsNow: number;
    density: number;
    maxCapacity: number;
    imageUrl?: string;
  };
  onPress: () => void;
};

export default function TempleCard({ temple, onPress }: TempleCardProps) {
  const trafficColor = getTrafficLevelColor(temple.density);
  const trafficText = getTrafficLevelText(temple.density);
  
  // Calculate percentage for the capacity bar
  const capacityPercentage = Math.min(100, Math.round(temple.density * 100));
  
  // Get the temple image based on temple ID
  const getTempleImage = (templeId: number): ImageSourcePropType => {
    return templeImages[templeId as keyof typeof templeImages] || templeImages.default;
  };
  
  return (
    <TouchableOpacity 
      style={styles.container}
      onPress={onPress}
      activeOpacity={0.7}
    >
      <View style={styles.imageContainer}>
        <Image 
          source={getTempleImage(temple.id)}
          style={styles.image}
          resizeMode="cover"
        />
      </View>
      
      <View style={styles.content}>
        <Text style={styles.name}>{temple.name}</Text>
        
        <View style={styles.statsRow}>
          <Text style={styles.statLabel}>Current Visitors:</Text>
          <Text style={styles.statValue}>{temple.visitorsNow}</Text>
        </View>
        
        <View style={styles.trafficContainer}>
          <View style={styles.trafficRow}>
            <Text style={styles.trafficLabel}>Traffic:</Text>
            <View style={[styles.trafficBadge, { backgroundColor: trafficColor }]}>
              <Text style={styles.trafficText}>{trafficText}</Text>
            </View>
          </View>
          
          <View style={styles.capacityBarContainer}>
            <View 
              style={[
                styles.capacityBarFill, 
                { 
                  width: `${capacityPercentage}%`,
                  backgroundColor: trafficColor
                }
              ]} 
            />
          </View>
          <Text style={styles.capacityText}>
            {capacityPercentage}% of capacity
          </Text>
        </View>
      </View>
      
      <View style={styles.borderAccent} />
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.md,
    overflow: 'hidden',
    ...shadows.md,
    borderWidth: 1,
    borderColor: colors.templeGold,
    position: 'relative',
  },
  borderAccent: {
    position: 'absolute',
    top: 0,
    left: 0,
    width: 4,
    height: '100%',
    backgroundColor: colors.templeGold,
  },
  imageContainer: {
    height: 160,
    width: '100%',
    overflow: 'hidden',
    borderTopLeftRadius: borderRadius.lg,
    borderTopRightRadius: borderRadius.lg,
  },
  image: {
    width: '100%',
    height: '100%',
  },
  content: {
    padding: spacing.md,
  },
  name: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: spacing.sm,
  },
  statsRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: spacing.xs,
  },
  statLabel: {
    fontSize: 14,
    color: colors.gray[700],
  },
  statValue: {
    fontSize: 14,
    fontWeight: '600',
    color: colors.templeBrown,
  },
  trafficContainer: {
    marginTop: spacing.sm,
  },
  trafficRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: spacing.xs,
  },
  trafficLabel: {
    fontSize: 14,
    color: colors.gray[700],
    marginRight: spacing.sm,
  },
  trafficBadge: {
    paddingHorizontal: spacing.sm,
    paddingVertical: 2,
    borderRadius: borderRadius.sm,
  },
  trafficText: {
    fontSize: 12,
    fontWeight: 'bold',
    color: colors.white,
  },
  capacityBarContainer: {
    height: 6,
    backgroundColor: colors.gray[300],
    borderRadius: borderRadius.round,
    overflow: 'hidden',
    marginBottom: 4,
  },
  capacityBarFill: {
    height: '100%',
    borderRadius: borderRadius.round,
  },
  capacityText: {
    fontSize: 12,
    color: colors.gray[600],
    textAlign: 'right',
  },
});