import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import { Container, LogoContainer, ImgLogo, FormContainer } from './styles';
import { authUser } from '../../../contexts/auth';
import FormLogin from '../../../components/auth/FormLogin';
import Loading from '../../../components/common/Loading';

export default function SingIn() {
  const { signIn, authErro, setAuthErro, loading } = authUser();
  const handleSingIn = (email: string, senha: string) => {
    signIn(email, senha);
  };
  const content = loading ? (
    <Loading />
  ) : (
    <FormLogin
      onSubmit={handleSingIn}
      erroLogin={authErro}
      setAuthErro={setAuthErro}
    />
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
