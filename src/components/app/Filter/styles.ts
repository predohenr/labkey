import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
`;

export const PopUpMenu = styled.View`
  position: absolute;
  top: 25%;
  right: ${RFPercentage(1.2)}px;
  align-self: flex-end;
  padding-horizontal: ${RFPercentage(1.2)}px;
  padding-vertical: ${RFPercentage(0.6)}px;
  border-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
  elevation: 3;
`;

export const PopOption = styled.View`
  border-color: ${({ theme }) => theme.COLORS.GRAY_9};
  padding-vertical: ${RFPercentage(0.6)}px;
`;

export const PopText = styled.Text`
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  font-size: ${RFPercentage(2.5)}px;
`;
