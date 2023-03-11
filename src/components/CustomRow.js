import React from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#FFFFFF',
  },
  header:{
    fontSize: 18,
    fontWeight: 'bold'
  }
});

const CustomRow = ({ nome, chave, horario, devolvida }) => (
  <View style={styles.container}>
    <View>
      <Text style={styles.header}>{nome} - Chave: {chave}</Text>
      <Text>horário: {horario}</Text>
    </View>
    <Icon name={devolvida ? 'check-circle-outline' : 'alert-circle'}
      color={devolvida ? 'green' : 'red'}
      size={30}
    />
  </View>
);

export default CustomRow;