import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ImgLogo = styled.Image.attrs({
  resizeMode: 'contain',
})`
  height: ${RFPercentage(35)}px;
  width: ${RFPercentage(35)}px;
`;

export const ButtonsContainer = styled.View`
  position: absolute;
  width: 100%;
  align-items: center;
  bottom: ${RFPercentage(7)}px;
`;
