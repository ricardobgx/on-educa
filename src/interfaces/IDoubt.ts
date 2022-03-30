import { IContent } from './IContent';
import { IStudent } from './IStudent';

export interface IDoubt {
  id: string;
  description: string;
  status: number;
  content: IContent;
  student: IStudent;
  createdAt: Date;
}
