// Temple images index for React Native
// This file provides a mapping of temple IDs to image requires
// for use with React Native's image component

import { Platform } from 'react-native';

// Define a conditional import based on platform
const getImage = (path: string) => {
  try {
    // This will work in React Native
    return { uri: path };
  } catch (e) {
    // For web fallback
    return { uri: path.replace('./temples/', '/images/temples/') };
  }
};

export const templeImages = {
  1: Platform.OS === 'web' 
     ? { uri: '/images/temples/Somnath-temple.jpg' }
     : require('./temples/Somnath-temple.jpg'),
  2: Platform.OS === 'web'
     ? { uri: '/images/temples/Dwarka-temple.jpg' }
     : require('./temples/Dwarka-temple.jpg'),
  3: Platform.OS === 'web'
     ? { uri: '/images/temples/MaaKaali-temple.jpg' }
     : require('./temples/MaaKaali-temple.jpg'),
  4: Platform.OS === 'web'
     ? { uri: '/images/temples/Ambaji-temple.jpg' }
     : require('./temples/Ambaji-temple.jpg'),
  default: Platform.OS === 'web'
     ? { uri: '/images/temples/default-temple.jpg' }
     : { uri: 'https://via.placeholder.com/150' }
};

// Usage in components:
// import { templeImages } from '../assets';
// ...
// <Image source={templeImages[temple.id] || templeImages.default} />