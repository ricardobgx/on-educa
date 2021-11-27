import { IAlternative } from './Alternative';

export interface IQuestion {
  id: string;
  description: string;
  alternatives: IAlternative[];
  rightAlternativeId: string;
  selectedAlternativeId: string;
}
