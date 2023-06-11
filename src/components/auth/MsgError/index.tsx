import React from 'react';
import { Mensagem } from './styles';
import { useTheme } from 'styled-components/native';

interface MsgErrorInterface {
  erroLogin: string | null;
}

export default function MsgError({ erroLogin }: MsgErrorInterface) {
  const theme = useTheme();
  let message = '';
  let type = '';
  switch (erroLogin) {
    case 'auth/invalid-email':
      message = 'E-mail inválido.';
      break;
    case 'auth/user-disabled':
      message = 'Usuário desabilitado.';
      break;
    case 'auth/user-not-found':
      message = 'Usuário não encontrado.';
      break;
    case 'auth/wrong-password':
      message = 'Senha incorreta.';
      break;
    case 'search/not-find':
      message = 'Palavra-chave incorreta';
      break;
    case 'new/different-passwords':
      message = 'As senhas estão diferentes';
      break;
    case 'new/blank-fields':
      message = 'Preencha todos os campos';
      break;
    case 'auth/weak-password':
      message = 'A senha deve possuir no mínimo 6 caracteres';
      break;
    case 'auth/email-already-in-use':
      message = 'Este E-mail já está sendo usado por outra conta';
      break;
    case 'auth/user-not-found':
      message = 'Usuário não encontrado';
      break;
    case 'success/send-email':
      message = 'E-mail enviado com sucesso';
      type = 'success';
      break;
    case 'password/already-exists':
      message = 'Essa palavra-chave já existe';
      break;
    default:
      return null;
  }
  return <Mensagem style={{color: type=='success' ? theme.COLORS.GREEN_700 : theme.COLORS.RED_500}}>{message}</Mensagem>;
}
