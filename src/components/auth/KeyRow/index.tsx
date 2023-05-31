import React from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Container, Title, IconContainer } from './styles';

export default function KeyRow({ ...props }: any) {
  const theme = useTheme();
  const item = props.item;

  return (
    <Container>
      <Title>Chave: {item.label}</Title>
      <IconContainer>
        <Icon
          name={item.available ? 'check-circle-outline' : 'account-key'}
          color={item.available ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500}
          size={RFPercentage(3.8)}
        />
      </IconContainer>
    </Container>
  );
}
