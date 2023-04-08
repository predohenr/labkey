import React from 'react';
import BigList, { BigListProps } from 'react-native-big-list';
import { Container, Data, NoData, Message } from './styles';

export default function List({ ...rest }: BigListProps<any>) {
  if (rest.data?.length == 0) {
    return (
      <NoData>
        <Message>Sem dados</Message>
      </NoData>
    );
  }

  return (
    <Container>
      <Data>
        <BigList
          data={rest.data}
          renderHeader={rest.renderHeader}
          renderFooter={rest.renderFooter}
          renderItem={rest.renderItem}
          keyExtractor={rest.keyExtractor}
          itemHeight={rest.itemHeight}
        />
      </Data>
    </Container>
  );
}
