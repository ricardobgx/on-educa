import { IAlternative } from './IAlternative';
import { IDuelTeamParticipation } from './IDuelTeamParticipation';
import { IDuelRoundQuestion } from './IDuelRoundQuestion';

export interface IDuelQuestionAnswer {
  id: string;
  duelTeamParticipation: IDuelTeamParticipation;
  question: IDuelRoundQuestion;
  selectedAlternative: IAlternative;
}
