import styled from 'styled-components';

export const OverviewBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(
    107.45deg,
    ${({ theme }) => theme.colors.commonColor} 7.93%,
    ${({ theme }) => theme.colors.secondaryColor} 62.88%
  );

  @media (max-width: 1050px) {
    flex-wrap: wrap;
  }
`;
