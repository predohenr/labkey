import React from 'react';
import { StyleSheet, Text } from 'react-native';

export default function MsgError({ erroLogin }) {
 
  if (erroLogin){

    let message = '';

    switch(erroLogin){
      case 'auth/invalid-email':
        message = 'E-mail inválido.'; break;
      case 'auth/user-disabled':
        message = 'Usuário desabilitado.'; break;
      case 'auth/user-not-found':
        message = 'Usuário não encontrado.'; break;
      case 'auth/wrong-password':
        message = 'Senha incorreta.'; break;
    }
    return (<Text style={styles.msg}>{message}</Text>);
  } else {
    return (<></>);
  }
};

const styles = StyleSheet.create({
  msg:{
    fontWeight: 'bold',
    color: 'red',
    marginBottom: 5,
    marginLeft: '15%',
    alignSelf:'flex-start',
  },
});
