import styled from 'styled-components/native';

export const Mensagem = styled.Text`
  align-self: flex-start;
  margin-top: -5px;
  margin-bottom: 3px;
  color: ${({ theme }) => theme.COLORS.RED_500};
  font-family: ${({ theme }) => theme.FONTS.BOLD};
`;
