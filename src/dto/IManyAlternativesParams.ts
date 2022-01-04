import { IAlternativeParams } from './IAlternativeParams';

export interface IManyAlternativesParams {
  alternativesDescriptions: IAlternativeParams[];
  questionId: string;
}
