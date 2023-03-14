import { StyleSheet } from "react-native";
import Theme from "../../../themes/LabKeyTheme";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.BackGroundColor,
    },
    logoView:{
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    },
    logo:{
      maxWidth: 200,
      maxHeight: 200,
      height: '60%',
      width: '60%',
    },
    formView:{
      flex: 1,
      justifyContent:'flex-start',
      alignItems:'center',
      paddingTop: 8,
    },
});