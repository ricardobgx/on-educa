import leaguesColors from '../static/leaguesColors';

export const handleLeagueName = (leagueType: number): string => {
  switch (leagueType) {
    case 0:
      return 'Bronze';
    case 1:
      return 'Prata';
    case 2:
      return 'Ouro';
    default:
      return 'Inválida';
  }
};

export const handleLeagueColors = (leagueType: number): ILeagueColors => {
  return leaguesColors[leagueType];
};

export const handleLeagueDetails = (leagueType: number): ILeagueDetails => {
  return {
    name: handleLeagueName(leagueType),
    colors: handleLeagueColors(leagueType),
  } as ILeagueDetails;
};
