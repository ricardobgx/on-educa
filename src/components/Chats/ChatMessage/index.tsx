/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect } from 'react';
import { ChatMessageBox, ChatMessageContent } from './styles';

interface IChatMessageProps {
  loggedPeople: IPeople;
  messagesLength: number;
  message: IMessage;
  index: number;
  setLastElementTop: (value: number) => void;
}

const ChatMessage = (props: IChatMessageProps): JSX.Element => {
  const { loggedPeople, message, messagesLength, index, setLastElementTop } =
    props;
  const { content } = message;

  const isMine = loggedPeople.id === message.sender.id;

  useEffect(() => {
    if (index === messagesLength - 1) {
      const chatMessageDiv = document.getElementById(`chat-message-${index}`);
      if (chatMessageDiv) {
        setLastElementTop(chatMessageDiv.offsetTop);
      }
    }
  }, []);

  return (
    <ChatMessageBox
      id={`chat-message-${index}`}
      className={`${isMine ? 'mine' : 'other'}-message bd-rd-20 with-shadow`}
    >
      <ChatMessageContent>{content}</ChatMessageContent>
    </ChatMessageBox>
  );
};

export default ChatMessage;
