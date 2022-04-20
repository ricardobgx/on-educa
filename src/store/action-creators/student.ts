/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IStudent } from '../../interfaces/IStudent';
import { StudentActionType } from '../action-types/student';
import { StudentAction } from '../actions/student';

// Student

export const loadStudent = (student: IStudent) => {
  return (dispatch: Dispatch<StudentAction>) => {
    dispatch({
      type: StudentActionType.LOAD_STUDENT,
      student,
    });
  };
};
