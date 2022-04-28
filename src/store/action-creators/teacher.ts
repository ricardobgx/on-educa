/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { TeacherActionType } from '../action-types/teacher';
import { TeacherAction } from '../actions/teacher';

// Teacher

export const loadTeacher = (teacher: ITeacher) => {
  return (dispatch: Dispatch<TeacherAction>) => {
    dispatch({
      type: TeacherActionType.LOAD_TEACHER,
      teacher,
    });
  };
};
