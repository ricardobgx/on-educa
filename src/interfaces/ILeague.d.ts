interface ILeague {
  id: string;
  type: number;
  level: number;
  minScore: number;
  requiredScored: number;
  peoples: IPeople[];
}
