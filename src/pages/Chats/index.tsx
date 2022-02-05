import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import Chat from '../../components/Chats/Chat';
import ChatCard from '../../components/Chats/ChatCard';
import { isDefaultChat } from '../../functions/entitiesValues';
import {
  Page,
  PageBoxColumn,
} from '../../global/styles/components/pageComponents';
import { IChat } from '../../interfaces/IChat';
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
  TalkWithTeacher,
  ToggleRecentConversationsCheckbox,
  ToggleRecentConversationsLabel,
  ToggleRecentConversationsLabelIcon,
} from './styles';

const Chats = (): JSX.Element => {
  const { people: loggedPeople } = useSelector((store: State) => store);

  const testChats: IChat[] = [
    {
      id: '',
      chatCreator: {
        id: '52a685fe-4ba7-42a6-8c8b-79a32341dc1a',
        name: 'Ricardo',
        email: 'ricardo@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644003384347-perfil2_Easy-Resize.webp',
        },
        league: 'gold',
        friends: [],
      },
      chatParticipant: {
        id: '4d776067-e053-458a-8a23-e4574f554e01',
        name: 'Fabio Abrantes',
        email: 'fabio@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644004435804-Idaly.webp',
        },
        league: 'gold',
        friends: [],
      },
    },
    {
      id: '',
      chatCreator: {
        id: '52a685fe-4ba7-42a6-8c8b-79a32341dc1a',
        name: 'Ricardo',
        email: 'ricardo@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644003384347-perfil2_Easy-Resize.webp',
        },
        league: 'gold',
        friends: [],
      },
      chatParticipant: {
        id: '4d776067-e053-458a-8a23-e4574f554e01',
        name: 'Fabio Abrantes',
        email: 'fabio@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644004435804-Idaly.webp',
        },
        league: 'gold',
        friends: [],
      },
    },
    {
      id: '',
      chatCreator: {
        id: '52a685fe-4ba7-42a6-8c8b-79a32341dc1a',
        name: 'Ricardo',
        email: 'ricardo@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644003384347-perfil2_Easy-Resize.webp',
        },
        league: 'gold',
        friends: [],
      },
      chatParticipant: {
        id: '4d776067-e053-458a-8a23-e4574f554e01',
        name: 'Fabio Abrantes',
        email: 'fabio@gmail.com',
        isOnline: true,
        isStudent: false,
        profilePicture: {
          id: 'ssfs',
          path: 'http://192.168.10.25:8080/uploads/1644004435804-Idaly.webp',
        },
        league: 'gold',
        friends: [],
      },
    },
  ];

  const [selectedChat, setSelectedChat] = useState<IChat>(DEFAULT_CHAT);
  const [chats, setChats] = useState<IChat[]>(testChats);

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
                    chat={chat}
                    loggedPeople={loggedPeople}
                    setSelectedChat={setSelectedChat}
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
            <Chat chat={selectedChat} loggedPeople={loggedPeople} />
          )}
        </ChatsBox>
      </PageBoxColumn>
    </Page>
  );
};

export default Chats;
