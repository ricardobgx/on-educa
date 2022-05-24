import { ThemeType } from '../types/ThemeType';

const fontsSize: IThemeFontsSize = {
  normalFonts: {
    computer: '2.25vh',
    tablet: '2.2vw',
    smartphone: '3.3vw',
  },
  smallFonts: {
    computer: '2vh',
    tablet: '2vw',
    smartphone: '3vw',
  },
};

const flagColors: IThemeFlagColors = {
  yellowColor: '#ffb800',
  greenColor: '#52b788',
  redColor: '#FF0000',
};

const lightTheme: ITheme = {
  themeId: -1,
  colors: {
    previewColors: [],
    mainColor: '',
    boxColor: '#FFFFFF',
    backgroundColor: '#FBFBFB',
    secondaryGradientColor: '',
    hoverColor: '#F2F2F2',
    boxShadowColor: 'rgba(0, 0, 0, 0.2)',
    textInputBgColor: '#F3F3F3',
    textColors: {
      primaryColor: '#4E4E4E',
      secondaryColor: '#6C6C6C',
    },
    buttonColors: {
      mainButtonTextColor: '#FFFFFF',
      mainButtonShadowColor: '',
      secondaryButtonShadowColor: '#DDDDDD',
    },
  },
  flagColors,
  fontsSize,
};

const darkTheme: ITheme = {
  themeId: -1,
  colors: {
    previewColors: [],
    mainColor: '',
    boxColor: '#2C2C2C',
    backgroundColor: '#212121',
    secondaryGradientColor: '',
    hoverColor: '#414141',
    boxShadowColor: 'rgba(0, 0, 0, 0.35)',
    textInputBgColor: '#333333',
    textColors: {
      primaryColor: '#FFFFFF',
      secondaryColor: '#DBDBDB',
    },
    buttonColors: {
      mainButtonTextColor: '#FFFFFF',
      mainButtonShadowColor: '',
      secondaryButtonShadowColor: 'rgba(0, 0, 0, 0.25)',
    },
  },
  flagColors,
  fontsSize,
};

export const themes: ITheme[] = [
  {
    ...lightTheme,
    themeId: ThemeType.LIGHT_PINK,
    colors: {
      ...lightTheme.colors,
      secondaryGradientColor: '#6C63FF',
      mainColor: '#FF0054',
      previewColors: ['#FBFBFB', '#FF0054'],
      buttonColors: {
        ...lightTheme.colors.buttonColors,
        mainButtonShadowColor: '#C50B48',
      },
    },
  },
  {
    ...lightTheme,
    themeId: ThemeType.LIGHT_PURPLE,
    colors: {
      ...lightTheme.colors,
      secondaryGradientColor: '#CE5BEB',
      mainColor: '#6C63FF',
      previewColors: ['#FBFBFB', '#6C63FF'],
      buttonColors: {
        ...lightTheme.colors.buttonColors,
        mainButtonShadowColor: '#4138C7',
      },
    },
  },
  {
    ...lightTheme,
    themeId: ThemeType.LIGHT_BLUE,
    colors: {
      ...lightTheme.colors,
      mainColor: '#124899',
      previewColors: ['#FBFBFB', '#124899'],
      secondaryGradientColor: '#2886DD',
      buttonColors: {
        ...lightTheme.colors.buttonColors,
        mainButtonShadowColor: '#022355',
      },
    },
  },
  {
    ...lightTheme,
    themeId: ThemeType.LIGHT_GREEN,
    colors: {
      ...lightTheme.colors,
      mainColor: '#007f5f',
      previewColors: ['#FBFBFB', '#007f5f'],
      secondaryGradientColor: '#66B752',
      buttonColors: {
        ...lightTheme.colors.buttonColors,
        mainButtonShadowColor: '#005A44',
      },
    },
  },
  {
    ...lightTheme,
    themeId: ThemeType.LIGHT_RED,
    colors: {
      ...lightTheme.colors,
      mainColor: '#d90429',
      previewColors: ['#FBFBFB', '#d90429'],
      secondaryGradientColor: '#E7BA1E',
      buttonColors: {
        ...lightTheme.colors.buttonColors,
        mainButtonShadowColor: '#A40A24',
      },
    },
  },
  {
    ...darkTheme,
    themeId: ThemeType.DARK_PINK,
    colors: {
      ...darkTheme.colors,
      mainColor: '#FF0054',
      previewColors: ['#212121', '#FF0054'],
      secondaryGradientColor: '#212121',
      buttonColors: {
        ...darkTheme.colors.buttonColors,
        mainButtonShadowColor: '#C50B48',
      },
    },
  },
  {
    ...darkTheme,
    themeId: ThemeType.DARK_PURPLE,
    colors: {
      ...darkTheme.colors,
      mainColor: '#6C63FF',
      previewColors: ['#212121', '#6C63FF'],
      secondaryGradientColor: '#212121',
      buttonColors: {
        ...darkTheme.colors.buttonColors,
        mainButtonShadowColor: '#4138C7',
      },
    },
  },
  {
    ...darkTheme,
    themeId: ThemeType.DARK_BLUE,
    colors: {
      ...darkTheme.colors,
      mainColor: '#124899',
      previewColors: ['#212121', '#124899'],
      secondaryGradientColor: '#212121',
      buttonColors: {
        ...darkTheme.colors.buttonColors,
        mainButtonShadowColor: '#022355',
      },
    },
  },
  {
    ...darkTheme,
    themeId: ThemeType.DARK_GREEN,
    colors: {
      ...darkTheme.colors,
      mainColor: '#007f5f',
      previewColors: ['#212121', '#007f5f'],
      secondaryGradientColor: '#212121',
      buttonColors: {
        ...darkTheme.colors.buttonColors,
        mainButtonShadowColor: '#005A44',
      },
    },
  },
  {
    ...darkTheme,
    themeId: ThemeType.DARK_RED,
    colors: {
      ...darkTheme.colors,
      mainColor: '#d90429',
      previewColors: ['#212121', '#d90429'],
      secondaryGradientColor: '#212121',
      buttonColors: {
        ...darkTheme.colors.buttonColors,
        mainButtonShadowColor: '#A40A24',
      },
    },
  },
];
