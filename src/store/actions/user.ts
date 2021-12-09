import { IUser } from '../../interfaces/IUser';
import { UserActionType } from '../action-types/user';

interface Login {
  type: UserActionType.LOGIN;
  user: IUser;
}

interface Logout {
  type: UserActionType.LOGOUT;
}

export type UserAction = Login | Logout;
