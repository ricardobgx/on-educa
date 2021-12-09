/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { ITeachingType } from '../../interfaces/ITeachingType';
import { TeachingTypeActionType } from '../action-types/teachingType';
import { TeachingTypeAction } from '../actions/teachingType';

// TeachingType

export const loadTeachingType = (teachingType: ITeachingType) => {
  return (dispatch: Dispatch<TeachingTypeAction>) => {
    dispatch({
      type: TeachingTypeActionType.LOAD_TEACHING_TYPE,
      teachingType,
    });
  };
};
