import React, { useState } from 'react';
import { Button } from 'react-native';
import Theme from '../../themes/LabKeyTheme';
import InputEmail from './InputEmail';
import InputSenha from './InputSenha';
import MsgError from './MsgError';


export default function FormLogin({ onSubmit, erroLogin, setAuthErro }) {

  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');
  
  const submit = () => {
    if (email.length > 0 && senha.length > 0){
      erroLogin && setAuthErro(null);
      onSubmit(email, senha);
    } else {
      this.inputEmail.focus();
    }
  }

  return (
    <>
      <InputEmail value={email} setEmail={setEmail} />
      <InputSenha submit={submit} value={senha} setSenha={setSenha} />
      <MsgError erroLogin={erroLogin} />
      <Button title='Entrar' color={Theme.PrimaryColor} onPress={submit} />
    </>
  );
};
