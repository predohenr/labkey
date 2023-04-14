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
import LoanRow from '../../../components/app/LoanRow';
import Loading from '../../../components/common/Loading';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function Home() {
  const theme = useTheme();
  const HEIGHT = RFPercentage(7.5);
  const { loans, keys, filterLabel, isLoading } = useDataHome();
  const renderItem = ({ item }: any) => <LoanRow item={item} />;

  return (
    <>
      <Container>
        <ContainerCards>
          <Card
            title="Chaves Emprestadas"
            label={filterLabel}
            quantity={loans.length}
            bgColor={theme.COLORS.PRIMARY_500}
          />
          <Card
            title="Chaves Disponíveis"
            label={null}
            quantity={keys.length}
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
            <List
              data={loans}
              renderHeader={null}
              renderFooter={null}
              renderItem={renderItem}
              keyExtractor={(item) => item.id}
              itemHeight={HEIGHT}
            />
          )}
        </ContainerLista>
      </Container>
      <FabLoan />
    </>
  );
}
