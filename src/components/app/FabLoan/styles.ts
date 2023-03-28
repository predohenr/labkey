import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  position: absolute;
  right: ${RFPercentage(2.5)}px;
  bottom: ${RFPercentage(2.5)}px;
  z-index: 3;
  elevation: 3;
  background-color: transparent;
`;

export const Fab = styled.TouchableOpacity`
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(6.1)}px;
  width: ${RFPercentage(6.1)}px;
  border-radius: ${RFPercentage(3)}px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_700};
`;
