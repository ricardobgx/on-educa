import { IDuel } from './IDuel';
import { IDuelQuestionAnswer } from './IDuelQuestionAnswer';
import { IQuestion } from './IQuestion';

export interface IDuelQuestion {
  id: string;
  duel: IDuel;
  question: IQuestion;
  duelQuestionAnswer?: IDuelQuestionAnswer;
}
