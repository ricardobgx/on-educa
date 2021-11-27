import { IAnsweredQuestion } from './AnsweredQuestion';
import { IStudent } from './Student';

export interface IDuelParticipant extends IStudent {
  answeredQuestions: IAnsweredQuestion[];
}
