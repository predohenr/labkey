import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Mensagem = styled.Text`
  align-self: flex-start;
  margin-top: -${RFPercentage(0.6)}px;
  margin-bottom: ${RFPercentage(0.3)}px;
  font-size: ${RFPercentage(1.8)}px;
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
