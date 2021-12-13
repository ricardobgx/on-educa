/* eslint-disable @typescript-eslint/no-explicit-any */

import { IUnity } from '../../interfaces/IUnity';
import { UnityActionType } from '../action-types/unity';
import { UnityAction } from '../actions/unity';

export const DEFAULT_UNITY: IUnity = {
  id: '',
  title: '',
};

const unityReducer = (
  state: IUnity = DEFAULT_UNITY,
  action: UnityAction,
): any => {
  switch (action.type) {
    case UnityActionType.LOAD_UNITY:
      return action.unity;
    default:
      return state;
  }
};

export default unityReducer;