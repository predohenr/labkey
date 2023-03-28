import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.TouchableOpacity`
  width: ${RFPercentage(15.3)}px;
  height: ${RFPercentage(5.1)}px;
  border-radius: ${RFPercentage(1.2)}px;
  justify-content: center;
  elevation: 5;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: ${RFPercentage(2.1)}px;
  text-transform: uppercase;
  align-self: center;
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
`;
