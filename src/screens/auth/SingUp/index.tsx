import React from 'react';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import {
  Container,
  FormContainer,
  ContainerLoading,
  TitleForm,
  SubTitleForm,
} from './styles';
import { authUser } from '../../../contexts/auth';
import Loading from '../../../components/common/Loading';
import FormNewAccount from '../../../components/auth/FormNewAccount';

export default function SingUp() {
  const { signUp, newErro, setNewErro, loading } = authUser();

  const handleSignUp = (nome: string, email: string, senha: string) => {
    signUp(nome, email, senha);
  };
  const content = loading ? (
    <ContainerLoading>
      <Loading />
    </ContainerLoading>
  ) : (
    <FormContainer>
      <TitleForm>Crie sua conta</TitleForm>
      <SubTitleForm>Gerencie os empréstimos das suas chaves</SubTitleForm>
      <FormNewAccount
        onSubmit={handleSignUp}
        erroLogin={newErro}
        setAuthErro={setNewErro}
      />
    </FormContainer>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>{content}</Container>
    </TouchableWithoutFeedback>
  );
}
