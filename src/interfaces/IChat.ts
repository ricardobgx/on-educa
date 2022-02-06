import { IMessage } from './IMessage';
import { IPeople } from './IPeople';

export interface IChat {
  id: string;
  chatCreator: IPeople;
  chatParticipant: IPeople;
  messages: IMessage[];
}
