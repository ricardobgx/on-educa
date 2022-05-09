/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_CONFIRM_ACTION_POPUP } from '../../static/defaultEntitiesValues';
import { ConfirmActionPopupActionType } from '../action-types/confirmActionPopup';
import { ConfirmActionPopupAction } from '../actions/confirmActionPopup';

const confirmActionPopupReducer = (
  state: IConfirmActionPopup = DEFAULT_CONFIRM_ACTION_POPUP,
  action: ConfirmActionPopupAction,
): any => {
  switch (action.type) {
    case ConfirmActionPopupActionType.SHOW_CONFIRM_ACTION_POPUP:
      return { message: action.message, isActive: true, method: action.method };
    case ConfirmActionPopupActionType.HIDE_CONFIRM_ACTION_POPUP:
      return { message: '', isActive: false };
    default:
      return state;
  }
};

export default confirmActionPopupReducer;
