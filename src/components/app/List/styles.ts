import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  /* margin-horizontal: ${RFPercentage(1.2)}px; */
  margin-bottom: ${RFPercentage(3.8)}px;
`;

export const NoData = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Message = styled.Text`
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const Header = styled.View`
  border-top-width: 1px;
  border-top-color: ${({ theme }) => theme.COLORS.GRAY_9};
`;

export const Footer = styled.View`
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
