import React from 'react';
import { FlatList, View } from 'react-native';
import { useLoans, useKeys } from '../../../contexts/data';
import { useRoute } from '@react-navigation/native';
import LoanRow from '../LoanRow';
import KeyRow from '../KeyRow';
import styles from './styles';

export default function List (){
  const route = useRoute();
  const { loans } = useLoans();
  const { keys } = useKeys();
  let content = <></>;

  switch(route.name){
    case 'Início':
      content = (
        <View style={styles.viewData}>
          <FlatList data={loans} renderItem={(item) => <LoanRow item={item.item} />} />
        </View>
      );
      break;
    case 'Lista de Chaves':
      content = (
        <View style={styles.viewData}>
          <FlatList data={keys} renderItem={(item) => <KeyRow item={item.item} />} />
        </View>
      );
      break;
  }

  return(
    <View style={styles.container}>
      { content }
    </View>
  );
}
