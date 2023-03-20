import React, { useEffect, useState } from 'react';
import { Text, View } from 'react-native';
import Loading from '../../../components/common/Loading';
import FabLoan from '../../../components/home/FabLoan';
import styles from './styles';
import Card from '../../../components/home/Card';
import CustomListView from '../../../components/home/CustomListView';
import FilterPopUpMenu from '../../../components/home/FilterPopUpMenu';
import Theme from '../../../themes/LabKeyTheme';
import { useDataHome } from '../../../contexts/data';

export default function Home(){

	const { loans, keys, isLoading, filterLabel } = useDataHome();
  
	return (
		<>
			<View style={styles.container}>
				<View style={styles.cards}>
					<Card
						titulo='Chaves Emprestadas'
						label={filterLabel}
						quantidade={loans.length}
						bgColor={Theme.PrimaryColor}
					/>
					<Card
						titulo='Chaves Disponíveis'
						label={null}
						quantidade={keys.length}
						bgColor={Theme.PrimaryVariantColor}
					/>
				</View>
				<View style={styles.lista}>
					<View style={{flexDirection: 'row', alignItems:'center', justifyContent:'space-between'}}>
						<Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
						<FilterPopUpMenu />
					</View>
					{
						isLoading ?
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
