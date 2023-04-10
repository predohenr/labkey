import React from 'react';
import {
  Container,
  ContainerList,
  Header,
  Titulo,
  ContainerLoading,
} from './styles';
import FabKey from '../../../components/app/FabKey';
import List from '../../../components/app/List';
import { useKeys } from '../../../contexts/data';
import Loading from '../../../components/common/Loading';
import KeyRow from '../../../components/app/KeyRow';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function Keys() {
  const { keys, isLoading } = useKeys();
  const HEIGHT = RFPercentage(6.5);
  const renderItem = ({ item }: any) => <KeyRow item={item} />;

  return (
    <>
      <Container>
        <ContainerList>
          <Header>
            <Titulo>Lista das suas chaves:</Titulo>
          </Header>
          {isLoading ? (
            <ContainerLoading>
              <Loading />
            </ContainerLoading>
          ) : (
            <List
              data={keys}
              renderHeader={() => {}}
              renderFooter={() => {}}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
              itemHeight={HEIGHT}
            />
          )}
        </ContainerList>
      </Container>
      <FabKey />
    </>
  );
}
