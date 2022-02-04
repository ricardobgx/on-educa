import { ISubject } from './ISubject';
import { ITeachingType } from './ITeachingType';

export interface ISchoolGrade {
  id: string;
  index: number;
  subjects: ISubject[];
  teachingType: ITeachingType;
}
