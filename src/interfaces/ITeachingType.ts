import { ISchoolGrade } from './ISchoolGrade';

export interface ITeachingType {
  id: string;
  title: string;
  schoolGrades: ISchoolGrade[];
}
