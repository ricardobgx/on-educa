interface IDuelTeamParticipation {
  id: string;
  index: number;
  duelTeam: IDuelTeam;
  student: IStudent | null;
  duelQuestionsAnswers: IDuelQuestionAnswer[];
}
