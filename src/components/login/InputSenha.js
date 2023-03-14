import React, { useState } from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../../themes/LabKeyTheme';

export default function InputSenha({ submit, value, setSenha }) {

  const [passwordEye, setPasswordEye] = useState({icon: 'eye', security: true});
  const changeVisibility = () => {
    setPasswordEye({
      icon: passwordEye.security === true ? 'eye-off' : 'eye',
      security: !passwordEye.security
    });
  };

  return (
    <View style={styles.inputComponent}>
      <Icon 
        name='form-textbox-password'
        size={30}
        color={Theme.OnPrimaryColor}
        style={styles.iconInput}
      />
      <View style={styles.inputComponentIcon}>
        <TextInput
        id='inputSenha'
        secureTextEntry={passwordEye.security}
        style={styles.inputSenha}
        cursorColor={Theme.PrimaryVariantColor}
        placeholder="Digite sua Senha"
        ref={(e) => { this.inputSenha = e }}
        onSubmitEditing={() => submit()}
        blurOnSubmit={false}
        onChangeText={(e) => setSenha(e)}
        value={value}
        />
        <Icon
          name={passwordEye.icon}
          size={30}
          color={Theme.PrimaryVariantColor}
          style={styles.iconInput}
          onPress={changeVisibility}
        />
      </View>
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
    marginBottom: 5,
  },
  inputComponentIcon:{
    flex: 1,
    flexDirection: 'row',
    backgroundColor: 'white',
    height:'100%',
    alignItems: 'center',
    borderRadius: 15,
    borderWidth: 1,
    borderColor: Theme.PrimaryColor
  },
  inputSenha:{
    flex:1,
    height:'100%',
    paddingHorizontal: 5
  },
  iconInput:{
    marginHorizontal: 5
  },
});
