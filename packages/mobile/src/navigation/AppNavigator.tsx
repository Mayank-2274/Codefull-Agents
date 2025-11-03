import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Text } from 'react-native';

// Import screens
import TempleList from '../screens/TempleList';
import TempleDetail from '../screens/TempleDetail';
import Registration from '../screens/Registration';
import Pass from '../screens/Pass';
import HomeScreen from '../screens/Home';

// Import theme
import { colors } from '../styles/theme';

// Type definitions
export type TempleStackParamList = {
  TempleList: undefined;
  TempleDetail: { templeId: number };
};

export type RootTabParamList = {
  Home: undefined;
  Temples: undefined;
  Register: { templeId?: number } | undefined;
  Pass: undefined;
};

// Create navigators
const Stack = createNativeStackNavigator<TempleStackParamList>();
const Tab = createBottomTabNavigator<RootTabParamList>();

// Tab icons
const HomeIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>📊</Text>
);

const TemplesIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>🏯</Text>
);

const RegisterIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>📝</Text>
);

const PassIcon = ({ color }: { color: string }) => (
  <Text style={{ fontSize: 20, color }}>🎫</Text>
);

// Temple Stack Navigator
const TempleStackNavigator = () => (
  <Stack.Navigator
    screenOptions={{
      headerStyle: {
        backgroundColor: colors.templeBrown,
      },
      headerTintColor: colors.templeGold,
      headerTitleStyle: {
        fontWeight: 'bold',
      },
    }}
  >
    <Stack.Screen 
      name="TempleList" 
      component={TempleList}
      options={{ title: 'Temples' }}
    />
    <Stack.Screen 
      name="TempleDetail" 
      component={TempleDetail}
      options={({ route }) => ({ title: 'Temple Details' })}
    />
  </Stack.Navigator>
);

// Home screen is imported from screens/Home.tsx

// Import PassContext provider
import { PassProvider } from '../contexts/PassContext';

// Main Tab Navigator
const AppNavigator = () => (
  <NavigationContainer>
    <PassProvider>
      <Tab.Navigator
        screenOptions={{
          tabBarActiveTintColor: colors.templeGold,
          tabBarInactiveTintColor: colors.gray[500],
          tabBarStyle: {
            backgroundColor: colors.templeBrown,
            borderTopColor: colors.templeGold,
          },
          headerStyle: {
            backgroundColor: colors.templeBrown,
          },
          headerTintColor: colors.templeGold,
          headerTitleStyle: {
            fontWeight: 'bold',
          },
        }}
      >
        <Tab.Screen 
          name="Home" 
          component={HomeScreen} 
          options={{
            tabBarIcon: ({ color }) => <HomeIcon color={color} />,
            title: 'Seva Sahayak',
          }}
        />
        <Tab.Screen 
          name="Temples" 
          component={TempleStackNavigator} 
          options={{
            tabBarIcon: ({ color }) => <TemplesIcon color={color} />,
            headerShown: false,
          }}
        />
        <Tab.Screen 
          name="Register" 
          component={Registration}
          options={{
            tabBarIcon: ({ color }) => <RegisterIcon color={color} />,
            title: 'Registration',
          }}
        />
        <Tab.Screen 
          name="Pass" 
          component={Pass}
          options={{
            tabBarIcon: ({ color }) => <PassIcon color={color} />,
            title: 'Temple Pass',
          }}
        />
      </Tab.Navigator>
    </PassProvider>
  </NavigationContainer>
);

export default AppNavigator;