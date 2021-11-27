import { IDuel } from '../../interfaces/IDuel';
import { IQuestion } from '../../interfaces/IQuestion';
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
