import React, { createContext, useState, useEffect, useContext } from "react";
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const DataContext = createContext(null);

export const DataProvider = ({ children }) => {

	const [isLoading, setIsLoading] = useState(true);
	const [loans, setLoans] = useState([]);
	const [keys, setKeys] = useState([]);
	const date = new Date();
	const today = new Date(date.setHours(23, 59, 59, 999));
	const options = [
		{
		  start: new Date(date.setHours(0, 0, 0, 0)),
		  finish: today,
		  label: 'Hoje',
		},
		{
		  start: new Date(date.getFullYear(), date.getMonth(), 1),
		  finish: today,
		  label: 'Esse Mês'
		},
		{
		  start: new Date(date.getFullYear(), date.getMonth() - 2),
		  finish: today,
		  label: 'Últimos 3 messes',
		}
	];
	const [filter, setFilter] = useState(options[1]);

	useEffect(() => {

		const userId = auth().currentUser.uid;

		const subscriberLoans = firestore().collection(`users/${userId}/loans`)
			.where('create_at', '>', firestore.Timestamp.fromDate(filter.start))
  		.where('create_at', '<', firestore.Timestamp.fromDate(filter.finish))
		  .onSnapshot(querySnapshot => {
			  const data = querySnapshot.docs.map(doc => {
					return {id: doc.id, ...doc.data()};
			  });
				setLoans(data);
		  });

		const subscriberKeys = firestore().collection(`users/${userId}/keys`)
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					let row = doc.data();
					return {value: doc.id, label: row.name, available: row.available};
			  });
				setKeys(data);
				setIsLoading(false);
			});

		return () => { subscriberLoans(); subscriberKeys(); };
	}, [filter]);

	return(
		<DataContext.Provider value={{
			loans: loans,
			keys: keys,
			isLoading: isLoading,
			setIsLoading: setIsLoading,
			filter: filter,
			setFilter: setFilter,
			options: options
		}}
		>
			{ children }
		</DataContext.Provider>
	);
};

export function useData(){
  return useContext(DataContext);
};

export function useDataHome(){
	const { loans, keys, isLoading, filter } = useContext(DataContext);
	const availableKeys = keys.filter(key => key.available === true);
  return { loans: loans, keys: availableKeys, isLoading: isLoading, filterLabel: filter.label };
};

export function useFilter(){
	const { setIsLoading, filter, setFilter, options } = useContext(DataContext);
	return { setIsLoading: setIsLoading, filter:filter, setFilter: setFilter, options: options };
};
