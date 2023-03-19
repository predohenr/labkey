import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';
import Loading from '../../../components/common/Loading';
import FabLoan from '../../../components/home/FabLoan';
import styles from './styles';
import Card from '../../../components/home/Card';
import CustomListView from '../../../components/home/CustomListView';
import FilterPopUpMenu from '../../../components/home/FilterPopUpMenu';
import Theme from '../../../themes/LabKeyTheme';

export default function Home(){

	const [loading, setLoading] = useState(true);
	const [loans, setLoans] = useState([]);
	const [keys, setKeys] = useState([]);
	const date = new Date();
	const start = new Date(date.getFullYear(), date.getMonth(), 1);
	const end = new Date(date.setHours(23, 59, 59, 999));
	const [filter, setFilter] = useState({
		start: start,
		end: end,
		label: 'Esse Mês'
	});

	useEffect(() => {
		const userId = auth().currentUser.uid;
		const subscriberKeys = firestore().collection(`users/${userId}/keys`)
			.where('available', '==', true)
			.onSnapshot(querySnapshot => {
				const data = querySnapshot.docs.map(doc => {
					return {
						value: doc.id,
						label: doc.data().name
					};
			  });
			  setKeys(data);
			});
		const subscriberLoans = firestore().collection(`users/${userId}/loans`)
		.where('create_at', '>', firestore.Timestamp.fromDate(filter.start))
  		.where('create_at', '<', firestore.Timestamp.fromDate(filter.end))
		  .onSnapshot(querySnapshot => {
			  const data = querySnapshot.docs.map(doc => {
					return {
						id: doc.id,
						...doc.data()
					};
			  });
			  setLoans(data);
			  setLoading(false);
		  });
		
		return () => {
			subscriberKeys(); 
			subscriberLoans();
		};
	}, [filter])
  
	return (
		<>
			<View style={styles.container}>
				<View style={styles.cards}>
					<Card
						titulo='Chaves Emprestadas'
						label={filter.label}
						quantidade={loans.length}
						bgColor={Theme.PrimaryColor}
						loading={loading}
					/>
					<Card
						titulo='Chaves Disponíveis'
						label={null}
						quantidade={keys.length}
						bgColor={Theme.PrimaryVariantColor}
						loading={loading}
					/>
				</View>
				<View style={styles.lista}>
					<View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
						<FilterPopUpMenu filter={setFilter} />
					</View>
					{
						loading ?
						<View style={{flex: 1, alignItems:'center', justifyContent:'center'}}><Loading /></View>
						:
						<CustomListView itemList={loans} type='emprestimo' />
					}
				</View>
			</View>
			<FabLoan chaves={keys} />
		</>
	);
};
