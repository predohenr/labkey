import React from 'react';
import { StyleSheet, TextInput } from 'react-native';
import Theme from '../../themes/LabKeyTheme';

export default function InputText({ value, setText, placeholder, mode }) {
  const cap = mode == 'email' ? 'none' : 'words';

  return (
    <TextInput
      style={styles.input}
      cursorColor={Theme.PrimaryVariantColor}
      placeholder={placeholder}
      inputMode={mode}
      autoCapitalize={cap}
      onChangeText={(e) => setText(e)}
      value={value}
    />
  );
};

const styles = StyleSheet.create({
  input: {
    height: 45,
    width: '80%',
    paddingHorizontal: 5,
    backgroundColor: Theme.BackGroundColor,
    color: Theme.OnBackGroundColor,
    borderBottomWidth: 1,
    borderColor: Theme.OnBackGroundColor,
    marginBottom: 30,
  },
});
