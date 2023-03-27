import React, { createContext, useState, useEffect, useContext } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface Values {
  signed: boolean;
  user: FirebaseAuthTypes.User | null;
  signIn: Function;
  signOut: Function;
  authErro: string | null;
  setAuthErro: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

const AuthContext = createContext<Values>({} as Values);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authErro, setAuthErro] = useState<string | null>(null);

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

  function signIn(email: string, senha: string) {
    setLoading(true);
    auth()
      .signInWithEmailAndPassword(email, senha)
      .catch((error) => {
        setLoading(false);
        setAuthErro(error.code);
      });
  }

  function signOut() {
    auth()
      .signOut()
      .then(() => {
        setUser(null);
      });
  }

  return (
    <AuthContext.Provider
      value={{
        signed: user ? true : false,
        user: user,
        signIn: signIn,
        signOut: signOut,
        authErro: authErro,
        setAuthErro: setAuthErro,
        loading: loading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function authUser() {
  return useContext(AuthContext);
}
