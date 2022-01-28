import { IImage } from './IImage';
import { ISchoolGrade } from './ISchoolGrade';
import { ITeachingType } from './ITeachingType';

export interface IUser {
  id: string;
  email: string;
  name: string;
  profilePicture: IImage;
  isOnline: boolean;
  league: string;
  userType: string;
  teachingType: ITeachingType;
  schoolGrade: ISchoolGrade;
}
