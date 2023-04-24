import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, LogoContainer, ImgLogo, FormContainer, NovaContaContainer, NovaConta } from './styles';
import { useNavigation } from '@react-navigation/native';
import { authUser } from '../../../contexts/auth';
import FormLogin from '../../../components/auth/FormLogin';
import Loading from '../../../components/common/Loading';
import { useTheme } from 'styled-components/native';

export default function SingIn() {
  const { signIn, authErro, setAuthErro, loading } = authUser();
  const navigation = useNavigation();
  const theme = useTheme();
  const handleSingIn = (email: string, senha: string) => {
    signIn(email, senha);
  };
  const content = loading ? (
    <Loading />
  ) : (
    <>
    <FormLogin
      onSubmit={handleSingIn}
      erroLogin={authErro}
      setAuthErro={setAuthErro}
    />
    <NovaContaContainer
      onPress={() => navigation.navigate('SingUp')}>
        {({ pressed }) => (
          <NovaConta style={{ color: pressed ? theme.COLORS.PRIMARY_700 : theme.COLORS.SECONDARY_700 }}
          >
            Criar Conta
          </NovaConta>
        )}
    </NovaContaContainer>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <LogoContainer>
          <ImgLogo source={require('../../../assets/logo.png')} />
        </LogoContainer>
        <FormContainer>{content}</FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
