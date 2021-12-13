/* eslint-disable @typescript-eslint/no-explicit-any */

import { ITeachingType } from '../../interfaces/ITeachingType';
import { TeachingTypeActionType } from '../action-types/teachingType';
import { TeachingTypeAction } from '../actions/teachingType';

export const DEFAULT_TEACHING_TYPE: ITeachingType = {
  id: '',
  title: '',
  schoolGrades: [],
};

const teachingTypeReducer = (
  state: ITeachingType = DEFAULT_TEACHING_TYPE,
  action: TeachingTypeAction,
): any => {
  switch (action.type) {
    case TeachingTypeActionType.LOAD_TEACHING_TYPE:
      return action.teachingType;
    default:
      return state;
  }
};

export default teachingTypeReducer;
