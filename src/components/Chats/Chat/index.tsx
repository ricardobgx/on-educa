import React from 'react';
import { IChat } from '../../../interfaces/IChat';
import { IPeople } from '../../../interfaces/IPeople';
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
} from './styles';

interface IChatProps {
  chat: IChat;
  loggedPeople: IPeople;
}

const Chat = (props: IChatProps): JSX.Element => {
  const { chat, loggedPeople } = props;
  const { chatCreator, chatParticipant } = chat;

  const people =
    loggedPeople.id === chatCreator.id ? chatParticipant : chatCreator;
  const { name, profilePicture, isOnline } = people;

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
          <ChatMessagesList>1</ChatMessagesList>
        </ChatMessagesBox>
      </ChatMessages>
      <ChatMessageInput>
        <MessageInput type="text" placeholder="Digite algo" />
        <SendMessageButton>
          <SendMessageButtonIcon className="bi bi-send" />
        </SendMessageButton>
      </ChatMessageInput>
    </ChatBox>
  );
};

export default Chat;
