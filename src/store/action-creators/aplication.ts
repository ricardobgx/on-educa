/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { AplicationActionType } from '../action-types/aplication';
import { AplicationAction } from '../actions/aplication';

// Aplication

export const loadToken = (token: string) => {
  return (dispatch: Dispatch<AplicationAction>) => {
    dispatch({
      type: AplicationActionType.LOAD_TOKEN,
      token,
    });
  };
};

export const loadIsStudent = (isStudent: boolean) => {
  return (dispatch: Dispatch<AplicationAction>) => {
    dispatch({
      type: AplicationActionType.LOAD_IS_STUDENT,
      isStudent,
    });
  };
};

export const enableLoadingAnimation = () => {
  return (dispatch: Dispatch<AplicationAction>) => {
    dispatch({
      type: AplicationActionType.ENABLE_LOADING_ANIMATION,
    });
  };
};

export const disableLoadingAnimation = () => {
  return (dispatch: Dispatch<AplicationAction>) => {
    dispatch({
      type: AplicationActionType.DISABLE_LOADING_ANIMATION,
    });
  };
};
