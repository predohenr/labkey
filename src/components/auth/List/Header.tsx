import React from 'react';
import { ContainerHeader, Subtitle, ContainerSubtitle } from './styles';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';

export default function Header() {
  const theme = useTheme();
  return (
    <ContainerHeader>
      <ContainerSubtitle>
        <Icon
          name={'check-circle-outline'}
          color={theme.COLORS.GREEN_500}
          size={RFPercentage(2)}
        />
        <Subtitle>Disponível</Subtitle>
      </ContainerSubtitle>
      <ContainerSubtitle>
        <Icon
          name={'account-key'}
          color={theme.COLORS.RED_500}
          size={RFPercentage(2)}
        />
        <Subtitle>Emprestada</Subtitle>
      </ContainerSubtitle>
    </ContainerHeader>
  );
}
