import { UserActionType } from '../action-types/user';

export interface IUser {
  email: string;
  name: string;
  profilePicture: string;
  token: string;
}

interface Login {
  type: UserActionType.LOGIN;
  user: IUser;
}

interface Logout {
  type: UserActionType.LOGOUT;
}

export type UserAction = Login | Logout;
