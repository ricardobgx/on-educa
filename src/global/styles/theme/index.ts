const themeType = window.localStorage.getItem('theme') || 'light';

const fontsSize = {
  computer: '1.05rem',
  tablet: '2.5vw',
  smartphone: '4vw',
};

const lightTheme = {
  colors: {
    warningColor: '#D90429',
    backgroundColor: '#fcfcfc',
    boxColor: '#FFFFFF',
    hoverColor: 'rgba(0, 0, 0, 0.03)',
    textColor: '#007F5F',
    boxShadowColor: 'rgba(0, 0, 0, 0.2)',
    commonColor: '#007F5F',
    commonTextColor: '#FFFFFF',
  },
};

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
  },
};

const theme =
  themeType === 'light'
    ? { ...lightTheme, fontsSize }
    : { ...darkTheme, fontsSize };

export default theme;
