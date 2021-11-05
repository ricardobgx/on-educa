import { UserActionType } from '../action-types/user';

export interface IUser {

}

interface Login {
  type: UserActionType.LOGIN;
  user: IUser;
}

interface Logout {
  type: UserActionType.LOGOUT;
  user: IUser;
}

export type UserAction = Login | Logout;