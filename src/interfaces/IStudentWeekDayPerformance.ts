import { IStudentWeekPerformance } from './IStudentWeekPerformance';

export interface IStudentWeekDayPerformance {
  id: string;
  dailyXP: number;
  studiedContents: number;
  questionsAnswered: number;
  rightQuestionsAnswered: number;
  duelsParticipated: number;
  duelsWon: number;
  weekPerformance?: IStudentWeekPerformance;
  date: string;
}
