interface IThemeColors {
  backgroundColor: string;
  boxColor: string;
  hoverColor: string;
  textColor: string;
  boxShadowColor: string;
  commonColor: string;
  whiteColor: string;
  secondaryColor: string;
  questionTextColor: string;
  duelCongratulationsBackground: string;
  duelCongratulationsButtonColor: string;
  scrollBarColor: string;
}

export interface ITheme {
  themeType: number;
  previewColor: string;
  colors: IThemeColors;
}
