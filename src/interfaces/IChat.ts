import { IPeople } from './IPeople';

export interface IChat {
  id: string;
  chatCreator: IPeople;
  chatParticipant: IPeople;
}
