import styled from 'styled-components/native';

export const Container = styled.TouchableOpacity`
  width: 120px;
  height: 40px;
  border-radius: 10px;
  justify-content: center;
  elevation: 5;
  background-color: ${({ theme }) => theme.COLORS.PRIMARY_500};
`;

export const Title = styled.Text`
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
  font-size: 17px;
  text-transform: uppercase;
  align-self: center;
  color: ${({ theme }) => theme.COLORS.OnSURFACE};
`;
