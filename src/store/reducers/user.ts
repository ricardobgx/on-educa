/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUser } from '../../interfaces/IUser';
import { UserActionType } from '../action-types/user';
import { UserAction } from '../actions/user';
import { DEFAULT_SCHOOL_GRADE } from './schoolGrade';
import { DEFAULT_TEACHING_TYPE } from './teachingType';

export const DEFAULT_USER: IUser = {
  id: '',
  email: '',
  name: '',
  profilePicture: '',
  league: '',
  isOnline: false,
  teachingType: DEFAULT_TEACHING_TYPE,
  schoolGrade: DEFAULT_SCHOOL_GRADE,
};

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
