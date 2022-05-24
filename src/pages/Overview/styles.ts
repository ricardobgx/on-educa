import styled from 'styled-components';

export const OverviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: ${({ theme }) =>
    theme.themeId < 5
      ? `linear-gradient(107.45deg,${theme.colors.secondaryGradientColor} 7.93%, ${theme.colors.mainColor} 62.88%)`
      : theme.colors.backgroundColor};

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
