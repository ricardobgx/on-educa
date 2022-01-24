import { IUnity } from './IUnity';

export interface ISubject {
  id: string;
  name: string;
  units: IUnity[];
}
