import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Container, InputField, InputContainer, IconStyle } from './styles';
import { TextInputProps } from 'react-native';

interface InputInterface {
  customType: string;
  customIcon: any;
}

interface PasswordEye {
  icon: any;
  security: boolean;
}

type Props = InputInterface & TextInputProps;

export default function Input({ ...rest }: Props) {
  const theme = useTheme();
  let isSenha = false;
  const [passwordEye, setPasswordEye] = useState<PasswordEye>({
    icon: 'eye',
    security: true,
  });
  const changeVisibility = () => {
    setPasswordEye({
      icon: passwordEye.security === true ? 'eye-off' : 'eye',
      security: !passwordEye.security,
    });
  };
  switch (rest.customType) {
    case 'text':
      rest.autoCapitalize = 'none';
      rest.inputMode = 'text';
      break;
    case 'email':
      rest.autoCapitalize = 'none';
      rest.inputMode = 'email';
      break;
    case 'hide':
      rest.secureTextEntry = true;
      break;
    case 'senha':
      isSenha = true;
      rest.secureTextEntry = passwordEye.security;
      break;
    default:
      return null;
  }
  rest.cursorColor = theme.COLORS.PRIMARY_700;
  rest.placeholderTextColor = theme.COLORS.GRAY_6;
  return (
    <Container>
      <Icon
        name={rest.customIcon}
        style={IconStyle}
        size={RFPercentage(4.4)}
        color={theme.COLORS.OnSURFACE}
      />
      <InputContainer>
        <InputField {...rest} />
        {isSenha && (
          <Icon
            name={passwordEye.icon}
            size={RFPercentage(4.4)}
            color={theme.COLORS.PRIMARY_700}
            style={IconStyle}
            onPress={changeVisibility}
          />
        )}
      </InputContainer>
    </Container>
  );
}
