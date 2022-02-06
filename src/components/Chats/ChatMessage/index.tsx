import React from 'react';
import { IMessage } from '../../../interfaces/IMessage';
import { IPeople } from '../../../interfaces/IPeople';
import { ChatMessageBox, ChatMessageContent } from './styles';

interface IChatMessageProps {
  loggedPeople: IPeople;
  message: IMessage;
}

const ChatMessage = (props: IChatMessageProps): JSX.Element => {
  const { loggedPeople, message } = props;
  const { content } = message;

  const isMine = loggedPeople.id === message.messageSenderId;

  return (
    <ChatMessageBox className={`${isMine ? 'mine' : 'other'}-message`}>
      <ChatMessageContent>{content}</ChatMessageContent>
    </ChatMessageBox>
  );
};

export default ChatMessage;
