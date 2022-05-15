interface IAchievement {
  id: string;
  name: string;
  description: string;
  activities: IAchievementActivity[];
  levels: IAchievementLevel[];
}
