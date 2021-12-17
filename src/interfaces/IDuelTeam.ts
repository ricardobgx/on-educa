import { IDuel } from './IDuel';
import { IDuelTeamParticipation } from './IDuelTeamParticipation';

export interface IDuelTeam {
  id: string;
  name: string;
  lastParticipantIndex: number;
  duel: IDuel;
  participations: IDuelTeamParticipation[];
}
