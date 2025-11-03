import React, { useState, useEffect } from 'react';
import { 
  View, 
  Text, 
  StyleSheet, 
  ScrollView, 
  TouchableOpacity, 
  ActivityIndicator,
  Image,
  Dimensions
} from 'react-native';
import { getCrowdPredictions, getTempleDetails } from '../lib/api';
import { colors, spacing, shadows, borderRadius, getTrafficLevelColor, getTrafficLevelText } from '../styles/theme';
import { templeImages } from '../assets';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { TempleStackParamList } from '../navigation/AppNavigator';

// Define the temple type
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

type Prediction = {
  time: string;
  densityIndex: number;
};

type Props = NativeStackScreenProps<TempleStackParamList, 'TempleDetail'>;

export default function TempleDetail({ route, navigation }: Props) {
  const { templeId } = route.params;
  const [temple, setTemple] = useState<TempleStat | null>(null);
  const [crowdPredictions, setCrowdPredictions] = useState<Prediction[]>([]);
  const [loading, setLoading] = useState(true);
  
  useEffect(() => {
    async function loadData() {
      try {
        const templeData = await getTempleDetails(templeId);
        setTemple(templeData);
        
        if (templeData) {
          const predictionData = await getCrowdPredictions(templeId);
          setCrowdPredictions(predictionData.predictions);
        }
      } catch (err) {
        console.error('Failed to load data:', err);
      } finally {
        setLoading(false);
      }
    }
    
    loadData();
  }, [templeId]);

  // Format time for display
  const formatTime = (isoString: string) => {
    const date = new Date(isoString);
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };
  
  // Calculate percentage
  const getPercentage = (value: number, max: number) => {
    return Math.round((value / max) * 100);
  };

  if (loading || !temple) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.templeBrown} />
        <Text style={{ marginTop: 16, color: colors.gray[600] }}>Loading temple information...</Text>
      </View>
    );
  }

  return (
      <ScrollView style={styles.container}>
        {/* Temple Image */}
        <View style={styles.imageContainer}>
          <Image
            source={templeImages[temple.id as keyof typeof templeImages] || templeImages.default}
            style={styles.templeImage}
            resizeMode="cover"
          />
        </View>
        
        {/* Current Status Card */}
        <View style={styles.statusCard}>
          <Text style={styles.sectionTitle}>Current Status</Text>
          
          <View style={styles.statusRow}>
            <View style={styles.statusItem}>
              <Text style={styles.statusLabel}>Visitors Now</Text>
              <Text style={styles.statusValue}>{temple.visitorsNow}</Text>
              <View style={styles.progressBarContainer}>
                <View 
                  style={[
                    styles.progressBar, 
                    { 
                      width: `${getPercentage(temple.visitorsNow, temple.maxCapacity)}%`,
                      backgroundColor: getTrafficLevelColor(temple.density)
                    }
                  ]} 
                />
              </View>
              <Text style={styles.statusSubtext}>
                {getPercentage(temple.visitorsNow, temple.maxCapacity)}% of capacity
              </Text>
            </View>
            
            <View style={styles.statusItem}>
              <Text style={styles.statusLabel}>Crowd Level</Text>
              <View style={[
                styles.trafficIndicator, 
                { backgroundColor: getTrafficLevelColor(temple.density) }
              ]}>
                <Text style={styles.trafficText}>{getTrafficLevelText(temple.density)}</Text>
              </View>
              <Text style={styles.statusSubtext}>
                Expected wait: {Math.round(temple.density * 30)} minutes
              </Text>
            </View>
          </View>
        </View>
        
        {/* Temple Description */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>About This Temple</Text>
          <Text style={styles.description}>{temple.description}</Text>
        </View>
        
        {/* Temple Facts */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Temple Facts</Text>
          {temple.facts.map((fact, index) => (
            <View key={index} style={styles.factItem}>
              <View style={styles.bulletPoint} />
              <Text style={styles.factText}>{fact}</Text>
            </View>
          ))}
        </View>
        
        {/* Crowd Predictions */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Crowd Predictions</Text>
          
          {loading ? (
            <ActivityIndicator size="large" color={colors.templeBrown} style={{ marginVertical: 20 }} />
          ) : (
            <View style={styles.predictionsChart}>
              <View style={styles.predictionsContainer}>
                {crowdPredictions.map((prediction, index) => (
                  <View key={index} style={styles.predictionItem}>
                    <Text style={styles.predictionTime}>{formatTime(prediction.time)}</Text>
                    <View style={styles.predictionBarContainer}>
                      <View 
                        style={[
                          styles.predictionBar, 
                          { 
                            height: `${prediction.densityIndex * 100}%`,
                            backgroundColor: getTrafficLevelColor(prediction.densityIndex) 
                          }
                        ]} 
                      />
                    </View>
                    <Text style={styles.densityText}>
                      {Math.round(prediction.densityIndex * 100)}%
                    </Text>
                  </View>
                ))}
              </View>
              <Text style={styles.chartNote}>
                Based on historical data and current events
              </Text>
            </View>
          )}
        </View>
        
        {/* Visit Information */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Visit Information</Text>
          
          <View style={styles.infoRow}>
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Best Time to Visit</Text>
              <Text style={styles.infoValue}>{temple.bestTimeToVisit}</Text>
            </View>
            
            <View style={styles.infoItem}>
              <Text style={styles.infoLabel}>Average Duration</Text>
              <Text style={styles.infoValue}>{temple.averageVisitDuration}</Text>
            </View>
          </View>
        </View>
        
        {/* Facilities */}
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>Facilities</Text>
          <View style={styles.facilitiesContainer}>
            {temple.facilities.map((facility, index) => (
              <View key={index} style={styles.facilityTag}>
                <Text style={styles.facilityText}>{facility}</Text>
              </View>
            ))}
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.registerButton}
          onPress={() => navigation.getParent()?.navigate('Register' as any, { templeId: temple.id })}
        >
          <Text style={styles.registerButtonText}>Register Visit</Text>
        </TouchableOpacity>
        
        <View style={{ height: 20 }} />
      </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.templeCream,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 16,
    backgroundColor: colors.white,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginLeft: 8,
    flex: 1,
  },
  backButton: {
    paddingVertical: 8,
    paddingHorizontal: 4,
  },
  backButtonText: {
    fontSize: 16,
    color: colors.templeBrown,
    fontWeight: '600',
  },
  imageContainer: {
    width: '100%',
    height: 200,
    overflow: 'hidden',
    borderRadius: 8,
    marginBottom: 16,
    ...shadows.md,
  },
  templeImage: {
    width: '100%',
    height: '100%',
  },
  section: {
    padding: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
    borderRadius: 8,
    ...shadows.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: 12,
  },
  description: {
    fontSize: 16,
    color: colors.gray[700],
    lineHeight: 24,
  },
  statusCard: {
    padding: 16,
    backgroundColor: colors.white,
    marginBottom: 16,
    borderRadius: 8,
    ...shadows.sm,
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  statusItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  statusLabel: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 4,
  },
  statusValue: {
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: 4,
  },
  statusSubtext: {
    fontSize: 12,
    color: colors.gray[500],
    marginTop: 4,
  },
  progressBarContainer: {
    height: 6,
    backgroundColor: colors.gray[200],
    borderRadius: 3,
    overflow: 'hidden',
  },
  progressBar: {
    height: '100%',
  },
  trafficIndicator: {
    paddingHorizontal: 12,
    paddingVertical: 4,
    borderRadius: 4,
    alignSelf: 'flex-start',
    marginTop: 4,
  },
  trafficText: {
    color: colors.white,
    fontWeight: 'bold',
    fontSize: 14,
  },
  predictionsContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    alignItems: 'flex-end',
    height: 160,
    marginVertical: 16,
  },
  predictionItem: {
    alignItems: 'center',
    width: 50,
  },
  predictionTime: {
    fontSize: 14,
    color: colors.gray[700],
    marginBottom: 4,
  },
  factItem: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'flex-start',
  },
  bulletPoint: {
    width: 8,
    height: 8,
    borderRadius: 4,
    backgroundColor: colors.templeGold,
    marginRight: 8,
    marginTop: 8,
  },
  factText: {
    fontSize: 15,
    color: colors.gray[700],
    flex: 1,
    lineHeight: 22,
  },
  infoRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  infoItem: {
    flex: 1,
    marginHorizontal: 4,
  },
  infoLabel: {
    fontSize: 14,
    color: colors.gray[600],
    marginBottom: 4,
  },
  infoValue: {
    fontSize: 16,
    fontWeight: '500',
    color: colors.templeBrown,
  },
  facilitiesContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  facilityTag: {
    backgroundColor: colors.templeCream,
    paddingHorizontal: 12,
    paddingVertical: 6,
    borderRadius: 16,
    marginRight: 8,
    marginBottom: 8,
    borderWidth: 1,
    borderColor: colors.templeGold,
  },
  facilityText: {
    color: colors.templeBrown,
    fontSize: 14,
  },
  registerButton: {
    backgroundColor: colors.templeBrown,
    marginHorizontal: 16,
    marginVertical: 16,
    padding: 16,
    borderRadius: 8,
    alignItems: 'center',
  },
  registerButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
  // New styles for predictions chart
  predictionsChart: {
    marginTop: 16,
  },
  predictionBarContainer: {
    width: 20,
    height: 120,
    backgroundColor: colors.gray[200],
    borderRadius: 4,
    overflow: 'hidden',
    justifyContent: 'flex-end',
    marginBottom: 8,
  },
  predictionBar: {
    width: '100%',
    backgroundColor: colors.templeGold,
    borderTopLeftRadius: 4,
    borderTopRightRadius: 4,
  },
  densityText: {
    fontSize: 12,
    color: colors.gray[600],
    textAlign: 'center',
  },
  chartNote: {
    fontSize: 12,
    color: colors.gray[500],
    fontStyle: 'italic',
    textAlign: 'center',
    marginTop: 8,
  }
});