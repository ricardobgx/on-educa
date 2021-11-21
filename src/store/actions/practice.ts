import { IQuestion } from '../../interfaces/practice';
import { PracticeActionType } from '../action-types/practice';

export interface IPractice {
  questions: IQuestion[];
}

interface LoadQuestions {
  type: PracticeActionType.LOAD;
  questions: IQuestion[];
}

interface AnswerQuestion {
  type: PracticeActionType.ANSWER;
  questions: IQuestion[];
}

export type PracticeAction = LoadQuestions | AnswerQuestion;
