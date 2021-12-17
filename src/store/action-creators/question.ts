/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IQuestion } from '../../interfaces/IQuestion';
import { QuestionActionType } from '../action-types/question';
import { QuestionAction } from '../actions/question';

// Question

export const loadQuestion = (question: IQuestion) => {
  return (dispatch: Dispatch<QuestionAction>) => {
    dispatch({
      type: QuestionActionType.LOAD_QUESTION,
      question,
    });
  };
};
