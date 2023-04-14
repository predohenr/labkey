import React, { useRef, useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';
import {
  Container,
  Touch,
  Title,
  IconContainer,
  ContainerModal,
  ContextMenu,
  OptionText,
  TouchOption,
} from './styles';
import { Modal } from 'react-native';
import { deleteKeyFromDatabase } from '../../../services';

type offsetProps = {
  x: number;
  y: number;
};

export default function KeyRow({ ...props }: any) {
  const theme = useTheme();
  const [offset, setOffset] = useState<offsetProps>({ x: 0, y: 0 });
  const [visible, setVisible] = useState(false);
  const setNewOffset = async (pageX: number, pageY: number) => {
    setOffset({ x: pageX, y: pageY });
    return Promise.resolve(true);
  };
  const openContextMenu = (e: any) => {
    if (item.available) {
      setNewOffset(e.nativeEvent.pageX, e.nativeEvent.pageY).then(() => {
        setVisible(true);
      });
    }
  };
  const item = props.item;

  return (
    <Container>
      <Touch onLongPress={(e) => openContextMenu(e)} delayLongPress={500}>
        <Title>Chave: {item.label}</Title>
        <IconContainer>
          <Icon
            name={item.available ? 'check-circle-outline' : 'account-key'}
            color={
              item.available ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500
            }
            size={RFPercentage(3.8)}
          />
        </IconContainer>
      </Touch>
      <Modal transparent visible={visible}>
        <ContainerModal onTouchEnd={() => setVisible(false)}>
          <ContextMenu top={offset.y} left={offset.x}>
            <TouchOption onPress={() => deleteKeyFromDatabase(item.value)}>
              <OptionText>Remover</OptionText>
            </TouchOption>
          </ContextMenu>
        </ContainerModal>
      </Modal>
    </Container>
  );
}
