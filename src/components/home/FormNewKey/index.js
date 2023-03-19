import React from 'react';
import { Text, View } from "react-native";
import InputText from "../../common/InputText";
import styles from './styles'

export default function FormNewKey({ text, setText }){

  return(
    <View style={styles.body}>
      <InputText 
        value={text}
        setText={setText}
        placeholder='Digite o nome da chave'
        mode='text'
        />
    </View>
  );
};

export function HeaderKey(){
  return (
    <View style={styles.header}>
      <Text style={styles.title}>Cadastrar Nova Chave:</Text>
    </View>
  );
};
