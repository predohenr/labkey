import React from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Button, Modal, Text, View } from 'react-native';
import Theme from '../../../themes/LabKeyTheme';
import styles from './styles';

export default function ModalLoan({ ...props }) {
  const item = props;

  const devolverChave = (id, idKey) => {
    firestore().runTransaction(async () => {
      const userId = auth().currentUser.uid;
      const date = firestore.FieldValue.serverTimestamp();
      firestore().doc(idKey).update({ available: true });
      firestore()
        .doc(`users/${userId}/loans/${id}`)
        .update({ returned: true, returned_at: date })
        .then(() => {
          item.close();
        });
    });
  };

  return (
    <Modal transparent visible={item.visible} onRequestClose={item.close}>
      <View
        style={{
          flex: 1,
          alignItems: 'center',
          justifyContent: 'center',
          backgroundColor: '#111111BE',
        }}
      >
        <View style={styles.container}>
          <View style={styles.header}>
            <Text style={styles.fontTitulo}>Chave: {item.key_name}</Text>
            <IconButton
              icon={() => (
                <Icon name="close" size={30} color={Theme.OnBackGroundColor} />
              )}
              onPress={item.close}
            />
          </View>
          <View style={styles.body}>
            <Text style={styles.fontCorpo}>Nome: {item.name}</Text>
            {item.contact != '' && (
              <Text style={styles.fontCorpo}>Contato: {item.contact}</Text>
            )}
            <Text style={styles.fontCorpo}>
              Horário:{' '}
              {item.create_at
                .toDate()
                .toLocaleString('pt-BR', { timeZone: 'UTC' })}
            </Text>
          </View>
          <View style={styles.button}>
            <Button
              title="Marcar como Devolvida"
              color={Theme.PrimaryVariantColor}
              onPress={() => devolverChave(item.id, item.key_id)}
            />
          </View>
        </View>
      </View>
    </Modal>
  );
}
