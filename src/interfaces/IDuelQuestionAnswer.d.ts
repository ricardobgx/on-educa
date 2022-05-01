interface IDuelQuestionAnswer {
  id: string;
  duelTeamParticipation: IDuelTeamParticipation;
  question: IDuelRoundQuestion;
  selectedAlternative: IAlternative;
}
