import React from 'react';
import BigList, { BigListProps } from 'react-native-big-list';
import { Container, NoData, Message } from './styles';
import Header from './Header';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function List({ ...rest }: BigListProps<any>) {
  const HEIGHT = RFPercentage(15);
  if (rest.data?.length == 0) {
    return (
      <NoData>
        <Message>Sem dados</Message>
      </NoData>
    );
  }

  const header = () => <Header />;
  const footer = () => <></>;

  return (
    <Container>
      <BigList
        data={rest.data}
        renderHeader={header}
        headerHeight={HEIGHT}
        renderFooter={footer}
        footerHeight={1}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
        renderItem={rest.renderItem}
        keyExtractor={rest.keyExtractor}
        itemHeight={rest.itemHeight}
      />
    </Container>
  );
}
