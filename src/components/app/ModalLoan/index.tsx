import React from 'react';
import { IconButton } from '@react-native-material/core';
import Icon from '@expo/vector-icons/MaterialCommunityIcons';
import { Button, Modal } from 'react-native';
import {
  Container,
  Content,
  Header,
  Title,
  ContentMessage,
  Label,
  Value,
  ContainerButton,
} from './styles';
import { updateLoan } from '../../../services';
import { useTheme } from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

export default function ModalLoan({ ...props }) {
  const theme = useTheme();
  const item = props;

  const devolverChave = (id: string, idKey: string) => {
    updateLoan(id, idKey).then(() => {
      item.close();
    });
  };

  return (
    <Modal transparent visible={item.visible} onRequestClose={item.close}>
      <Container>
        <Content>
          <Header>
            <Title>Chave: {item.key_name}</Title>
            <IconButton
              icon={() => (
                <Icon
                  name="close"
                  size={RFPercentage(3.8)}
                  color={theme.COLORS.OnBACKGROUND}
                />
              )}
              onPress={item.close}
            />
          </Header>
          <ContentMessage>
            <Label>
              Nome: <Value>{item.name}</Value>
            </Label>

            {item.contact != '' && (
              <Label>
                Contato: <Value>{item.contact}</Value>
              </Label>
            )}
            <Label>
              Horário:{' '}
              <Value>
                {item.create_at
                  .toDate()
                  .toLocaleString('pt-BR', { timeZone: 'UTC' })}
              </Value>
            </Label>
          </ContentMessage>
          <ContainerButton>
            <Button
              title="Marcar como Devolvida"
              color={theme.COLORS.PRIMARY_700}
              onPress={() => devolverChave(item.id, item.key_id)}
            />
          </ContainerButton>
        </Content>
      </Container>
    </Modal>
  );
}
