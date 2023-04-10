import React, { useRef, useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { addLoanOnDataBase, KeyForLoan } from '../../../services';
import FormNewLoan, { HeaderLoan } from '../FormNewLoan';
import { Modalize } from 'react-native-modalize';
import {
  useSharedValue,
  useAnimatedStyle,
  interpolate,
  withTiming,
} from 'react-native-reanimated';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Container, Fab } from './styles';
import Animated from 'react-native-reanimated';
import { useKeys } from '../../../contexts/data';
import { useTheme } from 'styled-components/native';

type FabType = {
  icon: any;
  action: Function;
};

export default function FabLoan() {
  const theme = useTheme();
  const rotatePosition = useSharedValue(0);
  const rotateAnimated = useAnimatedStyle(() => {
    return {
      transform: [
        {
          rotate: `${interpolate(rotatePosition.value, [0, 1], [0, 90])}deg`,
        },
      ],
    };
  });
  const handleRotate = () => {
    const newValue = rotatePosition.value === 0 ? 1 : 0;
    rotatePosition.value = withTiming(newValue, { duration: 300 });
  };
  const { keys } = useKeys(true);
  const modalizeRef = useRef<Modalize>(null);
  const [name, setName] = useState<string>('');
  const [contact, setContact] = useState<string>('');
  const [key, setKey] = useState<KeyForLoan | null>(null);

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
    handleRotate();
    setFab({ icon: 'account-key', action: addNewLoan });
  };
  const close = () => {
    handleRotate();
    setFab({ icon: 'plus', action: openModal });
  };

  return (
    <>
      <Container>
        <Fab
          onPress={() => fab.action(name, contact, key)}
          style={rotateAnimated}
        >
          <Animated.View>
            <Icon
              name={fab.icon}
              size={RFPercentage(3)}
              color={theme.COLORS.OnSURFACE}
            />
          </Animated.View>
        </Fab>
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
