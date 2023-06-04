import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableHighlight`
  width: 95%;
  height: ${RFPercentage(6)}px;
  border-radius: ${RFPercentage(1.2)}px;
  justify-content: center;
  elevation: 3;
  margin-bottom: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.2)}px;
  text-transform: uppercase;
  align-self: center;
  color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;
