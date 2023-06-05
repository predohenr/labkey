import React, { useState } from 'react';
import { authUser } from '../../../contexts/auth';
import Loading from '../../../components/common/Loading';
import {
  ContainerCenter,
  TitleForm,
  SubTitleForm,
  ContainerSubmit,
} from './styles';
import Input from '../../../components/auth/Input';
import Button from '../../../components/auth/Button';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import MsgError from '../../../components/auth/MsgError';

export default function Forgot() {
  const {
    loading,
    forgotPassword,
    forgotErro,
  } = authUser();
  const [email, setEmail] = useState('');

  const handleSend = () => {
    if (email.length > 0) {
      forgotPassword(email);
      setEmail('');
    }
  };

  const content = loading ? <Loading/> : <>
  <TitleForm>Esqueceu sua senha?</TitleForm>
  <SubTitleForm>
      A gente entende, digite seu email para redefini-la
  </SubTitleForm>
  <Input
      customType="email"
      customIcon="email-variant"
      placeholder="Digite seu E-mail"
      onChangeText={(text) => setEmail(text)}
      value={email}
  />
  <MsgError erroLogin={forgotErro} />
  <ContainerSubmit>
      <Button title="Enviar" onPress={handleSend} />
  </ContainerSubmit>
  </>;

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
        <ContainerCenter>
          {content}
        </ContainerCenter>
    </TouchableWithoutFeedback>
  );
}
