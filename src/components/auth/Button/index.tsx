import React from 'react';
import { Container, Title } from './styles';

interface Button {
  onPress: Function;
}

export default function Button({ onPress }: Button) {
  return (
    <Container activeOpacity={0.6} onPress={() => onPress()}>
      <Title>Entrar</Title>
    </Container>
  );
}
