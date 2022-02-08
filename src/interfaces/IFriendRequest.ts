import { IPeople } from './IPeople';

export interface IFriendRequest {
  id: string;
  requester: IPeople;
  requested: IPeople;
}
