import { IPracticeQuestion } from '../../interfaces/IPracticeQuestion';
import { PracticeActionType } from '../action-types/practice';

interface LoadQuestions {
  type: PracticeActionType.LOAD_PRACTICE_QUESTIONS;
  questions: IPracticeQuestion[];
}

export type PracticeAction = LoadQuestions;
