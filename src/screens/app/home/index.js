import React, { useState } from 'react';
import { Text, View } from 'react-native';
import styles from './styles';
import Card from '../../../components/home/Card';
import CustomListView from '../../../components/home/CustomListView';
import FilterPopUpMenu from '../../../components/home/FilterPopUpMenu';
import Theme from '../../../themes/LabKeyTheme';

export default function Home() {

	const [filter, setFilter] = useState({
		tableFilter: 2,
		label: 'Esse Mês'
	});
	const emprestimos = {
		data: [],
		total: 0
	};
	const chaves = {
		total: 0
	};
  
	return (
		<View style={styles.container}>
			<View style={styles.cards}>
				<Card
					titulo='Chaves Emprestadas'
					label={filter.label}
					quantidade={emprestimos.total}
					bgColor={Theme.PrimaryColor}
				/>
				<Card
					titulo='Chaves Disponíveis'
					label={null}
					quantidade={chaves.total}
					bgColor={Theme.PrimaryVariantColor}
				/>
			</View>
			<View style={styles.lista}>
				<View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
					<Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
					<FilterPopUpMenu filter={setFilter} />
				</View>
				<CustomListView
					itemList={emprestimos.data}
				/>
			</View>
		</View>
	);
};