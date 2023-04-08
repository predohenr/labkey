import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Header = styled.View`
  flex: 1;
  align-items: flex-start;
  margin-top: -${RFPercentage(5.7)}px;
  padding-horizontal: ${RFPercentage(1.2)}px;
  padding-bottom: ${RFPercentage(1.2)}px;
`;

export const Img = styled.Image`
  height: ${RFPercentage(12.7)}px;
  width: ${RFPercentage(12.7)}px;
  tint-color: ${({ theme }) => theme.COLORS.OnSURFACE};
  margin-bottom: -${RFPercentage(1.2)}px;
`;

export const Content = styled.View`
  width: 100%;
  flex-direction: row;
`;

export const ContainerIcons = styled.View`
  justify-content: center;
  align-items: center;
`;

export const ContainerNames = styled.View`
  justify-content: center;
  margin-left: ${RFPercentage(1)}px;
`;

export const Name = styled.Text`
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  margin-top: -${RFPercentage(0.6)}px;
  font-size: ${RFPercentage(2.5)}px;
`;

export const Email = styled.Text`
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  margin-top: -${RFPercentage(0.6)}px;
  font-size: ${RFPercentage(1.7)}px;
`;

export const List = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  padding-top: ${RFPercentage(1.2)}px;
`;

export const Bottom = styled.View`
  flex-direction: row;
  align-items: center;
  padding: ${RFPercentage(2.5)}px;
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_9};
`;

export const Company = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
