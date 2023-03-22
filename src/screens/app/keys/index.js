import React from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import FabKey from '../../../components/home/FabKey';
import List from '../../../components/home/List';
import { useIsLoading } from '../../../contexts/data';
import Loading from '../../../components/common/Loading'

export default function Keys() {

  const { isLoading } = useIsLoading();

  return (
    <>
      <View style={styles.container}>
        <View style={styles.lista}>
          <View style={styles.listaHeader}>
            <Text style={styles.tituloLista}>Lista das suas chaves:</Text>
          </View>
          {isLoading ? <View style={styles.loading}><Loading /></View> : <List />}
        </View>
      </View>
      <FabKey />
    </>
  );
};
