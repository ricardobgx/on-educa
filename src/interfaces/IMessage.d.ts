interface IMessage {
  id: string;
  chat: IChat;
  content: string;
  sender: IPeople;
  createdAt: Date;
}
