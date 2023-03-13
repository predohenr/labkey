import React, { useEffect, useState } from 'react';
import { Alert, Image, Keyboard, StyleSheet, TouchableWithoutFeedback, View } from 'react-native';
import { useNavigation, StackActions } from '@react-navigation/native';
import app from '../config/firebase';
import { getAuth, signInWithEmailAndPassword, onAuthStateChanged } from "firebase/auth";
import Theme from '../themes/LabKeyTheme';
import FormLogin from '../components/login/FormLogin';

export default function LoginScreen() {

  const navigation = useNavigation();

  const [erroLogin, setErroLogin] = useState(false);

  const handleLogin = (email, senha) => {
    const auth = getAuth(app);
    signInWithEmailAndPassword(auth, email, senha).then((userCredential) => {
      const user = userCredential.user;
      navigation.dispatch(
        StackActions.replace('HomeNavigator')
      );
    }).catch((error) => {
      setErroLogin(true);
      const errorCode = error.code;
      const errorMessage = error.message;
      Alert.alert(
        title='Usuário ou Senha Incorreto(s)!',
        message='Por favor tente novamente.'
        );
    });
  };

  useEffect(() => {
    const auth = getAuth(app);
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/firebase.User
        const uid = user.uid;
        navigation.dispatch(
          StackActions.replace('HomeNavigator')
        );
      }
    });
  }, []);

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
          <FormLogin onSubmit={handleLogin} erroLogin={erroLogin} />
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
});
