import React from 'react';
import { View, Image, StyleSheet, Text } from 'react-native';
import { DrawerContentScrollView, DrawerItemList, DrawerItem } from '@react-navigation/drawer';
import { authUser } from '../../contexts/auth';
import auth from '@react-native-firebase/auth';
import Icon from "@expo/vector-icons/MaterialCommunityIcons";
import Theme from '../../themes/LabKeyTheme';

export default function CustomDrawer(props){

  const { signOut } = authUser();
  const logout = () => {
    signOut();
  };

  return(
      <View style={styles.container}>
        <DrawerContentScrollView contentContainerStyle={{ backgroundColor: Theme.PrimaryColor }} {...props}>
          <View style={styles.header}>
            <Image 
              style={styles.logo}
              source={require('../../assets/logo_branco.png')}
            />

            <View style={{ width:'100%', flexDirection:'row' }}>
              <View style={{ alignItems:'center', justifyContent:'center' }}>
                <Icon name='account' size={20} color={Theme.OnPrimaryColor} />
                <Icon name='email' size={14} color={Theme.OnPrimaryColor} />
              </View>

              <View style={{ justifyContent:'center', marginLeft: 8 }}>
                <Text style={[styles.text, { fontSize: 20, marginTop: -5 }]}>{auth().currentUser.displayName}</Text>
                <Text style={[styles.text, { fontSize: 14, marginTop: -5 }]}>{auth().currentUser.email}</Text>
              </View>
            </View>

          </View>
          <View style={styles.listContent}>
            <DrawerItemList {...props} />
            <DrawerItem
              style={{ borderTopWidth: 1, borderTopColor: '#999999' , borderRadius: 0}}
              label='Sair'
              activeTintColor={Theme.OnPrimaryColor}
              inactiveTintColor='#999999'
              labelStyle={{marginLeft: -25, color:'#999999' }}
              icon={() => <Icon name='logout' size={30} color='#999999' />}
              onPress={logout}
            />
          </View>
        </DrawerContentScrollView>
        <View style={styles.bottom}>
          <Icon name='copyright' size={12} color='black'/>
          <Text>Titan Tech</Text>
        </View>
      </View>
  );
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: Theme.BackGroundColor,
    },
    logo:{
      height: 100,
      width: 100,
      tintColor: Theme.OnPrimaryColor,
      marginBottom: -10,
    },
    text:{
      color: Theme.OnPrimaryColor,
    },
    listContent:{
      flex: 1,
      backgroundColor: Theme.BackGroundColor,
      paddingTop: 10
    },
    header:{
      flex: 1,
      alignItems: 'flex-start',
      marginTop: -45,
      paddingHorizontal: 10,
      paddingBottom: 10,
    },
    bottom:{
      padding: 20,
      flexDirection: 'row',
      alignItems: 'center',
      borderTopWidth: 1,
      borderTopColor: '#999999'
    },
  });