import { StudentWeeklyPerformanceActionType } from '../action-types/studentWeeklyPerformance';

interface LoadStudentWeeklyPerformance {
  type: StudentWeeklyPerformanceActionType.LOAD_STUDENT_WEEKLY_PERFORMANCE;
  studentWeeklyPerformance: IStudentWeeklyPerformance;
}

export type StudentWeeklyPerformanceAction = LoadStudentWeeklyPerformance;
