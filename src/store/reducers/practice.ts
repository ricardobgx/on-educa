/* eslint-disable @typescript-eslint/no-explicit-any */

import { IPractice } from '../../interfaces/IPractice';
import { DEFAULT_PRACTICE } from '../../static/defaultEntitiesValues';
import { PracticeActionType } from '../action-types/practice';
import { PracticeAction } from '../actions/practice';

const practiceReducer = (
  state: IPractice = DEFAULT_PRACTICE,
  action: PracticeAction,
): any => {
  switch (action.type) {
    case PracticeActionType.LOAD_PRACTICE_QUESTIONS:
      return { questions: action.questions } as IPractice;
    default:
      return state;
  }
};

export default practiceReducer;
