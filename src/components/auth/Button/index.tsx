import React from 'react';
import { Container, Title } from './styles';

interface Button {
  title: String;
  onPress: Function;
}

export default function Button({ title, onPress }: Button) {
  return (
    <Container activeOpacity={0.6} onPress={() => onPress()}>
      <Title>{title}</Title>
    </Container>
  );
}
