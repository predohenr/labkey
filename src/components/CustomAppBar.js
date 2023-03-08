import React from "react";
import { AppBar, IconButton } from "@react-native-material/core";
import { useNavigation } from '@react-navigation/native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../themes/LabKeyTheme';

export default function CustomAppBar() {

  const navigation = useNavigation();

  const openSideMenu = () => (
    navigation.openDrawer()
  );

  return (
    <AppBar
      title = 'LabKey'
      color = {Theme.PrimaryColor}
      tintColor = {Theme.OnPrimaryColor}
      leading = {props => (
        <IconButton 
          icon={props => <Icon name='menu' {...props} />} {...props} 
          onPress={openSideMenu}
        />
      )}
    />
  );
}
