const themeType = window.localStorage.getItem('theme') || 'light';

const fontsSize = {
  computer: '2.5vh',
  tablet: '2.5vw',
  smartphone: '4vw',
};

const lightTheme = {
  colors: {
    backgroundColor: '#fcfcfc',
    boxColor: '#FFFFFF',
    hoverColor: 'rgba(0, 0, 0, 0.045)',
    textColor: '#126699',
    boxShadowColor: 'rgba(0, 0, 0, 0.4)',
    commonColor: '#52b788',
    whiteColor: '#FFFFFF',
    secondaryColor: '#00509d',
    questionTextColor: '#000000',
    duelCongratulationsBackground: '#007F5F',
    duelCongratulationsButtonColor: '#007F5F',
    scrollBarColor: 'rgba(0, 0, 0, .2)',
  },
};

// Text Color 0077b6
// Common Color 2a9d8f
// Secondary Color 00509d

const darkTheme = {
  colors: {
    backgroundColor: '#212121',
    boxColor: '#3C3C3C',
    hoverColor: 'rgba(255, 255, 255, 0.2)',
    textColor: '#E5E5E5',
    boxShadowColor: 'rgba(255, 255, 255, 0.4)',
    commonColor: '#3C3C3C',
    whiteColor: '#E5E5E5',
    secondaryColor: '#3C3C3C',
    questionTextColor: '#E5E5E5',
    duelCongratulationsBackground: '#212121',
    duelCongratulationsButtonColor: '#E5E5E5',
    scrollBarColor: 'rgba(255, 255, 255, .2)',
  },
};

const similarColors = {
  warningColor: '#CB0000',
  rightQuestion: '#52b788',
  wrongQuestion: '#f77f00',
  skippedQuestion: '#126699',
};

const theme =
  themeType === 'light'
    ? { ...lightTheme, fontsSize, similarColors }
    : { ...darkTheme, fontsSize, similarColors };

export default theme;
