import { IChat } from './IChat';
import { IPeople } from './IPeople';

export interface IMessage {
  id: string;
  chat: IChat;
  content: string;
  sender: IPeople;
  createdAt: Date;
}
