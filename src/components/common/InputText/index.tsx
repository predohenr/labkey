import React from 'react';
import { TextInputProps } from 'react-native';
import { ContainerInputText } from './styles';
import { useTheme } from 'styled-components/native';

export default function InputText({ ...props }: TextInputProps) {
  const theme = useTheme();
  return (
    <ContainerInputText
      cursorColor={theme.COLORS.PRIMARY_700}
      placeholderTextColor={theme.COLORS.GRAY_9}
      placeholder={props.placeholder}
      inputMode={props.inputMode}
      autoCapitalize={props.autoCapitalize}
      onChangeText={props.onChangeText}
      value={props.value}
    />
  );
}
