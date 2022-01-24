import { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    outline: none;
    text-decoration: none;
    box-sizing: border-box;
    font-family: 'Sen', sans-serif;
    font-size: ${({ theme }) => theme.fontsSize.computer};
  }

  body {
    background: ${({ theme }) => theme.colors.backgroundColor};
  }

  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, 'Courier New',
      monospace;
  }

  input:-webkit-autofill {
    -webkit-text-fill-color: ${({ theme }) => theme.colors.textColor};
    -webkit-box-shadow: 0 0 0px 1000px ${({ theme }) =>
      theme.colors.backgroundColor} inset;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px transparent;
    background: ${({ theme }) => theme.colors.boxColor};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.scrollBarColor};
    border-radius: 10px;
  }

  /* Animations */

  @keyframes leftSlideFadeIn {
    0% {
      opacity: 0;
      transform: translateX(-5%);
    }
    100% {
      opacity: 1;
      transform: translateX(0%);
    }
  }

  @keyframes fadeIn {
    0% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  }

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }

  /* Global components design */

  .with-shadow {
    box-shadow: 0px 0px 2px ${({ theme }) => theme.colors.boxShadowColor};
  }

  .flex-box-row {
    display: flex;
    flex-direction: row;
  }

  .flex-box-column {
    display: flex;
    flex-direction: column;
  }

  .bd-rd-5 {
    border-radius: 5px;
  }

  .bd-rd-10 {
    border-radius: 10px;
  }
`;
