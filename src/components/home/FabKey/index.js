import React, { useRef, useState } from 'react';
import { View, TouchableOpacity } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import auth from "@react-native-firebase/auth";
import firestore from '@react-native-firebase/firestore'
import { Modalize } from 'react-native-modalize';
import { RFPercentage } from "react-native-responsive-fontsize";
import Theme from '../../../themes/LabKeyTheme';
import FormNewKey, { HeaderKey } from '../FormNewKey';
import styles from './styles'

export default function FabKey() {

  const modalizeRef = useRef(null);
  const [keyName, setKeyName] = useState('');
  const openModal = () =>  modalizeRef.current?.open();
  const addNewKey = (key) =>  {
    if (key.length > 0){
      const userId = auth().currentUser.uid;
      firestore().collection(`users/${userId}/keys`).add({
        name: key,
        available: true,
        create_at: firestore.FieldValue.serverTimestamp()
      }).then(() => {
        modalizeRef.current?.close();
        setKeyName('');
      });
    }
  };
  const [fab, setFab] = useState({icon: 'plus', action: openModal});
  const open = () => {
    setFab({icon: 'key-plus', action: addNewKey});
  };
  const close = () => {
    setFab({icon: 'plus', action: openModal});
  };

  return(
    <>
      <View style={styles.container}>
        <TouchableOpacity onPress={() => fab.action(keyName)}>
          <View style={styles.fab}>
            <Icon name={fab.icon} size={25} color={Theme.OnSecondaryColor} />
          </View>
        </TouchableOpacity>
      </View>
      <Modalize
        ref={modalizeRef}
        snapPoint={RFPercentage(35)}
        modalHeight={RFPercentage(35)}
        rootStyle={styles.root}
        scrollViewProps={{ contentContainerStyle: { height: '100%', }, }}
        modalStyle={styles.modalStyle}
        handleStyle={styles.handleStyle}
        HeaderComponent={<HeaderKey/>}
        onOpen={open}
        onClose={close}
        >
        <FormNewKey text={keyName} setText={setKeyName} />
      </Modalize>
    </>
  );
};