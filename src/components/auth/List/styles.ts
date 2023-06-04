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

export const ContainerHeader = styled.View`
  flex: 1;
  flex-direction: row;
  justify-content: space-around;
  align-items: flex-end;
  padding-bottom: ${RFPercentage(0.5)}px;
  border-bottom-color: ${({ theme }) => theme.COLORS.GRAY_9};
  border-bottom-width: 1px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Subtitle = styled.Text`
  margin-left: ${RFPercentage(1)}px;
  font-size: ${RFPercentage(2)}px;
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const ContainerSubtitle = styled.View`
  flex-direction: row;
  align-items: center;
`;
