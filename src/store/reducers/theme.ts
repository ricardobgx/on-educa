/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_THEME } from '../../static/defaultEntitiesValues';
import { ThemeActionType } from '../action-types/theme';
import { ThemeAction } from '../actions/theme';

const themeReducer = (
  state: ITheme = DEFAULT_THEME,
  action: ThemeAction,
): any => {
  switch (action.type) {
    case ThemeActionType.LOAD_THEME:
      return action.theme;
    default:
      return state;
  }
};

export default themeReducer;
