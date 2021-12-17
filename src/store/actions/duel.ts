import { IDuel } from '../../interfaces/IDuel';
import { IDuelQuestion } from '../../interfaces/IDuelQuestion';
import { DuelActionType } from '../action-types/duel';

interface LoadDuel {
  type: DuelActionType.LOAD_DUEL;
  duel: IDuel;
}

interface AnswerDuelQuestion {
  type: DuelActionType.ANSWER_DUEL_QUESTION;
  questions: IDuelQuestion[];
}

export type DuelAction = LoadDuel | AnswerDuelQuestion;
