import React from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface NavigationInterface {
  openDrawer: any;
}

export default function CustomAppBar() {
  const navigation = useNavigation<NavigationInterface>();
  const theme = useTheme();

  const openSideMenu = () => navigation.openDrawer();

  return (
    <AppBar
      title="LabKey"
      subtitle="Gerenciamento de Chaves"
      color={theme.COLORS.PRIMARY_500}
      tintColor={theme.COLORS.OnSURFACE}
      contentContainerStyle={{
        height: RFPercentage(7.1),
      }}
      titleStyle={{ fontFamily: theme.FONTS.MEDIUM }}
      subtitleStyle={{ fontFamily: theme.FONTS.REGULAR }}
      leading={(props) => (
        <IconButton
          icon={(props) => (
            <Icon name="menu" size={RFPercentage(3)} color={props.color} />
          )}
          {...props}
          onPress={openSideMenu}
        />
      )}
    />
  );
}
