import React, { useState } from 'react';
import { Alert, StyleSheet, TouchableOpacity, Modal, Text, View } from 'react-native';
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
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

  const [emprestimo, setEmprestimo] = useState({
    data: getData()['todos_emprestimos'],
    total: getData()['todos_emprestimos'].length
  });
  const dataChaves = getData()['todas_chaves'];
  const [visibleModal, setVisibleModal] = useState(false);
  const openPopMenu = () => {
    setVisibleModal(true);
  };
  const [filter, setFilter] = useState({
    tableFilter: 2,
    label: 'Esse Mês'
  });

  return (
    <View style={styles.container}>
      <View style={styles.cards}>
        <View style={[styles.cardChaves, styles.cardChavesEmprestadas]}>
          <Text style={styles.tituloCard}>Chaves Emprestadas:</Text>
          <Text style={styles.subTituloCard}>({filter.label})</Text>
          <Text style={styles.conteudoCard}>{emprestimo.total}</Text>
        </View>
        <View style={[styles.cardChaves, styles.cardChavesDisponiveis]}>
          <Text style={styles.tituloCard}>Chaves Disponíveis:</Text>
          <Text style={styles.conteudoCard}>{dataChaves.filter(chave => chave['statusEmprestada'] === false).length}</Text>
        </View>
      </View>
      
      <View style={styles.listaPrincipal}>
        <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
          <Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
          <IconButton 
            icon={() => <Icon name="filter-variant" size={18}/>}
            onPress={openPopMenu}
          />
        </View>
        <CustomListView
          itemList={emprestimo.data}
        />
      </View>
      <Modal transparent visible={ visibleModal }>
        <View style={{ flex: 1 }} onTouchEnd={() => setVisibleModal(false)}>
          <View style={ styles.popUpMenu }>
            <TouchableOpacity onPress={() => {
                setFilter({
                  tableFilter: 1,
                  label: 'Hoje'
                });
                setEmprestimo({
                  data: getData()['todos_emprestimos'].filter(chave => chave['devolvida'] == true),
                  total: getData()['todos_emprestimos'].filter(chave => chave['devolvida']).length
                });
              }}>
              <Text style={styles.popOptionText}>Hoje</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => {
                setFilter({
                  tableFilter: 2,
                  label: 'Esse Mês'
                });
                setEmprestimo({
                  data: getData()['todos_emprestimos'],
                  total: getData()['todos_emprestimos'].length
                });
              }}>
              <Text style={styles.popOptionText}>Esse Mês</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.popOption} onPress={() => {
                setFilter({
                  tableFilter: 3,
                  label: 'Últimos 6 Messes'
                });
                setEmprestimo({
                  data: getData()['todos_emprestimos'].filter(chave => chave['devolvida'] == false),
                  total: getData()['todos_emprestimos'].filter(chave => chave['devolvida'] == false).length
                });
              }}>
              <Text style={[styles.popOptionText, , {borderBottomWidth: 0}]}>Últimos 6 Messes</Text>
            </TouchableOpacity>
          </View>
        </View>
      </Modal>
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
  subTituloCard:{
    fontSize: 12,
    color: Theme.OnPrimaryColor,
    marginLeft: 8,
    marginBottom: -16,
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
  popUpMenu: {
    backgroundColor: Theme.BackGroundColor,
    borderWidth: 1,
    borderColor: Theme.OnBackGroundColor,
    paddingHorizontal: 10,
    paddingVertical: 5,
    position: 'absolute',
    top: '25%',
    right: 10,
    alignSelf:"flex-end"
  },
  popOption:{

  },
  popOptionText:{
    color: Theme.OnBackGroundColor,
    borderColor: '#999999',
    paddingVertical: 5,
    borderBottomWidth: 1,
    fontSize: 20,
  },
});
