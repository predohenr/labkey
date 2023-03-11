import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Theme from '../../themes/LabKeyTheme';

function getData(){
  let data = {todas_chaves:[
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k01', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k02', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k03', statusEmprestada: false},
      {chave: 'k04', statusEmprestada: false},
      {chave: 'k04', statusEmprestada: true},
      {chave: 'k04', statusEmprestada: true}
    ]
  };
  let dataJason = JSON.stringify(data);
  return JSON.parse(dataJason);
}

export default function ListScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Tela da lista de chaves</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
});
