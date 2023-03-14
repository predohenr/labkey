import { StyleSheet } from "react-native";
import Theme from "../../../themes/LabKeyTheme";


export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.BackgroundColor,
    },
    cards: {
      flexDirection: 'row',
      justifyContent:'center',
    },
    lista: {
      flex: 1,
      paddingTop: 10,
      marginHorizontal: 10,
    },
    tituloLista:{
      fontSize: 22
    },
});