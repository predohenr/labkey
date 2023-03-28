import React, { useState } from 'react';
import { Modal, TouchableOpacity } from 'react-native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useTheme } from 'styled-components/native';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Container, PopOption, PopText, PopUpMenu } from './styles';
import { useFilter } from '../../../contexts/data';

export default function Filter() {
  const theme = useTheme();
  const { setIsLoading, setFilter, options } = useFilter();
  const [visible, setVisible] = useState(false);
  const press = (i: number) => {
    setIsLoading(true);
    setFilter(options[i]);
  };

  return (
    <>
      <IconButton
        icon={() => (
          <Icon
            name="filter-variant"
            color={theme.COLORS.OnBACKGROUND}
            size={RFPercentage(2.5)}
          />
        )}
        onPress={() => setVisible(true)}
      />
      <Modal transparent visible={visible}>
        <Container onTouchEnd={() => setVisible(false)}>
          <PopUpMenu>
            {options.map((op, i) => (
              <PopOption
                style={{ borderBottomWidth: i === options.length - 1 ? 0 : 1 }}
                key={i}
              >
                <TouchableOpacity onPress={() => press(i)}>
                  <PopText>{op.label}</PopText>
                </TouchableOpacity>
              </PopOption>
            ))}
          </PopUpMenu>
        </Container>
      </Modal>
    </>
  );
}
