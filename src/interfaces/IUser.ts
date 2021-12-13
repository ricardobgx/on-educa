import { ISchoolGrade } from './ISchoolGrade';
import { ITeachingType } from './ITeachingType';

export interface IUser {
  id: string;
  email: string;
  name: string;
  profilePicture: string;
  isOnline: boolean;
  league: string;
  teachingType: ITeachingType;
  schoolGrade: ISchoolGrade;
}
