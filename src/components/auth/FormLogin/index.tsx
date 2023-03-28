import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import MsgError from '../MsgError';

interface LoginForm {
  onSubmit: Function;
  erroLogin: string | null;
  setAuthErro: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function FormLogin({
  onSubmit,
  erroLogin,
  setAuthErro,
}: LoginForm) {
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const submit = () => {
    if (email.length > 0 && senha.length > 0) {
      erroLogin && setAuthErro(null);
      onSubmit(email, senha);
    }
  };

  return (
    <>
      <Input
        customType="email"
        customIcon="email-variant"
        placeholder="Digite seu E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        customType="senha"
        customIcon="form-textbox-password"
        placeholder="Digite sua Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />
      <MsgError erroLogin={erroLogin} />
      <Button onPress={submit} />
    </>
  );
}
