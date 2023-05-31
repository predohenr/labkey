import React, { useEffect, useState } from 'react';
import { useData } from '../../../contexts/authData';
import Loading from '../../../components/common/Loading';
import {
  Container,
  ContainerCenter,
  Header,
  Title,
  SubTitle,
  TitleForm,
  SubTitleForm,
  ContainerList,
} from './styles';
import Input from '../../../components/auth/Input';
import Button from '../../../components/auth/Button';
import { BackHandler, Keyboard, TouchableWithoutFeedback } from 'react-native';
import MsgError from '../../../components/auth/MsgError';
import { RFPercentage } from 'react-native-responsive-fontsize';
import KeyRow from '../../../components/auth/KeyRow';
import List from '../../../components/auth/List';
import { useNavigation } from '@react-navigation/native';

interface NavigationInterface {
  navigate: any;
}

export default function Keys() {
  const navigation = useNavigation<NavigationInterface>();
  const HEIGHT = RFPercentage(8);
  const { keys, loading, searching, findKeys, error, userName, setSearching } =
    useData();
  const [password, setPassword] = useState('');

  const renderItem = ({ item, index }: any) => (
    <KeyRow item={item} index={index} />
  );

  const handleSearch = () => {
    if (password.length > 0) {
      findKeys(password);
      setPassword('');
    }
  };

  useEffect(() => {
    const backAction = () => {
      setSearching(true);
      navigation.navigate('Initial');
      return true;
    };

    const backHandler = BackHandler.addEventListener(
      'hardwareBackPress',
      backAction
    );

    return () => backHandler.remove();
  }, []);

  return (
    <>
      {searching ? (
        <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
          <ContainerCenter>
            <TitleForm>Procure as chaves disponíveis</TitleForm>
            <SubTitleForm>
              Pergunte a palavra-chave ao dono das chaves
            </SubTitleForm>
            <Input
              customType="text"
              customIcon="magnify"
              placeholder="Digite a palavra-chave"
              onChangeText={(text) => setPassword(text)}
              value={password}
            />
            <MsgError erroLogin={error} />
            <Button title="Buscar" onPress={handleSearch} />
          </ContainerCenter>
        </TouchableWithoutFeedback>
      ) : loading ? (
        <ContainerCenter>
          <Loading />
        </ContainerCenter>
      ) : (
        <Container>
          <Header>
            <Title>Proprietário: {userName}</Title>
            <SubTitle>
              Chaves disponíveis:{' '}
              {keys.filter((key) => key.available === true).length}
            </SubTitle>
          </Header>
          <ContainerList>
            <List
              data={keys}
              renderHeader={() => {}}
              renderFooter={() => {}}
              renderItem={renderItem}
              keyExtractor={(item) => item.value}
              itemHeight={HEIGHT}
            />
          </ContainerList>
        </Container>
      )}
    </>
  );
}
