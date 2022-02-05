import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import FriendRequestCard from '../../components/Friends/FriendRequestCard';
import MyFriendCard from '../../components/Friends/MyFriendCard';
import { Page } from '../../global/styles/components/pageComponents';
import { IPeople } from '../../interfaces/IPeople';
import { State } from '../../store';
import {
  PageBox,
  FriendsBox,
  MyFriends,
  MyFriendsBox,
  MyFriendsList,
  FriendRequests,
  FriendRequestsBox,
  FriendRequestsList,
} from './styles';

const Friends = (): JSX.Element => {
  const { aplication } = useSelector((store: State) => store);
  const { token } = aplication;

  const friendsTest: IPeople[] = [
    {
      id: '4d776067-e053-458a-8a23-e4574f554e01',
      name: 'Fabio Abrantes',
      email: 'fabio@gmail.com',
      isOnline: true,
      isStudent: false,
      profilePicture: {
        id: 'ssfs',
        path: 'http://192.168.10.25:8080/uploads/1644003384347-perfil2_Easy-Resize.webp',
      },
      league: 'gold',
      friends: [],
    },
  ];

  const [friends, setFriends] = useState<IPeople[]>(friendsTest);
  const [friendRequests, setFriendRequests] = useState<IPeople[]>(friendsTest);

  return (
    <Page>
      <PageBox>
        <FriendsBox>
          <MyFriends>
            <SectionLabel label="Amigos" backLink="/home" />
            <MyFriendsBox>
              <MyFriendsList>
                {friends.map((friend) => (
                  <MyFriendCard key={friend.id} people={friend} token={token} />
                ))}
              </MyFriendsList>
            </MyFriendsBox>
          </MyFriends>
          <FriendRequests>
            <SectionLabel label="Pedidos de amizade" backLink="" />
            <FriendRequestsBox>
              <FriendRequestsList>
                {friendRequests.map((friendRequest) => (
                  <FriendRequestCard
                    key={friendRequest.id}
                    people={friendRequest}
                    token={token}
                  />
                ))}
              </FriendRequestsList>
            </FriendRequestsBox>
          </FriendRequests>
        </FriendsBox>
      </PageBox>
    </Page>
  );
};

export default Friends;
