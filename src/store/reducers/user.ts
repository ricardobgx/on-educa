import { UserActionType } from '../action-types/user';
import { IUser, UserAction } from '../actions/user';

const initialState: IUser = {

};

const reducer = (state: IUser = initialState, action: UserAction) => {
  switch (action.type) {
    case UserActionType.LOGIN:
      return action.user;
    case UserActionType.LOGOUT:
      return initialState;
    default:
      return state;
  }
};

export default reducer;
