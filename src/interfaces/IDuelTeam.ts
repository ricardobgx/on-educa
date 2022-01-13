import { IDuelRound } from './IDuelRound';
import { IDuelTeamParticipation } from './IDuelTeamParticipation';

export interface IDuelTeam {
  id: string;
  name: string;
  index: number;
  duelRound: IDuelRound;
  participation?: IDuelTeamParticipation;
  participations: IDuelTeamParticipation[];
}
