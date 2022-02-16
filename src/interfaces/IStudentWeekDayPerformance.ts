import { IPeopleWeekDayPerformance } from './IPeopleWeekDayPerformance';
import { IStudentWeeklyPerformance } from './IStudentWeeklyPerformance';

export interface IStudentWeekDayPerformance extends IPeopleWeekDayPerformance {
  contentsStudied: number;
  questionsAnswered: number;
  questionsAnsweredCorrectly: number;
  duelsParticipated: number;
  duelsWon: number;
  weekPerformance?: IStudentWeeklyPerformance;
}
