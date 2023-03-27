import { StyleSheet } from 'react-native';
import Theme from '../../../themes/LabKeyTheme';

export default StyleSheet.create({
  container: {
    flex: 1,
    position: 'absolute',
    width: '95%',
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#999999',
    backgroundColor: Theme.BackGroundColor,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    paddingLeft: 8,
    borderBottomWidth: 1,
  },
  fontTitulo: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  body: {
    paddingHorizontal: 8,
    marginBottom: 20,
  },
  fontCorpo: {
    fontSize: 18,
  },
  button: {
    alignItems: 'center',
    marginBottom: 20,
  },
});
