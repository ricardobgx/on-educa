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

interface IDuelColors {
  questionTextColor: string;
  progressBarColor: string;
  duelCongratulationsBackground: string;
  duelCongratulationsButtonColor: string;
}

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
}

interface ITheme {
  themeType: number;
  previewColors: string[];
  colors: IThemeColors;
}
