import React, { useRef, useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { addKeyOnDatabase } from '../../../services';
import { Modalize } from 'react-native-modalize';
import { RFPercentage } from 'react-native-responsive-fontsize';
import FormNewKey, { HeaderKey } from '../FormNewKey';
import { useAnimationState, MotiView } from 'moti';
import { Container, Fab } from './styles';
import { useTheme } from 'styled-components/native';

type FabType = {
  icon: any;
  action: Function;
};

export default function FabKey() {
  const theme = useTheme();
  const buttonAnimated = useAnimationState({
    open: {
      transform: [{ rotate: '90deg' }],
    },
    close: {
      transform: [{ rotate: '-90deg' }],
    },
  });
  const handleAnimation = (state: 'open' | 'close') => {
    buttonAnimated.transitionTo(state);
  };
  const modalizeRef = useRef<Modalize>(null);
  const [keyName, setKeyName] = useState('');
  const openModal = () => modalizeRef.current?.open();
  const addNewKey = (key: string) => {
    if (key.length > 0) {
      addKeyOnDatabase(key).then(() => {
        modalizeRef.current?.close();
        setKeyName('');
      });
    }
  };
  const [fab, setFab] = useState<FabType>({ icon: 'plus', action: openModal });
  const open = () => {
    handleAnimation('open');
    setFab({ icon: 'key-plus', action: addNewKey });
  };
  const close = () => {
    handleAnimation('close');
    setFab({ icon: 'plus', action: openModal });
  };

  return (
    <>
      <Container>
        <MotiView state={buttonAnimated}>
          <Fab onPress={() => fab.action(keyName)}>
            <Icon
              name={fab.icon}
              size={RFPercentage(3.5)}
              color={theme.COLORS.OnSURFACE}
            />
          </Fab>
        </MotiView>
      </Container>
      <Modalize
        ref={modalizeRef}
        snapPoint={RFPercentage(35)}
        modalHeight={RFPercentage(35)}
        rootStyle={{ elevation: 1, zIndex: 1 }}
        scrollViewProps={{ contentContainerStyle: { height: '100%' } }}
        modalStyle={{ backgroundColor: theme.COLORS.BACKGROUND_700 }}
        handleStyle={{ backgroundColor: theme.COLORS.PRIMARY_500 }}
        HeaderComponent={<HeaderKey />}
        onOpen={open}
        onClose={close}
      >
        <FormNewKey text={keyName} setText={setKeyName} />
      </Modalize>
    </>
  );
}
