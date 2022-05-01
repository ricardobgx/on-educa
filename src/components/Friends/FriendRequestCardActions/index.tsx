import React from 'react';
import {
  acceptFriendRequest,
  deleteFriendRequest,
} from '../../../functions/friendRequest';
import OnEducaAPI from '../../../services/api';
import {
  FriendRequesCardActionsBox,
  RejectRequest,
  RejectRequestIcon,
  AcceptRequest,
  AcceptRequestIcon,
} from './styles';

interface IFriendRequesCardActionsProps {
  friendRequest: IFriendRequest;
  getPeopleFriendRequests: () => void;
  token: string;
}

const FriendRequesCardActions = (
  props: IFriendRequesCardActionsProps,
): JSX.Element => {
  const { friendRequest, getPeopleFriendRequests, token } = props;

  const handleFriendRequestSucess = (): void => {
    getPeopleFriendRequests();
  };

  return (
    <FriendRequesCardActionsBox>
      <AcceptRequest
        onClick={() =>
          acceptFriendRequest(
            OnEducaAPI,
            friendRequest.id,
            token,
            handleFriendRequestSucess,
          )
        }
      >
        <AcceptRequestIcon className="fas fa-check" />
      </AcceptRequest>
      <RejectRequest
        onClick={() =>
          deleteFriendRequest(
            OnEducaAPI,
            friendRequest.id,
            token,
            handleFriendRequestSucess,
          )
        }
      >
        <RejectRequestIcon className="fas fa-times" />
      </RejectRequest>
    </FriendRequesCardActionsBox>
  );
};

export default FriendRequesCardActions;
