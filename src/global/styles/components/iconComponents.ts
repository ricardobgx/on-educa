import styled from 'styled-components';

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
  font-size: 4.3rem;

  @media (min-width: 600px) and (max-width: 1150px) {
    font-size: 10vw;
  }

  @media (max-width: 600px) {
    font-size: 13vw;
  }
`;
