import React, { useState } from "react";
import { Modal, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { IconButton } from '@react-native-material/core';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../../themes/LabKeyTheme';

export default function FilterPopUpMenu({ filter }) {

	const [visible, setVisible] = useState(false);
	const date = new Date();
	const startMonth = new Date(date.getFullYear(), date.getMonth(), 1);
	const end = new Date(date.setHours(23, 59, 59, 999));
	const startDay = new Date(date.setHours(0, 0, 0, 0));
	const start3Month = new Date(date.getFullYear(), date.getMonth() - 2);
	const options = [
		{
		  start: startDay,
		  end: end,
		  label: 'Hoje',
		},
		{
		  start: startMonth,
		  end: end,
		  label: 'Esse Mês'
		},
		{
		  start: start3Month,
		  end: end,
		  label: 'Últimos 3 messes',
		}
	];

  return (
		<>
			<IconButton 
				icon={() => <Icon name="filter-variant" size={18}/>}
				onPress={() => setVisible(true)}
			/>
			<Modal transparent visible={ visible }>
				<View style={{ flex: 1 }} onTouchEnd={() => setVisible(false)}>
					<View style={ styles.popUpMenu }>
						{options.map( (op, i) => (
							<View
							style={[styles.popOption, { borderBottomWidth: i === options.length - 1 ? 0 : 1 }]}
							key={i}>
								<TouchableOpacity onPress={() => {filter({start: op.start, end: op.end, label:op.label})}} >
									<Text style={styles.popOptionText}>{op.label}</Text>
								</TouchableOpacity>
							</View>
						))}
					</View>
				</View>
			</Modal>
		</>
  );
}

const styles = StyleSheet.create({
	popUpMenu: {
		backgroundColor: Theme.BackGroundColor,
		borderWidth: 1,
		borderColor: Theme.OnBackGroundColor,
		paddingHorizontal: 10,
		paddingVertical: 5,
		position: 'absolute',
		top: '25%',
		right: 10,
		alignSelf:"flex-end"
	},
	popOption:{
		borderColor:'#999999',
		paddingVertical: 5,
	},
	popOptionText:{
		color: Theme.OnBackGroundColor,
		fontSize: 20,
	},
});
  