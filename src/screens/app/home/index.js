import React from 'react';
import { Text, View } from 'react-native';
import FabLoan from '../../../components/home/FabLoan';
import styles from './styles';
import Card from '../../../components/home/Card';
import FilterPopUpMenu from '../../../components/home/FilterPopUpMenu';
import Theme from '../../../themes/LabKeyTheme';
import { useDataHome } from '../../../contexts/data';
import List from '../../../components/home/List';
import Loading from '../../../components/common/Loading'

export default function Home(){

	const { loans, keys, isLoading,filterLabel } = useDataHome();

	return (
		<>
			<View style={styles.container}>
				<View style={styles.cards}>
					<Card
						titulo='Chaves Emprestadas'
						label={filterLabel}
						quantidade={loans}
						bgColor={Theme.PrimaryColor}
					/>
					<Card
						titulo='Chaves Disponíveis'
						label={null}
						quantidade={keys}
						bgColor={Theme.PrimaryVariantColor}
					/>
				</View>
				<View style={styles.lista}>
					<View style={styles.listaHeader}>
						<Text style={styles.tituloLista}>Lista de Empréstimos:</Text>
						<FilterPopUpMenu />
					</View>
          {isLoading ? <View style={styles.loading}><Loading /></View> : <List />}
				</View>
			</View>
			<FabLoan />
		</>
	);
}
