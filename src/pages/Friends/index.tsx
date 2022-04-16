import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { bindActionCreators } from 'redux';
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
import { isDefaultPeople } from '../../functions/entitiesValues';
import { getFriendRequestsByPeople } from '../../functions/friendRequest';
import { getPeoples } from '../../functions/people';
import { Page } from '../../global/styles/components/pageComponents';
import { IFriendRequest } from '../../interfaces/IFriendRequest';
import { IPeople } from '../../interfaces/IPeople';
import OnEducaAPI from '../../services/api';
import { ActionCreators, State } from '../../store';
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
  const {
    aplication,
    people: loggedPeople,
    friendRequests,
  } = useSelector((store: State) => store);
  const { token } = aplication;

  const dispatch = useDispatch();
  const { loadFriendRequests } = bindActionCreators(ActionCreators, dispatch);

  const [peoplesFound, setPeoplesFound] = useState<IPeople[]>([]);

  const getPeopleFriendRequests = (): void => {
    getFriendRequestsByPeople(
      OnEducaAPI,
      loggedPeople.id,
      token,
      loadFriendRequests,
    );
  };

  useEffect(() => {
    if (!isDefaultPeople(loggedPeople) && token) getPeopleFriendRequests();
  }, [loggedPeople, token]);

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
                {peoplesFound.map((peopleFound, index) => (
                  <FriendCard
                    people={peopleFound}
                    loggedPeople={loggedPeople}
                    token={token}
                    index={index}
                  />
                ))}
              </PeoplesFoundList>
            </PeoplesFoundBox>
          </PeoplesFound>
          <FriendRequests>
            <SectionLabel label="Pedidos de amizade" backLink="" />
            <FriendRequestsBox>
              <FriendRequestsList>
                {friendRequests.map((friendRequest: IFriendRequest) => (
                  <FriendRequestCard
                    key={friendRequest.id}
                    friendRequest={friendRequest}
                    token={token}
                    getPeopleFriendRequests={getPeopleFriendRequests}
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
