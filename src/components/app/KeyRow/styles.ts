import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  align-itens: center;
  justify-content: space-between;
  padding: ${RFPercentage(1.2)}px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_9};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;

export const Title = styled.Text`
  align-self: center;
  font-size: ${RFPercentage(2.2)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;
