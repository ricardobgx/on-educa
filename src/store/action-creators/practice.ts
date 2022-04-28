/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { PracticeActionType } from '../action-types/practice';
import { PracticeAction } from '../actions/practice';

// Practice

export const loadPracticeQuestions = (questions: IPracticeQuestion[]) => {
  return (dispatch: Dispatch<PracticeAction>) => {
    dispatch({
      type: PracticeActionType.LOAD_PRACTICE_QUESTIONS,
      questions,
    });
  };
};
