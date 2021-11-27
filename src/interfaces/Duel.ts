import { IAnsweredQuestion } from './AnsweredQuestion';
import { IDuelTeam } from './DuelTeam';
import { IQuestion } from './Question';

export interface IDuel {
  id: string;
  teams: IDuelTeam[];
  questions: IAnsweredQuestion[];
}
