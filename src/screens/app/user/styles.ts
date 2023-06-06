import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex: 1;
  align-items: center;
  justify-content: center;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const ContainerWelcome = styled.View`
  padding-left: 5%;
  width: 100%;
  height: ${RFPercentage(10)}px;
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const Card = styled.View`
  align-self: center;
  align-items: center;
  elevation: 5;
  width: 90%;
  height: ${RFPercentage(14.5)}px;
  border-radius: 10px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;

export const ContainerHeader = styled.View`
  flex: 1;
  width: 100%;
  justify-content: space-around;
`;

export const ContainerContent = styled.View`
  flex: 1;
  width: 100%;
`;

export const Titulo = styled.Text`
  margin-top: 2%;
  margin-left: 5%;
  align-self: flex-start;
  font-size: ${RFPercentage(2.8)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY_700};
`;

export const Chave = styled.Text`
  font-size: ${RFPercentage(5)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const ContainerButton = styled.View`
  position: absolute;
  width: 100%;
  bottom: 5%;
  align-items: center;
`;

export const ContainerForm = styled.View`
  width: 100%;
  padding-left: 5%;
  padding-right: 5%;
  align-items: center;
`;

export const SubmitButton = styled.View`
  margin-top: ${RFPercentage(3)}px;
`;

export const WelcomeText = styled.Text`
  font-size: ${RFPercentage(4)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const SubTitle = styled.Text`
  font-size: ${RFPercentage(2)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;
