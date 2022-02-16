/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IStudentWeeklyPerformance } from '../../interfaces/IStudentWeeklyPerformance';
import { StudentWeeklyPerformanceActionType } from '../action-types/studentWeeklyPerformance';
import { StudentWeeklyPerformanceAction } from '../actions/studentWeeklyPerformance';

// StudentWeeklyPerformance

export const loadStudentWeeklyPerformance = (
  studentWeeklyPerformance: IStudentWeeklyPerformance,
) => {
  return (dispatch: Dispatch<StudentWeeklyPerformanceAction>) => {
    dispatch({
      type: StudentWeeklyPerformanceActionType.LOAD_STUDENT_WEEKLY_PERFORMANCE,
      studentWeeklyPerformance,
    });
  };
};
