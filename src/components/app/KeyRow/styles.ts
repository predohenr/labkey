import styled from 'styled-components/native';
import { RFPercentage } from 'react-native-responsive-fontsize';

interface ContextMenuProps {
  top: number;
  left: number;
}

export const Container = styled.View`
  flex: 1;
  border-bottom-width: 1px;
  border-right-width: 1px;
  border-left-width: 1px;
  border-color: ${({ theme }) => theme.COLORS.GRAY_9};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_500};
`;

export const Touch = styled.TouchableOpacity`
  flex: 1;
  flex-direction: row;
  justify-content: space-between;
  padding-left: ${RFPercentage(1.2)}px;
`;

export const IconContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: flex-end;
  margin-right: ${RFPercentage(1.2)}px;
`;

export const Title = styled.Text`
  align-self: center;
  font-size: ${RFPercentage(2.2)}px;
  font-family: ${({ theme }) => theme.FONTS.MEDIUM};
`;

export const ContainerModal = styled.View`
  flex: 1;
`;

export const ContextMenu = styled.View<ContextMenuProps>`
  position: absolute;
  top: ${({ top }) =>
    top > RFPercentage(97) ? RFPercentage(97) : top - RFPercentage(6.5)}px;
  left: ${({ left }) => (left > RFPercentage(36) ? RFPercentage(36) : left)}px;
  padding: ${RFPercentage(1)}px;
  border: 1px;
  border-color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  background-color: ${({ theme }) => theme.COLORS.BACKGROUND_700};
`;

export const TouchOption = styled.TouchableOpacity`
  flex: 1;
`;

export const OptionText = styled.Text`
  color: ${({ theme }) => theme.COLORS.OnBACKGROUND};
  font-size: ${RFPercentage(2.5)}px;
`;
