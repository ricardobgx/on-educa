/* eslint-disable @typescript-eslint/no-explicit-any */

import { IStudent } from '../../interfaces/IStudent';
import { DEFAULT_STUDENT } from '../../static/defaultEntitiesValues';
import { StudentActionType } from '../action-types/student';
import { StudentAction } from '../actions/student';

const studentReducer = (
  state: IStudent = DEFAULT_STUDENT,
  action: StudentAction,
): any => {
  switch (action.type) {
    case StudentActionType.LOAD_STUDENT:
      return action.student;
    default:
      return state;
  }
};

export default studentReducer;
