export interface IAlternative {
  id: string;
  description: string;
}

export interface IQuestion {
  id: string;
  description: string;
  alternatives: IAlternative[];
  rightAlternativeId: string;
  selectedAlternativeId: string;
}
