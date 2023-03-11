import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../../themes/LabKeyTheme'

export default function Card({ titulo, label, quantidade, bgColor}) {
  return(
    <View style={[styles.containerCard, {backgroundColor: bgColor}]}>
      <Text style={styles.tituloCard}>{titulo}:</Text>
      {label != null && (<Text style={styles.subTituloCard}>({label})</Text>)}
      <Text style={styles.conteudoCard}>{quantidade}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    height: 100,
    width: '45%',
    marginTop: 10,
    marginHorizontal: 5,
    borderRadius: 10,
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
});