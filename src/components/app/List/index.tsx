import React from 'react';
import { FlatList } from 'react-native';
import { useLoans, useKeys, useIsLoading } from '../../../contexts/data';
import { useRoute } from '@react-navigation/native';
import LoanRow from '../LoanRow';
import KeyRow from '../KeyRow';
import { Container, Data, NoData, Message, ContainerLoading } from './styles';
import Loading from '../../common/Loading';

export default function List() {
  const route = useRoute();
  const { isLoading } = useIsLoading();
  const { loans } = useLoans();
  const { keys } = useKeys();

  if (isLoading) {
    return (
      <ContainerLoading>
        <Loading />
      </ContainerLoading>
    );
  }

  let content = (
    <NoData>
      <Message>Sem dados</Message>
    </NoData>
  );

  switch (route.name) {
    case 'Início':
      if (loans.length > 0) {
        content = (
          <Data>
            <FlatList
              keyExtractor={(item) => item.id}
              data={loans}
              renderItem={(item) => <LoanRow item={item.item} />}
            />
          </Data>
        );
      }
      break;
    case 'Lista de Chaves':
      if (keys.length > 0) {
        const renderItem = ({ item }: any) => {
          return <KeyRow item={item} />;
        };
        content = (
          <Data>
            <FlatList
              keyExtractor={(item) => item.value}
              data={keys}
              renderItem={renderItem}
            />
          </Data>
        );
      }
      break;
  }

  return <Container>{content}</Container>;
}
