/** *********************
 * Theme colors
 ********************** */

// Button colors
interface IButtonColors {
  mainButtonTextColor: string;
  mainButtonBgColor: string;
  mainButtonShadowColor: string;
  secondaryButtonTextColor: string;
  secondaryButtonBgColor: string;
  secondaryButtonShadowColor: string;
  dangerButtonTextColor: string;
  dangerButtonBgColor: string;
  dangerButtonShadowColor: string;
}

// Duel colors
interface IDuelColors {
  questionTextColor: string;
  progressBarColor: string;
  duelCongratulationsBackground: string;
  duelCongratulationsButtonColor: string;
}

// Theme colors
interface IThemeColors extends IDuelColors, IButtonColors {
  textColor: string;
  boxColor: string;
  backgroundColor: string;
  hoverColor: string;
  boxShadowColor: string;
  commonColor: string;
  whiteColor: string;
  secondaryColor: string;
  scrollBarColor: string;
  inputTextBgColor: string;
}

// Similar colors
interface IThemeSimilarColors {
  warningColor: string;
  rightQuestion: string;
  wrongQuestion: string;
  skippedQuestion: string;
}

/** *********************
 * Fonts size
 ********************** */

interface IThemeFontsSize {
  computer: string;
  smartphone: string;
  tablet: string;
}

interface ITheme {
  themeType: number;
  previewColors: string[];
  colors: IThemeColors;
  fontsSize: IThemeFontsSize;
  similarColors: IThemeSimilarColors;
}
