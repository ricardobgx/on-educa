import React, { useEffect, useState } from 'react';
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
} from './styles';
import {
  SendMessageButton,
  SendMessageButtonIcon,
  UnfriendButtonIcon,
} from '../FriendCardActions/styles';
import OnEducaAPI from '../../../services/api';
import { removePeopleFriend } from '../../../functions/people';
import {
  acceptFriendRequest,
  createFriendRequest,
  deleteFriendRequest,
  getFriendRequestsByPeople,
} from '../../../functions/friendRequest';
import { IPeople } from '../../../interfaces/IPeople';
import { IFriendRequest } from '../../../interfaces/IFriendRequest';
import { isDefaultPeople } from '../../../functions/entitiesValues';
import { DEFAULT_PEOPLE } from '../../../static/defaultEntitiesValues';

interface IFriendActionsProps {
  people: IPeople;
  loggedPeople: IPeople;
  token: string;
}

const FriendActions = (props: IFriendActionsProps): JSX.Element => {
  const { people, loggedPeople, token } = props;

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
    console.log('procurando no ativo');
    console.log(friendRequests);

    const friendRequestExists = friendRequests.find(
      (friendRequest: IFriendRequest) =>
        friendRequest.requester.id === loggedPeople.id,
    );

    if (friendRequestExists) {
      setFriendRequestToMe(friendRequestExists);
      setMeRequestedFriend(true);
    }
  };

  const getLoggedPeopleFriendRequestsSucess = (
    friendRequests: IFriendRequest[],
  ): void => {
    console.log('procurando no logado');
    console.log(friendRequests);

    const friendRequestExists = friendRequests.find(
      (friendRequest: IFriendRequest) =>
        friendRequest.requester.id === people.id,
    );

    if (friendRequestExists) {
      setFriendRequestToMe(friendRequestExists);
      setFriendRequestedMe(true);
    } else {
      getFriendRequestsByPeople(
        OnEducaAPI,
        people.id,
        token,
        getPeopleFriendRequestsSucess,
      );
    }
  };

  const acceptFriendRequestSucess = (): void => {
    setIsFriend(true);
  };

  const deleteFriendRequestSucess = (): void => {
    setFriendRequestedMe(false);
  };

  useEffect(() => {
    if (!isDefaultPeople(people) && !isDefaultPeople(loggedPeople)) {
      const friendshipExists = loggedPeople.friends.find(
        (friend: IPeople) => friend.id === people.id,
      );
      if (friendshipExists) {
        setIsFriend(true);
      } else {
        getFriendRequestsByPeople(
          OnEducaAPI,
          loggedPeople.id,
          token,
          getLoggedPeopleFriendRequestsSucess,
        );
      }
    }
  }, [people, loggedPeople]);

  return (
    <FriendActionsBox>
      {isFriend ? (
        <MyFriendActions>
          <SendMessageButton to="/">
            <SendMessageButtonIcon className="fas fa-comment-alt" />
          </SendMessageButton>
          <UnfriendButton
            onClick={() =>
              removePeopleFriend(
                OnEducaAPI,
                loggedPeople.id,
                { friendId: people.id },
                token,
                () => {
                  setIsFriend(false);
                  setFriendRequestedMe(false);
                  setMeRequestedFriend(false);
                },
                () => console.log('erro'),
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
