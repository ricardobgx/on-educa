import { IImage } from './IImage';

export interface IPeople {
  id: string;
  email: string;
  name: string;
  profilePicture: IImage;
  isStudent: boolean;
  isOnline: boolean;
  league: string;
}
