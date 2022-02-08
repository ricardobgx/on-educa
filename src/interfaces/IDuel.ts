import { IDuelRound } from './IDuelRound';
import { IStudent } from './IStudent';

export interface IDuel {
  id: string;
  code: string;
  student: IStudent;
  duelRound: IDuelRound;
  duelRounds: IDuelRound[];
}
