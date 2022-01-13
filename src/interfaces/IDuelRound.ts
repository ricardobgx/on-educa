import { IDuel } from './IDuel';
import { IDuelRoundQuestion } from './IDuelRoundQuestion';
import { IDuelTeam } from './IDuelTeam';

export interface IDuelRound {
  id: string;
  status: number;
  maxGroupParticipants: number;
  questionsPerContent: number;
  timeForQuestion: number;
  duel?: IDuel;
  team?: IDuelTeam;
  teams: IDuelTeam[];
  question?: IDuelRoundQuestion;
  questions: IDuelRoundQuestion[];
}
