import { IAlternative } from './IAlternative';
import { IContent } from './IContent';

export interface IQuestion {
  id: string;
  description: string;
  difficulty: number;
  content?: IContent;
  alternatives: IAlternative[];
  rightAlternative: IAlternative;
}
