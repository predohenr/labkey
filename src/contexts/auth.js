import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from '../services/auth';
import * as store from '../services/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authErro, setAuthErro] = useState(false);

  useEffect(() => {
    async function getDataStoredData(){
      const userId = await AsyncStorage.getItem('@LK:UserId');
      const userToken = await AsyncStorage.getItem('@LK:UserToken');
      if (userId && userToken){
        setUser(userId);
      }
      setLoading(false);
    }
    getDataStoredData();
  }, []);

  async function signIn (email, senha){
    auth.signIn(email, senha).then((response) => {
      store.storeUserId(response.uid);
      store.storeUserToken(response.stsTokenManager.accessToken);
      setUser(response.uid);
    });
  };
  async function signOut(){
    auth.signOutApp().then((response) =>{
      response && AsyncStorage.clear().then(() => {
          setUser({});
        })
    });
  };

  return(
    <AuthContext.Provider value={{
      signed: Object.keys(user).length === 0 ? false : true,
      user: user,
      signIn: signIn,
      signOut: signOut,
      authErro: authErro,
      loading: loading
      }}
    >
      { children }
    </AuthContext.Provider>
  )
}

export function authUser(){
  return useContext(AuthContext);
};