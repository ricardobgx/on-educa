import { themes } from '../../../static/themes';
import { ThemeType } from '../../../types/ThemeType';

const localThemeType =
  window.localStorage.getItem('theme') || ThemeType.BLUE.toString();

const themeType = Number(localThemeType);

const theme =
  themes.find((defaultTheme) => defaultTheme.themeType === themeType) ||
  themes[0];

const fontsSize = {
  computer: '2.5vh',
  tablet: '2.5vw',
  smartphone: '4vw',
};

const similarColors = {
  warningColor: '#CB0000',
  rightQuestion: '#52b788',
  wrongQuestion: '#f72585',
  skippedQuestion: '#a100f2',
};

// Text Color 0077b6
// Common Color 2a9d8f
// Secondary Color 00509d

export default { ...theme, fontsSize, similarColors };
