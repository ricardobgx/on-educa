import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import Chat from '../../components/Chats/Chat';
import ChatCard from '../../components/Chats/ChatCard';
import { getChats, getChatsByPeople } from '../../functions/chat';
import { isDefaultChat, isDefaultPeople } from '../../functions/entitiesValues';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import { IChat } from '../../interfaces/IChat';
import { IMessage } from '../../interfaces/IMessage';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CHAT } from '../../static/defaultEntitiesValues';
import { State } from '../../store';
import {
  ChatsBox,
  RecentConversations,
  RecentConversationsBox,
  RecentConversationsList,
  RecentConversationsActions,
  BackButton,
  BackButtonIcon,
  RecentConversationsLabel,
  TalkWithTeacherButton,
  TalkWithTeacherButtonLabel,
  ToggleRecentConversationsCheckbox,
  ToggleRecentConversationsLabel,
  ToggleRecentConversationsLabelIcon,
} from './styles';

const Chats = (): JSX.Element => {
  const { aplication, people: loggedPeople } = useSelector(
    (store: State) => store,
  );
  const { token } = aplication;

  const [selectedChat, setSelectedChat] = useState<IChat>(DEFAULT_CHAT);
  const [chats, setChats] = useState<IChat[]>([]);

  const switchChat = (newChat: IChat): void => {
    const newChats = chats.filter((chat) => chat.id !== selectedChat.id);

    if (!isDefaultChat(selectedChat)) {
      setChats([...newChats, { ...selectedChat }]);
    }
    setSelectedChat(newChat);
  };

  useEffect(() => {
    if (!isDefaultPeople(loggedPeople) && token) {
      console.log('pegando chats');
      getChatsByPeople(OnEducaAPI, loggedPeople.id, token, setChats);
    }

    const toggleConversations = document.getElementById(
      'toggle-recent-conversations',
    );
    if (toggleConversations) {
      const checkbox = toggleConversations as HTMLInputElement;
      checkbox.checked = true;
    }
  }, [loggedPeople, token]);

  return (
    <Page>
      <PageBoxColumn>
        <ChatsBox>
          <ToggleRecentConversationsCheckbox
            type="checkbox"
            id="toggle-recent-conversations"
          />
          <RecentConversations>
            <ToggleRecentConversationsLabel htmlFor="toggle-recent-conversations">
              <ToggleRecentConversationsLabelIcon className="fas fa-chevron-right" />
            </ToggleRecentConversationsLabel>
            <RecentConversationsBox>
              <RecentConversationsActions>
                <BackButton to="/home">
                  <BackButtonIcon className="fas fa-arrow-left" />
                </BackButton>
                <RecentConversationsLabel>Conversas</RecentConversationsLabel>
              </RecentConversationsActions>
              <RecentConversationsList>
                {chats.map((chat) => (
                  <ChatCard
                    key={chat.id}
                    chat={chat}
                    loggedPeople={loggedPeople}
                    setSelectedChat={switchChat}
                    token={token}
                  />
                ))}
              </RecentConversationsList>
              <TalkWithTeacherButton>
                <TalkWithTeacherButtonLabel>
                  Fale com um professor
                </TalkWithTeacherButtonLabel>
              </TalkWithTeacherButton>
              {/* <TalkWithTeacher>1</TalkWithTeacher> */}
            </RecentConversationsBox>
          </RecentConversations>
          {!isDefaultChat(selectedChat) && (
            <Chat
              chat={selectedChat}
              loggedPeople={loggedPeople}
              setSelectedChat={setSelectedChat}
              token={token}
            />
          )}
        </ChatsBox>
      </PageBoxColumn>
    </Page>
  );
};

export default Chats;
