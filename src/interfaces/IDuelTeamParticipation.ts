import { IDuelQuestionAnswer } from './IDuelQuestionAnswer';
import { IDuelTeam } from './IDuelTeam';
import { IUser } from './IUser';

export interface IDuelTeamParticipation {
  id: string;
  index: number;
  duelTeam: IDuelTeam;
  student: IUser | null;
  duelQuestionsAnswers: IDuelQuestionAnswer[];
}
