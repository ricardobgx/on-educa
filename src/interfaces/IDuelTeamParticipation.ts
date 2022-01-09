import { IDuelQuestionAnswer } from './IDuelQuestionAnswer';
import { IDuelTeam } from './IDuelTeam';
import { IUser } from './IUser';

export interface IDuelTeamParticipation {
  id: string;
  duelTeam: IDuelTeam;
  student?: IUser;
  duelQuestionsAnswers: IDuelQuestionAnswer[];
}
