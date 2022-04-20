import { IChat } from '../../interfaces/IChat';
import { ChatActionType } from '../action-types/chat';

interface LoadChat {
  type: ChatActionType.LOAD_CHAT;
  chat: IChat;
}

export type ChatAction = LoadChat;
