import { IDuelQuestion } from './IDuelQuestion';
import { IDuelTeam } from './IDuelTeam';
import { IUser } from './IUser';

export interface IDuel {
  id: string;
  maxGroupParticipants: number;
  questionsPerContent: number;
  timeForQuestion: number;
  owner: IUser;
  teams: IDuelTeam[];
  questions: IDuelQuestion[];
}
