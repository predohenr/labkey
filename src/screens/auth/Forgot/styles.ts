import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Header = styled.View`
  width: 100%;
  height: 10%;
  elavation: 10px;
  z-index: 3;
  position: absolute;
  justify-content: center;
  padding-left: 4%;
  border-bottom-left-radius: ${RFPercentage(2)}px;
  border-bottom-right-radius: ${RFPercentage(2)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
  font-size: ${RFPercentage(2.8)}px;
`;

export const SubTitle = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
  font-size: ${RFPercentage(1.8)}px;
`;

export const TitleForm = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  font-size: ${RFPercentage(2.5)}px;
`;

export const SubTitleForm = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_6};
  font-size: ${RFPercentage(2)}px;
  margin-bottom: 30px;
`;

export const ContainerCenter = styled.View`
  flex: 1;
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ContainerList = styled.View`
  flex: 1;
  width: 100%;
`;

export const ContainerSubmit = styled.View`
  width: 100%;
  align-items: center;
  margin-top: ${RFPercentage(3)}px;
`;
