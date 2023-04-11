import React, { useEffect, useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { useAnimationState, MotiView } from 'moti';
import { Container, FabContent } from './styles';
import { useTheme } from 'styled-components/native';

export type FabProps = {
  actionIcon: any;
  actionFunction: Function;
};

export default function Fab({ actionIcon, actionFunction }: FabProps) {
  const theme = useTheme();
  const buttonAnimated = useAnimationState({
    open: {
      transform: [{ rotate: '90deg' }],
    },
    close: {
      transform: [{ rotate: '-90deg' }],
    },
  });

  const [stateFab, setStateFab] = useState<FabProps>({
    actionIcon: 'plus',
    actionFunction: () => {},
  });

  const handleAnimation = (state: 'open' | 'close') => {
    buttonAnimated.transitionTo(state);
  };

  useEffect(() => {
    handleAnimation('close');
  }, []);

  const handleFab = () => {
    buttonAnimated.current === 'open'
      ? handleAnimation('close')
      : handleAnimation('open');
    setStateFab({
      actionIcon: 'key',
      actionFunction: () => {},
    });
    actionFunction();
  };
  return (
    <Container>
      <FabContent onPress={() => handleFab()}>
        <MotiView state={buttonAnimated}>
          <Icon
            name={stateFab.actionIcon}
            size={RFPercentage(3.5)}
            color={theme.COLORS.OnSURFACE}
          />
        </MotiView>
      </FabContent>
    </Container>
  );
}
