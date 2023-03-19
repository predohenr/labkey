import React, { useState } from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import ContextMenu from './ContextMenu';

export default function CustomRowEmprestimo({id, idKey, nome, contato, chave, horario, devolvida}) {
  const [visibleModal, setVisibleModal] = useState(false);
  const closeModal = () => setVisibleModal(false);
  const openContextMenu = () => {
    if (!devolvida) {
      setVisibleModal(true);
    }
  }
  return(
      <View style={styles.container}>
        <TouchableOpacity
          style={styles.touch}
          onLongPress={openContextMenu}
          delayLongPress={500}>
          <View>
            <Text style={styles.header}>{nome} - Chave: {chave}</Text>
            <Text>data: {horario}</Text>
          </View>
          <Icon name={devolvida ? 'check-circle-outline' : 'alert-circle'}
            color={devolvida ? 'green' : 'red'}
            size={30}
          />
        </TouchableOpacity>
        <ContextMenu
          id={id}
          idKey={idKey}
          visible={visibleModal}
          close={closeModal}
          nome={nome}
          contato={contato}
          chave={chave}
          horario={horario}
        />
      </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#FFFFFF',
  },
  touch:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  header:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});