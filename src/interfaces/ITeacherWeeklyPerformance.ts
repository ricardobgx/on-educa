import { ITeacher } from './ITeacher';
import { ITeacherWeekDayPerformance } from './ITeacherWeekDayPerformance';

export interface ITeacherWeeklyPerformance {
  id: string;
  xp: number;
  teacher: ITeacher;
  weekDay: ITeacherWeekDayPerformance;
  weekDays: ITeacherWeekDayPerformance[];
}
