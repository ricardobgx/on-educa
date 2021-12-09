import { IUser } from './IUser';

export interface IStudent extends IUser {
  schoolGradeId: string;
}
