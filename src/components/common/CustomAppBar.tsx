import React from 'react';
import { AppBar, IconButton } from '@react-native-material/core';
import { useNavigation } from '@react-navigation/native';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components';

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
      titleStyle={{ fontFamily: theme.FONTS.MEDIUM }}
      subtitleStyle={{ fontFamily: theme.FONTS.REGULAR }}
      leading={(props) => (
        <IconButton
          icon={(props) => <Icon name="menu" {...props} />}
          {...props}
          onPress={openSideMenu}
        />
      )}
    />
  );
}
