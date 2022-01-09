import { IDuelQuestionAnswer } from './IDuelQuestionAnswer';
import { IDuelRound } from './IDuelRound';
import { IQuestion } from './IQuestion';

export interface IDuelRoundQuestion {
  id: string;
  duelRound: IDuelRound;
  question: IQuestion;
  answer?: IDuelQuestionAnswer;
}
