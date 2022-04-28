/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_PEOPLE } from '../../static/defaultEntitiesValues';
import { PeopleActionType } from '../action-types/people';
import { PeopleAction } from '../actions/people';

const peopleReducer = (
  state: IPeople = DEFAULT_PEOPLE,
  action: PeopleAction,
): any => {
  switch (action.type) {
    case PeopleActionType.LOGIN:
      return action.people;
    case PeopleActionType.LOGOUT:
      return DEFAULT_PEOPLE;
    default:
      return state;
  }
};

export default peopleReducer;
