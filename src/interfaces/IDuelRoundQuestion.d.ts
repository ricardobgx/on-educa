interface IDuelRoundQuestion {
  id: string;
  duelRound: IDuelRound;
  question: IQuestion;
  answer?: IDuelQuestionAnswer;
}
