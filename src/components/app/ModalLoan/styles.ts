import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.TRANSPARENT};
`;

export const Content = styled.View`
  flex: 1;
  position: absolute;
  width: 95%;
  border-radius: ${RFPercentage(1.2)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  elevation: 10;
`;

export const Header = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: ${RFPercentage(1)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_9};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;
`;

export const ContentMessage = styled.View`
  padding: ${RFPercentage(1.2)}px;
  margin-bottom: ${RFPercentage(2.5)}px;
`;

export const Label = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.2)}px;
`;

export const Value = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2.2)}px;
`;

export const ContainerButton = styled.View`
  align-items: center;
  margin-bottom: ${RFPercentage(2.5)}px;
`;
