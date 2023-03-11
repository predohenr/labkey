import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import CustomListView from '../../components/CustomListView';
import Theme from '../../themes/LabKeyTheme';

function getData(){
  let data = { 
    todos_emprestimos:[
      {nome: 'Fulano', chave: 'k01', horario: '09:34 de 10/03/2023', devolvida: true},
      {nome: 'Jose', chave: 'k02', horario: '08:43 de 10/03/2023', devolvida: true},
      {nome: 'Paulo', chave: 'k01', horario: '12:21 de 10/03/2023', devolvida: true},
      {nome: 'Pedro', chave: 'k04', horario: '11:22 de 10/03/2023', devolvida:true},
      {nome: 'Artur', chave: 'k04', horario: '13:56 de 11/03/2023', devolvida:true},
      {nome: 'Kevin', chave: 'k03', horario: '08:22 de 11/03/2023', devolvida:true},
      {nome: 'Julia', chave: 'k03', horario: '14:23 de 11/03/2023', devolvida:true},
      {nome: 'Silvia', chave: 'k02', horario: '16:44 de 11/03/2023', devolvida:true},
      {nome: 'Marcos', chave: 'k02', horario: '10:15 de 12/03/2023', devolvida:false},
      {nome: 'Maria', chave: 'k04', horario: '09:11 de 12/03/2023', devolvida:false}
    ],
    todas_chaves:[
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

export default function HomeScreen() {

  const dataEmprestimo = getData()['todos_emprestimos'];
  const dataChaves = getData()['todas_chaves'];

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <View style={[styles.cardChaves, styles.cardChavesEmprestadas]}>
          <Text style={styles.tituloCard}>Chaves Emprestadas:</Text>
          <Text style={styles.conteudoCard}>{dataEmprestimo.length}</Text>
        </View>
        <View style={[styles.cardChaves, styles.cardChavesDisponiveis]}>
          <Text style={styles.tituloCard}>Chaves Disponíveis:</Text>
          <Text style={styles.conteudoCard}>{dataChaves.filter(chave => chave['statusEmprestada'] === false).length}</Text>
        </View>
      </View>
      
      <View style={styles.listaPrincipal}>
        <Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
        <CustomListView
          itemList={dataEmprestimo}
        />
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
  cards: {
    flexDirection: 'row',
    justifyContent:'center',
  },
  tituloCard:{
    marginTop: 8,
    marginLeft: 8,
    fontSize: 16,
    color: Theme.OnPrimaryColor,
  },
  conteudoCard:{
    fontSize: 42,
    alignSelf: 'flex-end',
    marginRight: 20,
    color: Theme.OnPrimaryColor,
  },
  cardChaves: {
    height: 100,
    width: '45%',
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 10,
  },
  cardChavesEmprestadas:{
    backgroundColor: Theme.PrimaryColor,
  },
  cardChavesDisponiveis: {
    backgroundColor: Theme.PrimaryVariantColor,
  },
  listaPrincipal: {
    flex: 1,
    paddingTop: 10,
    marginHorizontal: 10,
  },
  tituloLista:{
    fontSize: 22
  },
});
