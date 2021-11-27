import { IDuelParticipant } from './IDuelParticipant';

export interface IDuelTeam {
  id: string;
  participants: IDuelParticipant[];
}
