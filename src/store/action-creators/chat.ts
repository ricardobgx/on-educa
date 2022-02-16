/* eslint-disable @typescript-eslint/explicit-module-boundary-types */

import { Dispatch } from 'redux';
import { IChat } from '../../interfaces/IChat';
import { ChatActionType } from '../action-types/chat';
import { ChatAction } from '../actions/chat';

// Chat

export const loadChat = (chat: IChat) => {
  return (dispatch: Dispatch<ChatAction>) => {
    dispatch({
      type: ChatActionType.LOAD_CHAT,
      chat,
    });
  };
};
