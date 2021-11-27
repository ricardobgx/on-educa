import { IQuestion } from './IQuestion';

export interface IAnsweredQuestion extends IQuestion {
  selectedAlternativeId: string;
}
