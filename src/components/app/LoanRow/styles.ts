import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  padding: ${RFPercentage(1.2)}px;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_9};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;

export const Touch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const TextContainer = styled.View`
  flex-direction: column;
`;

export const Title = styled.Text`
  font-size: ${RFPercentage(2.2)}px;
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const Details = styled.Text`
  font-size: ${RFPercentage(1.6)}px;
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
`;
