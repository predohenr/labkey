import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { createDrawerNavigator } from '@react-navigation/drawer';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../themes/LabKeyTheme';
import CustomDrawer from '../components/CustomDrawer';
import CustomAppBar from '../components/CustomAppBar';
import LoginScreen from '../screens/LoginScreen';
import HomeScreen from '../screens/home/HomeScreen';
import ListScreen from '../screens/home/ListScreen';

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function NavigationDrawerHome(){
  return(
    <Drawer.Navigator
      drawerContent={props => <CustomDrawer { ...props } />}
      screenOptions={{
        header: () => <CustomAppBar />,
        drawerActiveBackgroundColor: Theme.PrimaryColor,
        drawerActiveTintColor: Theme.OnPrimaryColor,
        drawerInactiveTintColor: '#999999',
        drawerLabelStyle: {marginLeft: -25}
      }}
      initialRouteName='Início'
    >
      <Drawer.Screen
        name='Início'
        component={ HomeScreen }
        options={{
          drawerIcon: ({color}) => (
            <Icon name='home-outline' size={30} color={color}/>
          )
        }}
      />
      <Drawer.Screen
        name='Lista de Chaves'
        component={ ListScreen }
        options={{
          drawerIcon: ({color}) => (
            <Icon name='format-list-bulleted' size={30} color={color}/>
          )
        }}
      />
    </Drawer.Navigator>
  )
}

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
        <Stack.Screen
          name='HomeNavigator'
          component={ NavigationDrawerHome }
        />
      </Stack.Navigator>
    )
  }