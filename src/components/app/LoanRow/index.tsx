import React, { useState } from 'react';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { useTheme } from 'styled-components/native';
import ModalLoan from '../ModalLoan';
import { RFPercentage } from 'react-native-responsive-fontsize';
import { Container, Touch, TextContainer, Title, Details } from './styles';

export default function LoanRow({ ...props }: any) {
  const theme = useTheme();
  const item = props.item;
  const [visibleModal, setVisibleModal] = useState(false);
  const closeModal = () => setVisibleModal(false);
  const openContextMenu = () => {
    if (!item.returned) {
      setVisibleModal(true);
    }
  };

  return (
    <Container>
      <Touch onLongPress={openContextMenu} delayLongPress={500}>
        <TextContainer>
          <Title>
            {item.name} - Chave: {item.key_name}
          </Title>
          <Details>
            data:{' '}
            {item.create_at
              .toDate()
              .toLocaleString('pt-BR', { timeZone: 'UTC' })}
          </Details>
        </TextContainer>
        <Icon
          name={item.returned ? 'check-circle-outline' : 'alert-circle'}
          color={item.returned ? theme.COLORS.GREEN_500 : theme.COLORS.RED_500}
          size={RFPercentage(3.8)}
        />
      </Touch>
      <ModalLoan
        id={item.id}
        key_id={item.key_id}
        visible={visibleModal}
        close={closeModal}
        name={item.name}
        contact={item.contact}
        key_name={item.key_name}
        create_at={item.create_at}
      />
    </Container>
  );
}
