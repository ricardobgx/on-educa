import { EAchievementLevel } from '../enums/EAchievementLevel';

export const handleAchievementLevelName = (level: number): string => {
  switch (level) {
    case EAchievementLevel.BRONZE:
      return 'Bronze';
    case EAchievementLevel.SILVER:
      return 'Prata';
    case EAchievementLevel.GOLD:
      return 'Ouro';
    case EAchievementLevel.PLATINUM:
      return 'Platina';
    case EAchievementLevel.DIAMOND:
      return 'Diamante';
    default:
      return 'Inexistente';
  }
};
