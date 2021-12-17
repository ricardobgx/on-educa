import { IUnity } from './IUnity';

export interface IContent {
  id: string;
  title: string;
  description: string;
  video: string;
  index: number;
  unity: IUnity;
}
