interface IChat {
  id: string;
  chatCreator: IPeople;
  chatParticipant: IPeople;
  messages: IMessage[];
  createdAt: Date;
}
