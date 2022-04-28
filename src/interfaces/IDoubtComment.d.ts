interface IDoubtComment {
  id: string;
  content: string;
  people: IPeople;
  doubt: IDoubt;
  createdAt: Date;
}
