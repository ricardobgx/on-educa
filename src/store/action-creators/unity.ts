/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IUnity } from '../../interfaces/IUnity';
import { UnityActionType } from '../action-types/unity';
import { UnityAction } from '../actions/unity';

// Unity

export const loadUnity = (unity: IUnity) => {
  return (dispatch: Dispatch<UnityAction>) => {
    dispatch({
      type: UnityActionType.LOAD_UNITY,
      unity,
    });
  };
};
