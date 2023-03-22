import React, { createContext, useState, useEffect, useContext } from "react";
import auth from '@react-native-firebase/auth'

const AuthContext = createContext(null);

export const AuthProvider = ({ children }) =>{

  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  const [authErro, setAuthErro] = useState(null);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged((authUser) => {
      if (authUser) {
        setUser(authUser);
      } else {
        const checkLoading = () => loading && setLoading(false);
        checkLoading();
      }
    });
    return subscriber;
  }, []);

  function signIn (email, senha){
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, senha).catch((error) => {
        setLoading(false);
        setAuthErro(error.code);
      });
  }

  function signOut(){
    auth().signOut(user).then(() => {
      setUser(null);
    });
  }

  return(
    <AuthContext.Provider value={{
      signed: user ? true : false,
      user: user,
      signIn: signIn,
      signOut: signOut,
      authErro: authErro,
      setAuthErro: setAuthErro,
      loading: loading
      }}
    >
      { children }
    </AuthContext.Provider>
  );
}

export function authUser(){
  return useContext(AuthContext);
}
