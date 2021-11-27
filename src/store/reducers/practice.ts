/* eslint-disable @typescript-eslint/no-explicit-any */

import { PracticeActionType } from '../action-types/practice';
import { IPractice, PracticeAction } from '../actions/practice';

export const DEFAULT_PRACTICE: IPractice = {
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

const practiceReducer = (
  state: IPractice = DEFAULT_PRACTICE,
  action: PracticeAction,
): any => {
  switch (action.type) {
    case PracticeActionType.LOAD_PRACTICE_QUESTIONS:
      return { questions: action.questions } as IPractice;
    case PracticeActionType.ANSWER_PRACTICE_QUESTION:
      return { questions: action.questions } as IPractice;
    default:
      return state;
  }
};

export default practiceReducer;
