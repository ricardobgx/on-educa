import { IPeopleWeekDayPerformance } from './IPeopleWeekDayPerformance';
import { IStudentWeekPerformance } from './IStudentWeekPerformance';

export interface IStudentWeekDayPerformance extends IPeopleWeekDayPerformance {
  contentsStudied: number;
  questionsAnswered: number;
  questionsAnsweredCorrectly: number;
  duelsParticipated: number;
  duelsWon: number;
  weekPerformance?: IStudentWeekPerformance;
}
