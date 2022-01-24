import { IAlternative } from './IAlternative';
import { IQuestion } from './IQuestion';

export interface IPracticeQuestion extends IQuestion {
  selectedAlternative?: IAlternative;
}
