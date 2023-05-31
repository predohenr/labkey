import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  width: 100%;
  flex: 1;
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
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;
