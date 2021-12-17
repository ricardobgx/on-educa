/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IDuel } from '../../interfaces/IDuel';
import { IDuelQuestion } from '../../interfaces/IDuelQuestion';
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
export const answerDuelQuestion = (questions: IDuelQuestion[]) => {
  return (dispatch: Dispatch<DuelAction>) => {
    dispatch({
      type: DuelActionType.ANSWER_DUEL_QUESTION,
      questions,
    });
  };
};
