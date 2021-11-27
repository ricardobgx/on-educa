import { IQuestion } from '../../interfaces/Question';
import { PracticeActionType } from '../action-types/practice';

export interface IPractice {
  questions: IQuestion[];
}

interface LoadQuestions {
  type: PracticeActionType.LOAD_PRACTICE_QUESTIONS;
  questions: IQuestion[];
}

interface AnswerQuestion {
  type: PracticeActionType.ANSWER_PRACTICE_QUESTION;
  questions: IQuestion[];
}

export type PracticeAction = LoadQuestions | AnswerQuestion;
