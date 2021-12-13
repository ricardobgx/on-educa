import { ITeachingType } from './ITeachingType';

export interface ISchoolGrade {
  id: string;
  index: number;
  teachingType?: ITeachingType;
}
