import React from 'react';
import {
  Container,
  Title,
  SubTitle,
  QuantityContainer,
  Quantity,
} from './styles';

interface CardInterface {
  title: string;
  label: string | null;
  quantity: number;
  bgColor: string;
}

export default function Card({
  title,
  label,
  quantity,
  bgColor,
}: CardInterface) {
  return (
    <Container style={{ backgroundColor: bgColor }}>
      <Title>{title}:</Title>
      {label != null && <SubTitle>({label})</SubTitle>}
      <QuantityContainer>
        <Quantity>{quantity}</Quantity>
      </QuantityContainer>
    </Container>
  );
}
