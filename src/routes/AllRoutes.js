import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Theme from '../themes/LabKeyTheme';
import LoginScreen from '../screens/LoginScreen'

const Stack = createNativeStackNavigator();

export function AllRoutes(){
    return(
      <Stack.Navigator
        initialRouteName='Login'
        screenOptions={{
          headerShown: false
        }}
      >
        <Stack.Screen
          name='Login'
          component={ LoginScreen }
        />
      </Stack.Navigator>
    )
  }