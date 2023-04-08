import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ContainerList = styled.View`
  flex: 1;
  padding: ${RFPercentage(1.2)}px;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  margin-bottom: ${RFPercentage(1.2)}px;
`;

export const Titulo = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerLoading = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
`;
