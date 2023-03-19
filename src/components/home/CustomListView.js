import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRowEmprestimo from './CustomRowEmprestimo';
import CustomRowChave from './CustomRowChave';

const styles = StyleSheet.create({
    container: {
      flex: 1,
      marginHorizontal: 10,
      marginBottom: 30,
    },
    viewNoData:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    viewData:{
      flex: 1,
      borderTopWidth: 1,
      borderTopColor: '#999999',
    }
});

export default function CustomListView ({ itemList, type }){

  if (type === 'emprestimo'){
    return (
      <View style={styles.container}>
        {itemList.length === 0 ? (
          <View style={styles.viewNoData}>
            <Text style={{fontSize: 18}}>Sem dados.</Text>
          </View>
        ) : (
          <View style={styles.viewData} >
            <FlatList
              data={itemList}
              renderItem={({ item }) => <CustomRowEmprestimo
                  id={item.id}
                  idKey={item.key_id}
                  nome={item.name}
                  contato={item.contact}
                  chave={item.key_name}
                  horario={item.create_at.toDate().toLocaleString('pt-BR')}
                  devolvida={item.returned}
              />}
            />
          </View>
        )}
      </View>
    )
  } else if (type === 'chave') {
    return (
      <View style={styles.container}>
        {itemList.length === 0 ? (
          <View style={styles.viewNoData}>
            <Text style={{fontSize: 18}}>Sem dados.</Text>
          </View>
        ) : (
          <View style={styles.viewData} >
            <FlatList
              data={itemList}
              renderItem={({ item }) => <CustomRowChave
                  nome={item.name}
                  disponivel={item.available}
              />}
            />
          </View>
        )}
      </View>
    )
  }
};
