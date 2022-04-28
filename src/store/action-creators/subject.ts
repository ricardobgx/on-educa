/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { SubjectActionType } from '../action-types/subject';
import { SubjectAction } from '../actions/subject';

// Subject

export const loadSubject = (subject: ISubject) => {
  return (dispatch: Dispatch<SubjectAction>) => {
    dispatch({
      type: SubjectActionType.LOAD_SUBJECT,
      subject,
    });
  };
};
