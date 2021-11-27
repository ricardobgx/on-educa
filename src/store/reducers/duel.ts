/* eslint-disable @typescript-eslint/no-explicit-any */

import { IDuel } from '../../interfaces/Duel';
import { DuelActionType } from '../action-types/duel';
import { DuelAction } from '../actions/duel';

export const DEFAULT_DUEL: IDuel = {
  id: '',
  teams: [],
  questions: [
    {
      id: '',
      description: '',
      alternatives: [
        {
          id: '',
          description: '',
        },
      ],
      rightAlternativeId: '',
      selectedAlternativeId: '',
    },
  ],
};

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
