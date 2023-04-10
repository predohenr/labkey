import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  padding-top: 15%;
`;

export const Header = styled.View`
  padding-top: ${RFPercentage(1.2)}px;
  padding-left: ${RFPercentage(1)}px;
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.5)}px;
`;
