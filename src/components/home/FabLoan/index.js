import React, { useRef, useState } from 'react';
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore';
import { View, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import FormNewLoan, { HeaderLoan } from '../FormNewLoan';
import { Modalize } from 'react-native-modalize';
import { RFPercentage } from "react-native-responsive-fontsize";
import Theme from '../../../themes/LabKeyTheme';
import styles from './styles'

export default function FabLoan({ chaves }) {
  
  const modalizeRef = useRef(null);
  const [name, setName] = useState('');
  const [contact, setContact] = useState('');
  const [key, setKey] = useState(null);
  const openModal = () =>  modalizeRef.current?.open();
  const addNewLoan = (name, contact, key) => {
    if (name.length > 0 && contact.length > 0 && key.value != null){
      firestore().runTransaction(async () => {
        const userId = auth().currentUser.uid;
        const date = firestore.FieldValue.serverTimestamp();
        firestore().doc(`users/${userId}/keys/${key.value}`).update({available: false});
        firestore().collection(`users/${userId}/loans`).add({
          name: name,
          contact: contact,
          key_name: key.label,
          key_id: `users/${userId}/keys/${key.value}`,
          create_at: date,
          returned: false,
          returned_at: date
        }).then(() => {
          modalizeRef.current?.close();
          setName('');
          setContact('');
          setKey(null);
        });
      });
    };
    
  };
  const [fab, setFab] = useState({icon: 'plus', action: openModal});
  const open = () => {
    setFab({icon: 'account-key', action: addNewLoan});
  };
  const close = () => {
    setFab({icon: 'plus', action: openModal});
  };

  return(
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => fab.action(name, contact, key)}>
          <View style={styles.fab}>
            <Icon name={fab.icon} size={25} color={Theme.OnSecondaryColor} />
          </View>
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        snapPoint={RFPercentage(50)}
        modalHeight={RFPercentage(50)}
        rootStyle={styles.root}
        scrollViewProps={{ contentContainerStyle: { height: '100%', }, }}
        modalStyle={styles.modalStyle}
        handleStyle={styles.handleStyle}
        HeaderComponent={<HeaderLoan />}
        onOpen={open}
        onClose={close}
        >
        <FormNewLoan
          nome={name}
          setNome={setName}
          contato={contact}
          setContato={setContact}
          setChave={setKey}
          chaves={chaves}
         />
      </Modalize>
    </>
  );
};