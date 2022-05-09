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
        className="bd-rd-20"
        placeholder="Escreva algo"
        value={content}
        onChange={(event) => setContent(event.target.value)}
        onKeyUp={(event) => {
          if (event.key === 'Enter') {
            sendMessage();
          }
        }}
      />
      <SendDuelChatMessageButton
        className="block-shadow-button main-action bd-rd-20"
        onClick={() => sendMessage()}
      >
        <SendDuelChatMessageButtonIcon className="bi bi-send" />
      </SendDuelChatMessageButton>
    </DuelChatActionsBox>
  );
};

export default DuelChatActions;
