interface IDoubt {
  id: string;
  description: string;
  status: number;
  content: IContent;
  student: IStudent;
  createdAt: Date;
}
