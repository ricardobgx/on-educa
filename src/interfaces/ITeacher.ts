import { IPeople } from './IPeople';
import { ITeachingType } from './ITeachingType';

export interface ITeacher {
  id: string;
  people: IPeople;
  teachingType: ITeachingType;
}
