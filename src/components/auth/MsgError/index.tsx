import React from 'react';
import { Mensagem } from './styles';

interface MsgErrorInterface {
  erroLogin: string | null;
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
    default:
      return null;
  }
  return <Mensagem>{message}</Mensagem>;
}
