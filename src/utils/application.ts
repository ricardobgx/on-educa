import { themes } from '../static/themes';

export const findTheme = (themeType: number): ITheme | undefined => {
  return themes.find((theme) => theme.themeId === themeType);
};
