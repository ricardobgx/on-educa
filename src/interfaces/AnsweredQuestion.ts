import { IQuestion } from './Question';

export interface IAnsweredQuestion extends IQuestion {
  selectedAlternativeId: string;
}
