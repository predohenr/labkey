import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../../themes/LabKeyTheme';

export default function InputEmail({ value, setEmail }) {

  return (
    <View style={styles.inputComponent}>
      <Icon name='email-variant' size={30} color={Theme.OnPrimaryColor} style={styles.iconInput}/>
      <TextInput
        id='inputEmail'
        style={styles.inputLogin}
        cursorColor={Theme.PrimaryVariantColor}
        placeholder='Digite seu E-mail'
        autoCapitalize='none'
        ref={(e) => { this.inputEmail = e }}
        inputMode='email'
        returnKeyType='next'
        onSubmitEditing={() => { this.inputSenha.focus() }}
        blurOnSubmit={false}
        onChangeText={(e) => setEmail(e)}
        value={value}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  inputComponent: {
    height: 45,
    width: '80%',
    borderRadius: 15,
    backgroundColor: Theme.PrimaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  },
  inputLogin: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 5,
    backgroundColor: Theme.BackGroundColor,
    color: Theme.OnBackGroundColor,
    borderWidth: 1,
    borderColor: Theme.PrimaryColor,
    borderRadius: 15,
  },
  iconInput:{
    marginHorizontal: 5
  },
});
