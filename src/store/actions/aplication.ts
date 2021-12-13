import { AplicationActionType } from '../action-types/aplication';

interface LoadToken {
  type: AplicationActionType.LOAD_TOKEN;
  token: string;
}

interface LoadTheme {
  type: AplicationActionType.LOAD_THEME;
  theme: string;
}

interface LoadUserType {
  type: AplicationActionType.LOAD_USER_TYPE;
  userType: string;
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
  | LoadUserType
  | EnableLoadingAnimation
  | DisableLoadingAnimation;
