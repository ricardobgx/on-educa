/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IQuestion } from '../../interfaces/practice';
import { PracticeActionType } from '../action-types/practice';
import { UserActionType } from '../action-types/user';
import { PracticeAction } from '../actions/practice';
import { IUser, UserAction } from '../actions/user';

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

// Practice

export const loadQuestions = (questions: IQuestion[]) => {
  return (dispatch: Dispatch<PracticeAction>) => {
    dispatch({
      type: PracticeActionType.LOAD,
      questions,
    });
  };
};
export const answerQuestion = (questions: IQuestion[]) => {
  return (dispatch: Dispatch<PracticeAction>) => {
    dispatch({
      type: PracticeActionType.ANSWER,
      questions,
    });
  };
};
