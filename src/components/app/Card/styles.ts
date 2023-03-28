import { RFPercentage } from 'react-native-responsive-fontsize';
import styled from 'styled-components/native';

export const Container = styled.View`
  height: ${RFPercentage(12.7)}px;
  width: 45%;
  border-radius: ${RFPercentage(1.2)}px;
  elevation: 10;
`;

export const Title = styled.Text`
  margin-top: ${RFPercentage(1)}px;
  margin-left: ${RFPercentage(1)}px;
  font-size: ${RFPercentage(2)}px;
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
`;

export const SubTitle = styled.Text`
  margin-left: ${RFPercentage(1)}px;
  font-size: ${RFPercentage(1.5)}px;
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
`;

export const QuantityContainer = styled.View`
  position: absolute;
  bottom: ${RFPercentage(1.2)}px;
  right: ${RFPercentage(0.6)}px;
`;

export const Quantity = styled.Text`
  align-self: flex-end;
  margin-right: ${RFPercentage(2.5)}px;
  font-size: ${RFPercentage(5.3)}px;
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
`;
