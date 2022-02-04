import { IPeople } from './IPeople';
import { ISchoolGrade } from './ISchoolGrade';

export interface IStudent {
  id: string;
  people: IPeople;
  schoolGrade: ISchoolGrade;
}
