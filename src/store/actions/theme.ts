import { ThemeActionType } from '../action-types/theme';

interface LoadTheme {
  type: ThemeActionType.LOAD_THEME;
  theme: ITheme;
}

export type ThemeAction = LoadTheme;
