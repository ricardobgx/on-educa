import React, { useEffect, useState } from 'react';
import { getPeople } from '../../../functions/people';
import { IChat } from '../../../interfaces/IChat';
import { IPeople } from '../../../interfaces/IPeople';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
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
  token: string;
}

const ChatCard = (props: IChatCardProps): JSX.Element => {
  const { chat, loggedPeople, setSelectedChat, token } = props;
  const { chatCreator, chatParticipant, messages } = chat;
  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const peopleId =
    loggedPeople.id === chatCreator.id ? chatParticipant.id : chatCreator.id;

  useEffect(() => {
    if (token) {
      getPeople(OnEducaAPI, peopleId, setPeople, token);
    }
  }, [token]);

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
        <LastMessagePreview>
          {messages.length > 0
            ? messages[messages.length - 1].content
            : 'Diga oi a ela/ele'}
        </LastMessagePreview>
      </NameAndLastMessage>
    </ChatCardBox>
  );
};

export default ChatCard;
