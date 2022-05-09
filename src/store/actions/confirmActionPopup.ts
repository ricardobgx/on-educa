import { ConfirmActionPopupActionType } from '../action-types/confirmActionPopup';

interface showConfirmActionPopupMessage {
  type: ConfirmActionPopupActionType.SHOW_CONFIRM_ACTION_POPUP;
  message: string;
  method: () => void;
}

interface hideConfirmActionPopupContent {
  type: ConfirmActionPopupActionType.HIDE_CONFIRM_ACTION_POPUP;
}

export type ConfirmActionPopupAction =
  | showConfirmActionPopupMessage
  | hideConfirmActionPopupContent;
