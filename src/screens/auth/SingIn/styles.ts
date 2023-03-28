import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const LogoContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ImgLogo = styled.Image`
  height: ${RFPercentage(25.5)}px;
  width: ${RFPercentage(25.5)}px;
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: flex-start;
  align-items: center;
  padding-top: ${RFPercentage(1)}px;
  padding-horizontal: 5%;
`;
