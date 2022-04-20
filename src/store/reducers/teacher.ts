/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITeacher } from '../../interfaces/ITeacher';
import { DEFAULT_TEACHER } from '../../static/defaultEntitiesValues';
import { TeacherActionType } from '../action-types/teacher';
import { TeacherAction } from '../actions/teacher';

const teacherReducer = (
  state: ITeacher = DEFAULT_TEACHER,
  action: TeacherAction,
): any => {
  switch (action.type) {
    case TeacherActionType.LOAD_TEACHER:
      return action.teacher;
    default:
      return state;
  }
};

export default teacherReducer;
