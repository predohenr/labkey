import React from 'react';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { Text, View } from 'react-native';
import styles from './styles';

export default function KeyRow({ ...props }) {

  const item = props.item;

  return(
    <View style={styles.container}>
      <Text style={styles.header}>Chave: {item.label}</Text>
      <Icon name={item.available ? 'check-circle-outline' : 'alert-circle'}
        color={item.available ? 'green' : 'red'}
        size={30}
      />
    </View>
  );
}
