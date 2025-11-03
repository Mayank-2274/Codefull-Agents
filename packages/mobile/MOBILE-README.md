# Seva Sahayak Mobile App

A React Native mobile application for managing temple visits, built with Expo.

## Features

- Browse temples and check visitor status
- View detailed information about temples
- Register temple visits
- Generate and view temple passes
- Check crowd predictions for better planning

## Getting Started

### Prerequisites

- Node.js 16.0.0 or later
- npm or yarn
- Expo CLI (`npm install -g expo-cli`)
- Expo Go app on your mobile device (for testing)

### Installation

1. Install dependencies:

```bash
cd packages/mobile
npm install
```

2. Install AsyncStorage for Pass management:

```bash
npm install @react-native-async-storage/async-storage
```

### Running the App

Start the development server:

```bash
npm start
```

This will display a QR code that you can scan with the Expo Go app on your Android or iOS device.

### Testing on Web

To test the app in a web browser:

```bash
npm run web
```

## Project Structure

- `src/screens/` - Main application screens
- `src/components/` - Reusable UI components
- `src/navigation/` - Navigation configuration
- `src/lib/` - API and utility functions
- `src/styles/` - Theme and styling
- `src/assets/` - Images and other assets
- `src/contexts/` - React context providers

## Dependencies

- React Native
- Expo
- React Navigation
- AsyncStorage
- Other UI and utility libraries

## Note for Development

This app is in active development. Some features may be under construction.