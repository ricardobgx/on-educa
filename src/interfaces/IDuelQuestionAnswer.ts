import { IAlternative } from './IAlternative';
import { IDuelTeamParticipation } from './IDuelTeamParticipation';
import { IDuelQuestion } from './IDuelQuestion';

export interface IDuelQuestionAnswer {
  id: string;
  duelTeamParticipation: IDuelTeamParticipation;
  question: IDuelQuestion;
  selectedAlternative: IAlternative;
}
