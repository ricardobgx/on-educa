/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_TEACHING_TYPE } from '../../static/defaultEntitiesValues';
import { TeachingTypeActionType } from '../action-types/teachingType';
import { TeachingTypeAction } from '../actions/teachingType';

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
