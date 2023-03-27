import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import Theme from '../../themes/LabKeyTheme'

export default function Card({ titulo, label, quantidade, bgColor}) {
  return(
    <View style={[styles.containerCard, {backgroundColor: bgColor}]}>
      <Text style={styles.tituloCard}>{titulo}:</Text>
      {label != null && (<Text style={styles.subTituloCard}>({label})</Text>)}
      <View style={styles.qtdPosition}>
        <Text style={styles.qtdCard}>{quantidade}</Text>
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  containerCard: {
    height: 100,
    width: '45%',
    borderRadius: 10,
    elevation:10
  },
  tituloCard:{
    marginTop: 8,
    marginLeft: 8,
    fontSize: 16,
    color: Theme.OnPrimaryColor,
  },
  subTituloCard:{
    fontSize: 12,
    marginLeft: 8,
    color: Theme.OnPrimaryColor,
  },
  qtdPosition:{
    position:'absolute',
    bottom: 10,
    right: 5,
  },
  qtdCard:{
    fontSize: 42,
    alignSelf: 'flex-end',
    marginRight: 20,
    color: Theme.OnPrimaryColor,
  },
});