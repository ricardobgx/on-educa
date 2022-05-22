import { PopupActionType } from '../action-types/popup';

interface OpenPopup {
  type: PopupActionType.OPEN_POPUP;
  popup: IPopup;
}

interface ClosePopup {
  type: PopupActionType.CLOSE_POPUP;
}

export type PopupAction = OpenPopup | ClosePopup;
