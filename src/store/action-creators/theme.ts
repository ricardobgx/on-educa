/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { ThemeActionType } from '../action-types/theme';
import { ThemeAction } from '../actions/theme';

// Theme

export const loadTheme = (theme: ITheme) => {
  return (dispatch: Dispatch<ThemeAction>) => {
    dispatch({
      type: ThemeActionType.LOAD_THEME,
      theme,
    });
  };
};
