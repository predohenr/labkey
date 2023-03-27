import React from 'react';
import { Mensagem } from './styles';

interface MsgErrorInterface {
  erroLogin: string;
}

export default function MsgError({ erroLogin }: MsgErrorInterface) {
  let message = '';
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
    default:
      return null;
  }
  return <Mensagem>{message}</Mensagem>;
}
