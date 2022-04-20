import { IDuelQuestionAnswer } from './IDuelQuestionAnswer';
import { IDuelTeam } from './IDuelTeam';
import { IStudent } from './IStudent';

export interface IDuelTeamParticipation {
  id: string;
  index: number;
  duelTeam: IDuelTeam;
  student: IStudent | null;
  duelQuestionsAnswers: IDuelQuestionAnswer[];
}
