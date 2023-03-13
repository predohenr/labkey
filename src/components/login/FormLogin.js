import React, { useState } from 'react';
import { Button } from 'react-native';
import Theme from '../../themes/LabKeyTheme';
import InputLogin from './InputLogin';
import InputSenha from './InputSenha';


export default function FormLogin({ onSubmit }) {

  const [login, setLogin] = useState('');
  const [senha, setSenha] = useState('');
  const logar = () => onSubmit(login, senha); 

  return (
    <>
      <InputLogin value={login} returnLogin={setLogin} />
      <InputSenha logar={logar} value={senha} returnSenha={setSenha} />
      <Button title='Entrar' color={Theme.PrimaryColor} onPress={logar} />
    </>
  );
};
