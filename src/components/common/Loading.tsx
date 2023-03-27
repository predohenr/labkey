import React from "react";
import { ActivityIndicator } from "react-native";
import Theme from '../../themes/LabKeyTheme';

export default function Loading() {

  return (
    <ActivityIndicator size={'large'} color={Theme.PrimaryColor}/> 
  );
}
