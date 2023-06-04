import React, { useState } from 'react';
import Input from '../Input';
import Button from '../Button';
import MsgError from '../MsgError';
import { ContainerSubmit } from './styles';

interface LoginForm {
  onSubmit: Function;
  erroLogin: string | null;
  setAuthErro: React.Dispatch<React.SetStateAction<string | null>>;
}

export default function FormNewAccount({
  onSubmit,
  erroLogin,
  setAuthErro,
}: LoginForm) {
  const [nome, setNome] = useState('');
  const [email, setEmail] = useState('');
  const [senha, setSenha] = useState('');

  const submit = () => {
    if (email.length > 0 && senha.length > 0 && nome.length) {
      erroLogin && setAuthErro(null);
      onSubmit(nome, email, senha);
    } else {
      setAuthErro('new/blank-fields');
    }
  };

  return (
    <>
      <Input
        customType="text"
        customIcon="account"
        placeholder="Digite seu Nome"
        onChangeText={(text) => setNome(text)}
        value={nome}
      />
      <Input
        customType="email"
        customIcon="email-variant"
        placeholder="Digite seu E-mail"
        onChangeText={(text) => setEmail(text)}
        value={email}
      />
      <Input
        customType="hide"
        customIcon="form-textbox-password"
        placeholder="Digite sua Senha"
        onChangeText={(text) => setSenha(text)}
        value={senha}
      />
      <MsgError erroLogin={erroLogin} />
      <ContainerSubmit>
        <Button title="Criar Conta" onPress={submit} />
      </ContainerSubmit>
    </>
  );
}
