import React, { createContext, useState, useEffect, useContext } from "react";
import * as auth from '../services/auth';
import * as store from '../services/storage';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState({});
  const [loading, setLoading] = useState(true);
  const [authErro, setAuthErro] = useState({status: false, erro: null});

  useEffect(() => {
    async function getDataStoredData(){
      const user = await AsyncStorage.getItem('@LK:User');
      if (user){
        setUser(JSON.parse(user));
      }
      setLoading(false);
    }
    getDataStoredData();
  }, []);

  async function signIn (email, senha){
    setLoading(true);
    auth.signIn(email, senha).then((response) => {
      if (response.status){
        store.storeUser(JSON.stringify(response.data));
        setUser(response.data);
      } else {
        setLoading(false);
        setAuthErro({status: true, code: response.errorCode});
      }
    });
  };
  async function signOut(){
    auth.signOutApp().then((response) =>{
      response && AsyncStorage.clear().then(() => {
          setLoading(false);
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