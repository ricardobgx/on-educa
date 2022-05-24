/** *********************
 * Theme colors
 ********************** */

// Button colors
interface IThemeButtonColors {
  mainButtonTextColor: string;
  mainButtonShadowColor: string;
  secondaryButtonShadowColor: string;
}

// Text colors
interface IThemeTextColors {
  primaryColor: string;
  secondaryColor: string;
}

// Theme colors
interface IThemeColors {
  previewColors: string[];
  mainColor: string;
  textColors: IThemeTextColors;
  boxColor: string;
  backgroundColor: string;
  hoverColor: string;
  boxShadowColor: string;
  secondaryGradientColor: string;
  textInputBgColor: string;
  buttonColors: IThemeButtonColors;
}

// Similar colors
interface IThemeFlagColors {
  redColor: string;
  yellowColor: string;
  greenColor: string;
}

/** *********************
 * Fonts size
 ********************** */

interface IThemeSmallFontsSize {
  computer: string;
  smartphone: string;
  tablet: string;
}

interface IThemeNormalFontsSize {
  computer: string;
  smartphone: string;
  tablet: string;
}

interface IThemeFontsSize {
  normalFonts: IThemeNormalFontsSize;
  smallFonts: IThemeSmallFontsSize;
}

interface ITheme {
  themeId: number;
  colors: IThemeColors;
  fontsSize: IThemeFontsSize;
  flagColors: IThemeFlagColors;
}
