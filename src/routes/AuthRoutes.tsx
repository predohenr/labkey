import React from 'react';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import SingIn from '../screens/auth/SingIn';
import Initial from '../screens/auth/Initial';
import Keys from '../screens/auth/Keys';
import SingUp from '../screens/auth/SingUp';

const Stack = createNativeStackNavigator();

export default function AuthRoutes() {
  return (
    <Stack.Navigator
      initialRouteName="Initial"
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Initial" component={Initial} />
      <Stack.Screen name="SingIn" component={SingIn} />
      <Stack.Screen name="SingUp" component={SingUp} />
      <Stack.Screen name="Keys" component={Keys} />
    </Stack.Navigator>
  );
}
