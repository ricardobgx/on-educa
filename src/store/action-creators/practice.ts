/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IQuestion } from '../../interfaces/IQuestion';
import { PracticeActionType } from '../action-types/practice';
import { PracticeAction } from '../actions/practice';

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
