import React, { useEffect } from 'react';
import { View, Text, StyleSheet, ActivityIndicator } from 'react-native';
import App from './App';

// This wrapper component helps with web-specific initialization
export default function WebAppWrapper() {
  const [isReady, setIsReady] = React.useState(false);
  
  useEffect(() => {
    // Simulate loading assets or initialization
    setTimeout(() => {
      setIsReady(true);
    }, 1000);
  }, []);
  
  if (!isReady) {
    return (
      <View style={styles.loadingContainer}>
        <ActivityIndicator size="large" color="#FF6B00" />
        <Text style={styles.loadingText}>Loading Seva Sahayak...</Text>
      </View>
    );
  }
  
  return <App />;
}

const styles = StyleSheet.create({
  loadingContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#f5f5f5',
  },
  loadingText: {
    marginTop: 20,
    fontSize: 18,
    color: '#333',
  }
});