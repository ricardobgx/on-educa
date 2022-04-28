import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
import Chat from '../../components/Chats/Chat';
import ChatCard from '../../components/Chats/ChatCard';
import { getChatsByPeople } from '../../functions/chat';
import { isDefaultChat, isDefaultPeople } from '../../functions/entitiesValues';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import OnEducaAPI from '../../services/api';
import { DEFAULT_CHAT } from '../../static/defaultEntitiesValues';
import { ActionCreators, RootState } from '../../store';
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
    (store: RootState) => store,
  );
  const { token, loadingAnimation } = aplication;

  const dispatch = useDispatch();
  const { enableLoadingAnimation, disableLoadingAnimation } =
    bindActionCreators(ActionCreators, dispatch);

  const [selectedChat, setSelectedChat] = useState<IChat>(DEFAULT_CHAT);
  const [chats, setChats] = useState<IChat[]>([]);

  const switchChat = (newChat: IChat): void => {
    const newChats = chats.filter((chat) => chat.id !== selectedChat.id);

    if (!isDefaultChat(selectedChat)) {
      setChats([...newChats, { ...selectedChat }]);
    }
    setSelectedChat(newChat);
  };

  const chatsLoaded = (chatsFound: IChat[]): void => {
    setChats(chatsFound);
    disableLoadingAnimation();
  };

  useEffect(() => {
    if (!loadingAnimation) {
      enableLoadingAnimation();
    }

    if (!isDefaultPeople(loggedPeople) && token) {
      getChatsByPeople(OnEducaAPI, loggedPeople.id, token, chatsLoaded);
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
                <BackButton to="/">
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
                    selectedChat={selectedChat}
                    setSelectedChat={switchChat}
                    token={token}
                  />
                ))}
              </RecentConversationsList>
              <TalkWithTeacherButton className="block-shadow-button main-action bd-rd-20">
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
