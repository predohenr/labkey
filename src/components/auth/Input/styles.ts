import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export const Container = styled.View`
  flex-direction: row;
  height: ${RFPercentage(6)}px;
  width: 100%;
  max-width: ${RFPercentage(63.7)}px;
  align-items: center;
  border-radius: ${RFPercentage(1.9)}px;
  margin-bottom: ${RFPercentage(2)}px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const InputField = styled.TextInput`
  flex: 1;
  height: 100%;
  border-radius: ${RFPercentage(1.9)}px;
  padding-horizontal: ${RFPercentage(1)}px;
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border-width: 1px;
  border-radius: ${RFPercentage(1.9)}px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const IconStyle = {
  marginHorizontal: RFPercentage(0.6),
};
