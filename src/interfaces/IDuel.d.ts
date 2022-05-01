interface IDuel {
  id: string;
  code: string;
  student: IStudent;
  duelRound: IDuelRound;
  duelRounds: IDuelRound[];
}
