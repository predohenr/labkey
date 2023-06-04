import React, { createContext, useState, useEffect, useContext } from 'react';
import firestore from '@react-native-firebase/firestore';

interface Values {
  loading: boolean;
  searching: boolean;
  setSearching: React.Dispatch<React.SetStateAction<boolean>>;
  setError: React.Dispatch<React.SetStateAction<string | null>>;
  keys: Array<any>;
  findKeys: Function;
  error: string | null;
  userName: string;
}

const DataContext = createContext<Values>({} as Values);

export const AuthDataProvider = ({
  children,
}: {
  children?: React.ReactNode;
}) => {
  const [loading, setLoading] = useState<boolean>(true);
  const [searching, setSearching] = useState<boolean>(true);
  const [userId, setUserId] = useState<string>('');
  const [userName, setUserName] = useState<string>('');
  const [keys, setKeys] = useState<Array<any>>([]);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (!searching && userId.length > 0) {
      const subscriberKeys = firestore()
        .collection(`users/${userId}/keys`)
        .orderBy('name', 'asc')
        .onSnapshot((querySnapshot) => {
          const data = querySnapshot.docs.map((doc) => {
            let row = doc.data();
            return { value: doc.id, label: row.name, available: row.available };
          });
          setKeys(data);
          setLoading(false);
        });

      return () => {
        subscriberKeys();
      };
    }
  }, [userId]);

  function findKeys(password: string) {
    setLoading(true);
    setSearching(false);
    firestore()
      .collection('passwords_keys')
      .doc(password)
      .get()
      .then((snapshot) => {
        if (snapshot.exists) {
          setLoading(false);
          setUserId(snapshot.data()?.user_id);
          setUserName(snapshot.data()?.user_name);
        } else {
          setSearching(true);
          setError('search/not-find');
        }
      });
  }

  return (
    <DataContext.Provider
      value={{
        loading: loading,
        keys: keys,
        searching: searching,
        setSearching: setSearching,
        findKeys: findKeys,
        error: error,
        userName: userName,
        setError: setError,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  return useContext<Values>(DataContext);
}
