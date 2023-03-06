import { NavigationContainer } from '@react-navigation/native';
import { AllRoutes } from './AllRoutes'

export function Routes(){
  return(
    <NavigationContainer>
      <AllRoutes />
    </NavigationContainer>
  )
}