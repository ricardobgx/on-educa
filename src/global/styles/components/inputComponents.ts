import styled from 'styled-components';

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
