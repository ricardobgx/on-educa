import { AplicationActionType } from '../action-types/aplication';

interface LoadToken {
  type: AplicationActionType.LOAD_TOKEN;
  token: string;
}

interface LoadPeopleType {
  type: AplicationActionType.LOAD_IS_STUDENT;
  isStudent: boolean;
}

interface EnableLoadingAnimation {
  type: AplicationActionType.ENABLE_LOADING_ANIMATION;
}

interface DisableLoadingAnimation {
  type: AplicationActionType.DISABLE_LOADING_ANIMATION;
}

export type AplicationAction =
  | LoadToken
  | LoadPeopleType
  | EnableLoadingAnimation
  | DisableLoadingAnimation;
