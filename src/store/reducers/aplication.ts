/* eslint-disable @typescript-eslint/no-explicit-any */

import { IAplication } from '../../interfaces/IAplication';
import { DEFAULT_APLICATION } from '../../static/defaultEntitiesValues';
import { AplicationActionType } from '../action-types/aplication';
import { AplicationAction } from '../actions/aplication';

const aplicationReducer = (
  state: IAplication = DEFAULT_APLICATION,
  action: AplicationAction,
): any => {
  switch (action.type) {
    case AplicationActionType.LOAD_TOKEN:
      return { ...state, token: action.token };
    case AplicationActionType.LOAD_THEME:
      return { ...state, theme: action.theme };
    case AplicationActionType.LOAD_USER_TYPE:
      return { ...state, userType: action.userType };
    case AplicationActionType.ENABLE_LOADING_ANIMATION:
      return { ...state, loadingAnimation: true };
    case AplicationActionType.DISABLE_LOADING_ANIMATION:
      return { ...state, loadingAnimation: false };
    default:
      return state;
  }
};

export default aplicationReducer;
