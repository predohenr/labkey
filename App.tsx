import 'react-native-gesture-handler';
import React from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { AuthProvider } from './src/contexts/auth';
import { SelectProvider } from '@mobile-reality/react-native-select-pro';
import { ThemeProvider } from 'styled-components/native';
import {
  useFonts,
  Roboto_400Regular,
  Roboto_500Medium,
  Roboto_700Bold,
} from '@expo-google-fonts/roboto';
import THEME from './src/themes';
import Routes from './src/routes';

export default function App() {
  const [fontsLoader] = useFonts({
    Roboto_400Regular,
    Roboto_500Medium,
    Roboto_700Bold,
  });

  if (!fontsLoader) {
    return null;
  }

  return (
    <SafeAreaProvider>
      <SelectProvider>
        <AuthProvider>
          <ThemeProvider theme={THEME}>
            <Routes />
          </ThemeProvider>
        </AuthProvider>
      </SelectProvider>
    </SafeAreaProvider>
  );
}
