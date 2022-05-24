/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { PopupActionType } from '../action-types/popup';
import { PopupAction } from '../actions/popup';

// Popup

export const loadPopup = (popup: IPopup) => {
  return (dispatch: Dispatch<PopupAction>) => {
    dispatch({
      type: PopupActionType.OPEN_POPUP,
      popup,
    });
  };
};

export const closePopup = () => {
  return (dispatch: Dispatch<PopupAction>) => {
    dispatch({
      type: PopupActionType.CLOSE_POPUP,
    });
  };
};
