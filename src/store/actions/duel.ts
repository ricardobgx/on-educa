import { IDuel } from '../../interfaces/Duel';
import { IQuestion } from '../../interfaces/Question';
import { DuelActionType } from '../action-types/duel';

interface LoadDuel {
  type: DuelActionType.LOAD_DUEL;
  duel: IDuel;
}

interface AnswerDuelQuestion {
  type: DuelActionType.ANSWER_DUEL_QUESTION;
  questions: IQuestion[];
}

export type DuelAction = LoadDuel | AnswerDuelQuestion;
