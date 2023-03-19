import React from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { View, Text, StyleSheet } from 'react-native';

export default function CustomRowChave({ nome, disponivel }) {

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Chave: {nome}</Text>
      <Icon name={disponivel ? 'check-circle-outline' : 'alert-circle'}
        color={disponivel ? 'green' : 'red'}
        size={30}
      />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection:'row',
    alignItems:'center',
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