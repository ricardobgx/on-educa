/* eslint-disable @typescript-eslint/no-explicit-any */

import { ISubject } from '../../interfaces/ISubject';
import { SubjectActionType } from '../action-types/subject';
import { SubjectAction } from '../actions/subject';

export const DEFAULT_SUBJECT: ISubject = {
  id: '',
  name: '',
};

const subjectReducer = (
  state: ISubject = DEFAULT_SUBJECT,
  action: SubjectAction,
): any => {
  switch (action.type) {
    case SubjectActionType.LOAD_SUBJECT:
      return action.subject;
    default:
      return state;
  }
};

export default subjectReducer;
