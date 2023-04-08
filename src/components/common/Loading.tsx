import React from 'react';
import { ActivityIndicator } from 'react-native';
import { useTheme } from 'styled-components/native';

export default function Loading() {
  const theme = useTheme();

  return <ActivityIndicator size={'large'} color={theme.COLORS.PRIMARY_500} />;
}
