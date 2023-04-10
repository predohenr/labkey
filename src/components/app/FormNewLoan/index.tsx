import React from 'react';
import { Select } from '@mobile-reality/react-native-select-pro';
import InputText from '../../common/InputText';
import { Container, Header, Title } from './styles';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

type FormLoanProps = {
  nome: string;
  setNome: React.Dispatch<React.SetStateAction<string>>;
  contato: string;
  setContato: React.Dispatch<React.SetStateAction<string>>;
  setChave: React.Dispatch<React.SetStateAction<any>>;
  chaves: Array<any>;
};

export default function FromNewLoan({
  nome,
  setNome,
  contato,
  setContato,
  setChave,
  chaves,
}: FormLoanProps) {
  const theme = useTheme();
  const selectStyle = {
    select: {
      container: {
        backgroundColor: theme.COLORS.BACKGROUND_700,
        width: '80%',
        marginBottom: RFPercentage(3.8),
        height: RFPercentage(5.7),
        borderRadius: 0,
        borderLeftWidth: 0,
        borderTopWidth: 0,
        borderRightWidth: 0,
        borderBottomColor: theme.COLORS.OnBACKGROUND,
        paddingLeft: RFPercentage(0.6),
      },
      text: {
        fontSize: RFPercentage(2),
      },
    },
    option: {
      container: {
        borderTopWidth: 1,
        borderTopColor: theme.COLORS.GRAY_9,
      },
      text: {
        fontSize: RFPercentage(2),
      },
    },
    optionsList: {
      height: RFPercentage(31.8),
    },
  };

  return (
    <Container>
      <Select
        onSelect={(type, index) => setChave(type)}
        options={chaves}
        placeholderText="Selecione uma Chave"
        placeholderTextColor={theme.COLORS.GRAY_9}
        noOptionsText="Sem dados"
        searchable={true}
        styles={selectStyle}
      />
      <InputText
        value={nome}
        onChangeText={setNome}
        placeholder="Digite o nome do Solicitante"
        autoCapitalize="words"
      />
      <InputText
        value={contato}
        onChangeText={setContato}
        placeholder="Digite o contato do Solicitante"
        autoCapitalize="none"
      />
    </Container>
  );
}

export function HeaderLoan() {
  return (
    <Header>
      <Title>Cadastrar Novo Empréstimo:</Title>
    </Header>
  );
}
