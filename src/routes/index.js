import { NavigationContainer } from '@react-navigation/native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { AllRoutes } from './AllRoutes'

export function Routes(){
  return(
    <NavigationContainer>
      <SafeAreaView style={{flex: 1}}>
        <AllRoutes />
      </SafeAreaView>
    </NavigationContainer>
  )
}