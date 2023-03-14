import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth'
import  Routes  from './src/routes'
import Theme from './src/themes/LabKeyTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar 
        style="light"
        backgroundColor={Theme.PrimaryVariantColor}
      />
      <AuthProvider>
        <Routes />
      </AuthProvider>
    </SafeAreaProvider>
  );
};
