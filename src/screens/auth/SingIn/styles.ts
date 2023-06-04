import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const FormContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: ${RFPercentage(1)}px;
  padding-horizontal: 5%;
`;

export const NovaConta = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2.2)}px;
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const TitleForm = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
  font-size: ${RFPercentage(2.5)}px;
`;

export const SubTitleForm = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.GRAY_6};
  font-size: ${RFPercentage(2)}px;
  margin-bottom: 30px;
`;

export const BottomContainer = styled.View`
  position: absolute;
  flex-direction: row;
  bottom: ${RFPercentage(2)}px;
`;

export const NovaContaText = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.REGULAR};
  font-size: ${RFPercentage(2.2)}px;
  color: ${({ theme }) => theme.COLORS.GRAY_6};
`;

export const Forgotten = styled.Pressable`
  margin-top: ${RFPercentage(2)}px;
`;
