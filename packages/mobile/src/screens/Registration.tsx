import React, { useState } from 'react';
import { 
  View, 
  Text, 
  TextInput, 
  TouchableOpacity, 
  StyleSheet, 
  KeyboardAvoidingView,
  Platform,
  ScrollView
} from 'react-native';
import { colors, spacing, shadows, borderRadius } from '../styles/theme';
import { usePassContext } from '../contexts/PassContext';
import { NativeStackScreenProps } from '@react-navigation/native-stack';
import { RootTabParamList } from '../navigation/AppNavigator';

type PassDetails = {
  passId: number;
  name: string;
  phone: string;
  email: string;
  templeId?: number;
  date: Date;
};

type Props = NativeStackScreenProps<RootTabParamList, 'Register'>;

export default function Registration({ navigation, route }: Props) {
  const { savePass } = usePassContext();
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [visitDate, setVisitDate] = useState(new Date());
  const [visitors, setVisitors] = useState('1');
  
  // Get templeId from route params if available
  const templeId = route.params?.templeId;

  const handleSubmit = async () => {
    if (!name || !phone) {
      // Validation would go here
      return;
    }
    
    const passDetails: PassDetails = {
      passId: Math.floor(Math.random() * 1000000),
      name,
      phone,
      email,
      date: visitDate,
      templeId
    };
    
    // Save pass to context/storage
    await savePass(passDetails);
    
    // Navigate to pass screen
    navigation.navigate('Pass');
  };

  return (
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : 'height'}
        style={styles.container}
      >
        <ScrollView contentContainerStyle={styles.scrollContent}>
          <View style={styles.formCard}>
            <Text style={styles.sectionTitle}>Personal Information</Text>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Full Name *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your full name"
                value={name}
                onChangeText={setName}
                placeholderTextColor={colors.gray[400]}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Phone Number *</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your phone number"
                value={phone}
                onChangeText={setPhone}
                keyboardType="phone-pad"
                placeholderTextColor={colors.gray[400]}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Email Address</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Enter your email address"
                value={email}
                onChangeText={setEmail}
                keyboardType="email-address"
                autoCapitalize="none"
                placeholderTextColor={colors.gray[400]}
              />
            </View>
            
            <View style={styles.inputGroup}>
              <Text style={styles.inputLabel}>Number of Visitors</Text>
              <TextInput
                style={styles.textInput}
                placeholder="Number of people"
                value={visitors}
                onChangeText={setVisitors}
                keyboardType="number-pad"
                placeholderTextColor={colors.gray[400]}
              />
            </View>
          </View>
          
          <View style={styles.noteCard}>
            <Text style={styles.noteTitle}>Important Note:</Text>
            <Text style={styles.noteText}>
              Please arrive at the temple within 30 minutes of your selected time slot. 
              Your registration will be valid for the entire day, but timely arrival helps 
              us manage crowd effectively.
            </Text>
          </View>
          
          <TouchableOpacity 
            style={styles.submitButton}
            onPress={handleSubmit}
            activeOpacity={0.8}
          >
            <Text style={styles.submitButtonText}>Register & Generate Pass</Text>
          </TouchableOpacity>
        </ScrollView>
      </KeyboardAvoidingView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollContent: {
    flexGrow: 1,
    paddingBottom: spacing.xl,
  },
  formCard: {
    backgroundColor: colors.white,
    borderRadius: borderRadius.lg,
    padding: spacing.lg,
    marginBottom: spacing.md,
    ...shadows.sm,
  },
  sectionTitle: {
    fontSize: 18,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: spacing.md,
  },
  inputGroup: {
    marginBottom: spacing.md,
  },
  inputLabel: {
    fontSize: 14,
    color: colors.gray[700],
    marginBottom: spacing.xs,
    fontWeight: '500',
  },
  textInput: {
    backgroundColor: colors.gray[100],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    fontSize: 16,
    borderWidth: 1,
    borderColor: colors.gray[300],
    color: colors.gray[800],
  },
  datePickerButton: {
    backgroundColor: colors.gray[100],
    paddingHorizontal: spacing.md,
    paddingVertical: spacing.sm,
    borderRadius: borderRadius.md,
    borderWidth: 1,
    borderColor: colors.gray[300],
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  datePickerText: {
    fontSize: 16,
    color: colors.gray[800],
  },
  noteCard: {
    backgroundColor: colors.templeCream,
    borderRadius: borderRadius.lg,
    padding: spacing.md,
    marginBottom: spacing.lg,
    borderLeftWidth: 4,
    borderLeftColor: colors.templeGold,
  },
  noteTitle: {
    fontSize: 16,
    fontWeight: 'bold',
    color: colors.templeBrown,
    marginBottom: spacing.xs,
  },
  noteText: {
    fontSize: 14,
    color: colors.gray[700],
    lineHeight: 20,
  },
  submitButton: {
    backgroundColor: colors.templeBrown,
    paddingVertical: spacing.md,
    borderRadius: borderRadius.md,
    alignItems: 'center',
    ...shadows.sm,
  },
  submitButtonText: {
    color: colors.white,
    fontSize: 16,
    fontWeight: 'bold',
  },
});
