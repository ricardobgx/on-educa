import { IDoubt } from './IDoubt';
import { IPeople } from './IPeople';

export interface IDoubtComment {
  id: string;
  content: string;
  people: IPeople;
  doubt: IDoubt;
  createdAt: Date;
}
