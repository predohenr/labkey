import 'react-native-gesture-handler'
import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routes } from './src/routes/index'
import Theme from './src/themes/LabKeyTheme';

export default function App() {
  return (
    <SafeAreaProvider>
      <StatusBar 
        style="light"
        backgroundColor={Theme.PrimaryVariantColor}
      />
      <Routes />
    </SafeAreaProvider>
  );
};
