import { IQuestion } from './IQuestion';

export interface IAlternative {
  id: string;
  index: number;
  description: string;
  question?: IQuestion;
}
