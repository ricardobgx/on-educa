/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { FriendRequestsActionType } from '../action-types/friendRequests';
import { FriendRequestsAction } from '../actions/friendRequests';

// FriendRequests

export const loadFriendRequests = (friendRequests: IFriendRequest[]) => {
  return (dispatch: Dispatch<FriendRequestsAction>) => {
    dispatch({
      type: FriendRequestsActionType.LOAD_FRIEND_REQUESTS,
      friendRequests,
    });
  };
};
