const themeType = window.localStorage.getItem('theme') || 'light';

const fontsSize = {
  computer: '1.05rem',
  tablet: '2.5vw',
  smartphone: '4vw',
};

const practiceColors = {
  rightQuestion: '#52b788',
  wrongQuestion: '#FF0404',
  skippedQuestion: '#126699',
};

const lightTheme = {
  colors: {
    warningColor: '#D90429',
    backgroundColor: '#fcfcfc',
    boxColor: '#FFFFFF',
    hoverColor: 'rgba(0, 0, 0, 0.03)',
    textColor: '#126699',
    boxShadowColor: 'rgba(0, 0, 0, 0.2)',
    commonColor: '#52b788',
    commonTextColor: '#FFFFFF',
    secondaryColor: '#00509d',
    questionTextColor: '#000000',
  },
};

// Text Color 0077b6
// Common Color 2a9d8f
// Secondary Color 00509d

const darkTheme = {
  colors: {
    warningColor: '#D90429',
    backgroundColor: '#212121',
    boxColor: '#3C3C3C',
    hoverColor: 'rgba(255, 255, 255, 0.2)',
    textColor: '#E5E5E5',
    boxShadowColor: 'rgba(0, 0, 0, 0.5)',
    commonColor: '#3C3C3C',
    commonTextColor: '#E5E5E5',
    secondaryColor: '#0077b6',
    questionTextColor: '#E5E5E5',
  },
};

const theme =
  themeType === 'light'
    ? { ...lightTheme, fontsSize, practiceColors }
    : { ...darkTheme, fontsSize, practiceColors };

export default theme;
