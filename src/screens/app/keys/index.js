import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../../components/common/Loading';
import CustomListView from '../../../components/home/CustomListView';
import FabKey from '../../../components/home/FabKey';

export default function Keys() {

  const [loading, setLoading] = useState(true);
  const [keys, setKeys] = useState([]);

  useEffect(() => {
    const userId = auth().currentUser.uid;
    const subscriber = firestore().collection(`users/${userId}/keys`)
      .onSnapshot(querySnapshot => {
          const data = querySnapshot.docs.map(doc => {
            return {
              id: doc.id,
              ...doc.data()
            }
          })
          setKeys(data);
          setLoading(false);
      });
    
    return () => subscriber();
  }, []);

  return (
    <>
      <View style={styles.container}>
        <View style={styles.lista}>
          <View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
            <Text style={styles.tituloLista}>Lista das suas chaves:</Text>
          </View>
          {loading 
            ?
            <View style={{flex: 1, alignItems:'center', justifyContent:'center'}}><Loading /></View>
            :
            <CustomListView itemList={keys} type='chave' />
          }
        </View>
      </View>
      <FabKey />
    </>
  );
};
