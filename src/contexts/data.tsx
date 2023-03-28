import React, { createContext, useState, useEffect, useContext } from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

interface Option {
  start: Date;
  label: string;
}

interface LoadingStatus {
  loans: boolean;
  keys: boolean;
}

interface Values {
  loans: Array<any>;
  keys: Array<any>;
  isLoading: boolean;
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
  filter: Option;
  setFilter: React.Dispatch<React.SetStateAction<Option>>;
  options: Array<Option>;
}

const DataContext = createContext<Values>({} as Values);

export const DataProvider = ({ children }: { children?: React.ReactNode }) => {
  const [isLoadingLoans, setIsLoadingLoans] = useState<boolean>(true);
  const [isLoadingKeys, setIsLoadingKeys] = useState<boolean>(true);
  const [loans, setLoans] = useState<Array<any>>([]);
  const [keys, setKeys] = useState<Array<any>>([]);
  const date = new Date();
  const today = new Date(date.setHours(23, 59, 59, 999));
  const options = [
    {
      start: new Date(date.setHours(0, 0, 0, 0)),
      label: 'Hoje',
    },
    {
      start: new Date(date.getFullYear(), date.getMonth(), 1),
      label: 'Esse Mês',
    },
    {
      start: new Date(date.getFullYear(), date.getMonth() - 2),
      label: 'Últimos 3 messes',
    },
  ];
  const [filter, setFilter] = useState<Option>(options[1]);

  useEffect(() => {
    const userId = auth().currentUser?.uid;

    const subscriberLoans = firestore()
      .collection(`users/${userId}/loans`)
      .where('create_at', '>', firestore.Timestamp.fromDate(filter.start))
      .where('create_at', '<', firestore.Timestamp.fromDate(today))
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          return { id: doc.id, ...doc.data() };
        });
        setLoans(data);
      });

    const subscriberKeys = firestore()
      .collection(`users/${userId}/keys`)
      .onSnapshot((querySnapshot) => {
        const data = querySnapshot.docs.map((doc) => {
          let row = doc.data();
          return { value: doc.id, label: row.name, available: row.available };
        });
        setKeys(data);
      });

    return () => {
      subscriberLoans();
      subscriberKeys();
    };
  }, [filter]);

  return (
    <DataContext.Provider
      value={{
        loans: loans,
        keys: keys,
        isLoading: isLoadingLoans || isLoadingKeys,
        setIsLoading: setIsLoadingLoans,
        filter: filter,
        setFilter: setFilter,
        options: options,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export function useData() {
  return useContext(DataContext);
}

export function useDataHome() {
  const { loans, keys, isLoading, filter } = useContext<Values>(DataContext);
  const availableKeys = keys.filter((key) => key.available === true).length;
  return {
    loans: loans.length,
    keys: availableKeys,
    isLoading: isLoading,
    filterLabel: filter.label,
  };
}

export function useFilter() {
  const { setIsLoading, filter, setFilter, options } = useContext(DataContext);
  return {
    setIsLoading: setIsLoading,
    filter: filter,
    setFilter: setFilter,
    options: options,
  };
}

export function useLoans() {
  const { loans } = useContext(DataContext);
  return { loans: loans };
}

export function useKeys(onlyAvailable = false) {
  const { keys } = useContext(DataContext);
  if (onlyAvailable === true) {
    return { keys: keys.filter((key) => key.available === true) };
  }
  return { keys: keys };
}

export function useIsLoading() {
  const { isLoading } = useContext(DataContext);
  return { isLoading: isLoading };
}
