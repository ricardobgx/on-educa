/* eslint-disable @typescript-eslint/no-explicit-any */

import { IDuel } from '../../interfaces/IDuel';
import { DEFAULT_DUEL } from '../../static/defaultEntitiesValues';
import { DuelActionType } from '../action-types/duel';
import { DuelAction } from '../actions/duel';

const duelReducer = (state: IDuel = DEFAULT_DUEL, action: DuelAction): any => {
  switch (action.type) {
    case DuelActionType.LOAD_DUEL:
      return { ...action.duel } as IDuel;
    case DuelActionType.ANSWER_DUEL_QUESTION:
      return { ...state, questions: action.questions } as IDuel;
    default:
      return state;
  }
};

export default duelReducer;
