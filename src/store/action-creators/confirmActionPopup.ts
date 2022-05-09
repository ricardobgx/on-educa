/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { ConfirmActionPopupActionType } from '../action-types/confirmActionPopup';
import { ConfirmActionPopupAction } from '../actions/confirmActionPopup';

// ConfirmActionPopup

export const showConfirmActionPopup = (message: string, method: () => void) => {
  return (dispatch: Dispatch<ConfirmActionPopupAction>) => {
    dispatch({
      type: ConfirmActionPopupActionType.SHOW_CONFIRM_ACTION_POPUP,
      message,
      method,
    });
  };
};

export const hideConfirmActionPopup = () => {
  return (dispatch: Dispatch<ConfirmActionPopupAction>) => {
    dispatch({
      type: ConfirmActionPopupActionType.HIDE_CONFIRM_ACTION_POPUP,
    });
  };
};
