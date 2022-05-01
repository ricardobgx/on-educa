import React, { useState } from 'react';
import { socket } from '../../../App';
import {
  DuelChatActionsBox,
  DuelChatMessageInput,
  SendDuelChatMessageButton,
  SendDuelChatMessageButtonIcon,
} from './styles';

interface IDuelChatActionsProps {
  loggedPeople: IPeople;
  duelId: string;
}

const DuelChatActions = (props: IDuelChatActionsProps): JSX.Element => {
  const { loggedPeople, duelId } = props;

  const [content, setContent] = useState('');

  const sendMessage = (): void => {
    if (content.trim()) {
      socket.emit('duel.message', {
        duelId,
        data: {
          people: loggedPeople,
          content,
        },
      });
      setContent('');
    }
  };

  return (
    <DuelChatActionsBox>
      <DuelChatMessageInput
        placeholder="Escreva algo"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <SendDuelChatMessageButton onClick={() => sendMessage()}>
        <SendDuelChatMessageButtonIcon className="bi bi-send" />
      </SendDuelChatMessageButton>
    </DuelChatActionsBox>
  );
};

export default DuelChatActions;
