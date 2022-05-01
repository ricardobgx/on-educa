/* eslint-disable @typescript-eslint/no-explicit-any */

import { DEFAULT_CHAT } from '../../static/defaultEntitiesValues';
import { ChatActionType } from '../action-types/chat';
import { ChatAction } from '../actions/chat';

const chatReducer = (state: IChat = DEFAULT_CHAT, action: ChatAction): any => {
  switch (action.type) {
    case ChatActionType.LOAD_CHAT:
      return action.chat;
    default:
      return state;
  }
};

export default chatReducer;
