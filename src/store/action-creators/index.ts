/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IDuel } from '../../interfaces/Duel';
import { IQuestion } from '../../interfaces/Question';
import { DuelActionType } from '../action-types/duel';
import { PracticeActionType } from '../action-types/practice';
import { UserActionType } from '../action-types/user';
import { DuelAction } from '../actions/duel';
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

export const loadPracticeQuestions = (questions: IQuestion[]) => {
  return (dispatch: Dispatch<PracticeAction>) => {
    dispatch({
      type: PracticeActionType.LOAD_PRACTICE_QUESTIONS,
      questions,
    });
  };
};
export const answerPracticeQuestion = (questions: IQuestion[]) => {
  return (dispatch: Dispatch<PracticeAction>) => {
    dispatch({
      type: PracticeActionType.ANSWER_PRACTICE_QUESTION,
      questions,
    });
  };
};

// Duel

export const loadDuel = (duel: IDuel) => {
  return (dispatch: Dispatch<DuelAction>) => {
    dispatch({
      type: DuelActionType.LOAD_DUEL,
      duel,
    });
  };
};
export const answerDuelQuestion = (questions: IQuestion[]) => {
  return (dispatch: Dispatch<DuelAction>) => {
    dispatch({
      type: DuelActionType.ANSWER_DUEL_QUESTION,
      questions,
    });
  };
};
