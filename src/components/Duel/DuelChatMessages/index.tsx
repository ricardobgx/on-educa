import React from 'react';
import DuelChatMessage from '../DuelChatMessage';
import { DuelChatMessagesBox, DuelChatMessagesList } from './styles';

interface IDuelChatMessagesProps {
  loggedPeople: IPeople;
  messages: IDuelChatMessage[];
}

const DuelChatMessages = (props: IDuelChatMessagesProps): JSX.Element => {
  const { messages, loggedPeople } = props;

  return (
    <DuelChatMessagesBox>
      <DuelChatMessagesList>
        {messages.map((message) => (
          <DuelChatMessage message={message} loggedPeople={loggedPeople} />
        ))}
      </DuelChatMessagesList>
    </DuelChatMessagesBox>
  );
};

export default DuelChatMessages;
