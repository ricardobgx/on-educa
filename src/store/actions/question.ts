import { QuestionActionType } from '../action-types/question';

interface LoadQuestion {
  type: QuestionActionType.LOAD_QUESTION;
  question: IQuestion;
}

export type QuestionAction = LoadQuestion;
