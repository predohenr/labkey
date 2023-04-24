import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from '../screens/auth/SingIn';
import SingUp from '../screens/auth/SingUp';

const Stack = createNativeStackNavigator();

export default function AuthRoutes(){
  return(
    <Stack.Navigator
      initialRouteName='SingIn'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen name='SingIn' component={ SingIn } />
      <Stack.Screen name='SingUp' component={ SingUp } />
    </Stack.Navigator>
  )
};
