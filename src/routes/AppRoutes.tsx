import React from 'react';
import { createDrawerNavigator } from '@react-navigation/drawer';
import CustomDrawer from '../components/common/CustomDrawer';
import CustomAppBar from '../components/common/CustomAppBar';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import Home from '../screens/app/home';
import Keys from '../screens/app/keys';
import User from '../screens/app/user';
import { RFPercentage } from 'react-native-responsive-fontsize';

const Drawer = createDrawerNavigator();

export default function AppRoutes() {
  const theme = useTheme();
  return (
    <Drawer.Navigator
      drawerContent={(props) => <CustomDrawer {...props} />}
      screenOptions={{
        header: () => <CustomAppBar />,
        drawerActiveBackgroundColor: theme.COLORS.PRIMARY_500,
        drawerActiveTintColor: theme.COLORS.OnSURFACE,
        drawerInactiveTintColor: theme.COLORS.GRAY_9,
        drawerLabelStyle: {
          marginLeft: -RFPercentage(3),
          fontFamily: theme.FONTS.MEDIUM,
        },
      }}
      initialRouteName="Início"
    >
      <Drawer.Screen
        name="Início"
        component={Home}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="home-outline" size={RFPercentage(3.5)} color={color} />
          ),
        }}
      />
      <Drawer.Screen
        name="Lista de Chaves"
        component={Keys}
        options={{
          drawerIcon: ({ color }) => (
            <Icon
              name="format-list-bulleted"
              size={RFPercentage(3.5)}
              color={color}
            />
          ),
        }}
      />
      <Drawer.Screen
        name="Palavra-chave"
        component={User}
        options={{
          drawerIcon: ({ color }) => (
            <Icon name="magnify" size={RFPercentage(3.5)} color={color} />
          ),
        }}
      />
    </Drawer.Navigator>
  );
}
