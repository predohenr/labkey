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

export const Fab = styled.TouchableOpacity.attrs({
  activeOpacity: 0.6,
})`
  justify-content: center;
  align-items: center;
  height: ${RFPercentage(7)}px;
  width: ${RFPercentage(7)}px;
  border-radius: ${RFPercentage(3.5)}px;
  background-color: ${({ theme }) => theme.COLORS.SECONDARY_700};
  transform: rotate(-90deg);
`;
