import { StyleSheet } from "react-native";
import Theme from "../../../themes/LabKeyTheme";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.BackGroundColor,
    },
    cards: {
      flexDirection: 'row',
      justifyContent:'space-around',
      marginTop: 10,
    },
    lista: {
      flex: 1,
      marginHorizontal: 10,
    },
    tituloLista:{
      fontSize: 22,
    },
});