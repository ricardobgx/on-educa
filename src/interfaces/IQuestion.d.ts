interface IQuestion {
  id: string;
  description: string;
  difficulty: number;
  content?: IContent;
  alternatives: IAlternative[];
  rightAlternative: IAlternative;
  createdAt: Date;
  updatedAt: Date;
}
