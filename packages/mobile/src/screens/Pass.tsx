import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, Image, ActivityIndicator } from 'react-native';
import { colors, spacing, shadows, borderRadius } from '../styles/theme';
import { usePassContext } from '../contexts/PassContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../navigation/AppNavigator';

type Props = NativeStackScreenProps<RootTabParamList, 'Pass'>;

export default function Pass({ navigation }: Props) {
  const { currentPass: pass, loading } = usePassContext();
  
  if (loading) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center' }]}>
        <ActivityIndicator size="large" color={colors.templeBrown} />
        <Text style={{ marginTop: 16, color: colors.gray[600] }}>Loading pass...</Text>
      </View>
    );
  }
  
  if (!pass) {
    return (
      <View style={[styles.container, { justifyContent: 'center', alignItems: 'center', padding: 20 }]}>
        <Text style={{ fontSize: 18, color: colors.templeBrown, marginBottom: 16, textAlign: 'center' }}>
          You don't have an active temple pass
        </Text>
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.navigate('Register')}
        >
          <Text style={styles.homeButtonText}>Register for a Pass</Text>
        </TouchableOpacity>
      </View>
    );
  }
  
  // Format date if available
  const formattedDate = pass.date 
    ? new Date(pass.date).toLocaleDateString('en-US', {
        weekday: 'long',
        year: 'numeric',
        month: 'long',
        day: 'numeric'
      })
    : 'Not specified';
  
  const passData = JSON.stringify({
    id: pass.passId,
    name: pass.name,
    phone: pass.phone,
    templeId: pass.templeId,
    issued: new Date().toISOString()
  });
  
  return (
      <View style={styles.container}>
        <View style={styles.passCard}>
          <View style={styles.passHeader}>
            <Text style={styles.passTitle}>Seva Sahayak</Text>
            <Text style={styles.passSubtitle}>Temple Visit Pass</Text>
          </View>
          
          <View style={styles.qrContainer}>
            <View style={styles.qrPlaceholder}>
              <Text style={styles.qrText}>{pass.passId}</Text>
            </View>
          </View>
          
          <View style={styles.passInfoContainer}>
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Pass ID:</Text>
              <Text style={styles.infoValue}>{pass.passId}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Visitor Name:</Text>
              <Text style={styles.infoValue}>{pass.name}</Text>
            </View>
            
            {pass.phone && (
              <View style={styles.infoRow}>
                <Text style={styles.infoLabel}>Phone Number:</Text>
                <Text style={styles.infoValue}>{pass.phone}</Text>
              </View>
            )}
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Visit Date:</Text>
              <Text style={styles.infoValue}>{formattedDate}</Text>
            </View>
            
            <View style={styles.infoRow}>
              <Text style={styles.infoLabel}>Valid For:</Text>
              <Text style={styles.infoValue}>24 hours from issue</Text>
            </View>
          </View>
          
          <View style={styles.passFooter}>
            <Text style={styles.passNote}>
              Please show this pass at the temple entrance
            </Text>
          </View>
        </View>
        
        <View style={styles.instructionsCard}>
          <Text style={styles.instructionsTitle}>Instructions</Text>
          <View style={styles.instruction}>
            <Text style={styles.instructionNumber}>1.</Text>
            <Text style={styles.instructionText}>
              Show this pass at the temple entrance for verification.
            </Text>
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionNumber}>2.</Text>
            <Text style={styles.instructionText}>
              Keep your mobile phone charged and this pass accessible.
            </Text>
          </View>
          <View style={styles.instruction}>
            <Text style={styles.instructionNumber}>3.</Text>
            <Text style={styles.instructionText}>
              Follow all temple rules and guidelines during your visit.
            </Text>
          </View>
        </View>
        
        <TouchableOpacity 
          style={styles.homeButton}
          onPress={() => navigation.navigate('Home')}
        >
          <Text style={styles.homeButtonText}>Return to Home</Text>
        </TouchableOpacity>
      </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  passCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    marginBottom: spacing.lg,
    ...shadows.md,
    overflow: 'hidden',
    borderWidth: 1,
    borderColor: colors.templeGold,
  },
  passHeader: {
    backgroundColor: colors.templeBrown,
    padding: spacing.md,
    alignItems: 'center',
  },
  passTitle: {
    color: colors.white,
    fontSize: 22,
    fontWeight: 'bold',
  },
  passSubtitle: {
    color: colors.templeCream,
    fontSize: 14,
  },
  qrContainer: {
    padding: spacing.lg,
    alignItems: 'center',
  },
  qrPlaceholder: {
    width: 150,
    height: 150,
    backgroundColor: colors.gray[200],
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: borderRadius.sm,
    borderWidth: 1,
    borderColor: colors.gray[300],
  },
  qrText: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
  },
  passInfoContainer: {
    padding: spacing.md,
    borderTopWidth: 1,
    borderTopColor: colors.gray[200],
  },
  infoRow: {
    flexDirection: 'row',
    paddingVertical: spacing.xs,
    borderBottomWidth: 1,
    borderBottomColor: colors.gray[100],
  },
  infoLabel: {
    flex: 1,
    fontSize: 14,
    color: colors.gray[600],
    fontWeight: '500',
  },
  infoValue: {
    flex: 2,
    fontSize: 14,
    color: colors.templeBrown,
    fontWeight: '600',
  },
  passFooter: {
    backgroundColor: colors.templeCream,
    padding: spacing.sm,
    alignItems: 'center',
  },
  passNote: {
    color: colors.templeBrown,
    fontSize: 12,
    fontStyle: 'italic',
  },
  instructionsCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
    ...shadows.sm,
  },
  instructionsTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: spacing.md,
  },
  instruction: {
    flexDirection: 'row',
    marginBottom: spacing.sm,
  },
  instructionNumber: {
    width: 20,
    fontSize: 14,
    fontWeight: 'bold',
    color: colors.templeGold,
  },
  instructionText: {
    flex: 1,
    fontSize: 14,
    color: colors.gray[700],
    lineHeight: 20,
  },
  homeButton: {
    backgroundColor: colors.templeBrown,
    padding: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
  },
  homeButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});