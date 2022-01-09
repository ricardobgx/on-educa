import { IDuelRound } from './IDuelRound';
import { IDuelTeamParticipation } from './IDuelTeamParticipation';

export interface IDuelTeam {
  id: string;
  name: string;
  index: number;
  lastParticipationIndex: number;
  duelRound: IDuelRound;
  participations: IDuelTeamParticipation[];
}
