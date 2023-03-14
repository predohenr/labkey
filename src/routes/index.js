import React, { useContext } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import {authUser} from '../contexts/auth';
import AuthRoutes from './AuthRoutes';
import AppRoutes from './AppRoutes';

export default function Routes(){

  const { signed } = authUser();

  return(
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        {signed ? <AppRoutes /> : <AuthRoutes />}
      </SafeAreaView>
    </NavigationContainer>
  )
};
