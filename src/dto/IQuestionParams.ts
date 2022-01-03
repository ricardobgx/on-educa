import { IAlternativeParams } from './IAlternativeParams';

export interface IQuestionParams {
  id?: string;
  description?: string;
  difficulty?: number;
  contentId?: string;
  alternativesDescription?: IAlternativeParams[];
}
