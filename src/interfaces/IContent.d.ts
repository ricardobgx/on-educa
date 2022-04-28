interface IContent {
  id: string;
  name: string;
  description: string;
  video: string;
  index: number;
  unity: IUnity;
  questions: IQuestion[];
  createdAt: Date;
  updatedAt: Date;
  doubts: IDoubt[];
}
