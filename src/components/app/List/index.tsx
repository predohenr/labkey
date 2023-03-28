import React from 'react';
import { FlatList } from 'react-native';
import { useLoans, useKeys } from '../../../contexts/data';
import { useRoute } from '@react-navigation/native';
import LoanRow from '../LoanRow';
import KeyRow from '../KeyRow';
import { Container, Data, NoData, Message } from './styles';

export default function List() {
  const route = useRoute();
  const { loans } = useLoans();
  const { keys } = useKeys();
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
              data={loans}
              renderItem={(item) => <LoanRow item={item.item} />}
            />
          </Data>
        );
      }
      break;
    case 'Lista de Chaves':
      if (keys.length > 0) {
        content = (
          <Data>
            <FlatList
              data={keys}
              renderItem={(item) => <KeyRow item={item.item} />}
            />
          </Data>
        );
      }
      break;
  }

  return <Container>{content}</Container>;
}
