import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import SectionLabel from '../../components/App/SectionLabel';
import {
  ClearSearchSuppliesInputButton,
  ClearSearchSuppliesInputButtonIcon,
  SearchSupplies,
  SearchSuppliesBox,
  SearchSuppliesButton,
  SearchSuppliesButtonIcon,
  SearchSuppliesInput,
} from '../../components/App/Supplies/styles';
import FriendRequestCard from '../../components/Friends/FriendRequestCard';
import FriendCard from '../../components/Profile/FriendCard';
import { getPeoples } from '../../functions/people';
import { Page } from '../../global/styles/components/pageComponents';
import { IFriendRequest } from '../../interfaces/IFriendRequest';
import { IPeople } from '../../interfaces/IPeople';
import OnEducaAPI from '../../services/api';
import { State } from '../../store';
import {
  PageBox,
  FriendsBox,
  FriendRequests,
  FriendRequestsBox,
  FriendRequestsList,
  PeoplesFound,
  PeoplesFoundBox,
  PeoplesFoundList,
  SearchPeoples,
} from './styles';

const Friends = (): JSX.Element => {
  const { aplication, people: loggedPeople } = useSelector(
    (store: State) => store,
  );
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

  const [peoplesFound, setPeoplesFound] = useState<IPeople[]>([]);
  const [friendRequests, setFriendRequests] = useState<IFriendRequest[]>([]);

  return (
    <Page>
      <PageBox>
        <FriendsBox>
          <PeoplesFound>
            <SectionLabel label="Procurar pessoas" backLink="/home" />
            <SearchPeoples>
              <SearchSupplies>
                <SearchSuppliesBox>
                  <SearchSuppliesInput
                    type="text"
                    placeholder="Digite o nome da pessoa"
                  />
                  <ClearSearchSuppliesInputButton>
                    <ClearSearchSuppliesInputButtonIcon className="fas fa-times" />
                  </ClearSearchSuppliesInputButton>
                </SearchSuppliesBox>
                <SearchSuppliesButton
                  onClick={() => getPeoples(OnEducaAPI, setPeoplesFound, token)}
                >
                  <SearchSuppliesButtonIcon className="fas fa-search" />
                </SearchSuppliesButton>
              </SearchSupplies>
            </SearchPeoples>

            <PeoplesFoundBox>
              <PeoplesFoundList>
                {peoplesFound.map((peopleFound) => (
                  <FriendCard
                    people={peopleFound}
                    loggedPeople={loggedPeople}
                    token={token}
                  />
                ))}
              </PeoplesFoundList>
            </PeoplesFoundBox>
          </PeoplesFound>
          <FriendRequests>
            <SectionLabel label="Pedidos de amizade" backLink="" />
            <FriendRequestsBox>
              <FriendRequestsList>
                {friendRequests.map((friendRequest) => (
                  <FriendRequestCard
                    key={friendRequest.id}
                    people={friendRequest.requester}
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
