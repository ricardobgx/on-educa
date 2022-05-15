interface IAchievementProgress {
  id: string;
  progress: number;
  status: number;
  people: IPeople;
  level: IAchievementLevel;
  achievement: IAchievement;
}
