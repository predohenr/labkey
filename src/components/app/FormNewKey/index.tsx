import React from 'react';
import InputText from '../../common/InputText';
import { Container, Header, Title } from './styles';

type FormKeyProps = {
  text: string;
  setText: React.Dispatch<React.SetStateAction<string>>;
};

export default function FormNewKey({ text, setText }: FormKeyProps) {
  return (
    <Container>
      <InputText
        value={text}
        onChangeText={setText}
        placeholder="Digite o nome da chave"
        autoCapitalize="words"
      />
    </Container>
  );
}

export function HeaderKey() {
  return (
    <Header>
      <Title>Cadastrar Nova Chave:</Title>
    </Header>
  );
}
