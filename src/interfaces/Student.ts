import { IUser } from './User';

export interface IStudent extends IUser {
  schoolGrade: number;
}
