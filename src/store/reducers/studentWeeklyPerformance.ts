/* eslint-disable @typescript-eslint/no-explicit-any */

import { IStudentWeeklyPerformance } from '../../interfaces/IStudentWeeklyPerformance';
import { DEFAULT_STUDENT_WEEKLY_PERFORMANCE } from '../../static/defaultEntitiesValues';
import { StudentWeeklyPerformanceActionType } from '../action-types/studentWeeklyPerformance';
import { StudentWeeklyPerformanceAction } from '../actions/studentWeeklyPerformance';

const studentWeeklyPerformanceReducer = (
  state: IStudentWeeklyPerformance = DEFAULT_STUDENT_WEEKLY_PERFORMANCE,
  action: StudentWeeklyPerformanceAction,
): any => {
  switch (action.type) {
    case StudentWeeklyPerformanceActionType.LOAD_STUDENT_WEEKLY_PERFORMANCE:
      return action.studentWeeklyPerformance;
    default:
      return state;
  }
};

export default studentWeeklyPerformanceReducer;
