import React from 'react';
import theme from '../../../global/styles/theme';
import SelectChat from '../../../svgs/SelectChat';
import { NoChatSelectedBox, StartChatLabel } from './styles';

const NoChatSelected: React.FC = () => {
  return (
    <NoChatSelectedBox>
      <SelectChat fill={theme.colors.mainButtonBgColor} />
      <StartChatLabel>Inicie uma conversa</StartChatLabel>
    </NoChatSelectedBox>
  );
};

export default NoChatSelected;
