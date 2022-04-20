import { ISchoolGrade } from './ISchoolGrade';

export interface ITeachingType {
  id: string;
  name: string;
  schoolGrades: ISchoolGrade[];
}
