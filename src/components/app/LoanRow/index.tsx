import React, { useState } from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import ModalLoan from '../ModalLoan';
import styles from './styles';

export default function LoanRow({ ...props }) {

  const item = props.item;
  const [visibleModal, setVisibleModal] = useState(false);
  const closeModal = () => setVisibleModal(false);
  const openContextMenu = () => {
    if (!item.returned) {
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
          <Text style={styles.header}>{item.name} - Chave: {item.key_name}</Text>
          <Text>data: {item.create_at.toDate().toLocaleString('pt-BR', { timeZone: 'UTC' })}</Text>
        </View>
        <Icon
          name={item.returned ? 'check-circle-outline' : 'alert-circle'}
          color={item.returned ? 'green' : 'red'}
          size={30}
        />
      </TouchableOpacity>
      <ModalLoan
        id={item.id}
        key_id={item.key_id}
        visible={visibleModal}
        close={closeModal}
        name={item.name}
        contact={item.contact}
        key_name={item.key_name}
        create_at={item.create_at}
      />
    </View>
  );
}
