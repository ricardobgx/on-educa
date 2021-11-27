import { IDuelParticipant } from './DuelParticipant';

export interface IDuelTeam {
  id: string;
  participants: IDuelParticipant[];
}
