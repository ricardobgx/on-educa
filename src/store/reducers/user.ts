/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUser } from '../../interfaces/IUser';
import { DEFAULT_USER } from '../../static/defaultEntitiesValues';
import { UserActionType } from '../action-types/user';
import { UserAction } from '../actions/user';

const userReducer = (state: IUser = DEFAULT_USER, action: UserAction): any => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return action.user;
    case UserActionType.LOGOUT:
      return DEFAULT_USER;
    default:
      return state;
  }
};

export default userReducer;
