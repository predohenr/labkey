import React from 'react';
import {
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem,
} from '@react-navigation/drawer';
import { authUser } from '../../../contexts/auth';
import auth from '@react-native-firebase/auth';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import {
  Container,
  Header,
  Img,
  Content,
  ContainerIcons,
  ContainerNames,
  Name,
  Email,
  List,
  Bottom,
  Company,
} from './styles';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function CustomDrawer(props: any) {
  const theme = useTheme();
  const { signOut } = authUser();
  const logout = () => {
    signOut();
  };

  return (
    <Container>
      <DrawerContentScrollView
        contentContainerStyle={{ backgroundColor: theme.COLORS.PRIMARY_500 }}
        {...props}
      >
        <Header>
          <Img source={require('../../../assets/logo_branco.png')} />

          <Content>
            <ContainerIcons>
              <Icon
                name="account"
                size={RFPercentage(2.5)}
                color={theme.COLORS.OnSURFACE}
              />
              <Icon
                name="email"
                size={RFPercentage(1.7)}
                color={theme.COLORS.OnSURFACE}
              />
            </ContainerIcons>

            <ContainerNames>
              <Name>{auth().currentUser?.displayName}</Name>
              <Email>{auth().currentUser?.email}</Email>
            </ContainerNames>
          </Content>
        </Header>
        <List>
          <DrawerItemList {...props} />
          <DrawerItem
            style={{
              borderTopWidth: 1,
              borderTopColor: theme.COLORS.GRAY_9,
              borderRadius: 0,
            }}
            label="Sair"
            activeTintColor={theme.COLORS.OnSURFACE}
            inactiveTintColor={theme.COLORS.GRAY_9}
            labelStyle={{
              marginLeft: -RFPercentage(3),
              color: theme.COLORS.GRAY_9,
            }}
            icon={() => (
              <Icon
                name="logout"
                size={RFPercentage(3.5)}
                color={theme.COLORS.GRAY_9}
              />
            )}
            onPress={logout}
          />
        </List>
      </DrawerContentScrollView>
      <Bottom>
        <Icon
          name="copyright"
          size={RFPercentage(1.5)}
          color={theme.COLORS.OnBACKGROUND}
        />
        <Company>Titan Tech</Company>
      </Bottom>
    </Container>
  );
}
