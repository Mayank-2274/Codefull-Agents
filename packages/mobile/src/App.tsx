import React, { useEffect } from 'react';
import { StatusBar, Platform } from 'react-native';
import { colors } from './styles/theme';
import AppNavigator from './navigation/AppNavigator';

// Log that the App.tsx file is being imported
console.log('App.tsx is being imported');

// Types now defined in the navigation files

export default function App() {
  // Debug log to see if the component is rendering
  console.log('App is rendering on platform:', Platform.OS);

  // Log when the component mounts
  useEffect(() => {
    console.log('App component mounted');
    return () => console.log('App component unmounted');
  }, []);
  
  return (
    <>
      <StatusBar backgroundColor={colors.templeBrown} barStyle="light-content" />
      <AppNavigator />
    </>
  );
}

// No styles needed as we're using the AppNavigator component
