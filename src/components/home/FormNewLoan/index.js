import React from 'react';
import { Text, View } from 'react-native';
import { Select } from '@mobile-reality/react-native-select-pro';
import InputText from '../../common/InputText';
import styles from './styles'
import Theme from '../../../themes/LabKeyTheme';


export default function FromNewLoan({ nome, setNome, contato, setContato, setChave, chaves }){
  const selectStyle = {
    select: {
      container:{
        backgroundColor: Theme.BackGroundColor,
        width: '80%',
        marginBottom: 30,
        height: 45,
        borderRadius: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: Theme.OnBackGroundColor,
        paddingLeft: 5,
      },
      text:{
        fontSize: 14,
      },
    },
    option:{
      container:{
        borderTopWidth: 1,
        borderTopColor: '#999999',
      },
      text:{
        fontSize: 14,
      }
    },
    optionsList:{
      height: 250,
    }
  }
  return(
    <View style={styles.body}>
      <Select
        onSelect={(type, index) => setChave(type)}
        options={chaves}
        placeholderText='Selecione uma Chave'
        placeholderTextColor='#999999'
        noOptionsText='Sem dados'
        searchable={true}
        styles={selectStyle}
        />
      <InputText 
        value={nome}
        setText={setNome}
        placeholder='Digite o nome do Solicitante'
        mode='text'
        />
      <InputText 
        value={contato}
        setText={setContato}
        placeholder='Digite o contato do Solicitante'
        mode='email'
        />
    </View>
  );
};

export function HeaderLoan(){
  return(
    <View style={styles.header}>
      <Text style={styles.title}>Cadastrar Novo Empréstimo:</Text>
    </View>
  );
};
