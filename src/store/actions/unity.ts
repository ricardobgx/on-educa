import { UnityActionType } from '../action-types/unity';

interface LoadUnity {
  type: UnityActionType.LOAD_UNITY;
  unity: IUnity;
}

export type UnityAction = LoadUnity;
