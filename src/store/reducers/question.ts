/* eslint-disable @typescript-eslint/no-explicit-any */

import { IQuestion } from '../../interfaces/IQuestion';
import { DEFAULT_QUESTION } from '../../static/defaultEntitiesValues';
import { QuestionActionType } from '../action-types/question';
import { QuestionAction } from '../actions/question';

const questionReducer = (
  state: IQuestion = DEFAULT_QUESTION,
  action: QuestionAction,
): any => {
  switch (action.type) {
    case QuestionActionType.LOAD_QUESTION:
      return action.question;
    default:
      return state;
  }
};

export default questionReducer;
