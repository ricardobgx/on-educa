import { IDuelRound } from './IDuelRound';
import { IPeople } from './IPeople';

export interface IDuel {
  id: string;
  code: string;
  student: IPeople;
  duelRound: IDuelRound;
  duelRounds: IDuelRound[];
}
