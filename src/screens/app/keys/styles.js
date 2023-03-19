import { StyleSheet } from "react-native";
import Theme from "../../../themes/LabKeyTheme";

export default StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
  lista: {
    flex: 1,
    padding: 10,
  },
  tituloLista:{
    fontSize: 22,
  },
});