import React from 'react';
import BigList, { BigListProps } from 'react-native-big-list';
import { Container, NoData, Message, Header, Footer } from './styles';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function List({ ...rest }: BigListProps<any>) {
  const HEIGHT = RFPercentage(5);
  if (rest.data?.length == 0) {
    return (
      <NoData>
        <Message>Sem dados</Message>
      </NoData>
    );
  }

  const header = () => <Header />;
  const footer = () => <Footer />;

  return (
    <Container>
      <BigList
        data={rest.data}
        renderHeader={header}
        headerHeight={1}
        renderFooter={footer}
        footerHeight={HEIGHT}
        renderItem={rest.renderItem}
        keyExtractor={rest.keyExtractor}
        itemHeight={rest.itemHeight}
      />
    </Container>
  );
}
