import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${RFPercentage(1.2)}px;
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_9};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: ${RFPercentage(1.2)}px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: ${RFPercentage(2.2)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;
