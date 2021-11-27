import { IAlternative } from './IAlternative';

export interface IQuestion {
  id: string;
  description: string;
  alternatives: IAlternative[];
  rightAlternativeId: string;
  selectedAlternativeId: string;
}
