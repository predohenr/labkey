import React, { useState } from 'react';
import {
  Container,
  Titulo,
  Card,
  Chave,
  ContainerButton,
  ContainerWelcome,
  WelcomeText,
  SubTitle,
  ContainerForm,
  SubmitButton,
  ContainerHeader,
  ContainerContent,
} from './styles';
import { Keyboard, TouchableWithoutFeedback } from 'react-native';
import auth from '@react-native-firebase/auth';
import { updatePassword } from '../../../services';
import { useData } from '../../../contexts/data';
import StarterButton from '../../../components/auth/StarterButton';
import Button from '../../../components/auth/Button';
import Input from '../../../components/auth/Input';

export default function User() {
  const { password } = useData();
  const user = auth().currentUser;
  const [newPassword, setNewPassword] = useState<string>('');
  const [changePassword, setChangePassword] = useState<boolean>(false);

  const submit = async () => {
    await updatePassword(newPassword);
    setChangePassword(false);
    setNewPassword('');
  };

  const content = changePassword ? (
    <ContainerForm>
      <Input
        customIcon="key-variant"
        customType="text"
        placeholder="Digite sua nova palavra-chave"
        onChangeText={(text) => setNewPassword(text)}
        value={newPassword}
      />
      <SubmitButton>
        <Button onPress={submit} title="Enviar" />
      </SubmitButton>
    </ContainerForm>
  ) : (
    <ContainerButton>
      <StarterButton
        onPress={() => {
          setChangePassword(true);
        }}
        title="Alterar palavra-chave"
      />
    </ContainerButton>
  );

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <Container>
        <ContainerHeader>
          <ContainerWelcome>
            <WelcomeText>Olá, {user?.displayName}.</WelcomeText>
            <SubTitle>
              Outros usuários podem pesquisar suas chaves com essa
              palavra-chave.
            </SubTitle>
          </ContainerWelcome>
          <Card>
            <Titulo>Sua palavra chave:</Titulo>
            <Chave>{password}</Chave>
          </Card>
        </ContainerHeader>
        <ContainerContent>{content}</ContainerContent>
      </Container>
    </TouchableWithoutFeedback>
  );
}
