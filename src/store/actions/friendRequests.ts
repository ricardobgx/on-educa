import { FriendRequestsActionType } from '../action-types/friendRequests';

interface LoadFriendRequests {
  type: FriendRequestsActionType.LOAD_FRIEND_REQUESTS;
  friendRequests: IFriendRequest[];
}

export type FriendRequestsAction = LoadFriendRequests;
