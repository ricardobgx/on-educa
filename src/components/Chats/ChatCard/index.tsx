import React from 'react';
import { IChat } from '../../../interfaces/IChat';
import { IPeople } from '../../../interfaces/IPeople';
import ChatPeoplePicture from '../ChatPeoplePicture';
import {
  ChatCardBox,
  PeopleName,
  LastMessagePreview,
  NameAndLastMessage,
} from './styles';

interface IChatCardProps {
  chat: IChat;
  loggedPeople: IPeople;
  setSelectedChat: (value: IChat) => void;
}

const ChatCard = (props: IChatCardProps): JSX.Element => {
  const { chat, loggedPeople, setSelectedChat } = props;
  const { chatCreator, chatParticipant } = chat;

  const people =
    loggedPeople.id === chatCreator.id ? chatParticipant : chatCreator;
  const { name, isOnline, profilePicture } = people;

  return (
    <ChatCardBox
      onClick={() => {
        const toggleConversations = document.getElementById(
          'toggle-recent-conversations',
        );
        if (toggleConversations) {
          const checkbox = toggleConversations as HTMLInputElement;
          checkbox.checked = false;
        }
        setSelectedChat(chat);
      }}
    >
      <ChatPeoplePicture
        profilePicturePath={profilePicture.path}
        isOnline={isOnline}
      />
      <NameAndLastMessage>
        <PeopleName>{name}</PeopleName>
        <LastMessagePreview>Oiii</LastMessagePreview>
      </NameAndLastMessage>
    </ChatCardBox>
  );
};

export default ChatCard;
