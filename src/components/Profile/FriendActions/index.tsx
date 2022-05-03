/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { bindActionCreators } from 'redux';
import {
  MyFriendActions,
  UnfriendButton,
  UnfriendButtonLabel,
  NoFriendActions,
  SendFriendRequestButton,
  SendFriendRequestButtonLabel,
  SendFriendRequestButtonIcon,
  FriendActionsBox,
  MeFriendRequestActions,
  FriendFriendRequestActions,
  CancelFriendRequestButtonIcon,
  CancelFriendRequestButtonLabel,
  CancelFriendRequestButton,
  RejectFriendRequestButton,
  RejectFriendRequestButtonLabel,
  RejectFriendRequestButtonIcon,
  AcceptFriendRequestButton,
  AcceptFriendRequestButtonLabel,
  AcceptFriendRequestButtonIcon,
  UnfriendButtonIcon,
} from './styles';
import OnEducaAPI from '../../../services/api';
import { removePeopleFriend } from '../../../functions/people';
import {
  acceptFriendRequest,
  createFriendRequest,
  deleteFriendRequest,
  getFriendRequestsByPeople,
} from '../../../functions/friendRequest';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';
import { SendMessageButton, SendMessageButtonIcon } from '../FriendCard/styles';
import { ActionCreators } from '../../../store';

interface IFriendActionsProps {
  people: IPeople;
  getPeopleData: () => void;
  loggedPeople: IPeople;
  getLoggedPeopleData: () => void;
  token: string;
}

const FriendActions = (props: IFriendActionsProps): JSX.Element => {
  const dispatch = useDispatch();
  const { showFloatNotification } = bindActionCreators(
    ActionCreators,
    dispatch,
  );

  const { people, getPeopleData, loggedPeople, getLoggedPeopleData, token } =
    props;

  const [isFriend, setIsFriend] = useState(false);
  const [meRequestedFriend, setMeRequestedFriend] = useState(false);
  const [friendRequestedMe, setFriendRequestedMe] = useState(false);

  const [friendRequestToMe, setFriendRequestToMe] = useState<IFriendRequest>({
    id: '',
    requester: DEFAULT_PEOPLE,
    requested: DEFAULT_PEOPLE,
  });

  const createFriendRequestSucess = (friendRequest: IFriendRequest): void => {
    setFriendRequestToMe(friendRequest);
    setMeRequestedFriend(true);
  };

  const getPeopleFriendRequestsSucess = (
    friendRequests: IFriendRequest[],
  ): void => {
    const friendRequestExists = friendRequests.find(
      (friendRequest: IFriendRequest) =>
        friendRequest.requester.id === loggedPeople.id,
    );

    if (friendRequestExists) {
      setFriendRequestToMe(friendRequestExists);
      setMeRequestedFriend(true);
    }
  };

  const getLoggedPeopleFriendRequestsSucess = async (
    friendRequests: IFriendRequest[],
  ): Promise<void> => {
    const friendRequestExists = friendRequests.find(
      (friendRequest: IFriendRequest) =>
        friendRequest.requester.id === people.id,
    );

    if (friendRequestExists) {
      setFriendRequestToMe(friendRequestExists);
      setFriendRequestedMe(true);
    } else {
      const friendRequestsFound = await getFriendRequestsByPeople(
        OnEducaAPI,
        people.id,
        token,
      );

      await getPeopleFriendRequestsSucess(friendRequestsFound);
    }
  };

  const acceptFriendRequestSucess = (): void => {
    setIsFriend(true);
  };

  const deleteFriendRequestSucess = (): void => {
    setMeRequestedFriend(false);
  };

  const getFriendRequestsData = async (): Promise<void> => {
    const friendRequestsFound = await getFriendRequestsByPeople(
      OnEducaAPI,
      loggedPeople.id,
      token,
    );

    await getLoggedPeopleFriendRequestsSucess(friendRequestsFound);
  };

  useEffect(() => {
    if (!isDefaultPeople(people) && !isDefaultPeople(loggedPeople) && token) {
      setIsFriend(false);

      const friendshipExists = loggedPeople.friends.find(
        (friend: IPeople) => friend.id === people.id,
      );
      if (friendshipExists) {
        setIsFriend(true);
      } else {
        getFriendRequestsData();
      }
    }
  }, [people, loggedPeople]);

  return (
    <FriendActionsBox>
      {isFriend ? (
        <MyFriendActions>
          <SendMessageButton className="block-shadow-button main-action bd-rd-20">
            <SendMessageButtonIcon className="fas fa-comment-alt" />
          </SendMessageButton>
          <UnfriendButton
            className="block-shadow-button secondary-action bd-rd-20"
            onClick={() =>
              removePeopleFriend(
                OnEducaAPI,
                loggedPeople.id,
                { friendId: people.id },
                token,
                () => {
                  getPeopleData();
                  getLoggedPeopleData();
                },
                () => showFloatNotification('Ocorreu um erro'),
              )
            }
          >
            <UnfriendButtonLabel>Desfazer amizade</UnfriendButtonLabel>
            <UnfriendButtonIcon className="fas fa-user-times" />
          </UnfriendButton>
        </MyFriendActions>
      ) : (
        <NoFriendActions>
          {!friendRequestedMe ? (
            <MeFriendRequestActions>
              {!meRequestedFriend ? (
                <SendFriendRequestButton
                  className="block-shadow-button main-action bd-rd-20"
                  onClick={() =>
                    createFriendRequest(
                      OnEducaAPI,
                      { requesterId: loggedPeople.id, requestedId: people.id },
                      token,
                      createFriendRequestSucess,
                    )
                  }
                >
                  <SendFriendRequestButtonLabel>
                    Enviar solicitação
                  </SendFriendRequestButtonLabel>
                  <SendFriendRequestButtonIcon className="fas fa-user-plus" />
                </SendFriendRequestButton>
              ) : (
                <CancelFriendRequestButton
                  className="block-shadow-button secondary-action bd-rd-20"
                  onClick={() =>
                    deleteFriendRequest(
                      OnEducaAPI,
                      friendRequestToMe.id,
                      token,
                      deleteFriendRequestSucess,
                    )
                  }
                >
                  <CancelFriendRequestButtonLabel>
                    Cancelar solicitação
                  </CancelFriendRequestButtonLabel>
                  <CancelFriendRequestButtonIcon className="fas fa-user-minus" />
                </CancelFriendRequestButton>
              )}
            </MeFriendRequestActions>
          ) : (
            <FriendFriendRequestActions>
              <AcceptFriendRequestButton
                onClick={() =>
                  acceptFriendRequest(
                    OnEducaAPI,
                    friendRequestToMe.id,
                    token,
                    acceptFriendRequestSucess,
                  )
                }
              >
                <AcceptFriendRequestButtonLabel>
                  Aceitar
                </AcceptFriendRequestButtonLabel>
                <AcceptFriendRequestButtonIcon className="fas fa-check" />
              </AcceptFriendRequestButton>
              <RejectFriendRequestButton
                onClick={() =>
                  deleteFriendRequest(
                    OnEducaAPI,
                    friendRequestToMe.id,
                    token,
                    deleteFriendRequestSucess,
                  )
                }
              >
                <RejectFriendRequestButtonLabel>
                  Rejeitar
                </RejectFriendRequestButtonLabel>
                <RejectFriendRequestButtonIcon className="fas fa-times" />
              </RejectFriendRequestButton>
            </FriendFriendRequestActions>
          )}
        </NoFriendActions>
      )}
    </FriendActionsBox>
  );
};

export default FriendActions;
