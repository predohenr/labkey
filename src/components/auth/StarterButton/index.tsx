import React, { useState } from 'react';
import { Container, Title } from './styles';
import { useTheme } from 'styled-components/native';

interface StarterButton {
  title: String;
  onPress: Function;
}

export default function StarterButton({ ...props }: StarterButton) {
  const theme = useTheme();

  const [isPressed, setIsPressed] = useState<boolean>(false);

  const pressed = () => {
    props.onPress();
  };

  return (
    <Container
      activeOpacity={1}
      underlayColor={theme.COLORS.PRIMARY_700}
      onHideUnderlay={() => setIsPressed(false)}
      onShowUnderlay={() => setIsPressed(true)}
      onPress={pressed}
    >
      <Title
        style={{
          color: isPressed
            ? theme.COLORS.BACKGROUND_700
            : theme.COLORS.PRIMARY_700,
        }}
      >
        {props.title}
      </Title>
    </Container>
  );
}
