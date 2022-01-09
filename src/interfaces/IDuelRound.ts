import { IDuel } from './IDuel';
import { IDuelRoundQuestion } from './IDuelRoundQuestion';
import { IDuelTeam } from './IDuelTeam';

export interface IDuelRound {
  id: string;
  maxGroupParticipants: number;
  questionsPerContent: number;
  timeForQuestion: number;
  lastTeamIndex: number;
  duel?: IDuel;
  teams: IDuelTeam[];
  questions: IDuelRoundQuestion[];
}
