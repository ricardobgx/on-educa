import { IDuelRound } from './IDuelRound';
import { IUser } from './IUser';

export interface IDuel {
  id: string;
  code: string;
  student: IUser;
  duelRound: IDuelRound;
  duelRounds: IDuelRound[];
}
