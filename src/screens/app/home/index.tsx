import React from 'react';
import FabLoan from '../../../components/app/FabLoan';
import {
  Container,
  ContainerCards,
  ContainerLista,
  HeaderLista,
  TitleLista,
  ContainerLoading,
} from './styles';
import Card from '../../../components/app/Card';
import Filter from '../../../components/app/Filter';
import { useTheme } from 'styled-components/native';
import { useDataHome } from '../../../contexts/data';
import List from '../../../components/app/List';
import Loading from '../../../components/common/Loading';

export default function Home() {
  const theme = useTheme();
  const { loans, keys, isLoading, filterLabel } = useDataHome();

  return (
    <>
      <Container>
        <ContainerCards>
          <Card
            titulo="Chaves Emprestadas"
            label={filterLabel}
            quantidade={loans}
            bgColor={theme.COLORS.PRIMARY_500}
          />
          <Card
            titulo="Chaves Disponíveis"
            label={null}
            quantidade={keys}
            bgColor={theme.COLORS.PRIMARY_700}
          />
        </ContainerCards>
        <ContainerLista>
          <HeaderLista>
            <TitleLista>Lista de Empréstimos:</TitleLista>
            <Filter />
          </HeaderLista>
          {isLoading ? (
            <ContainerLoading>
              <Loading />
            </ContainerLoading>
          ) : (
            <List />
          )}
        </ContainerLista>
      </Container>
      <FabLoan />
    </>
  );
}
