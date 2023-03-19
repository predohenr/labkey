import React from "react";
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Button, Modal, StyleSheet, Text, View } from "react-native";
import Theme from '../../themes/LabKeyTheme';

export default function ContextMenu({ visible, close, nome, contato, chave, horario }) {

  const devolverChave = () => {
    close();
  };
  
  return (
    <Modal transparent visible={ visible } onRequestClose={close}>
      <View style={{flex: 1, alignItems: 'center', justifyContent:'center', backgroundColor:'#11111190'}}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.fontTitulo}>Chave: {chave}</Text>
            <IconButton 
              icon={() => <Icon name="close" size={30} color={Theme.OnBackGroundColor} />}
              onPress={close}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.fontCorpo}>
              Nome: {nome}
            </Text>
            <Text style={styles.fontCorpo}>
              Contato: {contato}
            </Text>
            <Text style={styles.fontCorpo}>
              Horário: {horario}
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              title='Marcar como Devolvida'
              color={Theme.PrimaryVariantColor}
              onPress={devolverChave}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}

const styles = StyleSheet.create({
  container:{
    flex: 1,
    position:'absolute',
    width:'80%',
    borderWidth: 2,
    borderColor: '#999999',
    backgroundColor: Theme.BackGroundColor
  },
  header:{
    flexDirection:'row',
    alignItems: 'center',
    justifyContent:'space-between',
    paddingLeft: 8,
    borderBottomWidth: 1
  },
  fontTitulo:{
    fontSize: 20,
    fontWeight: 'bold'
  },
  body:{
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  fontCorpo:{
    fontSize: 18,
  },
  button:{
    alignItems:'center',
    marginBottom: 20,
  }
});
  