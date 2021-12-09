/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IUser } from '../../interfaces/IUser';
import { UserActionType } from '../action-types/user';
import { UserAction } from '../actions/user';

// User

export const loginUser = (user: IUser) => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOGIN,
      user,
    });
  };
};
export const logoutUser = () => {
  return (dispatch: Dispatch<UserAction>) => {
    dispatch({
      type: UserActionType.LOGOUT,
    });
  };
};
