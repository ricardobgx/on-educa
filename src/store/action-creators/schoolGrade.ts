/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { SchoolGradeActionType } from '../action-types/schoolGrade';
import { SchoolGradeAction } from '../actions/schoolGrade';

// SchoolGrade

export const loadSchoolGrade = (schoolGrade: ISchoolGrade) => {
  return (dispatch: Dispatch<SchoolGradeAction>) => {
    dispatch({
      type: SchoolGradeActionType.LOAD_SCHOOL_GRADE,
      schoolGrade,
    });
  };
};
