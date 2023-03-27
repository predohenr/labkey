import styled from 'styled-components/native';

export const Container = styled.View`
  flex-direction: row;
  height: 50px;
  width: 100%;
  max-width: 500px;
  align-items: center;
  border-radius: 15px;
  margin-bottom: 10px;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const InputField = styled.TextInput`
  flex: 1;
  height: 100%;
  border-radius: 15px;
  padding-horizontal: 8px;
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
`;

export const InputContainer = styled.View`
  flex: 1;
  flex-direction: row;
  align-items: center;
  height: 100%;
  border-width: 1px;
  border-radius: 15px;
  border-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const IconStyle = {
  marginHorizontal: 5,
};
