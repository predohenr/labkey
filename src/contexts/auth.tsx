import React, { createContext, useState, useEffect, useContext } from 'react';
import auth, { FirebaseAuthTypes } from '@react-native-firebase/auth';

export interface Values {
  signed: boolean;
  user: FirebaseAuthTypes.User | null;
  signIn: Function;
  signUp: Function;
  signOut: Function;
  forgotPassword: Function;
  authErro: string | null;
  newErro: string | null;
  forgotErro: string | null;
  setAuthErro: React.Dispatch<React.SetStateAction<string | null>>;
  setNewErro: React.Dispatch<React.SetStateAction<string | null>>;
  setForgotErro: React.Dispatch<React.SetStateAction<string | null>>;
  loading: boolean;
}

const AuthContext = createContext<Values>({} as Values);

export const AuthProvider = ({ children }: { children?: React.ReactNode }) => {
  const [user, setUser] = useState<FirebaseAuthTypes.User | null>(null);
  const [loading, setLoading] = useState(true);
  const [authErro, setAuthErro] = useState<string | null>(null);
  const [newErro, setNewErro] = useState<string | null>(null);
  const [forgotErro, setForgotErro] = useState<string | null>(null);

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

  function signUp(nome: string, email: string, senha: string) {
    setLoading(true);
    auth()
      .createUserWithEmailAndPassword(email, senha)
      .then((result) => {
        return result.user.updateProfile({
          displayName: nome,
        });
      })
      .catch((error) => {
        setLoading(false);
        setNewErro(error.code);
      });
  }

  function forgotPassword(email: string){
    setLoading(true);
    auth().sendPasswordResetEmail(email)
    .then((result) => {
      setLoading(false);
      setForgotErro('success/send-email');
    })
    .catch((error) => {
      setLoading(false);
      setForgotErro(error.code);
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
        signUp: signUp,
        signOut: signOut,
        forgotPassword: forgotPassword,
        newErro: newErro,
        authErro: authErro,
        setNewErro: setNewErro,
        setAuthErro: setAuthErro,
        loading: loading,
        forgotErro: forgotErro,
        setForgotErro: setForgotErro,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export function authUser() {
  return useContext(AuthContext);
}
