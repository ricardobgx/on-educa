/* eslint-disable @typescript-eslint/no-explicit-any */

import { IPeople } from '../../interfaces/IPeople';
import { DEFAULT_USER } from '../../static/defaultEntitiesValues';
import { PeopleActionType } from '../action-types/people';
import { PeopleAction } from '../actions/people';

const peopleReducer = (
  state: IPeople = DEFAULT_USER,
  action: PeopleAction,
): any => {
  switch (action.type) {
    case PeopleActionType.LOGIN:
      return action.people;
    case PeopleActionType.LOGOUT:
      return DEFAULT_USER;
    default:
      return state;
  }
};

export default peopleReducer;
