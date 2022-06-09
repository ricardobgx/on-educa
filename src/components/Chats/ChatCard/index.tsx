/* eslint-disable react-hooks/exhaustive-deps */

import { AxiosError } from 'axios';
import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import { displaySurname, getPeople } from '../../../functions/people';
import {
  displayDayAndMonthDate,
  getFullDate,
  showErrorMessage,
} from '../../../functions/utils';
import OnEducaAPI from '../../../services/api';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
import { ActionCreators } from '../../../store';
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

  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const getChatCardPeople = async (peopleId: string): Promise<void> => {
    const chatCardPeople = await getPeople(
      OnEducaAPI,
      peopleId,
      token,
      (err: AxiosError): void => {
        showErrorMessage(err, showFloatNotification);
      },
    );
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
      className={`bd-rd-15 ${selectedChat.id === chat.id ? 'selected' : ''}`}
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
          <PeopleName>{displaySurname(name, 20, 20)}</PeopleName>
          <LastMessageTime>
            {messages.length > 0 &&
              displayDayAndMonthDate(getFullDate(messages[0].createdAt))}
          </LastMessageTime>
        </NameAndLastMessageTime>
        <LastMessagePreview>
          {messages.length > 0
            ? messages[0].content.substring(0, 15)
            : 'Diga oi a ela/ele'}
        </LastMessagePreview>
      </NameAndLastMessage>
    </ChatCardBox>
  );
};

export default ChatCard;
