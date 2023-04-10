import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const ContainerInputText = styled.TextInput`
  height: ${RFPercentage(5.7)}px;
  width: 80%;
  padding-horizontal: ${RFPercentage(0.6)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  border-bottom-width: 1px;
  border-bottom-color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  margin-bottom: ${RFPercentage(3.8)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2)}px;
`;
