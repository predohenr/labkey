import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { authUser } from '../contexts/auth';
import { DataProvider } from '../contexts/data';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';
import { AuthDataProvider } from '../contexts/authData';
import { StatusBar } from 'expo-status-bar';
import { useTheme } from 'styled-components/native';

export default function Routes() {
  const theme = useTheme();
  const { signed } = authUser();

  return (
    <NavigationContainer>
      {signed ? (
        <DataProvider>
          <StatusBar style="light" backgroundColor={theme.COLORS.PRIMARY_700} />
          <SafeAreaView style={{ flex: 1 }}>
            <AppRoutes />
          </SafeAreaView>
        </DataProvider>
      ) : (
        <AuthDataProvider>
          <StatusBar
            style="dark"
            backgroundColor={theme.COLORS.BACKGROUND_700}
          />
          <AuthRoutes />
        </AuthDataProvider>
      )}
    </NavigationContainer>
  );
}
