import { IAnsweredQuestion } from './IAnsweredQuestion';
import { IStudent } from './IStudent';

export interface IDuelParticipant extends IStudent {
  answeredQuestions: IAnsweredQuestion[];
}
