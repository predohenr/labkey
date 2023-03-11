import React from 'react';
import { View, FlatList, StyleSheet, Text } from 'react-native';
import CustomRow from './CustomRow';

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

const CustomListView = ({ itemList }) => (
  <View style={styles.container}>
    {itemList.length === 0 ? (
      <View style={styles.viewNoData}>
        <Text style={{fontSize: 18}}>Sem dados.</Text>
      </View>
    ) : (
      <View style={styles.viewData} >
        <FlatList
          data={itemList}
          renderItem={({ item }) => <CustomRow
              nome={item.nome}
              contato={item.contato}
              chave={item.chave}
              horario={item.horario}
              devolvida={item.devolvida}
          />}
        />
      </View>
    )}
  </View>
);

export default CustomListView;