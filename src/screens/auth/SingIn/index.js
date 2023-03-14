import React from 'react';
import { Image, Keyboard, TouchableWithoutFeedback, View } from 'react-native';
import styles from './styles';
import {authUser} from '../../../contexts/auth';
import FormLogin from '../../../components/login/FormLogin';
import Loading from '../../../components/common/Loading';

export default function SingIn() {

  const { signIn, authErro, setAuthErro, loading } = authUser();
  const handleSingIn = (email, senha) => {
    signIn(email, senha);
  };
  
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss} accessible={false}>
      <View style={styles.container}>
        <View style={styles.logoView}>
          <Image
            style={styles.logo}
            source={require('../../../assets/logo.png')}
          />
        </View>
        <View style={styles.formView}>
          {loading ? 
            <Loading />
            :
            <FormLogin onSubmit={handleSingIn} erroLogin={authErro} setAuthErro={setAuthErro} />
          }
        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}