/* eslint-disable @typescript-eslint/no-explicit-any */

import { IFriendRequest } from '../../interfaces/IFriendRequest';
import { FriendRequestsActionType } from '../action-types/friendRequests';
import { FriendRequestsAction } from '../actions/friendRequests';

const friendRequestsReducer = (
  state: IFriendRequest[] = [],
  action: FriendRequestsAction,
): any => {
  switch (action.type) {
    case FriendRequestsActionType.LOAD_FRIEND_REQUESTS:
      return action.friendRequests;
    default:
      return state;
  }
};

export default friendRequestsReducer;
