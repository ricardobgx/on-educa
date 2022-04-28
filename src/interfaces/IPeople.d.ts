interface IPeople {
  id: string;
  email: string;
  name: string;
  profilePicture: IImage;
  isStudent: boolean;
  isOnline: boolean;
  league: string;
  dailyGoal: number;
  friends: IPeople[];
}
