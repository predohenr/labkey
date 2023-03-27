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
  listaHeader:{
    flexDirection: 'row',
    alignItems:'center',
    justifyContent:'space-between',
    marginBottom: 10,
  },
  tituloLista:{
    fontSize: 22,
  },
  loading:{
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
});
