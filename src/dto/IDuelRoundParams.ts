export interface IDuelRoundParams {
  id?: string;
  status?: number;
  maxGroupParticipants?: number;
  timeForQuestion?: number;
  questionsPerContent?: number;
  duelId?: string;
  contentsId?: string[];
}
