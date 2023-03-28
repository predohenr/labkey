import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ContainerCards = styled.View`
  flex-direction: row;
  justify-content: space-around;
  margin-top: ${RFPercentage(1.2)}px;
`;

export const ContainerLista = styled.View`
  flex: 1;
  margin-horizontal: ${RFPercentage(1.2)}px;
`;

export const HeaderLista = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TitleLista = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
