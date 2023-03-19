import { StyleSheet } from "react-native";
import Theme from "../../../themes/LabKeyTheme";

export default StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: 'transparent',
      position: 'absolute',
      bottom: 20,
      right: 20,
      zIndex:3,
      elevation:3,
    },
    fab: {
      justifyContent: 'center',
      alignItems:'center',
      height: 48,
      width: 48,
      borderRadius: 24,
      backgroundColor: Theme.SecondaryColor,
    },
    root:{
      elevation:1,
      zIndex:1,
    },
    modalStyle:{
      backgroundColor: Theme.BackGroundColor,
    },
    handleStyle:{
      backgroundColor: Theme.PrimaryColor,
    },
  });