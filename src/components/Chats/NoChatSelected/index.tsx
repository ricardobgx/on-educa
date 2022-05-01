import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../store';
import SelectChat from '../../../svgs/SelectChat';
import { NoChatSelectedBox, StartChatLabel } from './styles';

const NoChatSelected: React.FC = () => {
  const { theme } = useSelector((store: RootState) => store);

  return (
    <NoChatSelectedBox>
      <SelectChat fill={theme.colors.mainButtonBgColor} />
      <StartChatLabel>Inicie uma conversa</StartChatLabel>
    </NoChatSelectedBox>
  );
};

export default NoChatSelected;
