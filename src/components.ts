import styled, { createGlobalStyle } from 'styled-components';

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
      theme.colors.boxColor} inset;
  }

  ::-webkit-scrollbar {
    width: 5px;
    height: 5px;
  }

  /* Track */
  ::-webkit-scrollbar-track {
    box-shadow: inset 0 0 5px ${({ theme }) => theme.colors.boxShadowColor};
    background: ${({ theme }) => theme.colors.boxColor};
    border-radius: 10px;
  }

  /* Handle */
  ::-webkit-scrollbar-thumb {
    background: ${({ theme }) => theme.colors.textColor};
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
`;

// Text

export const paragraph = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.computer};
  letter-spacing: 1px;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;

// Icon

export const smallIcon = styled.i`
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;
export const mediumIcon = styled.i`
  font-size: 3vh;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 3vw;
  }

  @media (max-width: 600px) {
    font-size: 5vw;
  }
`;
export const bigIcon = styled.i`
  font-size: 4rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 8vw;
  }

  @media (max-width: 600px) {
    font-size: 13vw;
  }
`;

// Input

export const inputText = styled.input`
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;

// Select

export const inputSelect = styled.select`
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;

// Textarea

export const inputTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontsSize.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;

// Containers

export const SectionBox = styled.div`
  border-radius: 10px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
`;

// Buttons

export const Button = styled.button`
  min-height: 40px;
  border-radius: 5px;
  box-shadow: 0px 0px 4px ${({ theme }) => theme.colors.boxShadowColor};
  border: none;
`;
