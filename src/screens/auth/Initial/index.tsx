import React from 'react';
import Loading from '../../../components/common/Loading';
import StarterButton from '../../../components/auth/StarterButton';
import { authUser } from '../../../contexts/auth';
import { Container, ImgLogo, ButtonsContainer } from './styles';
import { useNavigation } from '@react-navigation/native';

interface NavigationInterface {
  navigate: any;
}

export default function Initial() {
  const navigation = useNavigation<NavigationInterface>();
  const { loading } = authUser();

  const navigateSingIn = () => {
    navigation.navigate('SingIn');
  };

  const navigateKeys = () => {
    navigation.navigate('Keys');
  };

  const content = loading ? (
    <Loading />
  ) : (
    <>
      <ImgLogo source={require('../../../assets/new_logo.png')} />
      <ButtonsContainer>
        <StarterButton title="Entrar no Sistema" onPress={navigateSingIn} />
        <StarterButton title="Ver Chaves Disponíveis" onPress={navigateKeys} />
      </ButtonsContainer>
    </>
  );

  return <Container>{content}</Container>;
}
