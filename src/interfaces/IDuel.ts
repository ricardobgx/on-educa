import { IAnsweredQuestion } from './IAnsweredQuestion';
import { IDuelTeam } from './IDuelTeam';

export interface IDuel {
  id: string;
  teams: IDuelTeam[];
  questions: IAnsweredQuestion[];
}
