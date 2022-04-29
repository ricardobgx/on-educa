import React, { useEffect, useState } from 'react';
import { getPeople } from '../../../functions/people';
import { displayDayAndMonthDate, getFullDate } from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
import ChatPeoplePicture from '../ChatPeoplePicture';
import {
  ChatCardBox,
  PeopleName,
  LastMessagePreview,
  NameAndLastMessage,
  NameAndLastMessageTime,
  LastMessageTime,
} from './styles';

interface IChatCardProps {
  chat: IChat;
  loggedPeople: IPeople;
  selectedChat: IChat;
  setSelectedChat: (value: IChat) => void;
  token: string;
}

const ChatCard = (props: IChatCardProps): JSX.Element => {
  const { chat, loggedPeople, selectedChat, setSelectedChat, token } = props;
  const { chatCreator, chatParticipant, messages } = chat;
  const [people, setPeople] = useState(DEFAULT_PEOPLE);

  const getChatCardPeople = async (peopleId: string): Promise<void> => {
    const chatCardPeople = await getPeople(OnEducaAPI, peopleId, token);
    if (chatCardPeople) setPeople(chatCardPeople);
  };

  useEffect(() => {
    if (token) {
      const peopleId =
        loggedPeople.id === chatCreator.id
          ? chatParticipant.id
          : chatCreator.id;
      getChatCardPeople(peopleId);
    }
  }, [token]);

  const { name, isOnline, profilePicture } = people;

  return (
    <ChatCardBox
      className={`${selectedChat.id === chat.id ? 'selected' : ''}`}
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
        <NameAndLastMessageTime>
          <PeopleName>{name}</PeopleName>
          <LastMessageTime>
            {messages.length > 0 &&
              displayDayAndMonthDate(
                getFullDate(messages[messages.length - 1].createdAt),
              )}
          </LastMessageTime>
        </NameAndLastMessageTime>
        <LastMessagePreview>
          {messages.length > 0
            ? messages[messages.length - 1].content.substring(0, 15)
            : 'Diga oi a ela/ele'}
        </LastMessagePreview>
      </NameAndLastMessage>
    </ChatCardBox>
  );
};

export default ChatCard;
