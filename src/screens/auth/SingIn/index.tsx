import React from 'react';
import { Keyboard, Pressable, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  FormContainer,
  NovaConta,
  TitleForm,
  SubTitleForm,
  BottomContainer,
  NovaContaText,
  Forgotten,
} from './styles';
import { useNavigation } from '@react-navigation/native';
import { authUser } from '../../../contexts/auth';
import FormLogin from '../../../components/auth/FormLogin';
import Loading from '../../../components/common/Loading';
import { useTheme } from 'styled-components/native';

interface NavigationInterface {
  navigate: any;
}

export default function SingIn() {
  const { signIn, authErro, setAuthErro, loading } = authUser();
  const navigation = useNavigation<NavigationInterface>();
  const theme = useTheme();
  const handleSingIn = (email: string, senha: string) => {
    signIn(email, senha);
  };
  const content = loading ? (
    <Loading />
  ) : (
    <>
      <TitleForm>Entre no sistema</TitleForm>
      <SubTitleForm>Gerencie suas chaves ou sua palavra-chave</SubTitleForm>
      <FormLogin
        onSubmit={handleSingIn}
        erroLogin={authErro}
        setAuthErro={setAuthErro}
      />
      <Forgotten onPress={() => navigation.navigate('Forgot')}>
        {({ pressed }) => (
          <NovaConta
            style={{
              color: pressed
                ? theme.COLORS.SECONDARY_700
                : theme.COLORS.PRIMARY_700,
            }}
          >
            Esqueceu a senha?
          </NovaConta>
        )}
      </Forgotten>
      <BottomContainer>
        <NovaContaText>Não possui conta? </NovaContaText>
        <Pressable onPress={() => navigation.navigate('SingUp')}>
          {({ pressed }) => (
            <NovaConta
              style={{
                color: pressed
                  ? theme.COLORS.SECONDARY_700
                  : theme.COLORS.PRIMARY_700,
              }}
            >
              Cadastre-se
            </NovaConta>
          )}
        </Pressable>
      </BottomContainer>
    </>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <FormContainer>{content}</FormContainer>
      </Container>
    </TouchableWithoutFeedback>
  );
}
