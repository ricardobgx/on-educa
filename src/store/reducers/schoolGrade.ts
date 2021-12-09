/* eslint-disable @typescript-eslint/no-explicit-any */

import { ISchoolGrade } from '../../interfaces/ISchoolGrade';
import { SchoolGradeActionType } from '../action-types/schoolGrade';
import { SchoolGradeAction } from '../actions/schoolGrade';

export const DEFAULT_SCHOOL_GRADE: ISchoolGrade = {
  id: '',
  index: 0,
};

const schoolGradeReducer = (
  state: ISchoolGrade = DEFAULT_SCHOOL_GRADE,
  action: SchoolGradeAction,
): any => {
  switch (action.type) {
    case SchoolGradeActionType.LOAD_SCHOOL_GRADE:
      return action.schoolGrade;
    default:
      return state;
  }
};

export default schoolGradeReducer;
