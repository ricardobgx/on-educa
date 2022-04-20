import { AplicationActionType } from '../action-types/aplication';

interface LoadToken {
  type: AplicationActionType.LOAD_TOKEN;
  token: string;
}

interface LoadTheme {
  type: AplicationActionType.LOAD_THEME;
  theme: number;
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
  | LoadTheme
  | LoadPeopleType
  | EnableLoadingAnimation
  | DisableLoadingAnimation;
