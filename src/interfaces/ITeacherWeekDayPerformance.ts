import { IPeopleWeekDayPerformance } from './IPeopleWeekDayPerformance';
import { ITeacherWeeklyPerformance } from './ITeacherWeeklyPerformance';

export interface ITeacherWeekDayPerformance extends IPeopleWeekDayPerformance {
  contentsCreated: number;
  questionsCreated: number;
  doubtsSolved: number;
  interativeRoomsCreated: number;
  weekPerformance?: ITeacherWeeklyPerformance;
}
