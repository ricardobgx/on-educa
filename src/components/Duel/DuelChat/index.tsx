import React, { useEffect, useState } from 'react';
import { socket } from '../../../App';
import DuelChatActions from '../DuelChatActions';
import DuelChatMessages from '../DuelChatMessages';
import {
  DuelChatBackground,
  DuelChatBox,
  DuelChatLabel,
  CloseChatButton,
  CloseChatButtonIcon,
} from './styles';

interface IDuelChatProps {
  loggedPeople: IPeople;
  duelId: string;
  setShowChat: (value: boolean) => void;
}

const DuelChat = (props: IDuelChatProps): JSX.Element => {
  const { setShowChat, duelId, loggedPeople } = props;

  const [messages, setMessages] = useState<IDuelChatMessage[]>([]);

  const addMessage = (message: IDuelChatMessage): void => {
    setMessages([...messages, message]);
  };

  useEffect(() => {
    socket.on(`duel.message:${duelId}`, addMessage);
    return () => {
      socket.off(`duel.message:${duelId}`, addMessage);
    };
  }, [messages]);

  return (
    <DuelChatBackground>
      <DuelChatBox>
        <CloseChatButton onClick={() => setShowChat(false)}>
          <CloseChatButtonIcon className="fas fa-times" />
        </CloseChatButton>
        <DuelChatLabel>Chat</DuelChatLabel>
        <DuelChatMessages messages={messages} loggedPeople={loggedPeople} />
        <DuelChatActions loggedPeople={loggedPeople} duelId={duelId} />
      </DuelChatBox>
    </DuelChatBackground>
  );
};

export default DuelChat;
