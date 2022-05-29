import styled from 'styled-components';

export const LeaguesRankingBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;

  width: 100%;

  color: ${({ theme }) => theme.colors.textColors.primaryColor};
`;
