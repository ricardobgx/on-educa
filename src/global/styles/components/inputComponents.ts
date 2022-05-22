import styled from 'styled-components';

// Input

export const inputText = styled.input`
  font-size: ${({ theme }) => theme.fontsSize.normalFonts.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.smartphone};
  }
`;

// Select

export const inputSelect = styled.select`
  font-size: ${({ theme }) => theme.fontsSize.normalFonts.computer};
  border: none;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.smartphone};
  }
`;

// Textarea

export const inputTextArea = styled.textarea`
  font-size: ${({ theme }) => theme.fontsSize.normalFonts.computer};

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.normalFonts.smartphone};
  }
`;
