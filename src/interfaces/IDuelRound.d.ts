interface IDuelRound {
  id: string;
  status: number;
  maxGroupParticipants: number;
  questionsPerContent: number;
  timeForQuestion: number;
  duel?: IDuel;
  team?: IDuelTeam;
  teams: IDuelTeam[];
  winnerTeam?: IDuelTeam;
  question?: IDuelRoundQuestion;
  questions: IDuelRoundQuestion[];
}
