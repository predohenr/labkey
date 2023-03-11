import React, { useState } from 'react';
import { Alert, Button, Image, Keyboard, StyleSheet, TextInput, TouchableWithoutFeedback, View } from 'react-native';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import { useNavigation, StackActions } from '@react-navigation/native';
import Theme from '../themes/LabKeyTheme';

export default function LoginScreen() {

  const navigation = useNavigation();

  const [usuario, setUsuario] = useState('');
  const [senha, setSenha] = useState('');
  const [passwordEye, setPasswordEye] = useState({
    icon: 'eye',
    security: true
  });

  const changeVisibility = () => {
    setPasswordEye({
      icon: passwordEye.security === true ? 'eye-off' : 'eye',
      security: !passwordEye.security
    });
  }

  const logar = () => {
    if (usuario.toLocaleLowerCase() === 'admin' && senha.toLocaleLowerCase() === 'admin'){
      navigation.dispatch(
        StackActions.replace('HomeNavigator')
      );
    } else {
      setUsuario('');
      setSenha('');
      Alert.alert(
        title='Usuário ou Senha Incorreto(s)!',
        message='Por favor tente novamente.'
        );
    }
  }

  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../assets/logo.png')}
          />
        </View>
        <View style={styles.formView}>

          <View style={styles.inputComponent}>
            <Icon name='account' size={30} color={Theme.OnPrimaryColor} style={styles.iconInput}/>
            <TextInput
              id='inputUsuario'
              style={styles.input}
              cursorColor={Theme.PrimaryVariantColor}
              placeholder="Digite seu Usuário"
              onSubmitEditing={() => { this.inputSenha.focus() }}
              blurOnSubmit={false}
              onChangeText={(input) => setUsuario(input)}
              value={usuario}
            />
          </View>

          <View style={styles.inputComponent}>
            <Icon name='form-textbox-password' size={30} color={Theme.OnPrimaryColor} style={styles.iconInput}/>
            <View style={styles.inputComponentIcon}>
              <TextInput
                id='inputSenha'
                secureTextEntry={passwordEye.security}
                style={styles.inputSenha}
                cursorColor={Theme.PrimaryVariantColor}
                placeholder="Digite sua Senha"
                ref={(input) => { this.inputSenha = input }}
                onSubmitEditing={logar}
                onChangeText={(senha) => setSenha(senha)}
                value={senha}
              />
              <Icon name={passwordEye.icon} size={30} color={Theme.PrimaryVariantColor} style={styles.iconInput} onPress={changeVisibility}/>
            </View>
            
          </View>
          
          <Button title='Entrar' color={Theme.PrimaryColor} onPress={logar} />
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackGroundColor,
  },
  logoView:{
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  logo:{
    maxWidth: 200,
    maxHeight: 200,
    height: '60%',
    width: '60%',
  },
  formView:{
    flex: 1,
    justifyContent:'flex-start',
    alignItems:'center',
    paddingTop: 8,
  },
  input: {
    flex: 1,
    height: '100%',
    paddingHorizontal: 5,
    backgroundColor: Theme.BackGroundColor,
    color: Theme.OnBackGroundColor,
    borderWidth: 1,
    borderColor: Theme.PrimaryColor,
    borderRadius: 15,
  },
  inputSenha:{
    flex:1,
    height:'100%',
    paddingHorizontal: 5
  },
  iconInput:{
    marginHorizontal: 5
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
  inputComponent: {
    height: 45,
    width: '80%',
    borderRadius: 15,
    backgroundColor: Theme.PrimaryColor,
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom: 10,
  }
});
