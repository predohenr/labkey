import AsyncStorage from '@react-native-async-storage/async-storage';

export async function storeUserToken(token) {
  try {
      await AsyncStorage.setItem('@LK:UserToken', token);
    } catch (e) {}
};

export async function storeUser(user) {
  try {
      await AsyncStorage.setItem('@LK:User', user);
    } catch (e) {}
};
