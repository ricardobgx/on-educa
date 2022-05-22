/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_POPUP } from '../../static/defaultEntitiesValues';
import { PopupActionType } from '../action-types/popup';
import { PopupAction } from '../actions/popup';

const popupReducer = (
  state: IPopup = DEFAULT_POPUP,
  action: PopupAction,
): any => {
  switch (action.type) {
    case PopupActionType.OPEN_POPUP:
      return { ...action.popup, isActive: true } as IPopup;
    case PopupActionType.CLOSE_POPUP:
      return DEFAULT_POPUP;
    default:
      return state;
  }
};

export default popupReducer;
