import React, { createContext, useContext, useState, useEffect } from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { PassDetails } from '../types';

// Context interface
interface PassContextType {
  currentPass: PassDetails | null;
  savePass: (pass: PassDetails) => Promise<void>;
  clearPass: () => Promise<void>;
  loading: boolean;
}

// Create context with default values
const PassContext = createContext<PassContextType>({
  currentPass: null,
  savePass: async () => {},
  clearPass: async () => {},
  loading: true,
});

// Storage key
const PASS_STORAGE_KEY = '@seva_sahayak_pass';

// Provider component
export const PassProvider: React.FC<{children: React.ReactNode}> = ({ children }) => {
  const [currentPass, setCurrentPass] = useState<PassDetails | null>(null);
  const [loading, setLoading] = useState(true);

  // Load pass from storage on mount
  useEffect(() => {
    const loadPass = async () => {
      try {
        const passJson = await AsyncStorage.getItem(PASS_STORAGE_KEY);
        if (passJson) {
          const passData = JSON.parse(passJson);
          // Convert date string back to Date object
          if (passData.date) {
            passData.date = new Date(passData.date);
          }
          setCurrentPass(passData);
        }
      } catch (error) {
        console.error('Failed to load pass:', error);
      } finally {
        setLoading(false);
      }
    };

    loadPass();
  }, []);

  // Save pass to storage and state
  const savePass = async (pass: PassDetails) => {
    try {
      const passJson = JSON.stringify(pass);
      await AsyncStorage.setItem(PASS_STORAGE_KEY, passJson);
      setCurrentPass(pass);
    } catch (error) {
      console.error('Failed to save pass:', error);
      throw error;
    }
  };

  // Clear pass from storage and state
  const clearPass = async () => {
    try {
      await AsyncStorage.removeItem(PASS_STORAGE_KEY);
      setCurrentPass(null);
    } catch (error) {
      console.error('Failed to clear pass:', error);
      throw error;
    }
  };

  return (
    <PassContext.Provider value={{ currentPass, savePass, clearPass, loading }}>
      {children}
    </PassContext.Provider>
  );
};

// Custom hook for using the context
export const usePassContext = () => useContext(PassContext);