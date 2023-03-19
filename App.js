import 'react-native-gesture-handler'
import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth'
import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import  Routes  from './src/routes'
import Theme from './src/themes/LabKeyTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar 
        style="light"
        backgroundColor={Theme.PrimaryVariantColor}
      />
      <SelectProvider>
        <AuthProvider>
          <Routes />
        </AuthProvider>
      </SelectProvider>
    </SafeAreaProvider>
  );
};
