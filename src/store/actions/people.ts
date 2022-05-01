import { PeopleActionType } from '../action-types/people';

interface Login {
  type: PeopleActionType.LOGIN;
  people: IPeople;
}

interface Logout {
  type: PeopleActionType.LOGOUT;
}

export type PeopleAction = Login | Logout;
