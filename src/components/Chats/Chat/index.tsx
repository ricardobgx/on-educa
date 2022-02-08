import React, { useEffect, useState } from 'react';
import io from 'socket.io-client';
import { randInt } from '../../../functions/utils';
import { IChat } from '../../../interfaces/IChat';
import { IMessage } from '../../../interfaces/IMessage';
import { IPeople } from '../../../interfaces/IPeople';
import ChatMessage from '../ChatMessage';
import ChatPeoplePicture from '../ChatPeoplePicture';
import {
  ChatBox,
  ChatParticipant,
  ChatPeopleName,
  ChatPeopleOnlineLabel,
  ChatMessages,
  ChatMessagesBox,
  ChatMessagesList,
  ChatMessageInput,
  MessageInput,
  SendMessageButton,
  SendMessageButtonIcon,
  ChatPeopleNameAndOnlineLabel,
  ChatMessagesListBox,
} from './styles';

interface IChatProps {
  chat: IChat;
  loggedPeople: IPeople;
  setSelectedChat: (value: IChat) => void;
}

const socket = io(process.env.REACT_APP_API_URL || '');
socket.on('connect', () =>
  console.log('[IO] A new connection has been established'),
);

const Chat = (props: IChatProps): JSX.Element => {
  const { chat, loggedPeople, setSelectedChat } = props;
  const { id, chatCreator, chatParticipant } = chat;

  const [lastElementTop, setLastElementTop] = useState(0);

  const [message, setMessage] = useState('');
  const messagesList = document.getElementById('messages-list');

  const people =
    loggedPeople.id === chatCreator.id ? chatParticipant : chatCreator;
  const { name, profilePicture, isOnline } = people;

  const addMessage = (newMessage: IMessage): void => {
    const { chatId } = newMessage;

    if (chatId === id) {
      setSelectedChat({ ...chat, messages: [...chat.messages, newMessage] });
    }
  };

  const sendMessage = (): void => {
    if (message.trim()) {
      socket.emit('chat.message', {
        id: randInt(0, 2500).toString(),
        chatId: chat.id,
        content: message,
        messageSenderId: loggedPeople.id,
        messageReceiverId: people.id,
      } as IMessage);
      setMessage('');
    }
  };

  useEffect((): any => {
    if (messagesList) {
      messagesList.scrollTop = lastElementTop;
    }
    socket.on('chat.message', addMessage);
    return () => {
      socket.off('chat.message', addMessage);
    };
  }, [chat, lastElementTop]);

  const { messages } = chat;

  return (
    <ChatBox>
      <ChatParticipant>
        <ChatPeoplePicture
          profilePicturePath={profilePicture.path}
          isOnline={isOnline}
        />
        <ChatPeopleNameAndOnlineLabel>
          <ChatPeopleName>{name}</ChatPeopleName>
          <ChatPeopleOnlineLabel>
            {isOnline ? 'online' : 'offline'}
          </ChatPeopleOnlineLabel>
        </ChatPeopleNameAndOnlineLabel>
      </ChatParticipant>
      <ChatMessages>
        <ChatMessagesBox>
          <ChatMessagesList id="messages-list">
            {/* <ChatMessagesListBox id="messages-list-box"> */}
            {messages.map((msg, index) => (
              <ChatMessage
                key={msg.id}
                loggedPeople={loggedPeople}
                message={msg}
                messagesLength={messages.length}
                index={index}
                setLastElementTop={setLastElementTop}
              />
            ))}
            {/* </ChatMessagesListBox> */}
          </ChatMessagesList>
        </ChatMessagesBox>
      </ChatMessages>
      <ChatMessageInput>
        <MessageInput
          type="text"
          placeholder="Digite algo"
          value={message}
          onChange={(event: React.ChangeEvent<HTMLInputElement>) => {
            setMessage(event.target.value);
          }}
          onKeyUp={(event: React.KeyboardEvent) => {
            if (event.key === 'Enter') {
              sendMessage();
            }
          }}
        />
        <SendMessageButton onClick={() => sendMessage()}>
          <SendMessageButtonIcon className="bi bi-send" />
        </SendMessageButton>
      </ChatMessageInput>
    </ChatBox>
  );
};

export default Chat;
