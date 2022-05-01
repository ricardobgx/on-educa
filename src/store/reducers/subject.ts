/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_SUBJECT } from '../../static/defaultEntitiesValues';
import { SubjectActionType } from '../action-types/subject';
import { SubjectAction } from '../actions/subject';

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
