import { StyleSheet } from "react-native";

export default StyleSheet.create({
  container: {
    flex: 1,
    padding: 10,
    borderBottomWidth: 1,
    borderLeftWidth: 1,
    borderRightWidth: 1,
    borderColor: '#999999',
    backgroundColor: '#FFFFFF',
  },
  touch:{
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent:'space-between',
  },
  header:{
    fontSize: 18,
    fontWeight: 'bold'
  },
})
