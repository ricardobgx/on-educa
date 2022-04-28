/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { DuelActionType } from '../action-types/duel';
import { DuelAction } from '../actions/duel';

// Duel

export const loadDuel = (duel: IDuel) => {
  return (dispatch: Dispatch<DuelAction>) => {
    dispatch({
      type: DuelActionType.LOAD_DUEL,
      duel,
    });
  };
};
export const answerDuelRoundQuestion = (questions: IDuelRoundQuestion[]) => {
  return (dispatch: Dispatch<DuelAction>) => {
    dispatch({
      type: DuelActionType.ANSWER_DUEL_QUESTION,
      questions,
    });
  };
};
