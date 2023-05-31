import React from 'react';
import Loading from '../../../components/common/Loading';
import StarterButton from '../../../components/auth/StarterButton';
import { authUser } from '../../../contexts/auth';
import { Container, LogoContainer, ImgLogo, ButtonsContainer } from './styles';
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

  return (
    <Container>
      {loading ? (
        <Loading />
      ) : (
        <>
          <LogoContainer>
            <ImgLogo source={require('../../../assets/logo.png')} />
          </LogoContainer>
          <ButtonsContainer>
            <StarterButton title="Logar no Sistema" onPress={navigateSingIn} />
            <StarterButton
              title="Ver Chaves Disponíveis"
              onPress={navigateKeys}
            />
          </ButtonsContainer>
        </>
      )}
    </Container>
  );
}
