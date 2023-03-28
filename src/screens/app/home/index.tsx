import React from 'react';
import FabLoan from '../../../components/app/FabLoan';
import {
  Container,
  ContainerCards,
  ContainerLista,
  HeaderLista,
  TitleLista,
} from './styles';
import Card from '../../../components/app/Card';
import Filter from '../../../components/app/Filter';
import { useTheme } from 'styled-components/native';
import { useDataHome } from '../../../contexts/data';
import List from '../../../components/app/List';

export default function Home() {
  const theme = useTheme();
  const { loans, keys, filterLabel } = useDataHome();

  return (
    <>
      <Container>
        <ContainerCards>
          <Card
            title="Chaves Emprestadas"
            label={filterLabel}
            quantity={loans}
            bgColor={theme.COLORS.PRIMARY_500}
          />
          <Card
            title="Chaves Disponíveis"
            label={null}
            quantity={keys}
            bgColor={theme.COLORS.PRIMARY_700}
          />
        </ContainerCards>
        <ContainerLista>
          <HeaderLista>
            <TitleLista>Lista de Empréstimos:</TitleLista>
            <Filter />
          </HeaderLista>
          <List />
        </ContainerLista>
      </Container>
      <FabLoan />
    </>
  );
}
