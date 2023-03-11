import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import Theme from '../../themes/LabKeyTheme';

export default function ListScreen() {
  return (
    <ScrollView style={styles.container}>
      <Text>Tela da lista de chaves</Text>
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Theme.BackgroundColor,
  },
});
