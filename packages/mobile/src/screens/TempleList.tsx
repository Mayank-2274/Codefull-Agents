import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ActivityIndicator, TouchableOpacity } from 'react-native';
import { getTempleStats } from '../lib/api';
import { colors, spacing, shadows, borderRadius } from '../styles/theme';
import TempleCard from '../components/TempleCard';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TempleStackParamList } from '../navigation/AppNavigator';

// Define the type for the temple items
type TempleStat = {
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

type Props = NativeStackScreenProps<TempleStackParamList, 'TempleList'>;

export default function TempleList({ navigation }: Props) {
  const [loading, setLoading] = useState(true);
  const [temples, setTemples] = useState<TempleStat[]>([]);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    async function loadTemples() {
      try {
        const data = await getTempleStats();
        setTemples(data.templeStats);
      } catch (err) {
        setError('Failed to load temple data');
        console.error(err);
      } finally {
        setLoading(false);
      }
    }
    
    loadTemples();
  }, []);

  const handleRetry = () => {
    setLoading(true);
    setError(null);
    getTempleStats()
      .then(data => setTemples(data.templeStats))
      .catch(err => {
        console.error(err);
        setError('Failed to load temple data');
      })
      .finally(() => setLoading(false));
  };

  const renderItem = ({ item }: { item: TempleStat }) => (
    <TempleCard 
      temple={item}
      onPress={() => navigation.navigate('TempleDetail', { templeId: item.id })} 
    />
  );
  
  return (
      <View style={styles.container}>
        {loading ? (
          <View style={styles.loaderContainer}>
            <ActivityIndicator size="large" color={colors.templeBrown} />
            <Text style={styles.loadingText}>Loading temple information...</Text>
          </View>
        ) : error ? (
          <View style={styles.errorContainer}>
            <Text style={styles.errorText}>{error}</Text>
            <TouchableOpacity 
              style={styles.retryButton} 
              onPress={handleRetry}
            >
              <Text style={styles.retryButtonText}>Retry</Text>
            </TouchableOpacity>
          </View>
        ) : (
          <FlatList
            data={temples}
            renderItem={renderItem}
            keyExtractor={(item) => item.id.toString()}
            showsVerticalScrollIndicator={false}
            contentContainerStyle={styles.listContent}
          />
        )}
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loaderContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  loadingText: {
    marginTop: spacing.md,
    color: colors.templeBrown,
    fontSize: 16,
  },
  errorContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingVertical: spacing.xl,
  },
  errorText: {
    color: '#e63946',
    marginBottom: spacing.md,
    fontSize: 16,
    textAlign: 'center',
  },
  retryButton: {
    backgroundColor: colors.templeBrown,
    paddingVertical: spacing.sm,
    paddingHorizontal: spacing.lg,
    borderRadius: borderRadius.md,
  },
  retryButtonText: {
    color: colors.white,
    fontWeight: 'bold',
  },
  listContent: {
    paddingBottom: spacing.xl,
  },
});