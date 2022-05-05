import styled from 'styled-components';

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

export const smallParagraph = styled.p`
  font-size: ${({ theme }) => theme.fontsSize.smallFonts.computer};
  letter-spacing: 1px;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.smallFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smallFonts.smartphone};
  }
`;

export const label = styled.label`
  font-size: ${({ theme }) => theme.fontsSize.computer};
  letter-spacing: 1px;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smartphone};
  }
`;

export const smallLabel = styled.label`
  font-size: ${({ theme }) => theme.fontsSize.smallFonts.computer};
  letter-spacing: 1px;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: ${({ theme }) => theme.fontsSize.smallFonts.tablet};
  }

  @media (max-width: 600px) {
    font-size: ${({ theme }) => theme.fontsSize.smallFonts.smartphone};
  }
`;

// Required field label

export const RequiredField = styled.span`
  color: ${({ theme }) => theme.similarColors.warningColor};
`;
