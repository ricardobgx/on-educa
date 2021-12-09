import { IUser } from './IUser';

export interface ITeacher extends IUser {
  teachingTypeId: string;
}
