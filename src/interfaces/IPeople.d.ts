interface IPeople {
  id: string;
  email: string;
  name: string;
  profilePicture: IImage;
  isStudent: boolean;
  isOnline: boolean;
  dailyGoal: number;
  friends: IPeople[];
  league: ILeague;
}
