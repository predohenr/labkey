import React, { useRef, useState, useEffect } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { addLoanOnDataBase, KeyForLoan } from '../../../services';
import FormNewLoan, { HeaderLoan } from '../FormNewLoan';
import { Modalize } from 'react-native-modalize';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Container, Fab } from './styles';
import { useAnimationState, MotiView } from 'moti';
import { useKeys } from '../../../contexts/data';
import { useTheme } from 'styled-components/native';

type FabType = {
  icon: any;
  action: Function;
};

export default function FabLoan() {
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
  const { keys } = useKeys(true);
  const modalizeRef = useRef<Modalize>(null);
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [key, setKey] = useState<KeyForLoan | null>(null);
  useEffect(() => {
    handleAnimation('close');
  }, []);
  const openModal = () => modalizeRef.current?.open();
  const addNewLoan = (
    name: string,
    contact: string,
    key: KeyForLoan | null
  ) => {
    if (name.length > 0 && key != null) {
      addLoanOnDataBase(name, contact, key).finally(() => {
        modalizeRef.current?.close();
        setName('');
        setContact('');
        setKey(null);
      });
    }
  };
  const [fab, setFab] = useState<FabType>({ icon: 'plus', action: openModal });
  const open = () => {
    handleAnimation('open');
    setFab({ icon: 'account-key', action: addNewLoan });
  };
  const close = () => {
    setFab({ icon: 'plus', action: openModal });
    handleAnimation('close');
  };

  return (
    <>
      <Container>
        <MotiView state={buttonAnimated}>
          <Fab onPress={() => fab.action(name, contact, key)}>
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
        snapPoint={RFPercentage(50)}
        modalHeight={RFPercentage(50)}
        rootStyle={{ elevation: 1, zIndex: 1 }}
        scrollViewProps={{ contentContainerStyle: { height: '100%' } }}
        modalStyle={{ backgroundColor: theme.COLORS.BACKGROUND_700 }}
        handleStyle={{ backgroundColor: theme.COLORS.PRIMARY_500 }}
        HeaderComponent={<HeaderLoan />}
        onOpen={open}
        onClose={close}
      >
        <FormNewLoan
          nome={name}
          setNome={setName}
          contato={contact}
          setContato={setContact}
          setChave={setKey}
          chaves={keys}
        />
      </Modalize>
    </>
  );
}
