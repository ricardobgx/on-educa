/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IPeople } from '../../interfaces/IPeople';
import { PeopleActionType } from '../action-types/people';
import { PeopleAction } from '../actions/people';

// People

export const loginPeople = (people: IPeople) => {
  return (dispatch: Dispatch<PeopleAction>) => {
    dispatch({
      type: PeopleActionType.LOGIN,
      people,
    });
  };
};
export const logoutPeople = () => {
  return (dispatch: Dispatch<PeopleAction>) => {
    dispatch({
      type: PeopleActionType.LOGOUT,
    });
  };
};
