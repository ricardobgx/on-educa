import { IStudent } from './IStudent';
import { IStudentWeekDayPerformance } from './IStudentWeekDayPerformance';

export interface IStudentWeekPerformance {
  id: string;
  xp: number;
  student: IStudent;
  weekDay: IStudentWeekDayPerformance;
  weekDays: IStudentWeekDayPerformance[];
  createdAt: string;
}
